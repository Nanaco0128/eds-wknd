export default function decorate(block) {
    const testBlock = document.querySelector(".test-embed");
    const embedText = testBlock.children[0].children[0];
    // console.log(embedText);
    // console.log(typeof embedText);
    // console.log(embedText.textContent);

    const embedHTML = embedText.textContent;
    const div = document.createElement('div');
    testBlock.prepend(div);
    const parentEmbedHTML = testBlock.children[0];
    console.log(parentEmbedHTML);

    parentEmbedHTML.innerHTML = embedHTML;
        // クラス名入れてあげたい
        // 2個目の子要素を消す
    const deprecated = testBlock.children[1];
    console.log(deprecated);
    testBlock.removeChild(deprecated);

    // クラス名入れよ
    // 1個目 HTML, 2個目 CSS, 3個目 JS
    testBlock.children[0].classList.add("embedHTML");
    testBlock.children[1].children[1].classList.add("embedCSS");
    testBlock.children[2].children[1].classList.add("embedJS");

    // scriptタグを作成
    // id=embed
    
    // var iframe = document.createElement('iframe');
    // iframe.setAttribute("style", "display:none");
    
    // document.getElementsByTagName('head')[0].insertAdjacentElement('beforeend', iframe);

    // var doc = iframe.contentWindow.document;
    // doc.open();
    
    // console.log(testBlock.children[2].children[1].textContent);
    // const scriptText = '<div><script type="text/javascript">' + testBlock.children[2].children[1].textContent + '<\/script><\/div>';
    // console.log(scriptText);
    // doc.write(scriptText);
    // doc.close();


    // styleタグを作成
    // id=embed
    const style = document.createElement('style');
    style.innerHTML = testBlock.children[1].children[1].textContent;
    document.getElementsByTagName('head')[0].insertAdjacentElement('beforeend', style);
    
    

}