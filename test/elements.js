window.onload = function () {
    main();
};
function main() {
    const app = container([
        createContent('h1', 'heading one'),
        createContent('p', 'Hello world how are are you?'),
        container(
            [
                createContent('h2', 'This is a heading 2'),
                createContent('p', 'Some dummy text for heading 2'),
            ],
            {
                display: 'flex',
                gap: '20px',
                border: '1px solid #444',
            }
        ),
    ]);
    document.getElementById('root').appendChild(app);
}

function container(children, style = {}) {
    const div = document.createElement('div');
    // Object.assign(div.style, style);
    Object.keys(style).forEach((key) => {
        div.style[key] = style[key];
    });
    children.forEach((child) => {
        return div.append(child);
    });
    return div;
}

function createContent(tag, value) {
    const elm = document.createElement(tag);
    elm.innerText = value;
    return elm;
}
