/* eslint-disable no-undef */
import { store } from './localStorage.js';

const key = 'GbhsFBVGYXSrSwTiw3FdFVY1EpsmkWxw';
const server = 'http://api.giphy.com/v1/gifs';
const uploadUrl = 'https://upload.giphy.com/v1/gifs';

// Request Tranding GIF
const fetchTrending = async (number, offsetAmount) => {
  const offset = !offsetAmount ? `` : `&offset=${offsetAmount}`;
  try {
    const promise = await fetch(
      `${server}/trending?api_key=${key}&limit=${number}${offset}`
    );
    const json = await promise.json();
    return json.data;
  } catch (error) {
    console.log(error.message);
    setTimeout(fetchTrending(number, offsetAmount), 5000);
  }
};

// Request Favorites GIF
const fetchFavorites = async () => {
  const favIds = localStorage.getItem('favorites');
  try {
    const promise =
      favIds === null
        ? await fetch(`${server}/random?api_key=${key}`)
        : await fetch(`${server}?api_key=${key}&ids=${favIds}`);
    const json = await promise.json();
    return json.data;
  } catch (error) {
    console.log(error.message);
    setTimeout(fetchFavorites(), 5000);
  }
};

// Request uploads page
const fetchUploads = async () => {
  const uploadIds = localStorage.getItem('uploads');
  try {
    const promise =
      uploadIds === null
        ? await fetch(`${server}/random?api_key=${key}`)
        : await fetch(`${server}?api_key=${key}&ids=${uploadIds}`);
    const json = await promise.json();
    // console.log(json.data);
    return json.data;
  } catch (error) {
    console.log(error.message);
    setTimeout(fetchUploads(), 5000);
  }
};

// Request Search
const fetchSearch = async () => {
  const searchTerm = $(`#navsearch`).val();
  try {
    const promise = await fetch(
      `${server}/search?api_key=${key}&q=${searchTerm}&limit=30`
    );
    const json = await promise.json();
    return json.data;
  } catch (error) {
    alert(error.message);
    setTimeout(fetchSearch(), 5000);
  }
};

// Request Upload GIF
const gifUpload = async gif => {
  try {
    const response = await fetch(`${uploadUrl}?api_key=${key}`, {
      method: 'POST',
      body: gif,
    });
    const result = await response.json();
    const { id } = result.data;
    store(id, 'uploads');
    UIkit.notification({
      message: 'Successfully uploaded',
      status: 'success',
    });
  } catch (err) {
    UIkit.notification({
      message: 'Uploading failed!',
      status: 'danger',
    });
  }
};

export { fetchTrending, fetchFavorites, fetchUploads, fetchSearch, gifUpload };
