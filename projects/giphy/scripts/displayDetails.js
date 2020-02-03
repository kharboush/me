// import { fetchGifDetails } from './api.js';

export const displayDetail = async ev => {
  const id = $(ev.target).attr('id');
  const $overlayBottom = $(`[overlay-id=${id}]`);
  $overlayBottom.toggleClass('display-none-overlay');
  const storageFavs = localStorage.getItem('favourites');

  $overlayBottom.html(`
    <div class="positions-bottom-icons uk-position-z-index">
    ${
      storageFavs === null || !storageFavs.includes(id)
        ? `<button class="uk-icon-button uk-margin-small-left uk-position-z-index heart-icon" type="button" id="addFavorite" style="z-index: 2" uk-icon="heart"></button>`
        : `<button class="uk-icon-button uk-margin-small-left uk-position-z-index hashtag-icon" type="button" id="removeFavorite" style="z-index: 2" uk-icon="hashtag"></button>`
    }
     <button class="uk-icon-button close-icon" uk-icon="close" type="button" style="z-index: 2;"></button>
     <button class="uk-icon-button uk-margin-small-right coppy-icon" uk-icon="copy"type="button" style="z-index: 2;"></button>
    </div>
      `);
};

// const showDetails = async gifDetails => {
//   const $overlayBottom = $(`[overlay-id=${gifDetails.id}]`);
//   $overlayBottom.toggleClass('display-none-overlay');
//   const storageFavs = localStorage.getItem('favourites');

//   $overlayBottom.html(`
//     <div class="positions-bottom-icons uk-position-z-index">
//     ${
//       storageFavs === null || !storageFavs.includes(gifDetails.id)
//         ? `<button class="uk-icon-button uk-margin-small-left uk-position-z-index heart-icon" type="button" id="addFavorite"uk-icon="heart"></span>`
//         : `<button class="uk-icon-button uk-margin-small-left uk-position-z-index hashtag-icon" type="button" id="removeFavorite" uk-icon="hashtag"></span>`
//     }
//      <button class="uk-icon-button coppy-icon" uk-icon="close"></span>
//      <button class="uk-icon-button uk-margin-small-right uk-position-z-index coppy-icon" type="button" uk-icon="copy"></span>
//     </div>
//       `);
// };

// export const displayDetail = async ev => {
//   const id = $(ev.target).attr('id');
//   try {
//     const gifDetails = await fetchGifDetails(id);
//     showDetails(gifDetails);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// $(ev.target).attr('id')
// $(ev.target).attr('alt')
// $(ev.target).attr('src')

// export const copyToClipboard = text => {
//   const $temp = $('<input>');
//   $('body').append($temp);
//   $temp.val(text).select();
//   document.execCommand('copy');
//   $temp.remove();
// };
