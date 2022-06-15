/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/stages.js ***!
  \********************************/
var buttonProx1 = document.querySelector('#button-prox-1');
var buttonProx2 = document.querySelector('#button-prox-2');
var inputEmail = document.querySelector('input#email');
var inputPhone = document.querySelector('input#phone');
var fieldsets = {
  stage1: document.querySelector('fieldset#stage-1'),
  stage2: document.querySelector('fieldset#stage-2'),
  stage3: document.querySelector('fieldset#stage-3')
};
buttonProx1.addEventListener('click', function () {
  if (inputEmail.value && inputPhone.value) {
    fieldsets.stage1.classList.add('d-none');
    fieldsets.stage2.classList.remove('d-none');
    buttonProx1.id = 'button-prox-2';
  } else {
    alert('Você deve preencher pelo menos um campo : Email ou Telefone para continuar');
  }
});
/******/ })()
;