const messages = [
    "დარწმუნებული ხარ?",
    "მართლაა??",
    "ეეეე რას აკეთებბ?",
    "ტუნტუუუულლ რას აკეთებბ...",
    "დაფიქრდიი!",
    "თუ კიდევ უარს მეტყვი ძალიან მეწყინება...",
    "გაგიბრაზდებიიიი...",
    "ძალიან ძალიან ძალიან გაგიბრაზდები...",
    "ბაზარი არაა ეგრე ხო...",
    "ვღადააობბბ დროზეე კისს დააჭირე❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.არა-button');
    const yesButton = document.querySelector('.კი-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "კი_page.html";
}