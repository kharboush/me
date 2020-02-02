import * as trending from './trending.js';
import { searchPopulate } from './search.js';
import * as utils from './utils.js';
import * as event from './events.js';
import { displayDetail } from './displayDetails.js';
import { /* favouriteAdd, */ favPopulate } from './favourites.js';

$(() => {
  // Initial view:

  trending.refresh();
  localStorage.clear();
  // Events to listen to:
  event.showTrending(trending.refresh);
  event.scroll(trending.nextPage);

  event.search(searchPopulate);
  event.enter(searchPopulate);

  event.hoverGif(utils.animate);
  event.darkmodeClick(utils.darkmodeToggle);
  event.toggleviewClick(utils.viewToggle);

  event.onClickGif(displayDetail);

  event.showFavorite(favPopulate);
  // event.addFavourite(favouriteAdd);
});
