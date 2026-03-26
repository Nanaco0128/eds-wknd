export default function decorate(block) {
    const testEmbed2 = document.querySelector(".test-embed2");
    const jsonURL = testEmbed2.querySelector('a[href$=".json"]').textContent;
    
    console.log(jsonURL);

    async function resJson(url) {
        const res = await fetch(url);
        const codes = await res.json();
        console.log(codes);
        console.log(codes.data[0].content);
        
        const html = codes.data[0].content;
        const css = codes.data[1].content;
        const js = codes.data[2].content;
        const embed2 = document.querySelector(".test-embed2");

        // HTML
        // const elm = document.createElement('div');
        // elm.className = "HTMLEmbed2";
        // const embed2HTML = embed2.prepend(elm);
        // console.log(document.querySelector(".HTMLEmbed2"));
        let parser = new DOMParser();
        let parseHtml = parser.parseFromString(html, "text/html").body;
        console.log(parseHtml);
        embed2.prepend(parseHtml);
        // HTMLの中身＝bodyの子要素
        const elmParseHtml = testEmbed2.firstElementChild.firstElementChild;
        console.log(elmParseHtml);


        // CSS
        const style = document.createElement('style');
        style.className = "CSSEmbed2";

    }

    resJson(jsonURL);


}
