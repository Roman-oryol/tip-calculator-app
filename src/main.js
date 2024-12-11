import debounce from 'debounce';
import { restrictInvalidKeys } from './script/utils.js';
import { resetError, resetResult } from './script/ui.js';

const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const billInput = document.getElementById('bill');
const tipCustomInput = document.getElementById('tip-custom');
const numberPeopleInput = document.getElementById('people-input');
// const tipAmountOutput = document.getElementById('tip-amount');
// const totalOutput = document.getElementById('total');
const resetBtn = document.getElementById('reset-btn');

// ***

import {
  handleInputEntry,
  handleTipCalculation,
  handleTipCustomInput,
} from './script/eventHandlers';

// ***

billInput.focus();

// const restrictInvalidKeys = (e) => {
//   const invalidKeys = ['-', 'e', 'E', '+'];

//   if (invalidKeys.includes(e.key)) {
//     e.preventDefault();
//   }
// };

inputs.forEach((input) => {
  input.addEventListener('keydown', restrictInvalidKeys);
});

// const calculateTipTotal = (bill, tipAmount) => {
//   return bill * (tipAmount / 100);
// };

// const calculateTipForPerson = (tipTotal, personCount) => {
//   return Number((tipTotal / personCount).toFixed(2));
// };

// const calculateTotalForPerson = (bill, tipForPerson, personCount) => {
//   return Number((bill / personCount).toFixed(2)) + tipForPerson;
// };

// const updatePaymentPerPerson = (value, element) => {
//   const startValue = Number(element.textContent);
//   animateValue(element, startValue, value, 500);
// };

// const displayError = () => {
//   const numberPeopleInput = document.getElementById('people-number');
//   numberPeopleInput.classList.add('form__input-group--error');
// };

// const resetError = (e) => {
//   if (e.target.value) {
//     const numberPeopleInput = document.getElementById('people-number');
//     numberPeopleInput.classList.remove('form__input-group--error');
//   }
// };

numberPeopleInput.addEventListener('input', resetError);

// const showResult = (tip, { bill, people }) => {
//   const tipAmount = Number(tip);
//   const tipTotal = calculateTipTotal(bill, tipAmount);
//   const tipForPerson = calculateTipForPerson(tipTotal, people);
//   const totalForPerson = calculateTotalForPerson(bill, tipForPerson, people);

//   updatePaymentPerPerson(tipForPerson, tipAmountOutput);
//   updatePaymentPerPerson(totalForPerson, totalOutput);

//   resetBtn.disabled = false;
// };

// const resetResult = () => {
//   tipAmountOutput.textContent = '0.00';
//   totalOutput.textContent = '0.00';
//   inputs.forEach((input) => (input.value = ''));
//   resetBtn.disabled = true;
//   billInput.focus();
//   document
//     .querySelectorAll('.form__tip-button')
//     .forEach((button) => button.classList.remove('form__tip-button--active'));
// };

resetBtn.addEventListener('click', resetResult);

// const setActiveButton = (buttonElement) => {
//   const buttons = document.querySelectorAll('.form__tip-button');

//   buttons.forEach((button) => {
//     button.classList.remove('form__tip-button--active');
//     button.disabled = false;
//   });
//   buttonElement.classList.add('form__tip-button--active');
//   buttonElement.disabled = true;
// };

// const isValidPeopleInput = ({ people }) => {
//   return !!(people && Number(people) !== 0);
// };

// const handleTipCalculation = (e) => {
//   e.preventDefault();

//   const data = Object.fromEntries(new FormData(e.target));

//   if (!isValidPeopleInput(data)) {
//     displayError();
//     return;
//   }

//   setActiveButton(e.submitter);
//   document.getElementById('tip-custom').value = '';
//   showResult(e.submitter.dataset.tip, data);
// };

// const handleInputEntry = () => {
//   const isTipActive = !!document.querySelector('.form__tip-button--active');
//   const isTipCustom = !!document.getElementById('tip-custom').value;

//   if (isTipActive || isTipCustom) {
//     const activeTip = document.querySelector('.form__tip-button--active');
//     const data = Object.fromEntries(new FormData(form));

//     if (!isValidPeopleInput(data)) {
//       displayError();
//       return;
//     }

//     const tip = activeTip ? activeTip.dataset.tip : data.custom;
//     showResult(tip, data);
//   }
// };

// const handleTipCustomInput = (e) => {
//   const tip = Number(e.target.value);
//   const buttons = document.querySelectorAll('.form__tip-button');
//   buttons.forEach((button) => {
//     button.classList.remove('form__tip-button--active');
//     button.disabled = false;
//   });
//   const data = Object.fromEntries(new FormData(form));

//   if (!isValidPeopleInput(data)) {
//     displayError();
//     return;
//   }

//   showResult(tip, data);
// };

form.addEventListener('submit', handleTipCalculation);

// billInput.addEventListener('input', debounce(handleInputEntry, 500));
// numberPeopleInput.addEventListener('input', debounce(handleInputEntry, 500));
tipCustomInput.addEventListener('input', debounce(handleTipCustomInput, 500));

billInput.addEventListener('input', handleInputEntry);
numberPeopleInput.addEventListener('input', handleInputEntry);
