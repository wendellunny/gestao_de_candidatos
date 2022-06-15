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
  var scope = document.querySelector('#professional-experience-scope');
  var input = "\n    <div id=\"professional-experience-inputs\">\n    <h5>Experi\xEAncia Profissional</h5>\n        <div class=\"form-group\">\n            <label for=\"\"> T\xEDtulo </label>\n            <input type=\"text\" class=\"form-control\" type=\"text\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\"> Descri\xE7\xE3o </label>\n            <textarea class=\"form-control\" name=\"description\"></textarea>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\"> Data de \xCDnicio </label>\n            <input type=\"date\" class=\"form-control\" name=\"initail_date\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\"> Atual </label>\n            <input type=\"checkbox\" name=\"is_current\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\"> Data Final </label>\n            <input type=\"date\" class=\"form-control\" name=\"final_date\"/>\n        </div>\n    </div>\n    ";
  scope.innerHTML += input;
}

buttonAddFormation.addEventListener('click', function () {
  addAcademicFormationInputs();
});

function addAcademicFormationInputs() {
  var scope = document.querySelector('#academic-formation-scope');
  var input = "\n    <div id=\"academic-formation-inputs\">\n    <h5>Forma\xE7\xE3o Acad\xEAmica</h5>\n        <div class=\"form-group\">\n            <label for=\"\"> T\xEDtulo </label>\n            <input type=\"text\" class=\"form-control\" type=\"text\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\"> Descri\xE7\xE3o </label>\n            <textarea class=\"form-control\" name=\"description\"></textarea>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\"> Data de \xCDnicio </label>\n            <input type=\"date\" class=\"form-control\" name=\"initail_date\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\"> Atual </label>\n            <input type=\"checkbox\" name=\"is_current\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\"> Data Final </label>\n            <input type=\"date\" class=\"form-control\" name=\"final_date\"/>\n        </div>\n    </div>\n    ";
  scope.innerHTML += input;
}
/******/ })()
;