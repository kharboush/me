import { store } from './localStorage.js';

export const key = 'GbhsFBVGYXSrSwTiw3FdFVY1EpsmkWxw';
export const server = 'http://api.giphy.com/v1/gifs';
export const uploadUrl = 'https://upload.giphy.com/v1/gifs';

export const fetchTrending = async (number, offsetAmount) => {
  const offset = !offsetAmount ? `` : `&offset=${offsetAmount}`;
  try {
    const promise = await fetch(
      `${server}/trending?api_key=${key}&limit=${number}${offset}`
    );
    const json = await promise.json();
    return json.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchFavorites = async () => {
  const favIds = localStorage.getItem('favorites');
  try {
    const promise =
      favIds === null ?
      await fetch(`${server}/random?api_key=${key}`) :
      await fetch(`${server}?api_key=${key}&ids=${favIds}`);
    const json = await promise.json();
    return json.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchUploads = async () => {
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
  }
};

// export const fetchUploads = async () => {
//   const uploadIds = localStorage.getItem('uploads');
//   try {
//     const promise = await fetch(`${server}?api_key=${key}&ids=${uploadIds}`);
//     console.log(promise)
//     const json = await promise.json();
//     return json.data;
//   } catch (error) {
//     alert(error.message);
//   }
// };

export const fetchSearch = async () => {
  const searchTerm = $(`#navsearch`).val();
  try {
    const promise = await fetch(
      `${server}/search?api_key=${key}&q=${searchTerm}&limit=30`
    );
    const json = await promise.json();
    return json.data;
  } catch (error) {
    alert(error.message);
  }
};

export const fetchUpload = async gif => {
  // const uploadIds = localStorage.getItem('uploads');
  try {
    const response = await fetch(`${uploadUrl}?api_key=${key}`, {
      method: 'POST',
      body: gif,
    });
    const result = await response.json();
    const id = result.data.id;
    // console.log(id);
    store(id, 'uploads');
  } catch (err) {
    alert(err.message);
    // console.log(err.message);
  }
};

// export const fetchGifDetails = async id => {
//   const response = await fetch(`${server}/${id}?api_key=${key}`);
//   const result = await response.json();
//   return result.data;
// };
