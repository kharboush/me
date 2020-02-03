import * as trending from './trending.js';
import * as favorites from './favorites.js';
import * as uploads from './uploads.js';
import * as search from './search.js';
import * as utils from './utils.js';
import * as event from './events.js';
import { displayDetail } from './displayDetails.js';
import * as storage from './localStorage.js';

const trendingEvents = () => {
  event.canceler();
  event.toggleviewClick(utils.viewToggle, trending.refresh);
  event.animClick(utils.animToggle, trending.refresh);
  event.scroll(trending.nextPage);
}; // INITIAL LOAD

const searchEvents = () => {
  event.canceler();
  event.toggleviewClick(utils.viewToggle, search.refresh);
  event.animClick(utils.animToggle, search.refresh);
  event.scroll(search.nextPage);
};

const favoritesEvents = () => {
  event.canceler();
  event.toggleviewClick(utils.viewToggle, favorites.refresh);
  event.animClick(utils.animToggle, favorites.refresh);
  event.scroll(favorites.nextPage);
};

const uploadsEvents = () => {
  event.canceler();
  event.toggleviewClick(utils.viewToggle, uploads.refresh);
  event.animClick(utils.animToggle, uploads.refresh);
  event.scroll(uploads.nextPage);
};

$(() => {
  // Initial view:
  trendingEvents();
  trending.populate();
  // MENU EVENTS:
  event.logo(utils.scrollToTop);
  event.showTrending(trendingEvents, trending.refresh);
  event.showFavorite(favoritesEvents, favorites.refresh);
  event.showSearch(searchEvents, search.refresh);
  event.showUploads(uploadsEvents, uploads.refresh);
  event.enter(search.refresh);
  // UNIVERSAL EVENTS
  event.searchClose(utils.clearSearch, trendingEvents, trending.refresh);
  event.hoverGif(utils.animate);
  event.darkmodeClick(utils.darkmodeToggle);
  event.onClickGif(displayDetail);
  event.addFavorite(storage.store);
  event.removeFavorite(storage.del);
  event.deleted(storage.store);
  // event.gifCoppy(copyToClipboard);
});
