import renderCards from './time-cards';
import attachPeriodSwitcherHandlers from './time-period-handlers';
import getRenderSkeletons from './skeleton';

const renderSkeletons = getRenderSkeletons();
renderSkeletons();

const onSuccess = (cardsData) => {
  renderCards(cardsData);
  attachPeriodSwitcherHandlers(cardsData);
};

fetch('/data.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })
  .then((cardsData) => onSuccess(cardsData))
  .catch((error) => {
    console.error(`Could not get info: ${error}`);
  });
