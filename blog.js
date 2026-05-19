// 1. Core Data Storage (The Two Arrays)
const generalEntries = [];
const poemEntries = [];

// 2. DOM Elements
const journalForm = document.getElementById('journalForm');
const entryType = document.getElementById('entryType');
const entryTitle = document.getElementById('entryTitle');
const entryContent = document.getElementById('entryContent');

const generalContainer = document.getElementById('generalContainer');
const poemContainer = document.getElementById('poemContainer');

// 3. Listen for Submit Button
journalForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Create a structured object for the new post
    const newPost = {
        title: entryTitle.value,
        content: entryContent.value,
        date: new Date().toLocaleDateString()
    };

    // Route the object to the correct array based on dropdown value
    if (entryType.value === 'general') {
        generalEntries.unshift(newPost); // unshift adds to the beginning of array
        renderEntries(generalEntries, generalContainer, 'journal-card');
    } else if (entryType.value === 'poem') {
        poemEntries.unshift(newPost);
        renderEntries(poemEntries, poemContainer, 'poem-card');
    }

    journalForm.reset();
});

// 4. Reuseable Render Function
function renderEntries(arrayData, htmlContainer, cssClass) {
    // Clear old visual items first to prevent duplicates
    htmlContainer.innerHTML = '';

    // Loop through array elements and build HTML
    arrayData.forEach(function(item) {
        const card = document.createElement('div');
        card.classList.add(cssClass);
        
        card.innerHTML = `
            <h3>${item.title}</h3>
            <small>${item.date}</small>
            <p>${item.content}</p>
        `;
        
        htmlContainer.appendChild(card);
    });
}
