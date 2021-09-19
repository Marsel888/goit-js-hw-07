// 1  задание


const category = document.querySelectorAll(`.item`);

console.log(`В Списке ${category.length} категории` );

// 2 задание

category.forEach(element => console.log(`Категория ${element.firstElementChild.textContent}, Количество элементов ${element.lastElementChild.children.length}` ))




