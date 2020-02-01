import * as api from './api.js';

export const populate = async (callback, number = 30, offset) => {
  const $container = $('#gif-list');
  const gifs = await callback(number, offset);
  gifs.forEach(gif => {
    $container.append(`
      <div uk-scrollspy="cls:uk-animation-fade" class="uk-card uk-flex uk-flex-center uk-flex-middle giphy-gif-grid">
      <img class="uk-responsive-width uk-responsive-height" uk-toggle="target: #modal" style="width: 100%; border-radius: 8px;" id="${gif.id}" gif-id="${gif.id}" src="${gif.images.fixed_height_still.url}" alt="${gif.title}/>
      </div>">
    `);
  });
};

export const refresh = (args) => {
  $('#gif-list').empty();
  populate(args)
}

export const animate = ev => {
  ev.target.src = `https://media2.giphy.com/media/${ev.target.id}/200.gif`;
  setTimeout(() => {
    ev.target.src = `https://media2.giphy.com/media/${ev.target.id}/200_s.gif`;
  }, 8000);
};

export const darkmodeToggle = (() => {
  let dark;
  const toggle = () => {
    if (dark === true) {
      $('.uk-background-secondary')
        .addClass('uk-background-default')
        .removeClass('uk-background-secondary');

      $('.uk-light')
        .addClass('uk-dark')
        .removeClass('uk-light');
      dark = false;
    } else {
      $('.uk-background-default')
        .addClass('uk-background-secondary')
        .removeClass('uk-background-default');

      $('.uk-dark')
        .addClass('uk-light')
        .removeClass('uk-dark');
      dark = true;
    }
  };
  return toggle;
})();

export const viewToggle = (() => {
  let largegrid;
  const toggle = () => {
    console.log($('#gif-list'))
    if (largegrid === true) {
      refresh(api.fetchTrending)
      $('#grid-toggle').attr('uk-icon', 'grid')
      $('#gif-list').removeClass().addClass("uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid uk-flex-top uk-flex-wrap-top")
      largegrid = false;
    } else {
      refresh(api.fetchTrending)
      $('#grid-toggle').attr('uk-icon', 'thumbnails')
      $('#gif-list').removeClass().addClass("uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-grid uk-flex-top uk-flex-wrap-top")
      largegrid = true;
    }
  };
  return toggle;
})();