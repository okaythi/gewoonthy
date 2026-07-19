# Engenharia da Engine de Karaokê

Bem-vindo ao backend do aplicativo de Karaokê. Criar uma experiência de karaokê fluida, palavra por palavra no navegador (e nem vou mencionar dentro desse simulador de terminal Linux caseiro) foi um projeto divertido mas muitas vezes um trampo cansativo pra caramba, que não se resume a apenas dar play num vídeo, e sim uma sincronização sub-milissegundo e lutar contra a latência do navegador. A palavra-chave é: "lutar" rsrs

Mesmo como um projeto por hobby, eu ainda queria criar algo que parecesse nativo, rápido e preciso. Aqui vai uma espiada por baixo do capô em como tudo isso funciona.

## 1. O Trabalho Manual (lyrics.ts)

Se você tá se perguntando qual IA ou API mágica eu usei pra sincronizar a letra palavra por palavra...... a resposta é pura força de vontade rsrs

Arquivos `.lrc` padrões geralmente só sincronizam linha por linha, e as APIs que eu achei eram tão medíocres que sinceramente a própria existência delas dá vergonha. Pra conseguir aquele destaque moderno, animado e palavra por palavra, eu fui manualmente em cada vídeo. Eu marquei cuidadosamente o timestamp exato de início e fim de absolutamente cada palavra e verso. Honestamente, entender prosódia e fonética articulatória é ao mesmo tempo uma benção e uma maldição aqui - ver a letra acender na tela mesmo 150ms depois que a sílaba é cantada me dói fisicamente na alma.

> [!NOTE]
> Isso ainda acontece na música russa Плак-плак, mas pega leve comigo, eu sei ler cirílico mas não falo russo.

Então, eu rodei um script (esse único script eu pedi pra uma IA escrever) pra formatar pro nosso dataset `lyrics.ts`. Levou literalmente dias, mas a precisão ficou boa o suficiente pra eu me orgulhar de mostrar.

```typescript
// Uma olhada no lyrics.ts
export const lyricsData = [
  { start: 12.45, end: 12.80, text: "Never", type: "word" },
  { start: 12.81, end: 13.10, text: "gonna", type: "word" },
  { start: 13.11, end: 13.50, text: "give", type: "word" }
];
```

## 2. Lutando contra o DOM (KaraokeWindow.js)

O desafio principal era manter a UI perfeitamente amarrada com o estado de reprodução do vídeo. A minha ideia idiota inicial foi usar o evento nativo `timeupdate` da tag HTML5 `<video>`.

Logo descobri que o `timeupdate` é uma bosta pra isso. Ele dispara umas 4 vezes por segundo (intervalos de uns 250ms). Pra uma balada lenta, sei lá, até vai. Mas pra um rap rápido ou um techno pesado? Fica parecendo uma bagunça engasgada e fora de sincronia.

A solução foi jogar o `timeupdate` pela janela e hackear o `requestAnimationFrame` do navegador. Ele verifica o `vid.currentTime` a 60 frames por segundo. Andei pesquisando e vi que usar a Web Audio API pra criar um nó de contexto de áudio customizado poderia tecnicamente ser a melhor forma de lidar com precisão de tempo absoluto, mas amarrar o DOM diretamente com o relógio do vídeo pelo rAF funcionou perfeitamente, e escrever parsers de buffer de áudio do zero tava muito além da minha capacidade mental.

Assim:
```javascript
// Verificando a 60fps em vez de confiar em listeners lentos
function updateLyrics() {
  const currentTime = vid.currentTime;
  // [...] lógica pra casar as palavras
  requestAnimationFrame(updateLyrics);
}
```

## 3. O Pesadelo de Renderizar Fontes

Um baita obstáculo que não previ: latência de tipografia customizada. Como várias dessas faixas são em outros idiomas, buscar ativamente aquelas fontes japonesas pesadas do Google Fonts gerava um FOIT (Flash de Texto Invisível) monstruoso. Até o navegador terminar de baixar a fonte, o verso todo em kanji já tinha passado, então o negócio ficava inútil.

Li sobre fazer "subsetting" de fontes CJK usando Python pra remover milhares de caracteres não utilizados pra deixar o arquivo mais leve, mas sinceramente eu não tava a fim de fazer isso pra cada idioma. Minha solução foi usar força bruta com o cache. Converti o `.ttf` bruto em um `.woff2` comprimido (cerca de 1MB), hospedei direto no meu próprio CDN (`cdn.sudothy.me`), e forcei agressivamente o navegador a salvar no cache usando uma tag `<link rel="preload">` no cabeçalho do documento antes mesmo do módulo do karaoké carregar. Resolvido.

## 4. Visuais e Garbage Collection (global.css)

Aí teve o problema das pausas instrumentais. Um texto velho parado na tela por 40 segundos fica zuado demais. Eu implementei um coletor de lixo: se passarem 3 segundos sem nenhuma atualização na letra, a UI delicadamente remove o bloco de texto.

Quando uma palavra *está* ativa, ela tem que se destacar fisicamente. A gente usa o Laranja Ubuntu da Canonical (`#E95420`) com um brilho em camadas e um leve `transform: scale(1.05)`.
Assim:
```css
.lyric-word.active {
  color: #E95420;
  text-shadow: 0 0 4px rgba(233, 84, 32, 0.8), 
               0 0 12px rgba(233, 84, 32, 0.4);
  transform: scale(1.05);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```
*Uma nota técnica:* Fazer isso rodar sem queda de frames significou animar estritamente a propriedade `transform` pra manter a aceleração por hardware. Se tentar animar `font-size` pro texto saltar, a engine de layout do navegador pira e gera um lag enorme. E sim, os frames ainda caem pra cacete, então qualquer dica é bem-vinda. Pode abrir uma issue no meu repositório do Github sobre isso.

## 5. Pesadelos de API

Originalmente eu usava a API do MusicBrainz/Cover Art Archive pra puxar a arte do álbum dinamicamente. Era uma verdadeira palhaçada. Puxava a capa de um pop regional desconhecido perfeitamente, mas não achava absolutamente nada pra álbuns gigantescos.

Joguei fora. Agora a gente faz a pesquisa bater na API do iTunes Search. É incrivelmente tolerante com pesquisas com erros de digitação e tem quase 100% de precisão. Às vezes a API corporativa mais simples é simplesmente melhor que um banco de dados de código aberto pedante. Me doeu fazer isso, porque normalmente sou o tipo de cara que prefere mandar se foder essas ferramentas fechadas de grandes empresas de tecnologia.

## 6. O Sistema de Votos (vote.js)

Finalmente, o cliente de Like/Dislike. Fica no frontend e dispara requests POST pra um backend serverless (`vote.js`) que conversa com o meu banco de dados. Tive que implementar um controle de estado local pro pessoal não simplesmente floodar a rota, mas manter as atualizações da UI de forma otimista (mudar a cor do botão antes da resposta do servidor chegar) dá aquela sensação de que é instantâneo.

É um ecossistemazinho complexo, mas ver ele rodando perfeitamente num ambiente simulado de desktop faz cada timestamp valer a pena.