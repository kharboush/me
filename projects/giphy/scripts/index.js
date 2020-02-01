import * as trending from './trending.js';
import { searchPopulate } from './search.js';
import * as utils from './utils.js';
import * as event from './events.js';
import { displayDetail } from './displayDetails.js';

$(() => {
  // Initial view:

  trending.populate();
  // Events to listen to:
  event.scroll(trending.nextPage);

  event.search(searchPopulate);
  event.enter(searchPopulate);

  event.hoverGif(utils.animate);
  event.darkmodeClick(utils.darkmodeToggle);

  event.onClickGif(displayDetail);
});
