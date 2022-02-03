// const cathegoriesList = document.querySelector('.categories');
const cathegoriesItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${cathegoriesItems.length}`);

cathegoriesItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}` );
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});



// console.log(cathegoriesList);
// console.log(cathegoriesItems);

// cathegoriesItems.forEach(item => {
    // console.log(item.parentNode);
    // console.log(item.childNodes);
    // console.log(item.children);
    // console.log(item.firstChild);
    // console.log(item.firstElementChild);
    // console.log(item.firstElementChild.textContent);
    // console.log(item.lastChild);
    // console.log(item.lastElementChild);
    // console.log(item.lastElementChild.children);
    // console.log(item.lastElementChild.children.length);
    // console.log(item.previousSibling);
    // console.log(item.previousElementSibling);
    // console.log(item.nextSibling);
    // console.log(item.nextElementSibling);
// })

// elem.parentNode - выберет родителя elem.
// elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
// elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
// elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
// elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
// elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
// elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
// elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
// elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
// elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
// elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа).