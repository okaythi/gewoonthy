export async function onRequest(context) {
  // We will dump the 100+ quotes here in the next step. 
  // Here is the initial seed to test the logic.
  const quotes = [
    { id: 1, text: "The ships hung in the sky in much the same way that bricks don't.", author: "Douglas Adams", source: "The Hitchhiker's Guide to the Galaxy" },
    { id: 2, text: "I wish it need not have happened in my time, said Frodo. So do I, said Gandalf, and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.", author: "J.R.R. Tolkien", source: "The Fellowship of the Ring" },
    { id: 3, text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant", source: "The Story of Philosophy" }
  ];

  const url = new URL(context.request.url);
  const seenParam = url.searchParams.get('seen');
  let seenIds = [];
  
  if (seenParam) {
    seenIds = seenParam.split(',').map(id => parseInt(id, 10));
  }

  // Filter out the quotes the user has already seen
  let availableQuotes = quotes.filter(q => !seenIds.includes(q.id));

  // If they somehow saw everything, reset the pool
  if (availableQuotes.length === 0) {
    availableQuotes = quotes;
  }

  // Pick a random quote from the remaining pool
  const randomIndex = Math.floor(Math.random() * availableQuotes.length);
  const selectedQuote = availableQuotes[randomIndex];

  return new Response(JSON.stringify(selectedQuote), {
    headers: {
      'content-type': 'application/json',
      'Cache-Control': 'no-store' // Never cache this, we want it dynamic
    }
  });
}
