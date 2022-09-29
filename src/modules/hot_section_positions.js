import {NewElement} from '../functions/newelement.js';
import {ElementsMenu} from '../functions/newelementmenu.js';
import {hotPositions} from './database.js';


function HotPositions() {
/*******АРГУМЕНТЫ ДЛЯ СОЗДАНИЯ ЭЛЕМЕНТА******************************************/
/******type_elem, id_name, class_type************************/
let newElem =  new NewElement('div', '', 'section_elements');
/***************************************************************************** */    
    
    /**высчитываем количество нужных строк GRID и строим***/
    let a = Math.ceil( (Number(hotPositions.length) / 3) );
    newElem.div.style.setProperty('--hot-grid-cols', 3);
    newElem.div.style.setProperty('--hot-grid-rows', a);
    /******************************************************/
/*аргументы (входящий массив, класс для нового элемента, родительский элемент)*/
    ElementsMenu(hotPositions, 'positions', newElem);
return newElem;
};


export {HotPositions};