export const key = 'GbhsFBVGYXSrSwTiw3FdFVY1EpsmkWxw';
export const server = 'http://api.giphy.com/v1/gifs/';

export const fetchTrending = async (number, offsetAmount) => {
  const offset = !offsetAmount ? `` : `&offset=${offsetAmount}`;
  const promise = await fetch(
    `${server}trending?api_key=${key}&limit=${number}${offset}`
  );
  const json = await promise.json();
  return json.data;
};

export const fetchGifDetails = async id => {
  const response = await fetch(`${server}${id}?api_key=${key}`);
  const result = await response.json();
  return result.data;
};

export const fetchFavourites = async () => {
  const favIds = localStorage.getItem('favourites');
  try {
    const promise =
      favIds === null
        ? await fetch(`${server}random?api_key=${key}&limit=30`)
        : await fetch(`${server}search?api_key=${key}&ids=${favIds}&limit=30`);
    const json = await promise.json();
    return [json.data];
  } catch (error) {
    alert(error.message);
  }
};

export const fetchSearch = async () => {
  const searchTerm = $(`#navsearch`).val();
  try {
    const promise = await fetch(
      `${server}search?api_key=${key}&q=${searchTerm}&limit=30`
    );
    const json = await promise
      .json()
      // .then(
      //   $('h1').text(
      //     searchTerm
      //       ? `Results for : '${searchTerm}'`
      //       : `No input, no results :''(`
      //   )
      // );
    return json.data;
  } catch (error) {
    alert(error.message);
  }
};
// export { key, server, fetchTrending, fetchGifDetails };
