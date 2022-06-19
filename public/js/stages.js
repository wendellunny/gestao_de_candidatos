/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/stages.js ***!
  \********************************/
var buttonProx = document.querySelector('#button-prox');
var buttonSubmit = document.querySelector('#button-submit');
var inputEmail = document.querySelector('input#email');
var inputPhone = document.querySelector('input#phone');
var fieldsets = {
  stage1: document.querySelector('fieldset#stage-1'),
  stage2: document.querySelector('fieldset#stage-2'),
  stage3: document.querySelector('fieldset#stage-3')
};
var buttonAddExperience = document.querySelector('#button-add-experience');
var buttonAddFormation = document.querySelector('#button-add-formation');
buttonProx.addEventListener('click', function () {
  var stage = buttonProx.dataset.stage;

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

function changeStageOne() {
  if (inputEmail.value && inputPhone.value) {
    fieldsets.stage1.classList.add('d-none');
    fieldsets.stage2.classList.remove('d-none');
    buttonProx.dataset.stage = '2';
  } else {
    alert('Você deve preencher pelo menos um campo : Email ou Telefone para continuar');
  }
}

function changeStageTwo() {
  fieldsets.stage2.classList.add('d-none');
  fieldsets.stage3.classList.remove('d-none');
  buttonProx.dataset.stage = '3';
  buttonProx.classList.add('d-none');
  buttonSubmit.classList.remove('d-none');
}

buttonAddExperience.addEventListener('click', function () {
  addProfessionalExperiencesInputs();
});

function addProfessionalExperiencesInputs() {
  var scope = document.querySelector('#professional-experience-scope-more');
  var input = "\n    <div id=\"professional-experience-inputs\">\n        <h5>Experi\xEAncia Profissional</h5>\n        <div class=\"form-group\">\n            <label for=\"\"> T\xEDtulo </label>\n            <input type=\"text\" name=\"professional_experience_title[]\" class=\"form-control\" type=\"text\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\"> Descri\xE7\xE3o </label>\n            <textarea class=\"form-control\" name=\"professional_experience_description[]\"></textarea>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\"> Data de \xCDnicio </label>\n            <input type=\"date\" class=\"form-control\" name=\"professional_experience_initial_date[]\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\"> Atual </label>\n            <input type=\"checkbox\" class=\"professional_experience_is_current\" name=\"professional_experience_is_current[]\" value=\"1\">\n            <input type=\"hidden\" class=\"professional_experience_is_current_hidden\" name = \"professional_experience_is_current[]\" value=\"0\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\"> Data Final </label>\n            <input type=\"date\" class=\"form-control\" name=\"professional_experience_final_date[]\"/>\n        </div>\n    </div>\n    ";
  var element = new DOMParser().parseFromString(input, 'text/html');
  scope.appendChild(element.body.firstChild);
}

buttonAddFormation.addEventListener('click', function () {
  addAcademicFormationInputs();
});

function addAcademicFormationInputs() {
  var scope = document.querySelector('#academic-formation-scope-more');
  var input = "\n    <div id=\"academic-formation-scope\">\n        <div id=\"academic-formation-inputs\">\n            <h5>Forma\xE7\xE3o Acad\xEAmica</h5>\n            <div class=\"form-group\">\n                <label for=\"\"> T\xEDtulo </label>\n                <input type=\"text\" class=\"form-control\" name=\"academic_formation_title[]\" type=\"text\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\"> Descri\xE7\xE3o </label>\n                <textarea class=\"form-control\" name=\"academic_formation_description[]\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\"> Data de \xCDnicio </label>\n                <input type=\"date\" class=\"form-control\" name=\"academic_formation_initial_date[]\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\"> Atual </label>\n                <input type=\"checkbox\" name=\"academic_formation_is_current[]\" value=\"1\">\n                <input type=\"hidden\" value=\"0\" class=\"academic_formation_is_current_hidden\" name = \"academic_formation_is_current[]\">\n            </div>\n            <div class=\"form-group\">i\n                <label for=\"\"> Data Final </label>\n                <input type=\"date\" class=\"form-control\" name=\"academic_formation_final_date[]\"/>\n            </div>\n        </div>\n    </div>\n    ";
  var element = new DOMParser().parseFromString(input, 'text/html');
  scope.appendChild(element.body.firstChild);
  loadCheckboxEvent();
}

function addInputHiddenIsCheckboxUnchecked() {}

addEventListener('load', function () {
  loadProfessionalExperienceCheckboxEvent();
  loadAcademicFormationCheckboxEvent();
});

function loadProfessionalExperienceCheckboxEvent() {
  var checkbox = document.querySelectorAll('.professional_experience_is_current');
  console.log(checkbox);
  checkbox.forEach(function (element) {
    element.addEventListener('change', function (event) {
      var element = event.currentTarget;
      console.log(element.checked);

      if (element.checked) {
        console.log('entrou');
        var divParent = element.closest('div');
        var inputHidden = divParent.querySelector('.professional_experience_is_current_hidden');
        divParent.removeChild(inputHidden);
      } else {
        var _divParent = element.closest('div');

        var _inputHidden = document.createElement('input');

        _inputHidden.classList.add('professional_experience_is_current_hidden');

        _inputHidden.value = 0;
        _inputHidden.type = 'hidden';
        _inputHidden.name = 'professional_experience_is_current[]';

        _divParent.appendChild(_inputHidden);
      }
    });
  });
}

function loadAcademicFormationCheckboxEvent() {
  var checkbox = document.querySelectorAll('.academic_formation_is_current');
  console.log(checkbox);
  checkbox.forEach(function (element) {
    element.addEventListener('change', function (event) {
      var element = event.currentTarget;
      console.log(element.checked);

      if (element.checked) {
        console.log('entrou');
        var divParent = element.closest('div');
        var inputHidden = divParent.querySelector('.academic_formation_is_current_hidden');
        divParent.removeChild(inputHidden);
      } else {
        var _divParent2 = element.closest('div');

        var _inputHidden2 = document.createElement('input');

        _inputHidden2.classList.add('academic_formation_is_current_hidden');

        _inputHidden2.value = 0;
        _inputHidden2.type = 'hidden';
        _inputHidden2.name = 'academic_formation_is_current[]';

        _divParent2.appendChild(_inputHidden2);
      }
    });
  });
}
/******/ })()
;