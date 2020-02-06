import * as trending from './trending.js';
import * as favorites from './favorites.js';
import * as uploads from './uploads.js';
import * as search from './search.js';
import * as utils from './utils.js';
import * as event from './events.js';
import * as details from './details.js';
import * as storage from './localStorage.js';

// INITIAL LOAD
const trendingPage = () => {
  utils.cancelPageEvents();
  event.toggleViewClick(utils.viewToggle, trending.refresh);
  event.toggleAnimClick(utils.animToggle, trending.refresh);
  event.scrollToBottom(trending.nextPage);
  trending.refresh();
};

const favoritesPage = () => {
  utils.cancelPageEvents();
  event.toggleViewClick(utils.viewToggle, favorites.refresh);
  event.toggleAnimClick(utils.animToggle, favorites.refresh);
  favorites.refresh();
};

const uploadsPage = () => {
  utils.cancelPageEvents();
  event.toggleViewClick(utils.viewToggle, uploads.refresh);
  event.toggleAnimClick(utils.animToggle, uploads.refresh);
  uploads.refresh();
};

const searchPage = () => {
  utils.cancelPageEvents();
  event.toggleViewClick(utils.viewToggle, search.refresh);
  event.toggleAnimClick(utils.animToggle, search.refresh);
  event.scrollToBottom(search.nextPage);
  search.refresh();
};

$(() => {
  // Initial view:
  storage.loadUserPrefs();
  trendingPage();
  // MENU EVENTS:
  event.logo(trendingPage);
  event.showTrending(trendingPage);
  event.showFavorites(favoritesPage);
  event.showUploads(uploadsPage);
  // SEARCH EVENTS
  event.showSearch(searchPage);
  event.keystroke(search.refresh);
  event.paste(search.refresh);
  event.searchClose(utils.clearSearch, trendingPage);
  event.preventEnter();
  // UNIVERSAL EVENTS
  event.darkmodeClick(utils.darkmodeToggle);
  event.hoverGif(utils.animate);
  event.onClickGif(details.showModal);
  // GIF DETAILS
  event.favoriteButton(details.favToggle);
  event.modalImgDblClick(details.clickFavBtn);
  event.gifCopy(details.getGifUrl);
  event.onUpload(uploads.upload);
  event.onUploadCard(uploads.clickOnUploads);
});
