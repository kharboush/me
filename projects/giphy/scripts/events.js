export const search = callback => {
  $('#searchBtn').on('click', callback);
};

export const darkmodeClick = callback => {
  $('#darkmode').on('click', callback);
};

export const toggleviewClick = callback => {
  $('#grid-toggle').on('click', callback);
};

export const hoverGif = callback => {
  $(document).on('mouseover', '.giphy-gif-grid', callback);
};

export const scroll = callback => {
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 600) {
      callback();
    }
  });
};

// Listener for keystrokes
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

export const onClickGif = callback =>
  $('#gif-list').on('click', '[gif-id]', callback);

export const addFavourite = callback =>
  $('button_addFavorite').on('click', /* '[gif-id]' */ callback);

export const showFavorite = callback =>
  $('#menu-favorites').on('click', callback);

export const showTrending = callback =>
  $('#menu-trending').on('click', callback);
