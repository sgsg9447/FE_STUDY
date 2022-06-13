let apiQuotes = [];
// Show new Quotes
function newQuote() {}

// get Quotes from API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //   catch error here
  }
}

//on Load

getQuotes();
