import * as utils from './utils.js';

// Click EVENTS
// Click on logo
const logo = callback => {
  $('#logo').on('click', callback);
};

// Click on Search close button
const searchClose = (callback1, callback2) => {
  $('#searchCloseBtn')
    .on('click', callback1)
    .on('click', callback2);
};

// Click on Dark Mode button
const darkmodeClick = callback => {
  $('#darkmode').on('click', callback);
};

// Click on Grid button
const toggleViewClick = (callback1, callback2) => {
  $('#grid-toggle')
    .on('click', callback1)
    .on('click', callback2);
};

// Click on Animate button
const toggleAnimClick = (callback1, callback2) => {
  $('#anim-toggle')
    .on('click', callback1)
    .on('click', callback2);
};

// Click on GIF
const onClickGif = callback =>
  $('#gif-list').on('click', 'img', ev => {
    callback(ev);
  });

// Click on modal Copy URL button
const gifCopy = callback =>
  $(document.body).on('click', '.coppy-icon', callback);

// Click on modal Heart button
const favoriteButton = callback =>
  $(document.body).on('click', `.favorite-button`, ev => {
    callback(ev);
  });

// Click on Trending tab
const showTrending = callback => $('#menu-trending').on('click', callback);

// Click on Favorites tab
const showFavorites = callback => $('#menu-favorites').on('click', callback);

// Click on Uploads tab
const showUploads = callback => $('#menu-uploads').on('click', callback);

// Click on Upload GIF card
const onUploadCard = callback =>
  $('#gif-list').on('click', '#upload-input-card', callback);

// Click on Search button
const showSearch = callback => {
  $('#searchBtn')
    .on('click', callback)
    .on('click', () => {
      $(`.menu`).on('click', utils.toggleSearchBar);
    });
};

// Double click on modal to Favorite
const modalImgDblClick = callback => {
  $(document.body).on('dblclick', '.modal-image', callback);
};

// Other Interaction EVENTS
// Hover on GIF
const hoverGif = callback => {
  $(document.body).on('mouseover', '.giphy-gif-grid', callback);
};

// Scroll
const scrollToBottom = callback => {
  $(window).scroll(() => {
    if (
      $(window).scrollTop() + $(window).height() >
      $(document).height() - 700
    ) {
      utils.throttle(callback, 1000);
    }
  });
};

// Upload GIF command
const onUpload = callback => $('#upload-input').change(callback);

// Listener for keystrokes on Search field
const keystroke = callback => {
  $('#navsearch').on(
    'keypress',
    utils.delayInput(
      () => {
        const selected = window.getSelection().toString();
        let text = $('#navsearch').val();
        text = text.replace(selected, '');
        $('#navsearch').val(text);
        callback();
      },
      750, // <== Timer to delay
      callback
    )
  );
};

const preventEnter = $('#navsearch').on('keypress', ev => {
  if (ev.keyCode === 13) {
    ev.preventDefault();
  }
});

// Paste event in searchbox
const paste = callback => {
  $('#navsearch').on('paste', () => {
    callback();
  });
};

export {
  logo,
  searchClose,
  darkmodeClick,
  toggleViewClick,
  toggleAnimClick,
  onClickGif,
  gifCopy,
  favoriteButton,
  showTrending,
  showFavorites,
  showUploads,
  onUpload,
  onUploadCard,
  showSearch,
  hoverGif,
  scrollToBottom,
  modalImgDblClick,
  keystroke,
  paste,
  preventEnter
};

// const selected = window.getSelection().toString();
// let text = $('#navsearch').val();
// text = text.replace(selected, '');
// $('#navsearch').val(text);
