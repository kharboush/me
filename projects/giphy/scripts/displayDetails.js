import { fetchGifDetails } from './api.js';

const showDetails = async gifDetails => {
  const $overlayBottom = $(`[overlay-id=${gifDetails.id}]`);
  $overlayBottom.toggleClass('display-none-overlay');
  const storageFavs = localStorage.getItem('favourites');
  const isAdded = (storageFavs === null || !storageFavs.includes(gifDetails.id))? '' : 'favorite-gif';
  $overlayBottom.html(`
    <div class="positions-bottom-icons">
      <span class="uk-icon-button uk-margin-small-left heart-icon 
      ${isAdded}" favourite-id="${gifDetails.id}" uk-icon="heart"></span>
    
     <span class="uk-icon-button uk-margin-small-right coppy-icon" coppy-id="${gifDetails.id}" uk-icon="copy"></span>
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

// mouseleave event
export const removeDetailsBottom = ev => {
  const imageParent = $(ev.target).parent();
  const overlay = imageParent.children('[overlay-id]');
  overlay.addClass('display-none-overlay');
};

// $(ev.target).attr('id')
// $(ev.target).attr('alt')
// $(ev.target).attr('src')

// export const copyToClipboard = url => {
//   const $temp = $('<input>');
//   $('body').append($temp);
//   $temp.val(url).select();
//   document.execCommand('copy');
//   $temp.remove();
// };

// const getGifUrl = ev => {
//
//    copyToClipboard(url);
// }
