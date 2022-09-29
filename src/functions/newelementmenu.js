import {NewElement} from '../functions/newelement.js';
import {NewButton} from '../functions/newbutton.js';
/******КОНСТРУКТОР ЭЛЕМЕНТОВ ПОЗИЦИЙ МЕНЮ******************************/
/*аргументы (входящий массив, подпись, класс для нового элемента, родительский элемент)*/
function ElementsMenu (inputArr, new_class_name, input_element) {

    inputArr.forEach(element => {
        /*******АРГУМЕНТЫ ДЛЯ СОЗДАНИЯ ЭЛЕМЕНТА (NewElement)*********/
        /******type_elem, id_name, class_name************************/
        let elem = new NewElement('figure', '', new_class_name);
        let figcaption = new NewElement('figcaption', '', '');
        let figcaptionDiv1 = new NewElement('div', '', 'figcaptionDiv1');
        let figcaptionDiv2 = new NewElement('div', '', 'figcaptionDiv2');

        elem.div.innerHTML = "<img src='"+element.image+"'>";
            if (new_class_name == 'type_menu_position') {
                figcaptionDiv1.div.textContent = element.article;
            }
            else {
                figcaptionDiv1.div.textContent = element.name;
            };
        elem.div.setAttribute('id', element.article);
        /******для какого элемента кнопка***********************************/
        if (NewButton(new_class_name)) {
            figcaptionDiv2.div.appendChild(NewButton(new_class_name).div);
        }
        /*******************************************************************/
        figcaption.div.appendChild(figcaptionDiv1.div);
        figcaption.div.appendChild(figcaptionDiv2.div);

        elem.div.appendChild(figcaption.div);
        input_element.div.appendChild(elem.div);
    });        
};
/**********************************************************************/


export {ElementsMenu};