import { NewElement } from "./newelement.js";

function addToCart(elem) {


/*******АРГУМЕНТЫ ДЛЯ СОЗДАНИЯ ЭЛЕМЕНТА****************************/
/******type_elem, id_name, class_type************************/
const newElement = new NewElement('section', '', 'cart_element');

    newElement.div.appendChild(elem);

    console.log(newElement.div);
}




export {addToCart};