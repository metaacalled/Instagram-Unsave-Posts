function goNext() {
    document.querySelector('[aria-label="Next"]').parentElement.click();
    setTimeout(unsave, 2000);
}
function unsave() {
    document.querySelector('[aria-label="Remove"]').parentElement.click();
    setTimeout(goNext, 2000)
}
setTimeout(unsave, 2000);