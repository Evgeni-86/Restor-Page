import {NewElement} from '../functions/newelement.js';
import {ElementsMenu} from '../functions/newelementmenu.js';
import {burgers} from './database.js';

function BurgersMenuPositions() {

/*******удаляем перед создание нового*******************************/
let del = document.querySelector('.section_elements');
    del.remove();
/******************************************************************/

/*******АРГУМЕНТЫ ДЛЯ СОЗДАНИЯ ЭЛЕМЕНТА******************************************/
/******type_elem, id_name, class_type************************/
let newElem =  new NewElement('div', '', 'section_elements');
/***************************************************************************** */    

    /**высчитываем количество нужных строк GRID и строим***/
    let a = Math.ceil( (Number(burgers.length) / 3) );
    newElem.div.style.setProperty('--hot-grid-cols', 3);
    newElem.div.style.setProperty('--hot-grid-rows', a);
    /******************************************************/
/*аргументы (входящий массив, подпись, класс для нового элемента, родительский элемент)*/
ElementsMenu(burgers, 'positions', newElem);

/*******добавляем вновь созданый элемент****************************/
let parant = document.querySelector('.section_pos');
    parant.appendChild(newElem.div);
/******************************************************************/
};


export {BurgersMenuPositions};