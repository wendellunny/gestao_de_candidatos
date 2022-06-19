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
    let scope = document.querySelector('#professional-experience-scope-more');
    let input = `
    <div id="professional-experience-inputs">
        <h5>Experiência Profissional</h5>
        <div class="form-group">
            <label for=""> Título </label>
            <input type="text" name="professional_experience_title[]" class="form-control" type="text">
        </div>
        <div class="form-group">
            <label for=""> Descrição </label>
            <textarea class="form-control" name="professional_experience_description[]"></textarea>
        </div>
        <div class="form-group">
            <label for=""> Data de Ínicio </label>
            <input type="date" class="form-control" name="professional_experience_initial_date[]">
        </div>
        <div class="form-group">
            <label for=""> Atual </label>
            <input type="checkbox" class="professional_experience_is_current" name="professional_experience_is_current[]" value="1">
            <input type="hidden" class="professional_experience_is_current_hidden" name = "professional_experience_is_current[]" value="0">
        </div>
        <div class="form-group">
            <label for=""> Data Final </label>
            <input type="date" class="form-control" name="professional_experience_final_date[]"/>
        </div>
    </div>
    `;
    let element = new DOMParser().parseFromString(input,'text/html');
    scope.appendChild(element.body.firstChild);
}

buttonAddFormation.addEventListener('click',function(){
    addAcademicFormationInputs();
})

function addAcademicFormationInputs(){
    
    let scope = document.querySelector('#academic-formation-scope-more');
    let input = `
    <div id="academic-formation-scope">
        <div id="academic-formation-inputs">
            <h5>Formação Acadêmica</h5>
            <div class="form-group">
                <label for=""> Título </label>
                <input type="text" class="form-control" name="academic_formation_title[]" type="text">
            </div>
            <div class="form-group">
                <label for=""> Descrição </label>
                <textarea class="form-control" name="academic_formation_description[]"></textarea>
            </div>
            <div class="form-group">
                <label for=""> Data de Ínicio </label>
                <input type="date" class="form-control" name="academic_formation_initial_date[]">
            </div>
            <div class="form-group">
                <label for=""> Atual </label>
                <input type="checkbox" name="academic_formation_is_current[]" value="1">
                <input type="hidden" value="0" class="academic_formation_is_current_hidden" name = "academic_formation_is_current[]">
            </div>
            <div class="form-group">i
                <label for=""> Data Final </label>
                <input type="date" class="form-control" name="academic_formation_final_date[]"/>
            </div>
        </div>
    </div>
    `;
   
    let element = new DOMParser().parseFromString(input,'text/html');
    scope.appendChild(element.body.firstChild);
    loadCheckboxEvent();
}

function addInputHiddenIsCheckboxUnchecked(){

}


addEventListener('load',function(){
    loadProfessionalExperienceCheckboxEvent();
    loadAcademicFormationCheckboxEvent();
});

function loadProfessionalExperienceCheckboxEvent(){
    let checkbox = document.querySelectorAll('.professional_experience_is_current');
    console.log(checkbox);
    checkbox.forEach(element => {
        element.addEventListener('change',function(event){
            let element = event.currentTarget;
            console.log(element.checked);
            if(element.checked){
                console.log('entrou')
                let divParent = element.closest('div');
                let inputHidden  =  divParent.querySelector('.professional_experience_is_current_hidden');
                divParent.removeChild(inputHidden);  
            }else{
                let divParent = element.closest('div');
                let inputHidden = document.createElement('input');
                inputHidden.classList.add('professional_experience_is_current_hidden');
                inputHidden.value = 0;
                inputHidden.type='hidden';
                inputHidden.name='professional_experience_is_current[]';
                divParent.appendChild(inputHidden);
            }     
        });
    });
    
}

function loadAcademicFormationCheckboxEvent(){
    let checkbox = document.querySelectorAll('.academic_formation_is_current');
    console.log(checkbox);
    checkbox.forEach(element => {
        element.addEventListener('change',function(event){
            let element = event.currentTarget;
            console.log(element.checked);
            if(element.checked){
                console.log('entrou')
                let divParent = element.closest('div');
                let inputHidden  =  divParent.querySelector('.academic_formation_is_current_hidden');
                divParent.removeChild(inputHidden);  
            }else{
                let divParent = element.closest('div');
                let inputHidden = document.createElement('input');
                inputHidden.classList.add('academic_formation_is_current_hidden');
                inputHidden.value = 0;
                inputHidden.type='hidden';
                inputHidden.name='academic_formation_is_current[]';
                divParent.appendChild(inputHidden);
            }     
        });
    });
    
}
