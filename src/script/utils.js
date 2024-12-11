import animateValue from './animate-value';

const restrictInvalidKeys = (e) => {
  const invalidKeys = ['-', 'e', 'E', '+'];

  if (invalidKeys.includes(e.key)) {
    e.preventDefault();
  }
};

const calculateTipTotal = (bill, tipAmount) => bill * (tipAmount / 100);

const calculateTipForPerson = (tipTotal, personCount) =>
  Number((tipTotal / personCount).toFixed(2));

const calculateTotalForPerson = (bill, tipForPerson, personCount) =>
  Number((bill / personCount).toFixed(2)) + tipForPerson;

const updatePaymentPerPerson = (value, element) => {
  const startValue = Number(element.textContent);
  animateValue(element, startValue, value, 500);
};

const setActiveButton = (buttonElement) => {
  const buttons = document.querySelectorAll('.form__tip-button');

  buttons.forEach((button) => {
    button.classList.remove('form__tip-button--active');
    button.disabled = false;
  });
  buttonElement.classList.add('form__tip-button--active');
  buttonElement.disabled = true;
};

export {
  restrictInvalidKeys,
  calculateTipTotal,
  calculateTipForPerson,
  calculateTotalForPerson,
  updatePaymentPerPerson,
  setActiveButton,
};
