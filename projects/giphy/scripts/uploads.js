import * as api from './api.js';
import * as utils from './utils.js';

// CHANGE THIS BETWEEN PAGES
const heading = 'Uploads';
const fetch = api.fetchUploads;

// COPY THIS
export const refresh = () => {
  $('.uk-heading:first').text(`${heading}`);
  $('#spinner').hide();
  $('#gif-list').html('<p>asdasdasd</p>');
  return utils.refresh(fetch);
};

export const nextPage = (() => {
  const offsetNum = 30;

  const addCount = () => {
    // offsetNum += 30;
    // utils.populate(fetch, undefined, offsetNum);
  };
  return addCount;
})();
