import * as storage from './localStorage.js';

// Copy to Clipboard functionality
const copyToClipboard = url => {
  const $temp = $('<input>');
  $('body').append($temp);
  $temp.val(url).select();
  document.execCommand('copy');
  $temp.remove();
};

// Copies the GIF URL from the event target's attribute to the user's clipboard
const getGifUrl = ev => {
  const gifUrl = $(ev.target).attr('gif-url');
  copyToClipboard(gifUrl);
  const changeTypeIcon = $('[coppy-id]');
  changeTypeIcon.attr('uk-icon', 'check');
  setTimeout(function() {
    changeTypeIcon.attr('uk-icon', 'copy');
  }, 2000);
};

// Changes favorite button on initial modal open based on favorite status
const showModal = ev => {
  const gifId = $(ev.target).attr('id');
  const storageFavs = localStorage.getItem('favorites');
  const favorite = !(storageFavs === null || !storageFavs.includes(gifId));
  if (!favorite) {
    $('.favorite-button').removeClass('favorite-gif');
    $('#add-favorite').attr('id', 'remove-favorite');
  } else {
    $('.favorite-button').addClass('favorite-gif');
    $('#remove-favorite').attr('id', 'add-favorite');
  }
};

// Toggles favorite/unfavorite functionality and changes button
const favToggle = ev => {
  const gifId = $(ev.target).attr('favorite-id');
  const storageFavs = localStorage.getItem('favorites');
  const favorite = !(storageFavs === null || !storageFavs.includes(gifId));
  if (!favorite) {
    $('.favorite-button').addClass('favorite-gif');
    $('.favorite-button').attr('id', 'remove-favorite');
    storage.store(gifId, 'favorites');
  } else {
    $('.favorite-button').removeClass('favorite-gif');
    $('.favorite-button').attr('id', 'add-favorite');
    storage.del(gifId, 'favorites');
  }
};

// Clicks favorite button in GIF modal
const clickFavBtn = ev => {
  const gifId = $(ev.target).attr('modal-id');
  $(`[favorite-id=${gifId}]`).trigger('click');
};

export { getGifUrl, showModal, favToggle, clickFavBtn };
