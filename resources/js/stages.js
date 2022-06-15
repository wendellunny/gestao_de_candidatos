const buttonProx = document.querySelector('#button-prox');
const buttonSubmit = document.querySelector('#button-submit');
const inputEmail = document.querySelector('input#email');
const inputPhone = document.querySelector('input#phone');
const fieldsets = {
    stage1: document.querySelector('fieldset#stage-1'),
    stage2: document.querySelector('fieldset#stage-2'),
    stage3: document.querySelector('fieldset#stage-3')
}

const buttonAddExperience = document.querySelector('#button-add-experience');
const buttonAddFormation = document.querySelector('#button-add-formation');

buttonProx.addEventListener('click',function(){
    let stage = buttonProx.dataset.stage;
    switch (stage) {
        case '1':
            changeStageOne();
            break;
        case '2':
           changeStageTwo();
        default:
            break;
    }
});


function changeStageOne(){
    if(inputEmail.value && inputPhone.value ){
        fieldsets.stage1.classList.add('d-none');
        fieldsets.stage2.classList.remove('d-none');
        buttonProx.dataset.stage= '2';
    }else{
        alert('Você deve preencher pelo menos um campo : Email ou Telefone para continuar');
    }    
}

function changeStageTwo(){
    fieldsets.stage2.classList.add('d-none');
    fieldsets.stage3.classList.remove('d-none');
    buttonProx.dataset.stage= '3';
    buttonProx.classList.add('d-none');
    buttonSubmit.classList.remove('d-none');
}


buttonAddExperience.addEventListener('click',function(){
    addProfessionalExperiencesInputs();
})

function addProfessionalExperiencesInputs(){
    let scope = document.querySelector('#professional-experience-scope');
    let input = `
    <div id="professional-experience-inputs">
    <h5>Experiência Profissional</h5>
        <div class="form-group">
            <label for=""> Título </label>
            <input type="text" class="form-control" type="text">
        </div>
        <div class="form-group">
            <label for=""> Descrição </label>
            <textarea class="form-control" name="description"></textarea>
        </div>
        <div class="form-group">
            <label for=""> Data de Ínicio </label>
            <input type="date" class="form-control" name="initail_date">
        </div>
        <div class="form-group">
            <label for=""> Atual </label>
            <input type="checkbox" name="is_current">
        </div>
        <div class="form-group">
            <label for=""> Data Final </label>
            <input type="date" class="form-control" name="final_date"/>
        </div>
    </div>
    `;
    scope.innerHTML += input;
}

buttonAddFormation.addEventListener('click',function(){
    addAcademicFormationInputs();
})

function addAcademicFormationInputs(){
    let scope = document.querySelector('#academic-formation-scope');
    let input = `
    <div id="academic-formation-inputs">
    <h5>Formação Acadêmica</h5>
        <div class="form-group">
            <label for=""> Título </label>
            <input type="text" class="form-control" type="text">
        </div>
        <div class="form-group">
            <label for=""> Descrição </label>
            <textarea class="form-control" name="description"></textarea>
        </div>
        <div class="form-group">
            <label for=""> Data de Ínicio </label>
            <input type="date" class="form-control" name="initail_date">
        </div>
        <div class="form-group">
            <label for=""> Atual </label>
            <input type="checkbox" name="is_current">
        </div>
        <div class="form-group">
            <label for=""> Data Final </label>
            <input type="date" class="form-control" name="final_date"/>
        </div>
    </div>
    `;
    scope.innerHTML += input;
}

