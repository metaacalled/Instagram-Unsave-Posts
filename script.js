function goNext() {
    document.querySelector('[aria-label="Remove"]').parentElement.click();
    setTimeout(unsave, 1000);
}

function unsave() {
    let removeButton = document.querySelector('[aria-label="Next"]');
    if (removeButton) {
        removeButton.parentElement.click();
        setTimeout(checkDeleteButton, 1000);
    } else {
        console.warn("Remove button not found.");
        setTimeout(goNext, 1000);
    }
}

function checkDeleteButton() {
    let deleteButton = document.querySelector('button._a9--._ap36._a9-_');
    if (deleteButton) {
        deleteButton.click();
        console.log("Delete button clicked.");
    }
    setTimeout(goNext, 1000);
}

setTimeout(unsave, 1000);
