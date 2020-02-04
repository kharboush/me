import * as storage from './localStorage.js';

export const favToggle = ev => {
  const gifId = $(ev.target).attr('favorite-id');
  console.log($(ev.target).attr('favorite-id'));
  const storageFavs = localStorage.getItem('favorites');
  const favorite = !(storageFavs === null || !storageFavs.includes(gifId));
  if (favorite === false) {
    $('.favorite-button').attr('id', 'remove-favorite');
    $('.favorite-button').addClass('favorite-gif');
    storage.store(gifId, 'favorites');
  } else {
    $('.favorite-button').attr('id', 'add-favorite');
    $('.favorite-button').removeClass('favorite-gif');
    storage.del(gifId, 'favorites');
  }
};

export const showDetails = ev => {
  const gifId = $(ev.target).attr('id');
  const storageFavs = localStorage.getItem('favorites');
  const favorite = !(storageFavs === null || !storageFavs.includes(gifId));
  if (favorite === false) {
    $('.favorite-button').removeClass('favorite-gif');
    $('#add-favorite').attr('id', 'remove-favorite');
  } else {
    $('.favorite-button').addClass('favorite-gif');
    $('#remove-favorite').attr('id', 'add-favorite');
  }
};

export const copyToClipboard = url => {
  const $temp = $('<input>');
  $('body').append($temp);
  $temp.val(url).select();
  document.execCommand('copy');
  $temp.remove();
};

export const getGifUrl = ev => {
  const gifUrl = $(ev.target).attr('gif-url');
  console.log($(ev.target).attr('gif-url'));
  copyToClipboard(gifUrl);
};

// export const favoriteButtonToggle = ev => {
//   let favorite;
//   const toggle = () => {
//     if (favorite) {
//       storage.del(favId, 'favorite');
//       $(favId).removeClass('heart-icon.favorite-gif');
//       $(favId).addClass('heart-icon');
//     } else {
//       storage.store(favId, 'favorite');
//       $(favId).removeClass('heart-icon');
//       $(favId).addClass('heart-icon.favorite-gif');
//     }
//     favorite = !favorite;
//   };
//   return toggle;
// };

// const $overlayBottom = $(`[overlay-id=${gifDetails.id}]`);
// $overlayBottom.toggleClass('display-none-overlay');
// $overlayBottom.html(`
//     `);
// export const displayDetail = async ev => {
//   const id = $(ev.target).attr('id');
//   try {
//     const gifDetails = await fetchGifDetails(id);
//     showDetails(gifDetails);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// mouseleave ev
// export const removeDetailsBottom = ev => {
//   const imageParent = $(ev.target).parent();
//   const overlay = imageParent.children('[overlay-id]');
//   overlay.addClass('display-none-overlay');
// };

// $(ev.target).attr('id')
// $(ev.target).attr('alt')
// $(ev.target).attr('src')

// if ($(ev.target).attr('favorite-id') !== undefined) {
//   gifId = $(ev.target).attr('favorite-id');
// } else if (
//   $(ev.target)
//     .parent()
//     .attr('favorite-id') !== undefined
// ) {
//   gifId = $(ev.target)
//     .parent()
//     .attr('favorite-id');
// } else if (
//   $(ev.target)
//     .parent()
//     .parent()
//     .attr('favorite-id') !== undefined
// ) {
//   gifId = $(ev.target)
//     .parent()
//     .parent()
//     .attr('favorite-id');
// }
