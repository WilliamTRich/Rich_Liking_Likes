function addLike(element) {
    let parentElement = element.parentElement.querySelector("span");
    let numberValue = parseInt(parentElement.textContent) + 1;
    return parentElement.textContent = numberValue;
}