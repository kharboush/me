import { fetchGifDetails } from './api.js';

const showDetails = gifDetails => {
  const $modalContainer = $('#select-modal');
  $modalContainer.empty();
  $modalContainer.append(`
  <p>Title: ${gifDetails.title}</p>
  <p>User name: ${gifDetails.username}</p>
  <p>URL: ${gifDetails.url}</p>
  `);
};

export const displayDetail = async ev => {
  const id = $(ev.target).attr('id');

  try {
    const gifDetails = await fetchGifDetails(id);
    console.log(gifDetails);
    showDetails(gifDetails);
  } catch (err) {
    console.error(err.message);
  }
};
