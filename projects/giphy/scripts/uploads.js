import * as api from './api.js';
import * as utils from './utils.js';

// CHANGE THIS BETWEEN PAGES
const heading = 'Uploads';
const fetch = api.fetchUploads;

// COPY THIS
export const refresh = () => {
  $('.uk-heading:first').text(`${heading}`);
  utils.refresh(fetch);
};

export const populate = () => {
  $('.uk-heading:first').text(`${heading}`);
  return utils.populate(fetch);
};

export const nextPage = (() => {
  let offsetNum = 30;

  const addCount = () => {
    offsetNum += 30;
    utils.populate(fetch, undefined, offsetNum);
  };
  return addCount;
})();
