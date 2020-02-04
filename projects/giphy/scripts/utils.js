const scrollToTop = () => {
  $('html, body').animate({ scrollTop: 0 }, 200);
};

const throttle = (() => {
  let timerId;
  const throttleFn = function(func, delay, ...args) {
    if (timerId) {
      return;
    }
    timerId = setTimeout(function() {
      func(...args);
      timerId = undefined;
    }, delay);
  };
  return throttleFn;
})();

const animToggle = (() => {
  let anim = true;
  const animаtionToggle = () => {
    anim = !anim;
    const populated = async (callback, number = 30, offset) => {
      const $container = $('#gif-list');
      const gifs = await callback(number, offset);
      gifs.forEach(gif => {
        $container.append(`
        <div uk-scrollspy="cls:uk-animation-fade" style="position:relative" class="giphy-gif-grid details-overlay">
        <img class="uk-responsive-width uk-responsive-height" style="width: 100%; border-radius:8px; position:relative" id="${
          gif.id
        }" src="${
          anim ? gif.images.fixed_height.url : gif.images.fixed_height_still.url
        }" alt="${gif.title}" uk-tooltip="${gif.title}" href="#modal-center-${
          gif.id
        }" uk-toggle>
        
        <div id="modal-center-${gif.id}" class="uk-flex-top" uk-modal>
        <div modal-id="modal-center-${
          gif.id
        }" class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-padding-remove">
          <img class="uk-responsive-width uk-responsive-height" style="width: 100%; border-radius:8px; position:relative" modal-id="${
            gif.id
          }" src="${gif.images.fixed_height.url}" alt="${gif.title}">
          <p>${gif.title}</p>

          <div></div>
          <span type="button" class="favorite-button uk-icon-button uk-margin-small-left heart-icon" favorite-id="${
            gif.id
          }" id="add-favorite" uk-tooltip="Favorite" uk-icon="heart"></span>
    
          <span type="button" class="uk-icon-button uk-margin-small-right coppy-icon" coppy-id="${
            gif.id
          }" uk-icon="copy" uk-tooltip="Copy URL" gif-url="${
          gif.images.original.url
        }"></span>
        </div>
        </div>

        </div>
        `);
      });
    };
    return populated;
  };
  return animаtionToggle;
})();

const populate = animToggle();

const refresh = args => {
  scrollToTop();
  $('#gif-list').empty();
  populate(args);
};
const animate = ev => {
  ev.target.src = `https://media2.giphy.com/media/${ev.target.id}/200.gif`;
  setTimeout(() => {
    ev.target.src = `https://media2.giphy.com/media/${ev.target.id}/200_s.gif`;
  }, 8000);
};

const clearSearch = () => {
  $('#navsearch').val('');
};

const darkmodeToggle = (() => {
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
})();

const viewToggle = (() => {
  let largegrid;
  const toggle = () => {
    if (largegrid === true) {
      $('#grid-toggle').attr('uk-icon', 'thumbnails');
      $('#gif-list')
        .removeClass()
        .addClass(
          'uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid uk-flex-top uk-flex-wrap-top'
        );
      largegrid = false;
    } else {
      $('#grid-toggle').attr('uk-icon', 'grid');
      $('#gif-list')
        .removeClass()
        .addClass(
          'uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-grid uk-flex-top uk-flex-wrap-top'
        );
      largegrid = true;
    }
  };
  return toggle;
})();

export {
  darkmodeToggle,
  viewToggle,
  animToggle,
  clearSearch,
  throttle,
  refresh,
  populate,
  animate,
};
