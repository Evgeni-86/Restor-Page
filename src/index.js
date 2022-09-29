import {NewElement} from './functions/newelement.js';
import './style.css';
import {header_div} from './modules/page_header.js'
import {menu_section} from './modules/page_menu_section.js'
import {menu_list_section} from './modules/page_menu_list_section.js'
import {BurgersMenuPositions} from './modules/menu_elements_burgers.js';
import {RollsMenuPositions} from './modules/menu_elements_rolls.js';
import {addToCart} from './functions/addtocart.js';

const content_main = {};
content_main.div = document.getElementById('content');
/*******АРГУМЕНТЫ ДЛЯ СОЗДАНИЯ ЭЛЕМЕНТА******************************************/
/******type_elem, id_name, class_type************************/

const header = new NewElement('header', 'header', '');
const main = new NewElement('main', 'main', '');
const footer = new NewElement('footer', 'footer', '');

/********посторение DOM*********************************************/
header.div.appendChild(header_div.div);
main.div.appendChild(menu_section.div);
main.div.appendChild(menu_list_section.div);

content_main.div.appendChild(header.div);
content_main.div.appendChild(main.div);
content_main.div.appendChild(footer.div);

/*******слушаем иконки основного меню*********************************/
const menu_btd = document.querySelectorAll('.type_menu_position');
    menu_btd.forEach(element => {     
        element.onclick = function () {
            if ( element.id == 'БУРГЕРЫ' ) { BurgersMenuPositions(); };
            if ( element.id == 'РОЛЛЫ' ) { RollsMenuPositions(); };
        };
    });
/*********************************************************************/

/******слушаем кнопки позиций***************************************/
const add_btd = document.querySelectorAll('.positions_btd');
    add_btd.forEach(element => {     
        element.onclick = function () {
            let elem = element.parentElement.parentElement.parentElement;
            addToCart(elem);
        };
    });
/*********************************************************************/
