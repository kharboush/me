// Click EVENTS
// Click on logo
import * as utils from './utils.js';

export const canceler = () => {
  $('#anim-toggle').off();
  $('#grid-toggle').off();
  $(window).off();
};

export const logo = callback => {
  $('#logo').on('click', callback);
};

// Click on Search close button
export const searchClose = (callback1, callback2, callback3) => {
  $('#searchCloseBtn')
    .on('click', callback1)
    .on('click', callback2)
    .on('click', callback3);
};

// Click on Dark Mode button
export const darkmodeClick = callback => {
  $('#darkmode').on('click', callback);
};

// Click on Grid button
export const toggleviewClick = (callback1, callback2) => {
  $('#grid-toggle')
    .on('click', callback1)
    .on('click', callback2);
};

// Click on Animate button
export const animClick = (callback1, callback2) => {
  $('#anim-toggle')
    .on('click', callback1)
    .on('click', callback2);
};

// Click on GIF
export const onClickGif = callback =>
  $('#gif-list').on('click', '.details-overlay', callback);

// Coppy URL
// export const gifCoppy = callback =>
//   $('#gif-list').on('click', '.coppy-icon', callback);

// Click on Add Favorites
export const addFavorite = callback =>
  $(`#add-favorite`).on('click', ev => callback(ev, 'favorites'));

// Click on Remove Favorites
export const removeFavorite = callback =>
  $(`#add-favorite`).on('click', ev => callback(ev, 'favorites'));

// Click on Delete
export const deleted = callback =>
  $(`#delete`).on('click', ev => callback(ev, 'deleted'));

// Click on Trending tab
export const showTrending = (callback1, callback2) =>
  $('#menu-trending')
    .on('click', callback1)
    .on('click', callback2);

// Click on Favorites tab
export const showFavorite = (callback1, callback2) =>
  $('#menu-favorites')
    .on('click', callback1)
    .on('click', callback2);

// Click on Uploads tab
export const showUploads = (callback1, callback2) =>
  $('#menu-uploads')
    .on('click', callback1)
    .on('click', callback2);

// Click on Search button
export const showSearch = (callback1, callback2) =>
  $('#searchBtn')
    .on('click', callback1)
    .on('click', callback2);

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
    const selected = window.getSelection().toString();
    let text = $('#navsearch').val();
    text = text.replace(selected, '');
    $('#navsearch').val(text);
    if (ev.keyCode === 13) {
      ev.preventDefault();
    } else {
      // commen this part down to disable search on keystroke
      const input = $('#navsearch').val();
      const last = ev.key;
      $('#navsearch').val(input + last);
      callback();
      $('#navsearch').val(input);
    }
  });
};
