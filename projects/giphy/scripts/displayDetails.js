import { fetchGifDetails } from './api.js';

const showDetails = async gifDetails => {
  const $overlayBottom = $(`[overlay-id=${gifDetails.id}]`);
  $overlayBottom.toggleClass('display-none-overlay');
  const storageFavs = localStorage.getItem('favourites');

  $overlayBottom.html(`
    <div class="positions-bottom-icons">
    ${
      storageFavs === null || !storageFavs.includes(gifDetails.id)
        ? `<span class="uk-icon-button uk-margin-small-left heart-icon" id="add-favorite" uk-icon="heart"></span>`
        : `<span class="uk-icon-button uk-margin-small-left hashtag-icon" id="remove-favorite" uk-icon="hashtag"></span>`
    }
     <span class="uk-icon-button close-icon" id="delete"  uk-icon="close"></span>
     <span class="uk-icon-button uk-margin-small-right coppy-icon" id="url" uk-icon="copy"></span>
    </div>
      `);
};

export const displayDetail = async ev => {
  const id = $(ev.target).attr('id');
  try {
    const gifDetails = await fetchGifDetails(id);
    showDetails(gifDetails);
  } catch (err) {
    console.error(err.message);
  }
};

// $(ev.target).attr('id')
// $(ev.target).attr('alt')
// $(ev.target).attr('src')

export const copyToClipboard = text => {
  const $temp = $('<input>');
  $('body').append($temp);
  $temp.val(text).select();
  document.execCommand('copy');
  $temp.remove();
};
