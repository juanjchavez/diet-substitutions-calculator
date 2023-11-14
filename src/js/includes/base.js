import { getTitles, getAlimentosFromGroup } from './database.js'
import Swal from 'sweetalert2';
const mainEl = document.getElementById('diet-calculator');
let alimentos = [];
let activeGroup = '';

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
        activeGroup,
        alimentoOrigen,
        alimentoSubstituto,
        cantidad
    }
}

const paintAlimentosFromGroup = (group) => {
    alimentos = getAlimentosFromGroup(group);
    activeGroup = group;
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
            calculateDiet();
        });
}

const calculateDiet = () => {
    const baseData = grabData();

    if(baseData.cantidad === '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Olvidaste poner una cantidad!"
          });
        return;
    }
    const alimentoOrigen = alimentos.find((alimento) => {
        return alimento.alimento === baseData.alimentoOrigen;
    });
    const alimentoSubstituto = alimentos.find((alimento) => {
        return alimento.alimento === baseData.alimentoSubstituto;
    });
    const originDetails = separateAmountFromUnit(alimentoOrigen.cantidad);
    const substituteDetails = separateAmountFromUnit(alimentoSubstituto.cantidad);

    const newValue = `${(baseData.cantidad * substituteDetails.amount) / originDetails.amount}`;
    const result = `${baseData.cantidad} ${originDetails.unit} de ${baseData.alimentoOrigen} equivalen a ${parseFloat(newValue).toFixed(2)}${substituteDetails.unit} de ${baseData.alimentoSubstituto}`;
    Swal.fire({
        icon: "success",
        title: "Resultado",
        text: `${result}`
      });
}

const separateAmountFromUnit = (string) => {
    const amount = parseInt(string.replace(/\D/g,''));
    const unit = string.replace(/[0-9]/g, '');
    return {
        amount,
        unit
    }
}

export { initApp }