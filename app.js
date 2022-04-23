const accs = document.querySelectorAll(".accordion");
const toggleButton = document.querySelector(".toggleButton");

//listener for each accordion clicked to toggle 'active'
accs.forEach(acc => {
    acc.addEventListener("click", () => {
        acc.classList.toggle("active");
        handleButtonText();
    })
});

//function to change innerhtml of toggle button
const handleButtonText = () => {
    let isActive = Array.from(accs).every(acc => acc.className.includes("active"));
    if (isActive) {
        toggleButton.innerHTML = "Collapse All";
    } else {
        toggleButton.innerHTML = "Expand All";
    }
}

//expand or collapse listener
toggleButton.addEventListener("click", () => {
    let result = Array.from(accs).filter(acc => acc.className.includes("active"));
    if (result.length == 4) { //only executable when all drawers are open
        result.forEach(acc => acc.classList.toggle("active"));
    } else {
        result = Array.from(accs).filter(acc => !acc.className.includes("active"));
        result.forEach(acc => acc.classList.toggle("active"));
    }
    handleButtonText();
});

