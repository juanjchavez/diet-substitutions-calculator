import { getTitles, getAlimentosFromGroup } from './database.js'
const mainEl = document.getElementById('diet-calculator');
let alimentos = [];

const initApp = () => {
    paintButtons();
}

// this function creates the buttons for the groups
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

const grabData = () => {
    const alimentoOrigen = mainEl.querySelector('#alimento-origen').value;
    const alimentoSubstituto = mainEl.querySelector('#alimento-substituto').value;
    const cantidad = mainEl.querySelector('#cantidad').value;
    return {
        alimentoOrigen,
        alimentoSubstituto,
        cantidad
    }
}

const paintAlimentosFromGroup = (group) => {
    alimentos = getAlimentosFromGroup(group);
    const alimentosHTML = alimentos.map((alimento) => {
        return `<option value="${alimento.alimento}">${alimento.alimento}</option>`;
    });
    mainEl.innerHTML = `<div class="alimentos-wrapper">
            <div class="form-group">
                <label for="alimento-origen">Alimento original</label>
                <select class="form-control" id="alimento-origen">${alimentosHTML.join('')}</select>
            </div>
            <div class="form-group">
                <label for="alimento-substituto">Alimento a reemplazar</label>
                <select class="form-control" id="alimento-substituto">${alimentosHTML.join('')}</select>
            </div>
            <div class="form-group">
                <label for="cantidad">Cantidad del original</label>
                <input type="number" class="form-control" id="cantidad" placeholder="Cantidad sin unidad de medida">
            </div>
        </div>
        <div class="calculator-buttons">
            <button class="btn btn-primary btn-block btn-go-calculate">Calcular</button>
            <button class="btn btn-primary btn-block btn-go-back">Volver</button>
        </div>`;
        mainEl.querySelector('button.btn-go-back').addEventListener('click', () => {
            paintButtons();
        });
        mainEl.querySelector('button.btn-go-calculate').addEventListener('click', () => {
            console.log(grabData());
        });
}

export { initApp }