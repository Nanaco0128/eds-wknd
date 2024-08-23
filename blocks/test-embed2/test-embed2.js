export default function decorate(block) {
    const jsonURL = document.querySelector(".test-embed2").querySelector('a[href$=".json"]').textContent;
    console.log(jsonURL);

    async function resJson(url) {
        const res = await fetch(url);
        const codes = await res.json();
        console.log(codes);
    }

    resJson(jsonURL);

}