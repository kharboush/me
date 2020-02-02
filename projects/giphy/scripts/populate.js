import * as api from './api.js';
import * as utils from './utils.js';

export const favorites = () => {
  if (localStorage.getItem('favourites') === null) {
    $('h1').text('Random');
    (() => {
      $('#alert-favorite').text(
        `You haven't picked favouite GIF(s) yet, so Faith picked one for you ;)`
      );
      setTimeout(() => $('#alert-favorite').text(''), 5000);
    })();
  } else {
    $('h1').text('Favorite(s)');
  }
  utils.refresh(api.fetchFavourites);
};

export const search = () => {
  utils.refresh(api.fetchSearch);
};
