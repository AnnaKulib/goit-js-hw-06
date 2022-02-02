const cathegoryElements = document.querySelectorAll('.item');

// console.log(cathegoryElements);
console.log(`Number of categories: ${cathegoryElements.length}`);

const cathegoryHeader = document.querySelectorAll('h2');

// console.log(cathegoryHeader);

cathegoryHeader.forEach(element => {
    // console.log(element);
    console.log(`Category: ${element.textContent}`);
    console.log(`Elements: ${element.nextElementSibling.children.length}`);
});