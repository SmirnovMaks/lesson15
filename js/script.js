const DomElement = function (height, width, bg, fontSize) {
    this.selector = '';
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createElement = function (item) {
        this.selector = item;
        let elem;
        let text = document.createTextNode('Test');
        if (item.charAt(0) === '.') {
            elem = document.createElement('div');
            elem.className = item;
        } else if (item.charAt(0) === '#') {
            elem = document.createElement('p');
            elem.id = item;
        }
        document.body.appendChild(elem);
        elem.appendChild(text);
        elem.style.cssText = 'height:' + this.height + '; width:' + this.width + '; background-color:' + this.bg + '; font-size:' + this.fontSize;
    };

};

const elem = new DomElement('100px', '200px', 'red', '50px');

elem.createElement('.f');