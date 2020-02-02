// Click EVENTS
// Click on logo
import * as utils from "./utils.js"

export const logo = callback => {
  $('#logo').on('click', callback);
};

// Click on Search button
export const search = callback => {
  $('#searchBtn').on('click', callback);
};

// Click on Search close button
export const searchClose = callback => {
  $('#searchCloseBtn').on('click', callback);
};

// Click on Dark Mode button
export const darkmodeClick = callback => {
  $('#darkmode').on('click', callback);
};

// Click on Grid button
export const toggleviewClick = callback => {
  $('#grid-toggle').on('click', callback);
};

// Click on Animate button
export const animClick = (callback1, callback2) => {
  $('#anim-toggle')
    .on('click', callback1)
    .on('click', callback2);
};

// Click on GIF
export const onClickGif = callback =>
  $('#gif-list').on('click', '.giphy-gif-grid', callback);

// Click on Add Favorites
export const addFavourite = callback =>
  $('button_addFavorite').on('click', /* '[gif-id]' */ callback);

// Click on Favorites tab
export const showFavorite = callback =>
  $('#menu-favorites').on('click', callback);

// Click on Favorites tab
export const showTrending = callback =>
  $('#menu-trending').on('click', callback);

// Other Interaction EVENTS
// Hover on GIF
export const hoverGif = callback => {
  $(document).on('mouseover', '.giphy-gif-grid', callback);
};

// Scroll
export const scroll = callback => {
  $(window).scroll(() => {
    if (
      $(window).scrollTop() + $(window).height() >
      $(document).height() - 700
    ) {
      utils.throttle(callback, 1000);
    }
  });
};

// Listener for keystrokes on Search field
export const enter = async callback => {
  $('#navsearch').on('keypress', ev => {
    if (ev.keyCode === 13) {
      $('#navsearch').blur();
      callback();
    } // commen this part down to disable search on keystroke
    else {
      const input = $('#navsearch').val();
      const last = ev.key;
      $('#navsearch').val(input + last);
      callback();
      $('#navsearch').val(input);
    }
  });
};
