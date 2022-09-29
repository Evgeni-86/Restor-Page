import {NewElement} from '../functions/newelement.js';
import {SectionMenuPositions} from './page_menu_section_positions.js'

const menu_section = new NewElement('section', '', 'menu_section');

const menu_section_chois = new NewElement('section', '', 'menu_section_chois');
const menu_section_menu = new NewElement('section', '', 'menu_section_menu');

menu_section.div.appendChild(menu_section_chois.div);

menu_section_menu.div.appendChild(SectionMenuPositions().div);
menu_section.div.appendChild(menu_section_menu.div);

export {menu_section};
