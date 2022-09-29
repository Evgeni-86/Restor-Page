export {NewElement};

/**************КОНСТРУКТОР ЭЛЕМЕНТОВ БЛОКИ***************************/
/*******АРГУМЕНТЫ ДЛЯ СОЗДАНИЯ ЭЛЕМЕНТА****************************/
/******type_elem, id_name, class_type************************/
class NewElement {
    constructor (type_elem, id_name, class_type) {

        let new_element = document.createElement(type_elem);

        this.div = new_element;
        this.type = type_elem;
        this.id = id_name;
        this.class = class_type;
    
        if (this.id) {new_element.id = id_name};
        if (this.class) {new_element.classList.add(this.class)};


    };
};
/************************************************************/