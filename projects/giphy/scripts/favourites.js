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
      favIds.length <= 5
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

export const favPopulate = () => {
  $('#favs_container').empty();
  utils.populate(showFavourites);
  if (localStorage.getItem('favourites') <= 5) {
    alert(
      `You haven't picked favouite GIF(s) yet, so Faith picked one for you ;)`
    );
  }
};
