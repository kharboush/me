import * as api from './api.js';
import * as utils from './utils.js';

// CHANGE THIS BETWEEN PAGES
const heading = 'Favorites';
const fetch = api.fetchFavorites;

const randomMessage = () => {
  /* eslint-disable-next-line */
  UIkit.notification(
    `<p class="uk-text-small">You haven't picked a favorite, so Faith picked one!</p>`,
    { pos: 'bottom-left', timeout: 3000 }
  );
};
// COPY THIS
export const refresh = () => {
  $('.uk-heading:first').text(`${heading}`);
  if (localStorage.getItem('favorites') === null) {
    utils.throttle(randomMessage, 1000);
  }
  $('#spinner').hide();
  utils.refresh(fetch);
};

export const nextPage = (() => {
  const offsetNum = 30;

  const addCount = () => {
    // offsetNum += 30;
    // utils.populate(fetch, undefined, offsetNum);
  };
  return addCount;
})();
