import * as trending from './trending.js';
import * as utils from './utils.js';
import * as event from './events.js';
import { displayDetail } from './displayDetails.js';
// import { /* favourites, */ } from './localStorage.js';
import * as populate from './populate.js';

$(() => {
  // Initial view:

  trending.populate();
  localStorage.clear();
  // Events to listen to:
  event.showTrending(trending.refresh);
  event.scroll(trending.nextPage);

  event.search(populate.search);
  event.searchClose(utils.clearSearch)
  event.enter(populate.search);
  event.logo(utils.scrollToTop);

  event.hoverGif(utils.animate);
  event.darkmodeClick(utils.darkmodeToggle);
  event.toggleviewClick(utils.viewToggle);
  event.animClick(utils.animToggle, trending.refresh);

  event.onClickGif(displayDetail);

  event.showFavorite(populate.favorites);
  // event.addFavourite(favouriteAdd);
});
