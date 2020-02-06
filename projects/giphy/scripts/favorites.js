import * as api from './api.js';
import * as utils from './utils.js';

// CHANGE THIS BETWEEN PAGES
const heading = 'Favorites';
const fetch = api.fetchFavorites;

// Random message
const randomMessage = () => {
  /* eslint-disable-next-line */
  UIkit.notification(
    `<p class="uk-text-small">You haven't picked a favorite, so Faith picked one!</p>`,
    { pos: 'bottom-left', timeout: 3000 }
  );
};

// Refresh page
const refresh = () => {
  $('.uk-heading:first').text(`${heading}`);
  $('#gif-list').attr('uk-grid', 'masonry: true; parallax: 0');
  if (localStorage.getItem('favorites') === null) {
    utils.throttle(randomMessage, 1000);
  }
  $('#spinner').hide();
  utils.refresh(fetch);
};

export { refresh };
