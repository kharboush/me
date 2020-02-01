import * as api from './api.js';
import * as utils from './utils.js';

const searchGif = async () => {
  const searchTerm = $(`#navsearch`).val();
  try {
    const promise = await fetch(
      `${api.server}search?api_key=${api.key}&q=${searchTerm}&limit=30`
    );
    const json = await promise
      .json()
      .then(
        ($('h1')[0].innerHTML = searchTerm
          ? `Results for : '${searchTerm}'`
          : `No input, no results :''(`)
      );
    return json.data;
  } catch (error) {
    alert(error.message);
  }
};

export const searchPopulate = () => {
  utils.refresh(searchGif);
  $(`#navsearch`).val('');
};
