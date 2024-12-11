import debounce from 'debounce';
import { restrictInvalidKeys } from './script/utils.js';
import { resetError, resetResult } from './script/ui.js';

import {
  handleInputEntry,
  handleTipCalculation,
  handleTipCustomInput,
} from './script/eventHandlers.js';

const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const billInput = document.getElementById('bill');
const tipCustomInput = document.getElementById('tip-custom');
const numberPeopleInput = document.getElementById('people-input');

const resetBtn = document.getElementById('reset-btn');

billInput.focus();

inputs.forEach((input) => {
  input.addEventListener('keydown', restrictInvalidKeys);
});

numberPeopleInput.addEventListener('input', resetError);

resetBtn.addEventListener('click', resetResult);

form.addEventListener('submit', handleTipCalculation);

tipCustomInput.addEventListener('input', handleTipCustomInput);

billInput.addEventListener('input', handleInputEntry);

numberPeopleInput.addEventListener('input', handleInputEntry);
