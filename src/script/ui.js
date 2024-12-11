import * as utils from './utils.js';

const inputs = document.querySelectorAll('input');
const billInput = document.getElementById('bill');
const tipAmountOutput = document.getElementById('tip-amount');
const totalOutput = document.getElementById('total');
const resetBtn = document.getElementById('reset-btn');

const displayError = () => {
  const numberPeopleInput = document.getElementById('people-number');
  numberPeopleInput.classList.add('form__input-group--error');
};

const resetError = (e) => {
  if (e.target.value) {
    const numberPeopleInput = document.getElementById('people-number');
    numberPeopleInput.classList.remove('form__input-group--error');
  }
};

const showResult = (tip, { bill, people }) => {
  const tipAmount = Number(tip);
  const tipTotal = utils.calculateTipTotal(bill, tipAmount);
  const tipForPerson = utils.calculateTipForPerson(tipTotal, people);
  const totalForPerson = utils.calculateTotalForPerson(
    bill,
    tipForPerson,
    people
  );

  utils.updatePaymentPerPerson(tipForPerson, tipAmountOutput);
  utils.updatePaymentPerPerson(totalForPerson, totalOutput);

  resetBtn.disabled = false;
};

const resetResult = () => {
  tipAmountOutput.textContent = '0.00';
  totalOutput.textContent = '0.00';
  inputs.forEach((input) => (input.value = ''));
  resetBtn.disabled = true;
  billInput.focus();
  document
    .querySelectorAll('.form__tip-button')
    .forEach((button) => button.classList.remove('form__tip-button--active'));
};

export { displayError, resetError, resetResult, showResult };
