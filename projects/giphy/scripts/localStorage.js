export const favorites = (/* ev */) => {
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
