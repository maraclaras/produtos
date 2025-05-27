// orcamento.js
const steps = [
  { title: 'Tamanho', options: ['Mini - 12 pessoas', 'PP - 18 pessoas', 'P - 28 pessoas', 'M - 48 pessoas', 'G - 70 pessoas', 'GG - 100 pessoas'] },
  { title: 'Tipo', options: ['Chantininho com topo simples', 'Semi naked com acetato', 'Naked cake', 'Ganache', 'Lascas de chocolate', 'Diet', 'Rafaello', 'Brigadeiro', 'Red velvet', 'Kit Kat', 'Pasta americana'] },
  { title: 'Massa', options: ['Branca', 'Chocolate'] },
  { title: 'Recheio', options: ['Ninho', 'Brigadeiro gourmet', 'Brigadeiro de nutella', 'Coco queimado', 'Prestígio', 'Ninho com frutas vermelhas', 'Ganache', 'Creme de nozes', 'Limão siciliano', 'Maracujá', 'Doce de leite com paçoca', 'Coco com abacaxi', 'Ele e ela', 'Ninho com morango', 'Chocolate com morango', 'Oreo', 'Alpino', 'Mousse de chocolate', 'Brigadeiro 4 leites'] },
  { title: 'Extra', options: ['Raspas', 'Frutas', 'Topo personalizado', 'Sem cobertura'] }
];

let selectedOptions = {};
let selectedLayers = new Set();
let currentStep = 0;

function showOptions(stepIndex) {
  currentStep = stepIndex;
  const step = steps[stepIndex];
  document.getElementById('optionTitle').innerText = step.title +
    (stepIndex === 3 ? ' (Escolha 2 opções)' : ' (Escolha 1 opção)');


  const list = document.getElementById('optionsList');
  list.innerHTML = '';

  step.options.forEach(option => {
    const div = document.createElement('div');
    div.className = 'option';
    div.innerText = option;
    const selected = selectedOptions[stepIndex];
    if ((Array.isArray(selected) && selected.includes(option)) || selected === option) {
      div.classList.add('selected');
    }
    div.onclick = () => selectOption(option);
    list.appendChild(div);
  });

  const optionsBox = document.getElementById('optionsBox');
  optionsBox.classList.add('show');
}

function selectOption(option) {
  if (currentStep === 3) { // Recheio, permite até 2
    if (!Array.isArray(selectedOptions[currentStep])) {
      selectedOptions[currentStep] = [];
    }
    const index = selectedOptions[currentStep].indexOf(option);
    if (index > -1) {
      selectedOptions[currentStep].splice(index, 1);
    } else if (selectedOptions[currentStep].length < 2) {
      selectedOptions[currentStep].push(option);
    }
  } else {
    selectedOptions[currentStep] = option;
  }

  selectedLayers.add(currentStep);

  const options = document.querySelectorAll('#optionsList .option');
  options.forEach(opt => {
    if (currentStep === 3) {
      if (selectedOptions[currentStep].includes(opt.innerText)) {
        opt.classList.add('selected');
      } else {
        opt.classList.remove('selected');
      }
    } else {
      if (opt.innerText === selectedOptions[currentStep]) {
        opt.classList.add('selected');
      } else {
        opt.classList.remove('selected');
      }
    }
  });

  const layer = document.getElementById(`layer${currentStep}`);
// Marca camada como selecionada visualmente se já tiver valor
for (let i = 0; i < steps.length; i++) {
  const layer = document.getElementById(`layer${i}`);
  const selected = selectedOptions[i];

  if (i === 3) { // Recheio - precisa ter 2
    if (selected && selected.length === 2) {
      layer.classList.add('selected-layer');
    } else {
      layer.classList.remove('selected-layer');
    }
  } else {
    if (selected) {
      layer.classList.add('selected-layer');
    } else {
      layer.classList.remove('selected-layer');
    }
  }
}
;

  checkIfAllLayersSelected();
}

function checkIfAllLayersSelected() {
  const saveBtn = document.getElementById('saveBtn');
  const totalSteps = steps.length;
  let valid = true;

  for (let i = 0; i < totalSteps; i++) {
    if (i === 3) {
      if (!selectedOptions[i] || selectedOptions[i].length !== 2) {
        valid = false;
        break;
      }
    } else {
      if (!selectedOptions[i]) {
        valid = false;
        break;
      }
    }
  }

  if (valid) {
    saveBtn.disabled = false;
    saveBtn.classList.remove('disabled');
  } else {
    saveBtn.disabled = true;
    saveBtn.classList.add('disabled');
  }
}

function saveSelection() {
  if (document.getElementById('saveBtn').disabled) return;

  const summary = Object.entries(selectedOptions)
    .map(([index, value]) => {
      const label = steps[index].title.replace(' (Escolha 2 opções)', '');
      const content = Array.isArray(value) ? value.join(' e ') : value;
      return `${label}: ${content}`;
    })
    .join('\n');

  alert('Resumo do Pedido:\n' + summary);
  document.getElementById('optionsBox').classList.remove('show');

  localStorage.setItem('orcamentoBolo', JSON.stringify(selectedOptions));
  console.log('Dados salvos:', selectedOptions);
}
