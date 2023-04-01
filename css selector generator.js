function cssSelectorGenerator(target, root) {

    const selectors = [];

    while(target != root) {
        console.log(target.parentNode);
        const nTh = Array.from(target.parentNode.children).findIndex(node=>node===target) + 1;
        const selector = `${target.tagName.toLowerCase()}:nth-child(${nTh})`;
        selectors.unshift(selector);
        target = target.parentNode;
    }

    selectors.unshift(`${target.tagName.toLowerCase()}`)
 
    return selectors.join('>');

}

const target = document.querySelector('.target');
const root = document.querySelector('.root');

console.log(cssSelectorGenerator(target, root));