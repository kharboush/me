const key = 'GbhsFBVGYXSrSwTiw3FdFVY1EpsmkWxw';
const server = 'http://api.giphy.com/v1/gifs/';

const fetchTrending = async (number, offsetAmount) => {
  const offset = !offsetAmount ? `` : `&offset=${offsetAmount}`;
  const promise = await fetch(
    `${server}trending?api_key=${key}&limit=${number}${offset}`
  );
  const json = await promise.json();
  return json.data;
};

const fetchGifDetails = async id => {
  const response = await fetch(`${server}${id}?api_key=${key}`);
  const result = await response.json();
  return result.data;
};

export { key, server, fetchTrending, fetchGifDetails };
