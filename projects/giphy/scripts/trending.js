import * as api from './api.js';
import * as utils from './utils.js';

// CHANGE THIS BETWEEN PAGES
const heading = 'Trending';
const fetch = api.fetchTrending;

// COPY THIS
export const refresh = () => {
  $('.uk-heading:first').text(`${heading}`);
  $('#gif-list').attr('uk-grid', 'masonry: true; parallax: 200');
  $('#spinner').show();
  return utils.refresh(fetch);
};

export const nextPage = (() => {
  let offsetNum = 30;

  const addCount = () => {
    offsetNum += 30;
    utils.populate(fetch, undefined, offsetNum);
  };
  return addCount;
})();
