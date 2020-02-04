import * as api from './api.js';
import * as utils from './utils.js';

// CHANGE THIS BETWEEN PAGES
const heading = '';
const fetch = api.fetchSearch;

// COPY THIS
export const refresh = () => {
  $('.uk-heading:first').text(`${heading}`);
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
