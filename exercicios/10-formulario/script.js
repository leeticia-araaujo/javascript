let currentStep = 0; // Variável para controlar qual o passo atual do formulário
const formSteps = document.querySelectorAll('.form-step'); // Seleciona todos os passos do formulário
const form = document.querySelector('form');

/*passos*/
form.addEventListener('click', (e) => { //quando clicar no botão
    if(!e.target.matches('[data-action]')){
        return; //verifica se o elemento clicado tem o atributo data-action    
    } 

    const actions = {
        next() {
            if(!valido()){
                return;
            }
            currentStep++;
        },
        prev() {
            currentStep--;
        }
    }

    const action =e.target.dataset.action;
    actions[action](); 

    updateActiveStep();
    updateProgressStep();
})

/*envio do form*/ 
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = new FormData(form);
    alert(`Thank you ${data.get('name')}!`);
});   

/*update steps*/

function updateActiveStep(){
    formSteps.forEach(step => step.classList.remove('on')); // Remove a classe 'on'
    formSteps[currentStep].classList.add('on'); // Adiciona a classe 'on' ao passo atual
}

const stepProgress = document.querySelectorAll('.step-progress [data-step]'); // Seleciona o passo que está o progresso 

function updateProgressStep(){
    stepProgress.forEach((step,idx) =>{
        step.classList.remove('on', 'done'); // Remove as classes 'on' e 'done'

        if(idx < currentStep + 1){
            step.classList.add('on');
        }

        if(idx < currentStep){
            step.classList.add('done');
        }
    })
}

/*validação*/

function valido(){
    const currentFormStep = formSteps[currentStep];
    const formFields = [...currentFormStep.querySelectorAll('input, textarea')]; 

    return formFields.every((input) => input.reportValidity()) //verifica se o input precisa de validação
}

/*animação*/

formSteps.forEach(formStep => {
    function addHidden(){
        formStep.classList.add('hidden'); // Adiciona a classe 'hidden'
    }

    formStep.addEventListener('animationend', () => {
        addHidden();
        formStep[currentStep].classList.remove('hidden'); 
    })
})