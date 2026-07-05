var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/pages-zOC7Tk/functionsWorker-0.24306920635980278.mjs
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  try {
    const text = await request.text();
    const data = JSON.parse(text);
    const sessionId = data.id || crypto.randomUUID();
    const dateStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const path = `analytics/${dateStr}/${sessionId}-${Date.now()}.json`;
    if (env.MEDIA_BUCKET) {
      await env.MEDIA_BUCKET.put(path, text);
    } else {
      console.log("Analytics data received but MEDIA_BUCKET not bound. Payload:", text);
    }
    return new Response("OK", { status: 200 });
  } catch (e) {
    return new Response("Error parsing payload", { status: 400 });
  }
}
__name(onRequest, "onRequest");
__name2(onRequest, "onRequest");
async function onRequest2(context) {
  const quotes = [
    {
      id: 1,
      author: "Douglas Adams",
      source: "The Hitchhiker's Guide to the Galaxy",
      text: {
        en: "Don't panic.",
        nl: "Geen paniek.",
        fr: "Pas de panique."
      }
    },
    {
      id: 2,
      author: "Douglas Adams",
      source: "The Hitchhiker's Guide to the Galaxy",
      text: {
        en: "The ships hung in the sky in much the same way that bricks don't.",
        nl: "De schepen hingen in de lucht op vrijwel dezelfde manier als bakstenen dat niet doen.",
        fr: "Les vaisseaux pendaient dans le ciel \xE0 peu pr\xE8s de la m\xEAme fa\xE7on que les briques ne le font pas."
      }
    },
    {
      id: 3,
      author: "Douglas Adams",
      source: "The Restaurant at the End of the Universe",
      text: {
        en: "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
        nl: "In het begin werd het universum geschapen. Dit heeft veel mensen erg boos gemaakt en wordt algemeen beschouwd als een slechte zet.",
        fr: "Au commencement, l'Univers fut cr\xE9\xE9. Cela a mis beaucoup de monde tr\xE8s en col\xE8re et a \xE9t\xE9 largement consid\xE9r\xE9 comme une mauvaise id\xE9e."
      }
    },
    {
      id: 4,
      author: "Douglas Adams",
      source: "Life, the Universe and Everything",
      text: {
        en: "There is an art, it says, or rather, a knack to flying. The knack lies in learning how to throw yourself at the ground and miss.",
        nl: "Er is een kunst, zegt het, of liever, een handigheidje om te vliegen. De truc is om te leren hoe je jezelf op de grond gooit en mist.",
        fr: "Il y a un art, est-il \xE9crit, ou plut\xF4t une astuce pour voler. L'astuce consiste \xE0 apprendre comment se jeter par terre et rater son coup."
      }
    },
    {
      id: 5,
      author: "Douglas Adams",
      source: "The Salmon of Doubt",
      text: {
        en: "I love deadlines. I love the whooshing noise they make as they go by.",
        nl: "Ik hou van deadlines. Ik hou van het zoevende geluid dat ze maken als ze voorbij vliegen.",
        fr: "J'adore les dates limites. J'adore le bruit de sifflement qu'elles font en passant."
      }
    },
    {
      id: 6,
      author: "Douglas Adams",
      source: "The Hitchhiker's Guide to the Galaxy",
      text: {
        en: "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.",
        nl: "De ruimte is groot. Je zult gewoon niet geloven hoe enorm, reusachtig, verbijsterend groot hij is. Ik bedoel, je denkt misschien dat het een heel eind lopen is naar de apotheek, maar dat is echt kinderspel vergeleken met de ruimte.",
        fr: "L'espace est grand. Vous n'imaginerez jamais \xE0 quel point c'est vaste, gigantesque, ahurissant. Je veux dire, vous pouvez penser que la pharmacie est loin au bout de la rue, mais c'est des cacahu\xE8tes compar\xE9 \xE0 l'espace."
      }
    },
    {
      id: 7,
      author: "Douglas Adams",
      source: "Mostly Harmless",
      text: {
        en: "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
        nl: "Een veelgemaakte fout die mensen maken wanneer ze iets volkomen hufterproof proberen te ontwerpen, is de vindingrijkheid van volkomen hufters te onderschatten.",
        fr: "Une erreur courante que font les gens lorsqu'ils essaient de concevoir quelque chose de totalement infaillible est de sous-estimer l'ing\xE9niosit\xE9 des imb\xE9ciles complets."
      }
    },
    {
      id: 8,
      author: "Douglas Adams",
      source: "The Hitchhiker's Guide to the Galaxy",
      text: {
        en: "Time is an illusion. Lunchtime doubly so.",
        nl: "Tijd is een illusie. Lunchtijd des te meer.",
        fr: "Le temps est une illusion. L'heure du d\xE9jeuner doublement."
      }
    },
    {
      id: 9,
      author: "Douglas Adams",
      source: "The Hitchhiker's Guide to the Galaxy",
      text: {
        en: "Anyone who is capable of getting themselves made President should on no account be allowed to do the job.",
        nl: "Iedereen die in staat is om zichzelf tot president te laten verkiezen, mag onder geen beding de baan doen.",
        fr: "Quiconque est capable de se faire \xE9lire Pr\xE9sident ne devrait sous aucun pr\xE9texte \xEAtre autoris\xE9 \xE0 exercer cette fonction."
      }
    },
    {
      id: 10,
      author: "Douglas Adams",
      source: "The Restaurant at the End of the Universe",
      text: {
        en: "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.",
        nl: "Er is een theorie die stelt dat als ooit iemand precies ontdekt waar het universum voor is en waarom het er is, het onmiddellijk zal verdwijnen en worden vervangen door iets dat nog bizarder en onverklaarbaarder is. Er is een andere theorie die stelt dat dit al is gebeurd.",
        fr: "Il y a une th\xE9orie qui d\xE9clare que si jamais quelqu'un d\xE9couvre exactement \xE0 quoi sert l'Univers et pourquoi il est l\xE0, il dispara\xEEtra instantan\xE9ment et sera remplac\xE9 par quelque chose d'encore plus bizarre et inexplicable. Il y a une autre th\xE9orie qui d\xE9clare que c'est d\xE9j\xE0 arriv\xE9."
      }
    },
    {
      id: 11,
      author: "Terry Pratchett",
      source: "Diggers",
      text: {
        en: "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
        nl: "Het probleem met het hebben van een open geest is natuurlijk dat mensen zullen volharden om langs te komen en er dingen in te proberen stoppen.",
        fr: "L'ennui, quand on a l'esprit ouvert, bien s\xFBr, c'est que les gens insistent pour venir y fourrer des choses."
      }
    },
    {
      id: 12,
      author: "Terry Pratchett",
      source: "Reaper Man",
      text: {
        en: "Light thinks it travels faster than anything but it is wrong. No matter how fast light travels, it finds the darkness has always got there first, and is waiting for it.",
        nl: "Licht denkt dat het sneller reist dan wat dan ook, maar het heeft het mis. Hoe snel licht ook reist, het ontdekt dat de duisternis er altijd als eerste is aangekomen en erop wacht.",
        fr: "La lumi\xE8re pense qu'elle voyage plus vite que tout, mais elle a tort. Peu importe la vitesse \xE0 laquelle la lumi\xE8re voyage, elle d\xE9couvre que l'obscurit\xE9 est toujours arriv\xE9e la premi\xE8re et l'attend."
      }
    },
    {
      id: 13,
      author: "Terry Pratchett",
      source: "Jingo",
      text: {
        en: "Give a man a fire and he's warm for a day, but set fire to him and he's warm for the rest of his life.",
        nl: "Geef een man een vuur en hij heeft het een dag warm, maar steek hem in brand en hij heeft het warm voor de rest van zijn leven.",
        fr: "Donnez un feu \xE0 un homme et il aura chaud pour un jour, mais mettez le feu \xE0 un homme et il aura chaud pour le reste de sa vie."
      }
    },
    {
      id: 14,
      author: "Terry Pratchett",
      source: "The Truth",
      text: {
        en: "Sometimes glass glitters more than diamonds because it has more to prove.",
        nl: "Soms schittert glas meer dan diamanten omdat het meer te bewijzen heeft.",
        fr: "Parfois le verre brille plus que les diamants parce qu'il a plus \xE0 prouver."
      }
    },
    {
      id: 15,
      author: "Terry Pratchett",
      source: "Thief of Time",
      text: {
        en: "It is said that your life flashes before your eyes just before you die. That is true, it's called Life.",
        nl: "Er wordt gezegd dat je leven aan je voorbijflitst net voordat je sterft. Dat is waar, het heet Leven.",
        fr: "On dit que votre vie d\xE9file devant vos yeux juste avant de mourir. C'est vrai, cela s'appelle la Vie."
      }
    },
    {
      id: 16,
      author: "Terry Pratchett",
      source: "Lords and Ladies",
      text: {
        en: "In the beginning there was nothing, which exploded.",
        nl: "In het begin was er niets, en dat ontplofte.",
        fr: "Au commencement, il n'y avait rien, et puis \xE7a a explos\xE9."
      }
    },
    {
      id: 17,
      author: "Terry Pratchett",
      source: "Small Gods",
      text: {
        en: "Time is a drug. Too much of it kills you.",
        nl: "Tijd is een drug. Te veel ervan vermoordt je.",
        fr: "Le temps est une drogue. Trop de temps vous tue."
      }
    },
    {
      id: 18,
      author: "J.R.R. Tolkien",
      source: "The Fellowship of the Ring",
      text: {
        en: "I wish it need not have happened in my time, said Frodo. So do I, said Gandalf, and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.",
        nl: "Ik wilde dat het niet in mijn tijd was gebeurd, zei Frodo. Ik ook, zei Gandalf, en dat geldt voor iedereen die zulke tijden meemaakt. Maar het is niet aan hen om dat te beslissen. Het enige dat wij hoeven te beslissen, is wat we doen met de tijd die ons is gegeven.",
        fr: "Je voudrais que cela ne se f\xFBt pas pass\xE9 de mon temps, dit Frodon. Moi aussi, dit Gandalf, comme tous ceux qui vivent pour voir des temps pareils. Mais la d\xE9cision ne leur appartient pas. Tout ce que nous avons \xE0 d\xE9cider, c'est ce qu'il faut faire du temps qui nous est imparti."
      }
    },
    {
      id: 19,
      author: "J.R.R. Tolkien",
      source: "The Fellowship of the Ring",
      text: {
        en: "All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost.",
        nl: "Niet al wat goud is blinkt, Niet allen die zwerven zijn verloren; Het oude dat sterk is verwelkt niet, Diepe wortels worden niet bereikt door de vorst.",
        fr: "Tout ce qui est or ne brille pas, Tous ceux qui errent ne sont pas perdus ; Le vieux qui est fort ne se fl\xE9trit point, Les racines profondes ne sont pas atteintes par le gel."
      }
    },
    {
      id: 20,
      author: "J.K. Rowling",
      source: "Harry Potter and the Sorcerer's Stone",
      text: {
        en: "It does not do to dwell on dreams and forget to live.",
        nl: "Het is niet goed om in dromen te blijven hangen en te vergeten te leven.",
        fr: "Il ne fait pas bon s'attarder sur les r\xEAves et oublier de vivre."
      }
    },
    {
      id: 21,
      author: "J.K. Rowling",
      source: "Harry Potter and the Deathly Hallows",
      text: {
        en: "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
        nl: "Natuurlijk gebeurt het in je hoofd, Harry, maar waarom zou dat in vredesnaam betekenen dat het niet echt is?",
        fr: "Bien s\xFBr que \xE7a se passe dans ta t\xEAte, Harry, mais pourquoi diable cela signifierait-il que ce n'est pas r\xE9el ?"
      }
    },
    {
      id: 22,
      author: "George R.R. Martin",
      source: "A Game of Thrones",
      text: {
        en: "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.",
        nl: "Vergeet nooit wat je bent, want de wereld zal het zeker niet vergeten. Maak er je kracht van. Dan kan het nooit je zwakte zijn. Pantser jezelf erin, en het zal nooit worden gebruikt om je te kwetsen.",
        fr: "N'oublie jamais ce que tu es, car le monde ne l'oubliera certainement pas. Fais-en ta force. Ainsi, ce ne pourra jamais \xEAtre ta faiblesse. Arme-toi de cela, et on ne s'en servira jamais pour te blesser."
      }
    },
    {
      id: 23,
      author: "George R.R. Martin",
      source: "A Clash of Kings",
      text: {
        en: "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.",
        nl: "Een lezer leeft duizend levens voordat hij sterft, zei Jojen. De man die nooit leest, leeft er maar \xE9\xE9n.",
        fr: "Un lecteur vit un millier de vies avant de mourir, dit Jojen. L'homme qui ne lit jamais n'en vit qu'une."
      }
    },
    {
      id: 24,
      author: "Ursula K. Le Guin",
      source: "A Wizard of Earthsea",
      text: {
        en: "To light a candle is to cast a shadow.",
        nl: "Een kaars aansteken is een schaduw werpen.",
        fr: "Allumer une bougie, c'est projeter une ombre."
      }
    },
    {
      id: 25,
      author: "Ursula K. Le Guin",
      source: "The Left Hand of Darkness",
      text: {
        en: "Light is the left hand of darkness and darkness the right hand of light. Two are one, life and death, lying together like lovers in kemmer, like hands joined together, like the end and the way.",
        nl: "Licht is de linkerhand van de duisternis en de duisternis de rechterhand van het licht. Twee zijn \xE9\xE9n, leven en dood, samenliggend als minnaars in kemmer, als samengevouwen handen, als het doel en de weg.",
        fr: "La lumi\xE8re est la main gauche de l'obscurit\xE9, et l'obscurit\xE9 la main droite de la lumi\xE8re. Les deux ne font qu'un, la vie et la mort, enlac\xE9s comme des amants en kemmer, comme des mains jointes, comme la fin et le chemin."
      }
    },
    {
      id: 26,
      author: "Neil Gaiman",
      source: "Coraline",
      text: {
        en: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        nl: "Sprookjes zijn meer dan waar: niet omdat ze ons vertellen dat draken bestaan, maar omdat ze ons vertellen dat draken verslagen kunnen worden.",
        fr: "Les contes de f\xE9es sont plus que vrais : non parce qu'ils nous disent que les dragons existent, mais parce qu'ils nous disent que les dragons peuvent \xEAtre vaincus."
      }
    },
    {
      id: 27,
      author: "Albert Camus",
      source: "The Myth of Sisyphus",
      text: {
        en: "There is but one truly serious philosophical problem, and that is suicide. Judging whether life is or is not worth living amounts to answering the fundamental question of philosophy.",
        nl: "Er is maar \xE9\xE9n werkelijk serieus filosofisch probleem, en dat is zelfmoord. Oordelen of het leven wel of niet de moeite waard is om geleefd te worden, komt neer op het beantwoorden van de fundamentele vraag van de filosofie.",
        fr: "Il n'y a qu'un probl\xE8me philosophique vraiment s\xE9rieux : c'est le suicide. Juger que la vie vaut ou ne vaut pas la peine d'\xEAtre v\xE9cue, c'est r\xE9pondre \xE0 la question fondamentale de la philosophie."
      }
    },
    {
      id: 28,
      author: "Albert Camus",
      source: "Return to Tipasa",
      text: {
        en: "In the midst of winter, I found there was, within me, an invincible summer.",
        nl: "Midden in de winter ontdekte ik dat er in mij een onoverwinnelijke zomer was.",
        fr: "Au milieu de l'hiver, j'apprenais enfin qu'il y avait en moi un \xE9t\xE9 invincible."
      }
    },
    {
      id: 29,
      author: "Albert Camus",
      source: "The Rebel",
      text: {
        en: "Man is the only creature who refuses to be what he is.",
        nl: "De mens is het enige schepsel dat weigert te zijn wat hij is.",
        fr: "L'homme est la seule cr\xE9ature qui refuse d'\xEAtre ce qu'elle est."
      }
    },
    {
      id: 30,
      author: "Jean-Paul Sartre",
      source: "No Exit (Huis Clos)",
      text: {
        en: "All those eyes intent on me. Devouring me. What? Only two of you? I thought there were more; many more. So this is hell. I'd never have believed it. You remember all we were told about the torture-chambers, the fire and brimstone, the 'burning marl.' Old wives' tales! There's no need for red-hot pokers. Hell is\u2014other people!",
        nl: "Al die ogen die op mij gericht zijn. Die mij verslinden. Wat? Zijn jullie maar met z'n twee\xEBn? Ik dacht dat er meer waren; veel meer. Dus dit is de hel. Ik had het nooit geloofd. Je herinnert je alles wat ons is verteld over de martelkamers, het vuur en de zwavel, de 'brandende mergel'. Oude wijvenpraat! Er is geen behoefte aan gloeiende poken. De hel, dat zijn de anderen!",
        fr: "Tous ces regards qui me mangent... Ha, vous n'\xEAtes que deux ? Je vous croyais beaucoup plus nombreuses. Alors, c'est \xE7a l'enfer. Je n'aurais jamais cru... Vous vous rappelez : le soufre, le b\xFBcher, le gril... Ah ! quelle plaisanterie. Pas besoin de gril : l'enfer, c'est les Autres."
      }
    },
    {
      id: 31,
      author: "Jean-Paul Sartre",
      source: "Existentialism is a Humanism",
      text: {
        en: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
        nl: "De mens is veroordeeld om vrij te zijn; want eenmaal in de wereld geworpen, is hij verantwoordelijk voor alles wat hij doet.",
        fr: "L'homme est condamn\xE9 \xE0 \xEAtre libre ; parce qu'une fois jet\xE9 dans le monde, il est responsable de tout ce qu'il fait."
      }
    },
    {
      id: 32,
      author: "Friedrich Nietzsche",
      source: "Beyond Good and Evil",
      text: {
        en: "Beware that, when fighting monsters, you yourself do not become a monster... for when you gaze long into the abyss. The abyss gazes also into you.",
        nl: "Wie met monsters vecht, moet oppassen dat hij daarbij niet zelf een monster wordt... en als je lang in een afgrond kijkt, kijkt de afgrond ook in jou.",
        fr: "Celui qui combat des monstres doit prendre garde de ne pas devenir monstre lui-m\xEAme... Et quand tu regardes longtemps dans un ab\xEEme, l'ab\xEEme regarde aussi en toi."
      }
    },
    {
      id: 33,
      author: "Friedrich Nietzsche",
      source: "Twilight of the Idols",
      text: {
        en: "He who has a why to live for can bear almost any how.",
        nl: "Wie een waarom heeft om voor te leven, kan bijna elke hoe verdragen.",
        fr: "Celui qui a un pourquoi qui lui tient lieu de but peut vivre avec n'importe quel comment."
      }
    },
    {
      id: 34,
      author: "Friedrich Nietzsche",
      source: "Thus Spoke Zarathustra",
      text: {
        en: "There is always some madness in love. But there is also always some reason in madness.",
        nl: "Er is altijd wat waanzin in de liefde. Maar er is ook altijd wat reden in de waanzin.",
        fr: "Il y a toujours un peu de folie dans l'amour. Mais il y a toujours aussi un peu de raison dans la folie."
      }
    },
    {
      id: 35,
      author: "S\xF8ren Kierkegaard",
      source: "Either/Or",
      text: {
        en: "I see it all perfectly; there are two possible situations - one can either do this or that. My honest opinion and my friendly advice is this: do it or do not do it - you will regret both.",
        nl: "Ik zie het allemaal volkomen duidelijk; er zijn twee mogelijke situaties - men kan dit doen of dat. Mijn eerlijke mening en mijn vriendschappelijke advies is dit: doe het of doe het niet - je zult van beide spijt krijgen.",
        fr: "Je vois tout parfaitement ; il y a deux situations possibles - on peut faire ceci ou cela. Mon opinion honn\xEAte et mon conseil amical sont les suivants : faites-le ou ne le faites pas - vous regretterez les deux."
      }
    },
    {
      id: 36,
      author: "S\xF8ren Kierkegaard",
      source: "Journals",
      text: {
        en: "Life can only be understood backwards; but it must be lived forwards.",
        nl: "Het leven kan alleen achterwaarts begrepen worden; maar het moet voorwaarts geleefd worden.",
        fr: "La vie ne peut \xEAtre comprise qu'en regardant en arri\xE8re ; mais elle doit \xEAtre v\xE9cue en regardant en avant."
      }
    },
    {
      id: 37,
      author: "Marcus Aurelius",
      source: "Meditations",
      text: {
        en: "Think of yourself as dead. You have lived your life. Now take what's left and live it properly. Does the light of a lamp shine and keep its glow until its fuel is spent? Why shouldn't your truth, justice, and self-control shine until you are extinguished?",
        nl: "Beschouw jezelf als dood. Je hebt je leven geleefd. Neem nu wat er over is en leef het op de juiste manier. Schijnt het licht van een lamp en behoudt het zijn gloed totdat de brandstof op is? Waarom zouden jouw waarheid, rechtvaardigheid en zelfbeheersing niet schijnen totdat jij gedoofd bent?",
        fr: "Consid\xE8re-toi comme mort. Tu as achev\xE9 ta vie. Maintenant, prends ce qui te reste \xE0 vivre et vis-le selon la nature. La lumi\xE8re d'une lampe brille et garde son \xE9clat jusqu'\xE0 ce que son huile soit \xE9puis\xE9e. Pourquoi ta v\xE9rit\xE9, ta justice et ta ma\xEEtrise de toi-m\xEAme ne brilleraient-elles pas jusqu'\xE0 ce que tu sois \xE9teint ?"
      }
    },
    {
      id: 38,
      author: "Marcus Aurelius",
      source: "Meditations",
      text: {
        en: "You have power over your mind - not outside events. Realize this, and you will find strength.",
        nl: "Je hebt macht over je eigen geest - niet over gebeurtenissen buitenaf. Besef dit, en je zult kracht vinden.",
        fr: "Tu as du pouvoir sur ton esprit - pas sur les \xE9v\xE9nements ext\xE9rieurs. R\xE9alise cela, et tu trouveras la force."
      }
    },
    {
      id: 39,
      author: "Seneca",
      source: "On the Shortness of Life",
      text: {
        en: "It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested. But when it is wasted in heedless luxury and spent on no good activity, we are forced at last by death's final constraint to realize that it has passed away before we knew it was passing.",
        nl: "Het is niet zo dat we een korte tijd te leven hebben, maar dat we er veel van verspillen. Het leven is lang genoeg, en er is ons een voldoende genereuze hoeveelheid gegeven voor de hoogste prestaties, als het maar goed werd ge\xEFnvesteerd. Maar wanneer het wordt verspild aan achteloze luxe en aan geen enkele goede activiteit wordt besteed, worden we uiteindelijk door de laatste dwang van de dood gedwongen te beseffen dat het is verstreken voordat we beseften dat het voorbijging.",
        fr: "Ce n'est pas que nous ayons peu de temps \xE0 vivre, mais que nous en perdons beaucoup. La vie est assez longue, et elle nous a \xE9t\xE9 donn\xE9e avec assez de largesse pour l'accomplissement des plus grandes choses, si elle \xE9tait tout enti\xE8re bien plac\xE9e. Mais quand elle se dissipe dans le luxe et l'indiff\xE9rence, quand on ne l'emploie \xE0 rien de bon, contraints enfin par la derni\xE8re n\xE9cessit\xE9, nous nous apercevons qu'elle a pass\xE9, sans avoir compris qu'elle passait."
      }
    },
    {
      id: 40,
      author: "Seneca",
      source: "Letters from a Stoic",
      text: {
        en: "We suffer more often in imagination than in reality.",
        nl: "We lijden vaker in onze verbeelding dan in de werkelijkheid.",
        fr: "Nous souffrons plus souvent en imagination qu'en r\xE9alit\xE9."
      }
    },
    {
      id: 41,
      author: "Epictetus",
      source: "Enchiridion",
      text: {
        en: "Men are disturbed not by things, but by the view which they take of them.",
        nl: "Mensen raken niet van streek door de dingen zelf, maar door de manier waarop ze ernaar kijken.",
        fr: "Ce ne sont pas les choses qui troublent les hommes, mais l'opinion qu'ils en ont."
      }
    },
    {
      id: 42,
      author: "Fyodor Dostoevsky",
      source: "The Brothers Karamazov",
      text: {
        en: "The mystery of human existence lies not in just staying alive, but in finding something to live for. Without a clear idea of what to live for man will not consent to live and will rather destroy himself than remain on earth, though he were surrounded by bread.",
        nl: "Het mysterie van het menselijk bestaan ligt niet in het louter in leven blijven, maar in het vinden van iets om voor te leven. Zonder een duidelijk idee van waarvoor hij moet leven, zal de mens niet instemmen te leven en zal hij zichzelf eerder vernietigen dan op aarde te blijven, zelfs al werd hij omringd door brood.",
        fr: "Le secret de l'existence humaine ne consiste pas seulement \xE0 vivre, mais \xE0 trouver un motif de vivre. Sans une id\xE9e claire du but de son existence, l'homme ne consentira jamais \xE0 vivre, et il s'an\xE9antira plut\xF4t que de rester sur la terre, quand bien m\xEAme il serait entour\xE9 de montagnes de pain."
      }
    },
    {
      id: 43,
      author: "Fyodor Dostoevsky",
      source: "Notes from Underground",
      text: {
        en: "To care only for well-being seems to me positively ill-bred. Whether it's good or bad, it is sometimes very pleasant, too, to smash things.",
        nl: "Alleen om welzijn geven lijkt me ronduit onbeleefd. Of het nu goed of slecht is, het is soms ook heel aangenaam om dingen kapot te slaan.",
        fr: "Ne se soucier que du bien-\xEAtre me semble carr\xE9ment mal \xE9lev\xE9. Que ce soit bon ou mauvais, il est parfois tr\xE8s agr\xE9able aussi de casser des choses."
      }
    },
    {
      id: 44,
      author: "Leo Tolstoy",
      source: "Anna Karenina",
      text: {
        en: "He stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking. If you look for perfection, you'll never be content.",
        nl: "Hij stapte naar beneden en probeerde niet lang naar haar te kijken, alsof ze de zon was, maar toch zag hij haar, net als de zon, zelfs zonder te kijken. Als je naar perfectie zoekt, zul je nooit tevreden zijn.",
        fr: "Il descendit, en s'effor\xE7ant de ne pas la regarder longuement, comme on \xE9vite de regarder le soleil, mais il la voyait, comme le soleil, m\xEAme sans la regarder. Si vous cherchez la perfection, vous ne serez jamais satisfait."
      }
    },
    {
      id: 45,
      author: "Leo Tolstoy",
      source: "War and Peace",
      text: {
        en: "We can know only that we know nothing. And that is the highest degree of human wisdom.",
        nl: "We kunnen alleen weten dat we niets weten. En dat is de hoogste graad van menselijke wijsheid.",
        fr: "Nous ne pouvons savoir qu'une chose, c'est que nous ne savons rien. Et c'est l\xE0 le plus haut degr\xE9 de la sagesse humaine."
      }
    },
    {
      id: 46,
      author: "Mary Shelley",
      source: "Frankenstein",
      text: {
        en: "Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge and how much happier that man is who believes his native town to be the world, than he who aspires to become greater than his nature will allow.",
        nl: "Leer van mij, is het niet door mijn voorschriften, dan op z'n minst door mijn voorbeeld, hoe gevaarlijk de verwerving van kennis is, en hoeveel gelukkiger de mens is die gelooft dat zijn geboortestad de wereld is, dan hij die ernaar streeft groter te worden dan zijn natuur toestaat.",
        fr: "Apprenez de moi, sinon par mes pr\xE9ceptes, du moins par mon exemple, combien l'acquisition du savoir est dangereuse, et combien est plus heureux l'homme qui croit que sa ville natale est le monde entier, que celui qui aspire \xE0 devenir plus grand que sa nature ne le permet."
      }
    },
    {
      id: 47,
      author: "Victor Hugo",
      source: "Les Mis\xE9rables",
      text: {
        en: "To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.",
        nl: "Liefhebben of liefgehad hebben, dat is genoeg. Vraag niets meer. Er is geen andere parel te vinden in de donkere plooien van het leven.",
        fr: "Aimer ou avoir aim\xE9, cela suffit. Ne demandez rien d'autre. Il n'y a pas d'autre perle \xE0 trouver dans les plis t\xE9n\xE9breux de la vie."
      }
    },
    {
      id: 48,
      author: "Victor Hugo",
      source: "The Hunchback of Notre-Dame",
      text: {
        en: "He who does not read, has no advantage over him who cannot read.",
        nl: "Hij die niet leest, heeft geen voordeel ten opzichte van hem die niet kan lezen.",
        fr: "Celui qui ne lit pas n'a aucun avantage sur celui qui ne sait pas lire."
      }
    },
    {
      id: 49,
      author: "Alexandre Dumas",
      source: "The Count of Monte Cristo",
      text: {
        en: "All human wisdom is contained in these two words - Wait and Hope.",
        nl: "Alle menselijke wijsheid is vervat in deze twee woorden: Wachten en Hopen.",
        fr: "Toute la sagesse humaine sera dans ces deux mots : Attendre et Esp\xE9rer."
      }
    },
    {
      id: 50,
      author: "Oscar Wilde",
      source: "Lady Windermere's Fan",
      text: {
        en: "We are all in the gutter, but some of us are looking at the stars.",
        nl: "We liggen allemaal in de goot, maar sommigen van ons kijken naar de sterren.",
        fr: "Nous sommes tous dans le caniveau, mais certains d'entre nous regardent les \xE9toiles."
      }
    },
    {
      id: 51,
      author: "Oscar Wilde",
      source: "The Picture of Dorian Gray",
      text: {
        en: "The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself.",
        nl: "De enige manier om van een verleidinging af te komen, is eraan toegeven. Verzet je ertegen, en je ziel wordt ziek van verlangen naar de dingen die ze zichzelf heeft verboden.",
        fr: "Le seul moyen de se d\xE9livrer d'une tentation, c'est d'y c\xE9der. R\xE9sistez et votre \xE2me se rend malade \xE0 force de languir ce qu'elle s'est interdit."
      }
    },
    {
      id: 52,
      author: "Virginia Woolf",
      source: "A Room of One's Own",
      text: {
        en: "Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
        nl: "Sluit je bibliotheken maar af als je wilt; maar er is geen poort, geen slot, geen grendel die je kunt plaatsen op de vrijheid van mijn geest.",
        fr: "Fermez vos biblioth\xE8ques si vous voulez ; mais il n'y a pas de porte, pas de serrure, pas de verrou que vous puissiez mettre sur la libert\xE9 de mon esprit."
      }
    },
    {
      id: 53,
      author: "Franz Kafka",
      source: "The Z\xFCrau Aphorisms",
      text: {
        en: "I am a cage, in search of a bird.",
        nl: "Ik ben een kooi, op zoek naar een vogel.",
        fr: "Je suis une cage, en qu\xEAte d'un oiseau."
      }
    },
    {
      id: 54,
      author: "Herman Melville",
      source: "Moby-Dick",
      text: {
        en: "I know not all that may be coming, but be it what it will, I'll go to it laughing.",
        nl: "Ik weet niet alles wat er komen gaat, maar wat het ook is, ik zal er lachend naartoe gaan.",
        fr: "Je ne sais pas tout ce qui peut arriver, mais quoi qu'il en soit, j'y irai en riant."
      }
    },
    {
      id: 55,
      author: "Sylvia Plath",
      source: "The Bell Jar",
      text: {
        en: "I took a deep breath and listened to the old brag of my heart. I am, I am, I am.",
        nl: "Ik haalde diep adem en luisterde naar de oude opschepperij van mijn hart. Ik ben, ik ben, ik ben.",
        fr: "J'ai pris une grande inspiration et j'ai \xE9cout\xE9 la vieille vantardise de mon c\u0153ur. Je suis, je suis, je suis."
      }
    },
    {
      id: 56,
      author: "Frank Herbert",
      source: "Dune",
      text: {
        en: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.",
        nl: "Ik mag niet vrezen. Angst is de geestendoder. Angst is de kleine dood die totale vernietiging brengt. Ik zal mijn angst onder ogen zien. Ik zal het over mij en door mij heen laten trekken. En als het voorbij is, zal ik het innerlijke oog richten om het pad ervan te zien. Waar de angst is gegaan, zal niets meer zijn. Alleen ik zal overblijven.",
        fr: "Je ne dois pas avoir peur. La peur tue l'esprit. La peur est la petite mort qui conduit \xE0 l'oblit\xE9ration totale. J'affronterai ma peur. Je lui permettrai de passer sur moi, au travers de moi. Et lorsqu'elle sera pass\xE9e, je tournerai mon \u0153il int\xE9rieur sur son chemin. Et l\xE0 o\xF9 la peur sera pass\xE9e, il n'y aura plus rien. Rien que moi."
      }
    },
    {
      id: 57,
      author: "Frank Herbert",
      source: "Dune",
      text: {
        en: "The mystery of life isn't a problem to solve, but a reality to experience.",
        nl: "Het mysterie van het leven is geen probleem om op te lossen, maar een realiteit om te ervaren.",
        fr: "Le myst\xE8re de la vie n'est pas un probl\xE8me \xE0 r\xE9soudre, mais une r\xE9alit\xE9 \xE0 exp\xE9rimenter."
      }
    },
    {
      id: 58,
      author: "Kurt Vonnegut",
      source: "Slaughterhouse-Five",
      text: {
        en: "And I asked myself about the present: how wide it was, how deep it was, how much was mine to keep.",
        nl: "En ik vroeg me af over het heden: hoe breed het was, hoe diep het was, en hoeveel ervan ik mocht houden.",
        fr: "Et je m'interrogeais sur le pr\xE9sent : quelle \xE9tait sa largeur, quelle \xE9tait sa profondeur, quelle part m'appartenait pour toujours."
      }
    },
    {
      id: 59,
      author: "Kurt Vonnegut",
      source: "Mother Night",
      text: {
        en: "We are what we pretend to be, so we must be careful about what we pretend to be.",
        nl: "We zijn wat we doen alsof we zijn, dus we moeten voorzichtig zijn met wat we doen alsof we zijn.",
        fr: "Nous sommes ce que nous pr\xE9tendons \xEAtre, nous devons donc faire attention \xE0 ce que nous pr\xE9tendons \xEAtre."
      }
    },
    {
      id: 60,
      author: "Isaac Asimov",
      source: "Foundation",
      text: {
        en: "Violence is the last refuge of the incompetent.",
        nl: "Geweld is het laatste toevluchtsoord van de incompetenten.",
        fr: "La violence est le dernier refuge de l'incomp\xE9tence."
      }
    },
    {
      id: 61,
      author: "Isaac Asimov",
      source: "Foundation",
      text: {
        en: "Never let your sense of morals prevent you from doing what is right.",
        nl: "Laat je gevoel voor moraal je er nooit van weerhouden te doen wat juist is.",
        fr: "Ne laissez jamais votre sens de la morale vous emp\xEAcher de faire ce qui est juste."
      }
    },
    {
      id: 62,
      author: "Philip K. Dick",
      source: "I Hope I Shall Arrive Soon",
      text: {
        en: "Reality is that which, when you stop believing in it, doesn't go away.",
        nl: "De realiteit is datgene wat niet weggaat als je er niet meer in gelooft.",
        fr: "La r\xE9alit\xE9, c'est ce qui continue d'exister lorsqu'on cesse d'y croire."
      }
    },
    {
      id: 63,
      author: "William Gibson",
      source: "Neuromancer",
      text: {
        en: "The sky above the port was the color of television, tuned to a dead channel.",
        nl: "De lucht boven de haven had de kleur van een televisie die op een dood kanaal was afgestemd.",
        fr: "Le ciel au-dessus du port \xE9tait de la couleur d'une t\xE9l\xE9vision allum\xE9e sur une cha\xEEne morte."
      }
    },
    {
      id: 64,
      author: "Ray Bradbury",
      source: "Fahrenheit 451",
      text: {
        en: "You don't have to burn books to destroy a culture. Just get people to stop reading them.",
        nl: "Je hoeft geen boeken te verbranden om een cultuur te vernietigen. Zorg er gewoon voor dat mensen ze niet meer lezen.",
        fr: "Vous n'avez pas besoin de br\xFBler des livres pour d\xE9truire une culture. Il suffit de faire en sorte que les gens arr\xEAtent de les lire."
      }
    },
    {
      id: 65,
      author: "Arthur C. Clarke",
      source: "Profiles of the Future",
      text: {
        en: "Any sufficiently advanced technology is indistinguishable from magic.",
        nl: "Elke voldoende geavanceerde technologie is niet te onderscheiden van magie.",
        fr: "Toute technologie suffisamment avanc\xE9e est indiscernable de la magie."
      }
    },
    {
      id: 66,
      author: "Arthur C. Clarke",
      source: "Profiles of the Future",
      text: {
        en: "The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
        nl: "De enige manier om de grenzen van het mogelijke te ontdekken, is door er een stukje voorbij te wagen, het onmogelijke in.",
        fr: "La seule fa\xE7on de d\xE9couvrir les limites du possible est de s'aventurer un peu au-del\xE0, dans l'impossible."
      }
    },
    {
      id: 67,
      author: "H.G. Wells",
      source: "The Time Machine",
      text: {
        en: "Nature never appeals to intelligence until habit and instinct are useless. There is no intelligence where there is no change and no need of change.",
        nl: "De natuur doet nooit een beroep op intelligentie totdat gewoonte en instinct nutteloos zijn. Er is geen intelligentie waar geen verandering is en geen behoefte aan verandering.",
        fr: "La nature ne fait jamais appel \xE0 l'intelligence tant que l'habitude et l'instinct ne sont pas inutiles. Il n'y a pas d'intelligence l\xE0 o\xF9 il n'y a ni changement ni besoin de changement."
      }
    },
    {
      id: 68,
      author: "Aldous Huxley",
      source: "Brave New World",
      text: {
        en: "Words can be like X-rays if you use them properly -- they'll go through anything. You read and you're pierced.",
        nl: "Woorden kunnen als r\xF6ntgenstralen zijn als je ze goed gebruikt -- ze gaan overal doorheen. Je leest en je wordt doorboord.",
        fr: "Les mots peuvent \xEAtre comme des rayons X si on s'en sert convenablement -- ils transpercent n'importe quoi. Vous lisez, et vous \xEAtes transperc\xE9."
      }
    },
    {
      id: 69,
      author: "George Orwell",
      source: "1984",
      text: {
        en: "It was a bright cold day in April, and the clocks were striking thirteen.",
        nl: "Het was een heldere, koude dag in april en de klokken sloegen dertien.",
        fr: "C'\xE9tait une journ\xE9e d'avril froide et claire, et les horloges sonnaient treize heures."
      }
    },
    {
      id: 70,
      author: "George Orwell",
      source: "1984",
      text: {
        en: "If you want a picture of the future, imagine a boot stamping on a human face\u2014for ever.",
        nl: "Als je een beeld van de toekomst wilt, stel je dan een laars voor die op een menselijk gezicht stampt - voor altijd.",
        fr: "Si vous voulez une image de l'avenir, imaginez une botte pi\xE9tinant un visage humain, \xE9ternellement."
      }
    },
    {
      id: 71,
      author: "Carl Sagan",
      source: "Pale Blue Dot",
      text: {
        en: "Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering... lived there\u2014on a mote of dust suspended in a sunbeam.",
        nl: "Kijk nog eens naar die stip. Dat is hier. Dat is thuis. Dat zijn wij. Daarop heeft iedereen van wie je houdt, iedereen die je kent, iedereen van wie je ooit hebt gehoord, ieder mens die ooit heeft bestaan, zijn of haar leven geleefd. Het totaal van onze vreugde en ons lijden... leefde daar \u2014 op een stofje dat zweeft in een zonnestraal.",
        fr: "Regardez encore ce petit point. C'est ici. C'est notre foyer. C'est nous. Sur lui se trouvent tous ceux que vous aimez, tous ceux que vous connaissez, tous ceux dont vous avez entendu parler, tous les \xEAtres humains qui aient jamais v\xE9cu. La somme de nos joies et de nos souffrances... a v\xE9cu l\xE0 \u2014 sur un grain de poussi\xE8re suspendu dans un rayon de soleil."
      }
    },
    {
      id: 72,
      author: "Carl Sagan",
      source: "Cosmos",
      text: {
        en: "We are a way for the cosmos to know itself.",
        nl: "Wij zijn een manier voor de kosmos om zichzelf te kennen.",
        fr: "Nous sommes un moyen pour le cosmos de se conna\xEEtre lui-m\xEAme."
      }
    },
    {
      id: 73,
      author: "Carl Sagan",
      source: "Cosmos",
      text: {
        en: "Somewhere, something incredible is waiting to be known.",
        nl: "Ergens wacht iets ongelooflijks om gekend te worden.",
        fr: "Quelque part, quelque chose d'incroyable attend d'\xEAtre connu."
      }
    },
    {
      id: 74,
      author: "Albert Einstein",
      source: "Attributed",
      text: {
        en: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        nl: "Twee dingen zijn oneindig: het universum en menselijke domheid; en van het universum weet ik het niet zeker.",
        fr: "Deux choses sont infinies : l'Univers et la b\xEAtise humaine. Mais, en ce qui concerne l'Univers, je n'en ai pas encore acquis la certitude absolue."
      }
    },
    {
      id: 75,
      author: "Stephen Hawking",
      source: "Black Holes and Baby Universes",
      text: {
        en: "I have noticed even people who claim everything is predestined, and that we can do nothing to change it, look before they cross the road.",
        nl: "Ik heb gemerkt dat zelfs mensen die beweren dat alles is voorbestemd en dat we niets kunnen doen om het te veranderen, uitkijken voordat ze de weg oversteken.",
        fr: "J'ai remarqu\xE9 que m\xEAme les gens qui affirment que tout est pr\xE9destin\xE9 et que nous ne pouvons rien faire pour le changer regardent avant de traverser la route."
      }
    },
    {
      id: 76,
      author: "Mark Twain",
      source: "A Connecticut Yankee in King Arthur's Court",
      text: {
        en: "You can't depend on your eyes when your imagination is out of focus.",
        nl: "Je kunt niet op je ogen vertrouwen als je verbeelding onscherp is.",
        fr: "Vous ne pouvez pas d\xE9pendre de vos yeux lorsque votre imagination est floue."
      }
    },
    {
      id: 77,
      author: "Mark Twain",
      source: "Attributed",
      text: {
        en: "The two most important days in your life are the day you are born and the day you find out why.",
        nl: "De twee belangrijkste dagen in je leven zijn de dag dat je geboren wordt en de dag dat je erachter komt waarom.",
        fr: "Les deux jours les plus importants de votre vie sont le jour o\xF9 vous \xEAtes n\xE9 et le jour o\xF9 vous d\xE9couvrez pourquoi."
      }
    },
    {
      id: 78,
      author: "Haruki Murakami",
      source: "Kafka on the Shore",
      text: {
        en: "Memories warm you up from the inside. But they also tear you apart.",
        nl: "Herinneringen verwarmen je van binnenuit. Maar ze verscheuren je ook.",
        fr: "Les souvenirs vous r\xE9chauffent de l'int\xE9rieur. Mais ils vous d\xE9chirent aussi."
      }
    },
    {
      id: 79,
      author: "Jorge Luis Borges",
      source: "Poem of the Gifts",
      text: {
        en: "I have always imagined that Paradise will be a kind of library.",
        nl: "Ik heb me altijd voorgesteld dat het Paradijs een soort bibliotheek zal zijn.",
        fr: "J'ai toujours imagin\xE9 que le Paradis serait une sorte de biblioth\xE8que."
      }
    },
    {
      id: 80,
      author: "Ana\xEFs Nin",
      source: "Seduction of the Minotaur",
      text: {
        en: "We do not see things as they are, we see them as we are.",
        nl: "We zien de dingen niet zoals ze zijn, we zien ze zoals wij zijn.",
        fr: "Nous ne voyons pas les choses telles qu'elles sont, nous les voyons telles que nous sommes."
      }
    },
    { id: 81, author: "Herman Melville", source: "Moby-Dick", text: { en: "Call me Ishmael.", nl: "Noem me Isma\xEBl.", fr: "Appelez-moi Isma\xEBl." } },
    { id: 82, author: "Charles Dickens", source: "A Tale of Two Cities", text: { en: "It was the best of times, it was the worst of times.", nl: "Het was de beste der tijden, het was de slechtste der tijden.", fr: "C'\xE9tait le meilleur des temps, c'\xE9tait le pire des temps." } },
    { id: 83, author: "Jane Austen", source: "Pride and Prejudice", text: { en: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.", nl: "Het is een algemeen erkende waarheid dat een alleenstaande man in het bezit van een goed fortuin, behoefte moet hebben aan een vrouw.", fr: "C'est une v\xE9rit\xE9 universellement reconnue qu'un c\xE9libataire pourvu d'une belle fortune doit avoir envie de se marier." } },
    { id: 84, author: "F. Scott Fitzgerald", source: "The Great Gatsby", text: { en: "So we beat on, boats against the current, borne back ceaselessly into the past.", nl: "Zo varen we voort, boten tegen de stroom in, onophoudelijk teruggevoerd naar het verleden.", fr: "Car nous luttons ainsi, barques \xE0 contre-courant, refoul\xE9s sans fin vers notre pass\xE9." } },
    { id: 85, author: "Ralph Waldo Emerson", source: "Attributed", text: { en: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", nl: "Jezelf zijn in een wereld die voortdurend probeert iets anders van je te maken, is de grootste prestatie.", fr: "\xCAtre soi-m\xEAme dans un monde qui tente constamment de faire de vous quelqu'un d'autre est le plus grand accomplissement." } },
    { id: 86, author: "Lao Tzu", source: "Tao Te Ching", text: { en: "The journey of a thousand miles begins with one step.", nl: "De reis van duizend mijl begint met \xE9\xE9n stap.", fr: "Un voyage de mille lieues commence toujours par un premier pas." } },
    { id: 87, author: "Confucius", source: "Analects", text: { en: "Every man has two lives, and the second starts when he realizes he has just one.", nl: "Ieder mens heeft twee levens, en de tweede begint wanneer hij beseft dat hij er maar \xE9\xE9n heeft.", fr: "On a deux vies, et la seconde commence quand on se rend compte qu'on n'en a qu'une." } },
    { id: 88, author: "Rumi", source: "Masnavi", text: { en: "What you seek is seeking you.", nl: "Wat je zoekt, zoekt jou.", fr: "Ce que tu cherches te cherche." } },
    { id: 89, author: "Rumi", source: "Masnavi", text: { en: "The wound is the place where the Light enters you.", nl: "De wond is de plek waar het Licht naar binnen komt.", fr: "La blessure est l'endroit par o\xF9 la lumi\xE8re entre en vous." } },
    { id: 90, author: "John Lennon", source: "Beautiful Boy", text: { en: "Life is what happens to you while you're busy making other plans.", nl: "Het leven is wat je overkomt terwijl je druk bent met het maken van andere plannen.", fr: "La vie, c'est ce qui arrive quand on a d'autres projets." } },
    { id: 91, author: "Dr. Seuss", source: "Attributed", text: { en: "Don't cry because it's over, smile because it happened.", nl: "Huil niet omdat het voorbij is, glimlach omdat het is gebeurd.", fr: "Ne pleure pas parce que c'est fini, souris parce que c'est arriv\xE9." } },
    { id: 92, author: "Robert Frost", source: "Attributed", text: { en: "In three words I can sum up everything I've learned about life: it goes on.", nl: "In drie woorden kan ik alles samenvatten wat ik over het leven heb geleerd: het gaat door.", fr: "En trois mots, je peux r\xE9sumer tout ce que j'ai appris sur la vie : elle continue." } },
    { id: 93, author: "Mahatma Gandhi", source: "Strength to Love", text: { en: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", nl: "Duisternis kan duisternis niet verdrijven: dat kan alleen het licht. Haat kan haat niet verdrijven: dat kan alleen de liefde.", fr: "L'obscurit\xE9 ne peut pas chasser l'obscurit\xE9 : seule la lumi\xE8re peut faire cela. La haine ne peut pas chasser la haine : seul l'amour peut faire cela." } },
    { id: 94, author: "Martin Luther King Jr.", source: "The Trumpet of Conscience", text: { en: "In the end, we will remember not the words of our enemies, but the silence of our friends.", nl: "Uiteindelijk zullen we ons niet de woorden van onze vijanden herinneren, maar het zwijgen van onze vrienden.", fr: "\xC0 la fin, nous ne nous souviendrons pas des mots de nos ennemis, mais du silence de nos amis." } },
    { id: 95, author: "Winston Churchill", source: "Attributed", text: { en: "Success is not final, failure is not fatal: it is the courage to continue that counts.", nl: "Succes is niet definitief, falen is niet fataal: het is de moed om door te gaan die telt.", fr: "Le succ\xE8s n'est pas final, l'\xE9chec n'est pas fatal : c'est le courage de continuer qui compte." } },
    { id: 96, author: "Eleanor Roosevelt", source: "Attributed", text: { en: "No one can make you feel inferior without your consent.", nl: "Niemand kan je een minderwaardigheidsgevoel geven zonder jouw toestemming.", fr: "Personne ne peut vous faire sentir inf\xE9rieur sans votre consentement." } },
    { id: 97, author: "Maya Angelou", source: "I Know Why the Caged Bird Sings", text: { en: "There is no greater agony than bearing an untold story inside you.", nl: "Er is geen grotere kwelling dan een onverteld verhaal in je te dragen.", fr: "Il n'y a pas de plus grande agonie que de porter une histoire non racont\xE9e \xE0 l'int\xE9rieur de soi." } },
    { id: 98, author: "C.S. Lewis", source: "The Four Loves", text: { en: "To love at all is to be vulnerable.", nl: "Liefhebben is kwetsbaar zijn.", fr: "Aimer, c'est \xEAtre vuln\xE9rable." } },
    { id: 99, author: "C.S. Lewis", source: "The Chronicles of Narnia", text: { en: "One day, you will be old enough to start reading fairytales again.", nl: "Op een dag zul je oud genoeg zijn om weer sprookjes te gaan lezen.", fr: "Un jour, tu seras assez vieux pour recommencer \xE0 lire des contes de f\xE9es." } },
    { id: 100, author: "J.M. Barrie", source: "Peter Pan", text: { en: "To die will be an awfully big adventure.", nl: "Sterven zal een ontzettend groot avontuur zijn.", fr: "Mourir sera une aventure terriblement grande." } },
    { id: 101, author: "Stephen King", source: "The Dark Tower", text: { en: "The man in black fled across the desert, and the gunslinger followed.", nl: "De man in het zwart vluchtte door de woestijn, en de scherpschutter volgde hem.", fr: "L'homme en noir fuyait \xE0 travers le d\xE9sert, et le pistolero le suivait." } },
    { id: 102, author: "Antoine de Saint-Exup\xE9ry", source: "The Little Prince", text: { en: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.", nl: "Alleen met het hart kun je goed zien; wat essentieel is, is onzichtbaar voor het oog.", fr: "On ne voit bien qu'avec le c\u0153ur. L'essentiel est invisible pour les yeux." } },
    { id: 103, author: "Hermann Hesse", source: "Steppenwolf", text: { en: "Some of us think holding on makes us strong; but sometimes it is letting go.", nl: "Sommigen van ons denken dat vasthouden ons sterk maakt; maar soms is het loslaten.", fr: "Certains d'entre nous pensent que s'accrocher nous rend forts ; mais parfois, c'est l\xE2cher prise." } },
    { id: 104, author: "Sylvia Plath", source: "The Unabridged Journals", text: { en: "Let me live, love, and say it well in good sentences.", nl: "Laat me leven, liefhebben en het goed zeggen in mooie zinnen.", fr: "Laisse-moi vivre, aimer, et le dire bien en de belles phrases." } },
    { id: 105, author: "Roald Dahl", source: "Attributed", text: { en: "Those who don't believe in magic will never find it.", nl: "Zij die niet in magie geloven, zullen het nooit vinden.", fr: "Ceux qui ne croient pas en la magie ne la trouveront jamais." } },
    { id: 106, author: "Charles Bukowski", source: "Factotum", text: { en: "Find what you love and let it kill you.", nl: "Vind wat je liefhebt en laat het je vermoorden.", fr: "Trouve ce que tu aimes et laisse-le te tuer." } },
    { id: 107, author: "Jack Kerouac", source: "On the Road", text: { en: "Nothing behind me, everything ahead of me, as is ever so on the road.", nl: "Niets achter me, alles voor me, zoals altijd onderweg.", fr: "Rien derri\xE8re moi, tout devant moi, comme toujours sur la route." } },
    { id: 108, author: "Hunter S. Thompson", source: "The Rum Diary", text: { en: "We are all alone, born alone, die alone, and\u2014in spite of True Romance magazines\u2014we shall all someday look back on our lives and see that, in spite of our company, we were alone the whole way.", nl: "We zijn allemaal alleen, worden alleen geboren, sterven alleen, en\u2014ondanks tijdschriften over ware liefde\u2014zullen we ooit terugkijken op ons leven en zien dat we, ondanks ons gezelschap, de hele weg alleen waren.", fr: "Nous sommes tous seuls, n\xE9s seuls, mourons seuls, et - en d\xE9pit des magazines True Romance - nous regarderons tous un jour notre vie et verrons que, malgr\xE9 notre compagnie, nous \xE9tions seuls tout le long du chemin." } },
    { id: 109, author: "Ralph Ellison", source: "Invisible Man", text: { en: "I am invisible, understand, simply because people refuse to see me.", nl: "Ik ben onzichtbaar, begrijp je, simpelweg omdat mensen weigeren mij te zien.", fr: "Je suis invisible, comprenez-le, simplement parce que les gens refusent de me voir." } },
    { id: 110, author: "Zora Neale Hurston", source: "Their Eyes Were Watching God", text: { en: "There are years that ask questions and years that answer.", nl: "Er zijn jaren die vragen stellen en jaren die antwoorden.", fr: "Il y a des ann\xE9es qui posent des questions et des ann\xE9es qui r\xE9pondent." } },
    { id: 111, author: "Gabriel Garc\xEDa M\xE1rquez", source: "One Hundred Years of Solitude", text: { en: "What matters in life is not what happens to you but what you remember and how you remember it.", nl: "Wat er in het leven toe doet, is niet wat je overkomt, maar wat je je herinnert en hoe je het je herinnert.", fr: "Ce qui compte dans la vie, ce n'est pas ce qui vous arrive, mais ce dont vous vous souvenez et comment vous vous en souvenez." } },
    { id: 112, author: "Milan Kundera", source: "Norwegian Wood", text: { en: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.", nl: "Als je alleen de boeken leest die alle anderen lezen, kun je alleen maar denken wat alle anderen denken.", fr: "Si vous ne lisez que les livres que tout le monde lit, vous ne pouvez penser que ce que tout le monde pense." } },
    { id: 113, author: "Italo Calvino", source: "The Unbearable Lightness of Being", text: { en: "A single metaphor can give birth to love.", nl: "Een enkele metafoor kan de liefde doen ontwaken.", fr: "Une seule m\xE9taphore peut donner naissance \xE0 l'amour." } },
    { id: 114, author: "Umberto Eco", source: "Invisible Cities", text: { en: "You take delight not in a city's seven or seventy wonders, but in the answer it gives to a question of yours.", nl: "Je geniet niet van de zeven of zeventig wonderen van een stad, maar van het antwoord dat ze geeft op een vraag van jou.", fr: "Vous ne prenez pas plaisir aux sept ou soixante-dix merveilles d'une ville, mais \xE0 la r\xE9ponse qu'elle donne \xE0 l'une de vos questions." } },
    { id: 115, author: "Margaret Atwood", source: "The Handmaid's Tale", text: { en: "Nolite te bastardes carborundorum.", nl: "Nolite te bastardes carborundorum.", fr: "Nolite te bastardes carborundorum." } },
    { id: 116, author: "Neil Gaiman", source: "American Gods", text: { en: "Things need not have happened to be true. Tales and dreams are the shadow-truths that will endure when mere facts are dust and ashes, and forgot.", nl: "Dingen hoeven niet gebeurd te zijn om waar te zijn. Verhalen en dromen zijn de schaduwwaarheden die zullen voortbestaan wanneer louter feiten stof en as zijn, en vergeten.", fr: "Les choses n'ont pas besoin de s'\xEAtre produites pour \xEAtre vraies. Les contes et les r\xEAves sont les v\xE9rit\xE9s de l'ombre qui perdureront quand les simples faits ne seront que poussi\xE8re et cendres, et oubli\xE9s." } },
    { id: 117, author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy", text: { en: "I'd far rather be happy than right any day.", nl: "Ik ben veel liever gelukkig dan dat ik altijd gelijk heb.", fr: "Je pr\xE9f\xE8re de loin \xEAtre heureux qu'avoir raison." } },
    { id: 118, author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy", text: { en: "If there's anything more important than my ego around, I want it caught and shot now.", nl: "Als er iets belangrijkers in de buurt is dan mijn ego, wil ik dat het nu wordt gevangen en neergeschoten.", fr: "S'il y a quelque chose de plus important que mon ego dans les parages, je veux qu'on l'attrape et qu'on l'abatte tout de suite." } },
    { id: 119, author: "Terry Pratchett", source: "Guards! Guards!", text: { en: "The sheer, naked, unadulterated, pure, unalloyed, unmitigated truth is that I am completely and utterly baffled.", nl: "De pure, naakte, onvervalste, zuivere, onversneden, onverbloemde waarheid is dat ik volkomen verbijsterd ben.", fr: "La v\xE9rit\xE9 pure, nue, sans m\xE9lange, sans alliage et sans circonstances att\xE9nuantes, c'est que je suis compl\xE8tement et totalement perplexe." } },
    { id: 120, author: "Terry Pratchett", source: "Night Watch", text: { en: "Personal's not the same as important.", nl: "Persoonlijk is niet hetzelfde als belangrijk.", fr: "Personnel n'est pas la m\xEAme chose qu'important." } },
    { id: 121, author: "J.R.R. Tolkien", source: "The Hobbit", text: { en: "Never laugh at live dragons, Bilbo you fool!", nl: "Lach nooit om levende draken, Bilbo, dwaas!", fr: "Ne riez jamais des dragons vivants, Bilbo esp\xE8ce d'idiot !" } },
    { id: 122, author: "J.R.R. Tolkien", source: "The Return of the King", text: { en: "It is not our part to master all the tides of the world, but to do what is in us for the succour of those years wherein we are set, uprooting the evil in the fields that we know, so that those who live after may have clean earth to till.", nl: "Het is niet onze taak om alle getijden van de wereld te beheersen, maar om te doen wat in onze macht ligt voor de redding van de jaren waarin wij geplaatst zijn, door het kwaad uit te roeien in de velden die wij kennen, zodat zij die na ons leven schone aarde hebben om te bewerken.", fr: "Il ne nous appartient pas de ma\xEEtriser toutes les mar\xE9es du monde, mais de faire ce qui est en nous pour secourir les ann\xE9es dans lesquelles nous sommes plac\xE9s, en d\xE9racinant le mal dans les champs que nous connaissons, afin que ceux qui vivront apr\xE8s nous aient une terre propre \xE0 cultiver." } },
    { id: 123, author: "George R.R. Martin", source: "A Storm of Swords", text: { en: "There is only one god, and His name is Death. And there is only one thing we say to Death: 'Not today'.", nl: "Er is maar \xE9\xE9n god, en zijn naam is de Dood. En er is maar \xE9\xE9n ding dat we tegen de Dood zeggen: 'Niet vandaag'.", fr: "Il n'y a qu'un seul dieu, et son nom est la Mort. Et il n'y a qu'une seule chose que nous disons \xE0 la Mort : 'Pas aujourd'hui'." } },
    { id: 124, author: "George R.R. Martin", source: "A Dance with Dragons", text: { en: "A mind needs books as a sword needs a whetstone, if it is to keep its edge.", nl: "Een geest heeft boeken nodig zoals een zwaard een wetsteen nodig heeft, als het scherp wil blijven.", fr: "L'esprit a besoin de livres comme l'\xE9p\xE9e a besoin d'une pierre \xE0 aiguiser, pour conserver son tranchant." } },
    { id: 125, author: "Ursula K. Le Guin", source: "The Dispossessed", text: { en: "It is good to have an end to journey toward; but it is the journey that matters, in the end.", nl: "Het is goed om een einde te hebben om naartoe te reizen; maar het is de reis die ertoe doet, uiteindelijk.", fr: "Il est bon d'avoir une fin vers laquelle voyager ; mais c'est le voyage qui compte, au bout du compte." } },
    { id: 126, author: "Isaac Asimov", source: "I, Robot", text: { en: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.", nl: "Het droevigste aspect van het leven op dit moment is dat de wetenschap sneller kennis vergaart dan de samenleving wijsheid vergaart.", fr: "L'aspect le plus triste de la vie en ce moment est que la science accumule les connaissances plus vite que la soci\xE9t\xE9 n'accumule la sagesse." } },
    { id: 127, author: "Arthur C. Clarke", source: "2001: A Space Odyssey", text: { en: "Behind every man now alive stand thirty ghosts, for that is the ratio by which the dead outnumber the living.", nl: "Achter elke man die nu leeft staan dertig geesten, want dat is de verhouding waarmee de doden in de meerderheid zijn over de levenden.", fr: "Derri\xE8re chaque homme actuellement en vie se tiennent trente fant\xF4mes, car c'est le rapport par lequel les morts sont plus nombreux que les vivants." } },
    { id: 128, author: "Philip K. Dick", source: "Do Androids Dream of Electric Sheep?", text: { en: "You will be required to do wrong no matter where you go. It is the basic condition of life, to be required to violate your own identity.", nl: "Je zult gedwongen worden om fouten te maken, waar je ook gaat. Het is de basisvoorwaarde van het leven, gedwongen te worden je eigen identiteit te schenden.", fr: "On exigera de vous que vous fassiez le mal, peu importe o\xF9 vous irez. C'est la condition fondamentale de la vie, d'\xEAtre contraint de violer sa propre identit\xE9." } },
    { id: 129, author: "William Gibson", source: "Neuromancer", text: { en: "The future is there... looking back at us. Trying to make sense of the fiction we will have become.", nl: "De toekomst is daar... en kijkt naar ons terug. Ze probeert de fictie te begrijpen die we zullen zijn geworden.", fr: "L'avenir est l\xE0... qui nous regarde en arri\xE8re. Essayant de donner un sens \xE0 la fiction que nous serons devenus." } },
    { id: 130, author: "Ray Bradbury", source: "The Martian Chronicles", text: { en: "We earth men have a talent for ruining big, beautiful things.", nl: "Wij aardbewoners hebben een talent voor het ru\xEFneren van grote, mooie dingen.", fr: "Nous, les Terriens, avons le talent de g\xE2cher les grandes et belles choses." } },
    { id: 131, author: "Kurt Vonnegut", source: "Cat's Cradle", text: { en: "Science has now known sin.", nl: "De wetenschap heeft nu de zonde leren kennen.", fr: "La science a maintenant connu le p\xE9ch\xE9." } },
    { id: 132, author: "Robert A. Heinlein", source: "Stranger in a Strange Land", text: { en: "A generation which ignores history has no past\u2014and no future.", nl: "Een generatie die de geschiedenis negeert, heeft geen verleden \u2014 en geen toekomst.", fr: "Une g\xE9n\xE9ration qui ignore l'histoire n'a pas de pass\xE9 \u2014 et pas d'avenir." } },
    { id: 133, author: "Orson Scott Card", source: "Ender's Game", text: { en: "In the moment when I truly understand my enemy, understand him well enough to defeat him, then in that very moment I also love him.", nl: "Op het moment dat ik mijn vijand echt begrijp, hem goed genoeg begrijp om hem te verslaan, dan heb ik hem op datzelfde moment ook lief.", fr: "Au moment o\xF9 je comprends vraiment mon ennemi, o\xF9 je le comprends assez bien pour le vaincre, \xE0 cet instant pr\xE9cis, je l'aime aussi." } },
    { id: 134, author: "Neal Stephenson", source: "Snow Crash", text: { en: "To condense fact from the vapor of nuance.", nl: "Feiten condenseren uit de damp van nuance.", fr: "Condenser les faits \xE0 partir de la vapeur de la nuance." } },
    { id: 135, author: "Margaret Atwood", source: "Oryx and Crake", text: { en: "When any civilization is dust and ashes, art is all that's left over. Images, words, music. Imaginative structures.", nl: "Wanneer een beschaving tot stof en as is vergaan, is kunst het enige dat overblijft. Beelden, woorden, muziek. Verbeeldingsrijke structuren.", fr: "Lorsqu'une civilisation n'est plus que poussi\xE8re et cendres, l'art est tout ce qui reste. Images, mots, musique. Des structures imaginatives." } },
    { id: 136, author: "Socrates", source: "Apology", text: { en: "I cannot teach anybody anything. I can only make them think.", nl: "Ik kan niemand iets leren. Ik kan ze alleen maar laten nadenken.", fr: "Je ne peux rien enseigner \xE0 personne. Je ne peux que les faire r\xE9fl\xE9chir." } },
    { id: 137, author: "Plato", source: "The Republic", text: { en: "Wise men speak because they have something to say; Fools because they have to say something.", nl: "Wijze mannen spreken omdat ze iets te zeggen hebben; dwazen omdat ze iets moeten zeggen.", fr: "Les sages parlent parce qu'ils ont quelque chose \xE0 dire ; les imb\xE9ciles parce qu'ils doivent dire quelque chose." } },
    { id: 138, author: "Aristotle", source: "Metaphysics", text: { en: "Knowing yourself is the beginning of all wisdom.", nl: "Jezelf kennen is het begin van alle wijsheid.", fr: "La connaissance de soi est le commencement de toute sagesse." } },
    { id: 139, author: "Epicurus", source: "Discourses", text: { en: "Wealth consists not in having great possessions, but in having few wants.", nl: "Rijkdom bestaat niet uit het hebben van grote bezittingen, maar uit het hebben van weinig behoeften.", fr: "La richesse ne consiste pas \xE0 avoir de grandes possessions, mais \xE0 avoir peu de d\xE9sirs." } },
    { id: 140, author: "Diogenes", source: "Fragments", text: { en: "We have two ears and one tongue so that we would listen more and talk less.", nl: "We hebben twee oren en \xE9\xE9n tong zodat we meer zouden luisteren en minder praten.", fr: "Nous avons deux oreilles et une langue pour \xE9couter plus et parler moins." } },
    { id: 141, author: "Immanuel Kant", source: "Critique of Pure Reason", text: { en: "Rules for happiness: something to do, someone to love, something to hope for.", nl: "Regels voor geluk: iets om te doen, iemand om lief te hebben, iets om op te hopen.", fr: "R\xE8gles pour le bonheur : quelque chose \xE0 faire, quelqu'un \xE0 aimer, quelque chose \xE0 esp\xE9rer." } },
    { id: 142, author: "Rene Descartes", source: "Critique", text: { en: "I think; therefore I am.", nl: "Ik denk, dus ik ben.", fr: "Je pense, donc je suis." } },
    { id: 143, author: "John Locke", source: "An Essay Concerning Human Understanding", text: { en: "Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.", nl: "Lezen voorziet de geest alleen van materiaal voor kennis; het is het denken dat maakt wat we lezen van ons.", fr: "La lecture ne fournit \xE0 l'esprit que des mat\xE9riaux de connaissance ; c'est la r\xE9flexion qui fait n\xF4tre ce que nous lisons." } },
    { id: 144, author: "Thomas Hobbes", source: "Second Treatise", text: { en: "Hell is truth seen too late.", nl: "De hel is de waarheid die te laat wordt ingezien.", fr: "L'enfer est la v\xE9rit\xE9 vue trop tard." } },
    { id: 145, author: "Baruch Spinoza", source: "Ethics", text: { en: "Peace is not an absence of war, it is a virtue, a state of mind, a disposition for benevolence, confidence, justice.", nl: "Vrede is geen afwezigheid van oorlog, het is een deugd, een gemoedstoestand, een aanleg voor welwillendheid, vertrouwen, rechtvaardigheid.", fr: "La paix n'est pas l'absence de guerre, c'est une vertu, un \xE9tat d'esprit, une disposition \xE0 la bienveillance, \xE0 la confiance, \xE0 la justice." } },
    { id: 146, author: "David Hume", source: "Leviathan", text: { en: "A wise man proportions his belief to the evidence.", nl: "Een wijs man stemt zijn overtuiging af op het bewijs.", fr: "Un homme sage proportionne sa croyance aux preuves." } },
    { id: 147, author: "Voltaire", source: "Candide", text: { en: "Let us read, and let us dance; these two amusements will never do any harm to the world.", nl: "Laten we lezen, en laten we dansen; deze twee pleziertjes zullen de wereld nooit kwaad doen.", fr: "Lisons et dansons ; ces deux amusements ne feront jamais de mal au monde." } },
    { id: 148, author: "Jean-Jacques Rousseau", source: "The Social Contract", text: { en: "Man is born free, and everywhere he is in chains.", nl: "De mens wordt vrij geboren, en overal ligt hij in ketenen.", fr: "L'homme est n\xE9 libre, et partout il est dans les fers." } },
    { id: 149, author: "Marie Curie", source: "Attributed", text: { en: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", nl: "Niets in het leven is om gevreesd te worden, het is alleen om begrepen te worden. Nu is het tijd om meer te begrijpen, zodat we minder hoeven te vrezen.", fr: "Rien dans la vie ne doit \xEAtre craint, tout doit \xEAtre compris. C'est le moment de comprendre davantage, afin de craindre moins." } },
    { id: 150, author: "Charles Darwin", source: "On the Origin of Species", text: { en: "It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.", nl: "Het is niet de sterkste van de soort die overleeft, noch de meest intelligente. Het is degene die zich het beste kan aanpassen aan verandering.", fr: "Ce n'est pas la plus forte des esp\xE8ces qui survit, ni la plus intelligente. C'est celle qui est la plus adaptable au changement." } }
  ];
  const u = new URL(context.request.url), s = u.searchParams.get("seen");
  const v = s ? s.split(",").map(Number) : [];
  let a = quotes.filter((q) => !v.includes(q.id));
  a = a.length ? a : quotes;
  return new Response(JSON.stringify(a[Math.floor(Math.random() * a.length)]), { headers: { "content-type": "application/json", "Cache-Control": "no-store, max-age=0, must-revalidate", "Access-Control-Allow-Origin": "*" } });
}
__name(onRequest2, "onRequest2");
__name2(onRequest2, "onRequest");
async function onRequest3({ request }) {
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get("url");
  const token = url.searchParams.get("token");
  const st = url.searchParams.get("st");
  if (!targetUrl || !token || !st) {
    return new Response("Missing parameters", { status: 400 });
  }
  const fetchDest = request.headers.get("Sec-Fetch-Dest");
  if (fetchDest && fetchDest !== "empty") {
    return new Response("Forbidden context", { status: 403 });
  }
  try {
    const decodedSt = atob(st);
    const [timestampStr, ip, secret] = decodedSt.split("|");
    const timestamp = parseInt(timestampStr, 10);
    if (secret !== "MONDAY_GIRL_SECURE") {
      return new Response("Invalid token signature", { status: 403 });
    }
    const now = Date.now();
    if (now - timestamp > 15e3) {
      return new Response("Token expired. Too slow!", { status: 403 });
    }
  } catch (e) {
    return new Response("Invalid token format", { status: 403 });
  }
  const mediaRes = await fetch(`${targetUrl}?token=${token}`, {
    headers: {
      "User-Agent": request.headers.get("User-Agent") || "MediaProxy/1.0"
    }
  });
  return new Response(mediaRes.body, {
    status: mediaRes.status,
    headers: {
      "Content-Type": mediaRes.headers.get("Content-Type") || "video/mp4",
      "Cache-Control": "no-store",
      // Ensure cross-origin isolation if needed
      "Cross-Origin-Resource-Policy": "same-site"
    }
  });
}
__name(onRequest3, "onRequest3");
__name2(onRequest3, "onRequest");
async function onRequest4({ request: r }) {
  const u = new URL(r.url), c = r.cf || {}, i = r.headers.get("cf-connecting-ip") || "unknown";
  const a = (r.headers.get("Cookie") || "").includes(atob("dGh5X2FkbWluX3Nlc3Npb249VkFMSURBVEVEX1NFQ1VSRV9BQ0NFU1NfOTk0"));
  const t = btoa(i + (a ? atob("QURNSU5fQllQQVNTXzIwMjY=") : atob("Q1VOT19ET0VTTlRfQ0FSRV8yMDI2")));
  let b = false;
  if (a) {
    const o = (c.asOrganization || "").toUpperCase(), n = c.country;
    const x = ["PROTON", "MULLVAD", "NORD", "EXPRESS", "SURFSHARK", "CYBERGHOST", "IVPN", "VPN", "PROXY", "TOR", "ANONYMOUS", "HOSTING", "DATACENTRE", "DATACENTER", "CLOUD", "VPS", "TRANSIT", "BACKBONE", "IXP", "AMAZON", "AWS", "GOOGLE", "MICROSOFT", "AZURE", "DIGITALOCEAN", "HETZNER", "OVH", "LINODE", "M247", "CHOOPA", "LEASEWEB", "DATAPACKET", "COGENT", "LUMEN", "GTT", "ARELION", "NFORCE", "I3D", "WORLDSTREAM", "CLOUVIDER", "PACKETHUB", "XTOM", "SPEEDYNET"].some((k) => o.includes(k));
    const v = ["PROXIMUS", "BELGACOM", "TELENET", "VOO", "ORANGE", "SCARLET", "KPN", "ZIGGO", "LIBERTY GLOBAL", "VODAFONE", "T-MOBILE", "TELE2", "DELTA", "CAIW", "DEUTSCHE TELEKOM", "TELEFONICA", "1&1", "O2", "FREE", "SFR", "BOUYGUES", "NUMERICABLE", "TIM", "TELECOM ITALIA", "WINDTRE", "FASTWEB", "ILIAD", "MOVISTAR", "MASMOVIL", "JAZZTEL", "TELIA", "TELENOR", "TRE", "ELISA", "DNA", "ALTIBOX", "BAHNHOF", "EIR", "VIRGIN", "SKY", "A1", "MAGENTA", "DREI", "PLAY", "PLUS"].some((k) => o.includes(k));
    const e = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"];
    const s = ["ID", "SG", "MY", "TH", "VN", "PH", "BN", "KH", "LA", "MM", "TL"];
    const p = (u.searchParams.get("track") || "spirit") === "mondai" ? [...e, "JP", "BR", ...s] : e;
    if (!p.includes(n) || c.isTor || x || !v) b = true;
  }
  const st = btoa(Date.now() + "|" + i + "|MONDAY_GIRL_SECURE");
  return new Response(JSON.stringify({ token: t, st, isBypassed: b }), { headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
}
__name(onRequest4, "onRequest4");
__name2(onRequest4, "onRequest");
async function onRequest5({ env }) {
  try {
    const d = atob("aHR0cHM6Ly9tZWRpYS50aGlhZ28ucXp6Lmlv");
    const f = (await env.MEDIA_BUCKET.list()).objects.filter((o) => /\.mp4$|\.webm$/.test(o.key)).map((o) => `${d}/media/${encodeURIComponent(o.key)}`);
    return new Response(JSON.stringify(f), { headers: { "content-type": "application/json", "Cache-Control": "public, max-age=60" } });
  } catch (_) {
    return new Response("[]", { status: 500 });
  }
}
__name(onRequest5, "onRequest5");
__name2(onRequest5, "onRequest");
async function onRequest6(context) {
  const { request, env, params } = context;
  const pathArray = params.path || [];
  const bucketKey = pathArray.map(decodeURIComponent).join("/");
  const url = new URL(request.url);
  const isSubtitle = bucketKey.endsWith(".vtt");
  if (isSubtitle) {
    const cf = request.cf || {};
    const country = cf.country;
    const userIp = request.headers.get("cf-connecting-ip") || "unknown";
    const token = url.searchParams.get("token");
    const fetchDest = request.headers.get("sec-fetch-dest");
    if (fetchDest !== "track") return new Response("403 Forbidden", { status: 403 });
    const expectedUserToken = btoa(userIp + "CUNO_DOESNT_CARE_2026");
    const expectedAdminToken = btoa(userIp + "ADMIN_BYPASS_2026");
    if (!token || token !== expectedUserToken && token !== expectedAdminToken) {
      return new Response("403 Forbidden", { status: 403, headers: { "Cache-Control": "no-store" } });
    }
    const isAdmin = token === expectedAdminToken;
    const asnOrg = (cf.asOrganization || "").toUpperCase();
    const blockList = ["PROTON", "MULLVAD", "NORD", "EXPRESS", "SURFSHARK", "CYBERGHOST", "IVPN", "VPN", "PROXY", "TOR", "ANONYMOUS", "HOSTING", "DATACENTRE", "DATACENTER", "CLOUD", "VPS", "TRANSIT", "AMAZON", "AWS", "GOOGLE", "MICROSOFT", "AZURE"];
    const isBlocked = blockList.some((keyword) => asnOrg.includes(keyword));
    const euCountries = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"];
    const seaCountries = ["ID", "SG", "MY", "TH", "VN", "PH", "BN", "KH", "LA", "MM", "TL"];
    const allowedCountries = [...euCountries, "JP", "BR", ...seaCountries];
    if (!allowedCountries.includes(country) || cf.isTor || isBlocked) {
      if (!isAdmin) return new Response("403 Forbidden", { status: 403, headers: { "Cache-Control": "no-store" } });
    }
  }
  if (request.method !== "GET" && request.method !== "HEAD") return new Response("Method Not Allowed", { status: 405 });
  const isHead = request.method === "HEAD";
  const object = isHead ? await env.MEDIA_BUCKET.head(bucketKey) : await env.MEDIA_BUCKET.get(bucketKey);
  if (object === null) return new Response("Not found", { status: 404 });
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("Cache-Control", "private, no-store, no-cache, max-age=0, must-revalidate");
  return new Response(isHead ? null : object.body, { headers });
}
__name(onRequest6, "onRequest6");
__name2(onRequest6, "onRequest");
var ADMIN_PAYLOAD = `<div id="secure-admin-context"><button id="admin-trigger" class="admin-trigger-btn" aria-label="System Override"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 13.5L21 7l-3-3-6.5 6.5M10.5 17.5L3 21l2.5-7.5L10 9l4 4-3.5 4.5z"/><path d="M16 8l-2 2M9 11l-2 2"/></svg></button><div id="admin-dashboard" class="admin-panel"><div class="admin-content"><div class="admin-header"><h3>SYSTEM OVERRIDE</h3><button id="admin-close" class="admin-close-btn">\u2715</button></div><div class="admin-grid"><div class="admin-card"><h4>Media Vault</h4><button class="admin-action">Upload New Video</button><button class="admin-action danger">Purge Bucket Cache</button></div><div class="admin-card"><h4>Geo-Fencing Framework</h4><div class="admin-toggle"><span>EU Universal Block</span><div class="toggle-switch active"></div></div><div class="admin-toggle"><span>VPN/Proxy Interrogator</span><div class="toggle-switch active"></div></div><button class="admin-action" style="margin-top: 1rem;">View Audit Logs</button></div><div class="admin-card"><h4>Quote Engine</h4><button class="admin-action">Edit Active Quote</button><button class="admin-action">Rotate Quote Library</button></div></div></div></div></div><style>.admin-trigger-btn{position:fixed;top:3dvh;left:3vw;z-index:9999;background:none;border:none;padding:8px;cursor:pointer;color:#444;transition:color 0.3s ease,transform 0.2s ease;outline:none}.admin-trigger-btn:hover{color:#fff;transform:scale(1.1) rotate(-5deg)}.admin-trigger-btn svg{width:24px;height:24px}.admin-panel{position:fixed;top:0;left:0;width:100vw;height:100dvh;background:rgba(5,5,5,0.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);z-index:10000;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.3s ease}.admin-panel.active{opacity:1;pointer-events:all}.admin-content{background:#0a0a0a;border:1px solid #222;border-radius:4px;width:90%;max-width:800px;max-height:85dvh;overflow-y:auto;padding:2rem;box-shadow:0 20px 50px rgba(0,0,0,0.5);font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;color:#d9d9d9;text-align:left}.admin-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;border-bottom:1px solid #333;padding-bottom:1rem}.admin-header h3{margin:0;font-size:1.2rem;letter-spacing:3px;font-weight:900;color:#fff}.admin-close-btn{background:none;border:none;color:#888;font-size:1.5rem;cursor:pointer;transition:color 0.2s ease}.admin-close-btn:hover{color:#fff}.admin-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem}.admin-card{background:#111;border:1px solid #222;padding:1.5rem;border-radius:2px}.admin-card h4{margin:0 0 1rem 0;font-size:0.85rem;color:#aaa;text-transform:uppercase;letter-spacing:2px}.admin-action{width:100%;background:#1a1a1a;border:1px solid #333;color:#ddd;padding:0.75rem;margin-bottom:0.5rem;cursor:pointer;font-family:inherit;font-size:0.8rem;text-transform:uppercase;letter-spacing:1px;transition:all 0.2s ease}.admin-action:hover{background:#d9d9d9;color:#000;border-color:#d9d9d9}.admin-action.danger{color:#ff4a4a;border-color:#4a1111;background:#1a0505}.admin-action.danger:hover{background:#ff4a4a;color:#fff}.admin-toggle{display:flex;justify-content:space-between;align-items:center;padding:0.75rem 0;border-top:1px solid #222;font-size:0.85rem}.toggle-switch{width:40px;height:20px;background:#333;border-radius:10px;position:relative;cursor:pointer}.toggle-switch::after{content:'';position:absolute;top:2px;left:2px;width:16px;height:16px;background:#fff;border-radius:50%;transition:transform 0.2s ease}.toggle-switch.active{background:#fff}.toggle-switch.active::after{background:#000;transform:translateX(20px)}</style><script>(function(){function initAdminUI(){const trigger=document.getElementById('admin-trigger');const dashboard=document.getElementById('admin-dashboard');const closeBtn=document.getElementById('admin-close');const toggles=document.querySelectorAll('.toggle-switch');if(trigger&&dashboard&&closeBtn){trigger.onclick=()=>dashboard.classList.add('active');closeBtn.onclick=()=>dashboard.classList.remove('active');toggles.forEach(toggle=>{toggle.onclick=()=>toggle.classList.toggle('active')})}}initAdminUI();document.addEventListener('astro:page-load',initAdminUI)})();<\/script>`;
async function onRequest7(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  if (url.searchParams.get("system_override") === "CUNO_DOESNT_CARE_2026") {
    url.searchParams.delete("system_override");
    return new Response("Override Accepted. Rebooting UI...", {
      status: 302,
      headers: {
        "Location": url.pathname || "/",
        "Set-Cookie": "thy_admin_session=VALIDATED_SECURE_ACCESS_994; HttpOnly; Secure; SameSite=Strict; Max-Age=315360000; Path=/"
      }
    });
  }
  const response = await next();
  const cookies = request.headers.get("Cookie") || "";
  const isAuthorizedAdmin = cookies.includes("thy_admin_session=VALIDATED_SECURE_ACCESS_994");
  const contentType = response.headers.get("content-type") || "";
  if (isAuthorizedAdmin && contentType.toLowerCase().includes("text/html")) {
    return new HTMLRewriter().on("body", { element(el) {
      el.append(ADMIN_PAYLOAD, { html: true });
    } }).transform(response);
  }
  return response;
}
__name(onRequest7, "onRequest7");
__name2(onRequest7, "onRequest");
var routes = [
  {
    routePath: "/api/analytics",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest]
  },
  {
    routePath: "/api/quote",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest2]
  },
  {
    routePath: "/api/secure_media",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest3]
  },
  {
    routePath: "/api/token",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest4]
  },
  {
    routePath: "/api/videos",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest5]
  },
  {
    routePath: "/media/:path*",
    mountPath: "/media",
    method: "",
    middlewares: [],
    modules: [onRequest6]
  },
  {
    routePath: "/",
    mountPath: "/",
    method: "",
    middlewares: [onRequest7],
    modules: []
  }
];
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
__name2(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name2(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name2(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name2(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name2(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name2(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
__name2(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
__name2(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name2(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
__name2(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
__name2(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
__name2(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
__name2(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
__name2(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
__name2(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
__name2(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");
__name2(pathToRegexp, "pathToRegexp");
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
__name2(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name2(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name2(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name2((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
var drainBody = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// ../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
__name(isRoutingRuleMatch, "isRoutingRuleMatch");
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}
__name(transformRoutingRuleToRegExp, "transformRoutingRuleToRegExp");

// .wrangler/tmp/pages-zOC7Tk/nb544qpg8mh.js
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/favicon.png"
  ]
};
var routes2 = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes2.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes2.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = middleware_loader_entry_default;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// ../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// ../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-Lt8W2y/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = pages_dev_pipeline_default;

// ../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-Lt8W2y/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
//# sourceMappingURL=nb544qpg8mh.js.map
