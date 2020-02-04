import * as utils from './utils.js';

const toggleSearchBar = () => {
  $('#searchhider').trigger('click');
};

export const canceler = () => {
  $('#anim-toggle').off();
  $('#grid-toggle').off();
  $('.menu').off('click', toggleSearchBar);
  $(window).off();
};

// Click on logo
export const logo = callback => {
  $('#logo').on('click', callback);
};

// Click on Search close button
export const searchClose = (callback1, callback2) => {
  $('#searchCloseBtn')
    .on('click', callback1)
    .on('click', callback2);
};

// Click on Dark Mode button
export const darkmodeClick = callback => {
  $('#darkmode').on('click', callback);
};

// Click EVENTS
// Click on Grid button
export const toggleViewClick = (callback1, callback2) => {
  $('#grid-toggle')
    .on('click', callback1)
    .on('click', callback2);
};

// Click on Animate button
export const toggleAnimClick = (callback1, callback2) => {
  $('#anim-toggle')
    .on('click', callback1)
    .on('click', callback2);
};

// Click on GIF
export const onClickGif = callback =>
  $('#gif-list').on('click', 'img', callback);

// Mouseleave GIF
export const mouseleaveGif = callback => {
  $('#gif-list').on('mouseleave', '.remove-gif-overlay', callback);
};

// Coppy URL
// export const gifCoppy = callback =>
//   $('#gif-list').on('click', '.coppy-icon', callback);

// Click on Add Favorites
export const addFavorite = callback =>
  $(`#add-favorite`).on('click', ev => callback(ev, 'favorites'));

// Click on Remove Favorites
export const removeFavorite = callback =>
  $(`#remove-favorite`).on('click', ev => callback(ev, 'favorites'));

// Click on Delete
export const deleted = callback =>
  $(`#delete`).on('click', ev => callback(ev, 'deleted'));
// $(document).on('click', '.heart-icon', callback);

// Click on Trending tab
export const showTrending = callback =>
  $('#menu-trending').on('click', callback);

// Click on Favorites tab
export const showFavorites = callback =>
  $('#menu-favorites').on('click', callback);

// Click on Uploads tab
export const showUploads = callback => $('#menu-uploads').on('click', callback);

// Click on Search button
export const showSearch = callback => {
  $('#searchBtn')
    .on('click', callback)
    .on('click', () => {
      $(`.menu`).on('click', toggleSearchBar);
    });
};

// Other Interaction EVENTS
// Hover on GIF
export const hoverGif = callback => {
  $(document).on('mouseover', '.giphy-gif-grid', callback);
};

// Scroll
export const scrollToBottom = callback => {
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
