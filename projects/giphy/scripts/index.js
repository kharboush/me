import * as trending from './trending.js';
import * as favorites from './favorites.js';
import * as uploads from './uploads.js';
import * as search from './search.js';
import * as utils from './utils.js';
import * as event from './events.js';
import * as details from './displayDetails.js';
import { loadUserPrefs } from './localStorage.js';

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
  loadUserPrefs();
  trendingPage();
  // MENU EVENTS:
  event.logo(utils.scrollToTop);
  event.showTrending(trendingPage);
  event.showFavorites(favoritesPage);
  event.showUploads(uploadsPage);
  // SEARCH EVENTS
  event.showSearch(searchPage);
  event.keystroke(search.refresh);
  event.paste(search.refresh);
  event.searchClose(utils.clearSearch, trendingPage);
  // UNIVERSAL EVENTS
  event.onUpload(uploads.upload);
  event.darkmodeClick(utils.darkmodeToggle);
  event.hoverGif(utils.animate);
  event.onClickGif(details.showDetails);
  // GIF DETAILS
  event.favoriteButton(details.favToggle);
  event.modalImgDblClick(details.clickFavBtn);
  event.gifCopy(details.getGifUrl);
  event.onUpload(uploads.upload);
  event.onUploadCard(uploads.clickOnUploads);
});

// event.onUploadButton(uploads.clickOnUpload);
// event.mouseleaveGif(removeDetailsBottom);
// event.deleted(storage.store);
// event.modalFavoriteButton(details.favoriteButtonToggle)
// event.mouseleaveGif(removeDetailsBottom);
// event.addFavorite(storage.favorites);
