import * as trending from './trending.js';
import * as favorites from './favorites.js';
import * as uploads from './uploads.js';
import * as search from './search.js';
import * as utils from './utils.js';
import * as event from './events.js';
import { displayDetail, removeDetailsBottom } from './displayDetails.js';
import * as storage from './localStorage.js';

const trendingPage = () => {
  event.canceler();
  event.toggleViewClick(utils.viewToggle, trending.refresh);
  event.toggleAnimClick(utils.animToggle, trending.refresh);
  event.scrollToBottom(trending.nextPage);
  trending.refresh();
}; // INITIAL LOAD

const favoritesPage = () => {
  event.canceler();
  event.toggleViewClick(utils.viewToggle, favorites.refresh);
  event.toggleAnimClick(utils.animToggle, favorites.refresh);
  event.scrollToBottom(favorites.nextPage);
  favorites.refresh();
};

const uploadsPage = () => {
  event.canceler();
  event.toggleViewClick(utils.viewToggle, uploads.refresh);
  event.toggleAnimClick(utils.animToggle, uploads.refresh);
  event.scrollToBottom(uploads.nextPage);
  uploads.refresh();
};

const searchPage = () => {
  event.canceler();
  event.toggleViewClick(utils.viewToggle, search.refresh);
  event.toggleAnimClick(utils.animToggle, search.refresh);
  event.scrollToBottom(search.nextPage);
  search.refresh();
};

$(() => {
  // Initial view:
  trendingPage();
  // MENU EVENTS:
  event.logo(utils.scrollToTop);
  event.showTrending(trendingPage);
  event.showFavorites(favoritesPage);
  event.showUploads(uploadsPage);
  event.showSearch(searchPage);
  // UNIVERSAL EVENTS
  event.enter(search.refresh);
  event.searchClose(utils.clearSearch, trendingPage);
  event.hoverGif(utils.animate);
  event.darkmodeClick(utils.darkmodeToggle);
  event.onClickGif(displayDetail);
  event.addFavorite(storage.store);
  event.removeFavorite(storage.del);
  event.deleted(storage.store);
  // event.gifCoppy(copyToClipboard);
  event.mouseleaveGif(removeDetailsBottom);
  // event.addFavorite(storage.favorites);
  // event.gifCoppy(getGifUrl);
});
