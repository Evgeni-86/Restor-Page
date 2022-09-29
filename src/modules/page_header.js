import {NewElement} from '../functions/newelement.js';

const header_div = new NewElement('div', '', 'header_div');
const header_div_text = new NewElement('div', '', 'header_div_text');
const header_div_info = new NewElement('div', '', 'header_div_info');

header_div_text.div.textContent = "ВЫГОДНО И ВКУСНО";

header_div.div.appendChild(header_div_text.div);
header_div.div.appendChild(header_div_info.div);



export {header_div};