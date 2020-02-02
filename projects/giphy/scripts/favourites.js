import * as api from './api.js';
import * as utils from './utils.js';

export const favouriteAdd = (/* ev */) => {
  const storageFavs = localStorage.getItem('favourites');
  console.log(storageFavs);
  const id = /* $(ev.target).attr('gif-id') */ 1465;
  if (typeof Storage !== 'undefined') {
    if (storageFavs === null) {
      localStorage.setItem('favourites', `${id}`);
    } else {
      localStorage.setItem('favourites', [storageFavs, `${id}`]);
    }
  } else {
    alert(
      "Sorry, your browser does not support Web Storage, so we can't remember what are your favourites"
    );
  }
};

const showFavourites = async () => {
  const favIds = localStorage.getItem('favourites');
  try {
    const promise =
      favIds === null
        ? await fetch(`${api.server}random?api_key=${api.key}&limit=30`)
        : await fetch(
            `${api.server}search?api_key=${api.key}&ids=${favIds}&limit=30`
          );
    const json = await promise.json();
    return json.data;
  } catch (error) {
    alert(error.message);
  }
};

export const favPopulate = async () => {
  $('#gif-list').empty();
  $('h1')[0].innerHTML = 'Favorite(s)';
  if (localStorage.getItem('favourites') === null) {
    alert(
      `You haven't picked favouite GIF(s) yet, so Faith picked one for you ;)`
    );
    const gif = await showFavourites();
    $('#gif-list').append(`
    <div uk-scrollspy="cls:uk-animation-fade" class="uk-card uk-flex uk-flex-center uk-flex-middle giphy-gif-grid">
    <img class="uk-responsive-width uk-responsive-height" uk-toggle="target: #modal" style="width: 100%; border-radius: 8px;" id="${gif.id}" gif-id="${gif.id}" src="${gif.images.fixed_height_still.url}" alt="${gif.title}/>
    </div>">
  `);
  } else {
    utils.populate(showFavourites);
  }
};
