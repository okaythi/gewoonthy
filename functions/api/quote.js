export async function onRequest(context) {
  const quotes = [
    // Douglas Adams (The "Trilogy of 5" & beyond)
    { id: 1, text: "The ships hung in the sky in much the same way that bricks don't.", author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy" },
    { id: 2, text: "Time is an illusion. Lunchtime doubly so.", author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy" },
    { id: 3, text: "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.", author: "Douglas Adams", source: "The Restaurant at the End of the Universe" },
    { id: 4, text: "I love deadlines. I love the whooshing noise they make as they go by.", author: "Douglas Adams", source: "The Salmon of Doubt" },
    { id: 5, text: "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.", author: "Douglas Adams", source: "Mostly Harmless" },
    { id: 6, text: "Anyone who is capable of getting themselves made President should on no account be allowed to do the job.", author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy" },
    { id: 7, text: "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.", author: "Douglas Adams", source: "The Restaurant at the End of the Universe" },
    { id: 8, text: "He felt that his whole life was some kind of dream and he sometimes wondered whose it was and whether they were enjoying it.", author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy" },
    { id: 9, text: "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.", author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy" },
    { id: 10, text: "For a moment, nothing happened. Then, after a second or so, nothing continued to happen.", author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy" },
    { id: 11, text: "I refuse to answer that question on the grounds that I don't know the answer.", author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy" },
    { id: 12, text: "We demand rigidly defined areas of doubt and uncertainty!", author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy" },
    
    // Philosophy: Stoicism, Existentialism, and the Absurd
    { id: 13, text: "The literal meaning of life is whatever you're doing that prevents you from killing yourself.", author: "Albert Camus", source: "The Myth of Sisyphus" },
    { id: 14, text: "In the midst of winter, I found there was, within me, an invincible summer.", author: "Albert Camus", source: "Return to Tipasa" },
    { id: 15, text: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.", author: "Jean-Paul Sartre", source: "Existentialism is a Humanism" },
    { id: 16, text: "He who has a why to live for can bear almost any how.", author: "Friedrich Nietzsche", source: "Twilight of the Idols" },
    { id: 17, text: "And if you gaze long enough into an abyss, the abyss will gaze back into you.", author: "Friedrich Nietzsche", source: "Beyond Good and Evil" },
    { id: 18, text: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius", source: "Meditations" },
    { id: 19, text: "We suffer more often in imagination than in reality.", author: "Seneca", source: "Letters from a Stoic" },
    { id: 20, text: "Life can only be understood backwards; but it must be lived forwards.", author: "Søren Kierkegaard", source: "Journals" },
    { id: 21, text: "Trying to define yourself is like trying to bite your own teeth.", author: "Alan Watts", source: "The Book on the Taboo Against Knowing Who You Are" },
    { id: 22, text: "The mystery of human existence lies not in just staying alive, but in finding something to live for.", author: "Fyodor Dostoevsky", source: "The Brothers Karamazov" },
    { id: 23, text: "I am a cage, in search of a bird.", author: "Franz Kafka", source: "The Zürau Aphorisms" },
    { id: 24, text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant", source: "The Story of Philosophy" },
    { id: 25, text: "Sometimes people don't want to hear the truth because they don't want their illusions destroyed.", author: "Friedrich Nietzsche", source: "Beyond Good and Evil" },
    { id: 26, text: "Anxiety is the dizziness of freedom.", author: "Søren Kierkegaard", source: "The Concept of Anxiety" },
    { id: 27, text: "No man ever steps in the same river twice, for it's not the same river and he's not the same man.", author: "Heraclitus", source: "Fragments" },
    { id: 28, text: "To be is to do.", author: "Socrates", source: "Traditional Attribution" },
    { id: 29, text: "To do is to be.", author: "Jean-Paul Sartre", source: "Traditional Attribution" },
    { id: 30, text: "Do be do be do.", author: "Frank Sinatra", source: "Strangers in the Night" },
    
    // Classic Sci-Fi & High Fantasy
    { id: 31, text: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration.", author: "Frank Herbert", source: "Dune" },
    { id: 32, text: "The mystery of life isn't a problem to solve, but a reality to experience.", author: "Frank Herbert", source: "Dune" },
    { id: 33, text: "All that is gold does not glitter, Not all those who wander are lost.", author: "J.R.R. Tolkien", source: "The Fellowship of the Ring" },
    { id: 34, text: "I wish it need not have happened in my time, said Frodo. So do I, said Gandalf, and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.", author: "J.R.R. Tolkien", source: "The Fellowship of the Ring" },
    { id: 35, text: "To light a candle is to cast a shadow.", author: "Ursula K. Le Guin", source: "A Wizard of Earthsea" },
    { id: 36, text: "Love doesn't just sit there, like a stone, it has to be made, like bread; remade all the time, made new.", author: "Ursula K. Le Guin", source: "The Lathe of Heaven" },
    { id: 37, text: "So it goes.", author: "Kurt Vonnegut", source: "Slaughterhouse-Five" },
    { id: 38, text: "We are what we pretend to be, so we must be careful about what we pretend to be.", author: "Kurt Vonnegut", source: "Mother Night" },
    { id: 39, text: "You don't have to burn books to destroy a culture. Just get people to stop reading them.", author: "Ray Bradbury", source: "Fahrenheit 451" },
    { id: 40, text: "The sky above the port was the color of television, tuned to a dead channel.", author: "William Gibson", source: "Neuromancer" },
    { id: 41, text: "Never let your sense of morals prevent you from doing what is right.", author: "Isaac Asimov", source: "Foundation" },
    { id: 42, text: "Violence is the last refuge of the incompetent.", author: "Isaac Asimov", source: "Foundation" },
    { id: 43, text: "Reality is that which, when you stop believing in it, doesn't go away.", author: "Philip K. Dick", source: "I Hope I Shall Arrive Soon" },
    
    // Terry Pratchett (Because if we have Douglas Adams, we need Pratchett)
    { id: 44, text: "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.", author: "Terry Pratchett", source: "Diggers" },
    { id: 45, text: "Light thinks it travels faster than anything but it is wrong. No matter how fast light travels, it finds the darkness has always got there first, and is waiting for it.", author: "Terry Pratchett", source: "Reaper Man" },
    { id: 46, text: "Give a man a fire and he's warm for a day, but set fire to him and he's warm for the rest of his life.", author: "Terry Pratchett", source: "Jingo" },
    { id: 47, text: "Sometimes glass glitters more than diamonds because it has more to prove.", author: "Terry Pratchett", source: "The Truth" },
    { id: 48, text: "It is said that your life flashes before your eyes just before you die. That is true, it's called Life.", author: "Terry Pratchett", source: "The Last Continent" },
    { id: 49, text: "Inside every sane person there's a madman struggling to get out.", author: "Terry Pratchett", source: "The Light Fantastic" },

    // Literature & Poetry
    { id: 50, text: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde", source: "Lady Windermere's Fan" },
    { id: 51, text: "The only way to get rid of a temptation is to yield to it.", author: "Oscar Wilde", source: "The Picture of Dorian Gray" },
    { id: 52, text: "It was a bright cold day in April, and the clocks were striking thirteen.", author: "George Orwell", source: "1984" },
    { id: 53, text: "Perhaps one did not want to be loved so much as to be understood.", author: "George Orwell", source: "1984" },
    { id: 54, text: "Words can be like X-rays if you use them properly -- they'll go through anything. You read and you're pierced.", author: "Aldous Huxley", source: "Brave New World" },
    { id: 55, text: "There is no friend as loyal as a book.", author: "Ernest Hemingway", source: "The Old Man and the Sea" },
    { id: 56, text: "I took a deep breath and listened to the old brag of my heart. I am, I am, I am.", author: "Sylvia Plath", source: "The Bell Jar" },
    { id: 57, text: "Not all those who wander are lost.", author: "J.R.R. Tolkien", source: "The Lord of the Rings" },
    { id: 58, text: "Hell is empty and all the devils are here.", author: "William Shakespeare", source: "The Tempest" },
    { id: 59, text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "J.K. Rowling", source: "Harry Potter and the Goblet of Fire" },
    
    // Cosmology & Science 
    { id: 60, text: "We are a way for the cosmos to know itself.", author: "Carl Sagan", source: "Cosmos" },
    { id: 61, text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan", source: "Cosmos" },
    { id: 62, text: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson", source: "Real Time with Bill Maher" },
    { id: 63, text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein", source: "Attributed" },
    { id: 64, text: "If you wish to make an apple pie from scratch, you must first invent the universe.", author: "Carl Sagan", source: "Cosmos" },

    // Deep Cuts & Thought Provoking
    { id: 65, text: "Every man has two lives, and the second starts when he realizes he has just one.", author: "Confucius", source: "Analects" },
    { id: 66, text: "And those who were seen dancing were thought to be insane by those who could not hear the music.", author: "Friedrich Nietzsche", source: "Attributed" },
    { id: 67, text: "I have always imagined that Paradise will be a kind of library.", author: "Jorge Luis Borges", source: "Poem of the Gifts" },
    { id: 68, text: "Memories warm you up from the inside. But they also tear you apart.", author: "Haruki Murakami", source: "Kafka on the Shore" },
    { id: 69, text: "What you seek is seeking you.", author: "Rumi", source: "Masnavi" },
    { id: 70, text: "The wound is the place where the Light enters you.", author: "Rumi", source: "Masnavi" },
    { id: 71, text: "It is no measure of health to be well adjusted to a profoundly sick society.", author: "Jiddu Krishnamurti", source: "Attributed" },
    { id: 72, text: "We do not see things as they are, we see them as we are.", author: "Anaïs Nin", source: "Seduction of the Minotaur" },
    { id: 73, text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde", source: "The Soul of Man under Socialism" },
    { id: 74, text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou", source: "I Know Why the Caged Bird Sings" },

    // Additions for variety and humor
    { id: 75, text: "I am free of all prejudice. I hate everyone equally.", author: "W.C. Fields", source: "Attributed" },
    { id: 76, text: "I drink to make other people more interesting.", author: "Ernest Hemingway", source: "Attributed" },
    { id: 77, text: "Before you diagnose yourself with depression or low self-esteem, first make sure that you are not, in fact, just surrounded by assholes.", author: "William Gibson", source: "Attributed" },
    { id: 78, text: "A day without sunshine is like, you know, night.", author: "Steve Martin", source: "Attributed" },
    { id: 79, text: "The planet is fine. The people are fucked.", author: "George Carlin", source: "Jammin' in New York" },
    { id: 80, text: "I have noticed even people who claim everything is predestined, and that we can do nothing to change it, look before they cross the road.", author: "Stephen Hawking", source: "Black Holes and Baby Universes" },
    { id: 81, text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard", source: "The Philistine" },
    { id: 82, text: "I always arrive late at the office, but I make up for it by leaving early.", author: "Charles Lamb", source: "Attributed" },
    { id: 83, text: "Everything is funny, as long as it's happening to somebody else.", author: "Will Rogers", source: "Illiterate Digest" },
    
    // More deep reflections
    { id: 84, text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr.", source: "The Trumpet of Conscience" },
    { id: 85, text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", source: "Apology" },
    { id: 86, text: "The unexamined life is not worth living.", author: "Socrates", source: "Apology" },
    { id: 87, text: "Turn your wounds into wisdom.", author: "Oprah Winfrey", source: "Attributed" },
    { id: 88, text: "Wherever you go, there you are.", author: "Jon Kabat-Zinn", source: "Wherever You Go, There You Are" },
    { id: 89, text: "Nothing is original. Steal from anywhere that resonates with inspiration or fuels your imagination.", author: "Jim Jarmusch", source: "The Golden Rules of Filmmaking" },
    { id: 90, text: "You can't depend on your eyes when your imagination is out of focus.", author: "Mark Twain", source: "A Connecticut Yankee in King Arthur's Court" },
    
    // Last batch of Sci-Fi and Fantasy
    { id: 91, text: "Don't Panic.", author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy" },
    { id: 92, text: "A towel is about the most massively useful thing an interstellar hitchhiker can have.", author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy" },
    { id: 93, text: "There is an art, it says, or rather, a knack to flying. The knack lies in learning how to throw yourself at the ground and miss.", author: "Douglas Adams", source: "Life, the Universe and Everything" },
    { id: 94, text: "Winter is coming.", author: "George R.R. Martin", source: "A Game of Thrones" },
    { id: 95, text: "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness.", author: "George R.R. Martin", source: "A Game of Thrones" },
    { id: 96, text: "Fear cuts deeper than swords.", author: "George R.R. Martin", source: "A Game of Thrones" },
    { id: 97, text: "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.", author: "J.R.R. Tolkien", source: "The Hobbit" },
    { id: 98, text: "It does not do to dwell on dreams and forget to live.", author: "J.K. Rowling", source: "Harry Potter and the Sorcerer's Stone" },
    { id: 99, text: "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?", author: "J.K. Rowling", source: "Harry Potter and the Deathly Hallows" },
    { id: 100, text: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.", author: "J.K. Rowling", source: "Harry Potter and the Sorcerer's Stone" },
    { id: 101, text: "All we have to decide is what to do with the time that is given to us.", author: "J.R.R. Tolkien", source: "The Fellowship of the Ring" },
    { id: 102, text: "There is always some madness in love. But there is also always some reason in madness.", author: "Friedrich Nietzsche", source: "Thus Spoke Zarathustra" },
    { id: 103, text: "If you want to keep a secret, you must also hide it from yourself.", author: "George Orwell", source: "1984" },
    { id: 104, text: "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.", author: "George Orwell", source: "Animal Farm" },
    { id: 105, text: "Beware that, when fighting monsters, you yourself do not become a monster... for when you gaze long into the abyss. The abyss gazes also into you.", author: "Friedrich Nietzsche", source: "Beyond Good and Evil" }
  ];

  const url = new URL(context.request.url);
  const seenParam = url.searchParams.get('seen');
  let seenIds = [];
  
  if (seenParam) {
    seenIds = seenParam.split(',').map(id => parseInt(id, 10)).filter(id => !isNaN(id));
  }

  // Filter out the quotes the user has already seen
  let availableQuotes = quotes.filter(q => !seenIds.includes(q.id));

  // If they somehow saw everything (all 105), reset the pool seamlessly
  if (availableQuotes.length === 0) {
    availableQuotes = quotes;
  }

  // Pick a random quote from the remaining pool
  const randomIndex = Math.floor(Math.random() * availableQuotes.length);
  const selectedQuote = availableQuotes[randomIndex];

  return new Response(JSON.stringify(selectedQuote), {
    headers: {
      'content-type': 'application/json',
      'Cache-Control': 'no-store, max-age=0, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
