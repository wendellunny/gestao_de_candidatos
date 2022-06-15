const buttonProx1 = document.querySelector('#button-prox-1');
const buttonProx2 = document.querySelector('#button-prox-2');
const inputEmail = document.querySelector('input#email');
const inputPhone = document.querySelector('input#phone');
const fieldsets = {
    stage1: document.querySelector('fieldset#stage-1'),
    stage2: document.querySelector('fieldset#stage-2'),
    stage3: document.querySelector('fieldset#stage-3')
}

buttonProx1.addEventListener('click',function(){
    if(inputEmail.value && inputPhone.value ){
        fieldsets.stage1.classList.add('d-none');
        fieldsets.stage2.classList.remove('d-none');
        buttonProx1.id= 'button-prox-2';
    }else{
        alert('Você deve preencher pelo menos um campo : Email ou Telefone para continuar');
    }


    
});