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

export const animate = ev => {
  ev.target.src = `https://media2.giphy.com/media/${ev.target.id}/200.gif`;
  setTimeout(() => {
    ev.target.src = `https://media2.giphy.com/media/${ev.target.id}/200_s.gif`;
  }, 8000);
};

const darkmodeFn = () => {
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
};

export const darkmodeToggle = darkmodeFn();
