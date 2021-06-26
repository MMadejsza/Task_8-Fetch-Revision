const btn = document.getElementsByClassName('btn-primary_download');
const root = document.getElementById('root');

const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) =>
            res.json().then((res) => {
                res.forEach(element => {


                    const divMain = createElement('div', 'class', 'post');
                    const paragraphT = createElement('p', 'class', 'title');
                    const paragraphB = createElement('p', 'class', 'body');
                    const paragraphId = createElement('p', 'class', 'id');
                    paragraphT.innerHTML = element.title;
                    paragraphB.innerHTML = element.body;
                    paragraphId.innerHTML = element.id;
                    divMain.appendChild(paragraphT);
                    divMain.appendChild(paragraphB);
                    divMain.appendChild(paragraphId);
                    root.appendChild(divMain);
                });
            }),
        )
        .catch((err) => {
            console.log(err);
        });
};
btn[0].onclick = getPost;


function createElement(tagName, attribute, attributeValue) {
    const tag = document.createElement(tagName);
    tag.setAttribute(attribute, attributeValue);
    return tag;
}