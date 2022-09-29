import {NewElement} from '../functions/newelement.js';
import {ElementsMenu} from '../functions/newelementmenu.js';
import {menuPositions} from './database.js';

function SectionMenuPositions() {
/*******АРГУМЕНТЫ ДЛЯ СОЗДАНИЯ ЭЛЕМЕНТА******************************************/
/******type_elem, id_name, class_type************************/
let newElem =  new NewElement('div', '', 'menu_section_elements');
/***************************************************************************** */    
   

    /**высчитываем количество нужных строк GRID и строим***/
    let a = Math.ceil( (Number(menuPositions.length) / 6) );
    newElem.div.style.setProperty('--menu-grid-cols', 6);
    newElem.div.style.setProperty('--menu-grid-rows', a);
    /******************************************************/
    /*аргументы (входящий массив, подпись, класс для нового элемента, родительский элемент)*/
    ElementsMenu(menuPositions, 'type_menu_position', newElem);
return newElem;
};


export {SectionMenuPositions};