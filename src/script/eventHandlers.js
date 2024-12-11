import debounce from 'debounce';
import { setActiveButton } from './utils';
import { showResult, displayError } from './ui';

const form = document.getElementById('form');

const isValidPeopleInput = ({ people }) => {
  return !!(people && Number(people) !== 0);
};

const handleTipCalculation = (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  if (!isValidPeopleInput(data)) {
    displayError();
    return;
  }

  setActiveButton(e.submitter);
  document.getElementById('tip-custom').value = '';
  showResult(e.submitter.dataset.tip, data);
};

const handleInputEntry = debounce(() => {
  const isTipActive = !!document.querySelector('.form__tip-button--active');
  const isTipCustom = !!document.getElementById('tip-custom').value;

  if (isTipActive || isTipCustom) {
    const activeTip = document.querySelector('.form__tip-button--active');
    const data = Object.fromEntries(new FormData(form));

    if (!isValidPeopleInput(data)) {
      displayError();
      return;
    }

    const tip = activeTip ? activeTip.dataset.tip : data.custom;
    showResult(tip, data);
  }
}, 500);

const handleTipCustomInput = (e) => {
  const tip = Number(e.target.value);
  const buttons = document.querySelectorAll('.form__tip-button');
  buttons.forEach((button) => {
    button.classList.remove('form__tip-button--active');
    button.disabled = false;
  });
  const data = Object.fromEntries(new FormData(form));

  if (!isValidPeopleInput(data)) {
    displayError();
    return;
  }

  showResult(tip, data);
};

export { handleInputEntry, handleTipCalculation, handleTipCustomInput };
