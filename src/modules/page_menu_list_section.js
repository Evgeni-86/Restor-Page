import {NewElement} from '../functions/newelement.js';
import {HotPositions} from './hot_section_positions.js';

const menu_list_section = new NewElement('section', '', 'menu_list_section');

const section_news = new NewElement('article', '', 'section_news');
const section_pos = new NewElement('article', '', 'section_pos');

menu_list_section.div.appendChild(section_news.div);

/**добавляем элементы в секцию предложений**********************/
section_pos.div.appendChild(HotPositions().div);
menu_list_section.div.appendChild(section_pos.div);
/*************************************************************/


export {menu_list_section};
