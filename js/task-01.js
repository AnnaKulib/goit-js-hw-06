
const cathegoriesItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${cathegoriesItems.length}`);

cathegoriesItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}` );
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
