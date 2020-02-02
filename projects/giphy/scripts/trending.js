import * as api from './api.js';
import * as utils from './utils.js';

const refresh = () => {
  $('.uk-heading:first').text('Trending');
  utils.refresh(api.fetchTrending)
}

const populate = number => utils.populate(api.fetchTrending, number);

const nextPage = (() => {
  let offsetNum = 30;

  const addCount = () => {
    offsetNum += 30;
    utils.populate(api.fetchTrending, undefined, offsetNum);
  };
  return addCount;
})();

export { populate, refresh, nextPage };
