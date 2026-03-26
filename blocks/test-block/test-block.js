export default function decorate(block) {
    const testBlock = document.querySelector(".test-block");

    const firstChild = testBlock.children[0];
    firstChild.classList.add('flex');

    const [imageElement, rightElement] = firstChild.children;
    imageElement.classList.add('img');
    rightElement.classList.add('right');

    const [titleElement, textElement] = rightElement.children;
    titleElement.classList.add('title');
    textElement.classList.add('text');

    // Separtor
    const separator = document.createElement('div');
    separator.classList.add('separator');
    testBlock.before(separator);

    // // <div class="embed">を見つけて埋め込みにする
    // const embedClass = document.querySelector("")
}