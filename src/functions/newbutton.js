import {NewElement} from "./newelement.js";
export {NewButton};

function NewButton (class_name) {
    if (class_name == 'positions') {
        let btd = new NewElement('button', '', class_name+'_btd');
        return btd;
    };   
};