import { getTitles, getAlimentosFromGroup } from './database.js'
const mainEl = document.getElementById('diet-calculator');
let alimentos = [];

const initApp = () => {
    paintButtons();
}

const paintButtons = () => {
    const titles = getTitles();
    const buttons = titles.map((title) => {
        return `<button class="btn btn-primary btn-block">${title}</button>`
    })
    mainEl.innerHTML = `<div class="group-buttons-wrapper">${buttons.join('')}</div>`;
    mainEl.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', (event) => {
            const group = event.target.innerText;
            paintAlimentosFromGroup(group);
        });
    });
}

const paintAlimentosFromGroup = (group) => {
    alimentos = getAlimentosFromGroup(group);
    const alimentosHTML = alimentos.map((alimento) => {
        return `<div class="alimento">
                    <p>${alimento.alimento}</p>
                    <p>${alimento.cantidad}</p>
                </div>`
    });
    mainEl.innerHTML = `<div class="alimentos-wrapper">${alimentosHTML.join('')}</div>`;
    mainEl.insertAdjacentHTML('beforeend', `<button class="btn btn-primary btn-block">Volver</button>`);
    mainEl.querySelector('button').addEventListener('click', () => {
        paintButtons();
    });
}

export { initApp }