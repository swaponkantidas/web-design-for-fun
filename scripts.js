// Quotes array with quotes and authors
const quotes = [
    { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Not everything that can be counted counts.", author: "Albert Einstein" },
    { text: "In technology, perfection is when there's nothing left to take away.", author: "Antoine de Saint-Exupéry" },
    { text: "Sometimes the greatest wisdom is realizing how little we know.", author: "Socrates" }
];

// Reference to quote display elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

// Function to update the quote box content
function showQuote(index) {
    quoteText.textContent = quotes[index].text;  // Display quote text
    quoteAuthor.textContent = `— ${quotes[index].author}`; // Display author name
}

// Rotate quotes every 30 seconds
let currentIndex = 0;
setInterval(() => {
    showQuote(currentIndex);
    currentIndex = (currentIndex + 1) % quotes.length; // Cycle through quotes
}, 30000);

// Display the first quote immediately
showQuote(currentIndex);
