async function solution() {
    const main = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const response = await fetch(url);
    const data = await response.json();

    data.forEach(element => {
        const divAccordion = createElem('div', '', ['class', 'accordion']);
        const divHead = createElem('div', '', ['class', 'head']);
        const span = createElem('span', element.title);
        const button = createElem('button', 'More', ['class', 'button', 'id', element._id]);
        const divExtra = createElem('div', '', ['class', 'extra']);
        const p = createElem('p');

        button.addEventListener('click', toggle);

        divHead.appendChild(span);
        divHead.appendChild(button);
        divExtra.appendChild(p);

        divAccordion.appendChild(divHead);
        divAccordion.appendChild(divExtra);
        main.appendChild(divAccordion);
    });

    async function toggle(ev) {
        const buttonId = ev.target.id;
        const accordion = ev.target.parentElement.parentElement;
        const extra = accordion.querySelector('.extra');
        const p = accordion.querySelector('.extra p');

        const url = `http://localhost:3030/jsonstore/advanced/articles/details/${buttonId}`;

        const response = await fetch(url);
        const data = await response.json();

        p.textContent = data.content;

        const moreState = ev.target.textContent === 'More';
        extra.style.display = moreState ? 'block' : 'none';
        ev.target.textContent = moreState ? 'Less' : 'More';

    }

    function createElem(type, content, attributes = []) {
        const element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }

        if (attributes.length > 0) {
            for (let i = 0; i < attributes.length; i += 2) {
                element.setAttribute(attributes[i], attributes[i + 1]);
            }
        }

        return element;
    }
}

window.addEventListener('load', solution());