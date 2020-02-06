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
  let anim = !JSON.parse(localStorage.getItem('animated'));
  const animаtionToggle = () => {
    anim = !anim;
    localStorage.setItem('animated', anim);
    // console.log(`user set to ${anim}`);
    const populated = async (callback, number = 30, offset) => {
      localStorage.setItem('animated', anim);
      const $container = $('#gif-list');
      let gifs = await callback(number, offset);
      // eslint-disable-next-line no-unused-expressions
      !Array.isArray(gifs) ? (gifs = [gifs]) : '';
      gifs.forEach(gif => {
        const title = gif.title.replace('GIF', '').split(' by ')[0];
        const author = gif.title.split(' by ')[1]
          ? gif.title.split(' by ')[1]
          : 'Anonymous';
        const authorProfile =
          gif.user === undefined ? 'javascript:void(0)' : gif.user.profile_url;
        /*eslint-disable*/
        $container.append(`
          <div uk-scrollspy="cls:uk-animation-fade; repeat: true" style="position:relative" class="giphy-gif-grid details-overlay">
            <img class="uk-responsive-width uk-responsive-height uk-animation-slide-bottom-medium giphy-gif" width="500" height="500" id="${gif.id}" 
              data-src="${anim ? gif.images.fixed_height.url : gif.images.fixed_height_still.url}" alt="${gif.title}" 
              uk-tooltip="${gif.title}" href="#modal-center-${gif.id}" uk-toggle uk-img>
            <div id="modal-center-${gif.id}" class="uk-flex-top" uk-modal>
              <div modal-id="modal-center-${gif.id}" class="uk-modal-dialog ${$('html').attr('class')} uk-modal-body 
                uk-animation-slide-bottom-small uk-margin-auto-vertical uk-padding-remove${$('html').attr('class')} modal">
                <img class="uk-responsive-width uk-responsive-height uk-animation-fade modal-image" modal-id="${
                gif.id}" width="300" height="300" data-src="${gif.images.fixed_height.url}" alt="${gif.title}" uk-img>
                <div class="uk-container uk-padding-small">
                  <div class="uk-float-left uk-margin-right">
                    <p class="uk-margin-remove uk-text-emphasis">${title}</p>
                    <div class="uk-margin-remove">
                      <p class="uk-display-inline uk-text-small uk-text-meta">by</p>
                      <a href="${authorProfile}" class="uk-display-inline uk-link-muted uk-link-text uk-text-small uk-text-italic">${author}</a>
                    </div>
                  </div>
                  <div class="uk-float-right modal-buttons">
                    <button type="button" class="uk-icon-button uk-icon favorite-button heart-icon" uk-icon="heart" favorite-id="${gif.id}" 
                      id="add-favorite" uk-tooltip="Favorite"></button>
                    <button type="button" class="uk-icon-button coppy-icon uk-margin-small-left" coppy-id="${gif.id}" uk-icon="copy" 
                      uk-tooltip="Copy URL" gif-url="${gif.images.original.url}"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `);
        /*eslint-disable*/
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
      localStorage.setItem('dark', false);
      dark = false;
    } else {
      $('.uk-background-default')
        .addClass('uk-background-secondary')
        .removeClass('uk-background-default');

      $('.uk-dark')
        .addClass('uk-light')
        .removeClass('uk-dark');
      localStorage.setItem('dark', true);
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
      localStorage.setItem('largegrid', false);
      largegrid = false;
    } else {
      $('#grid-toggle').attr('uk-icon', 'grid');
      $('#gif-list')
        .removeClass()
        .addClass(
          'uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-grid uk-flex-top uk-flex-wrap-top'
        );
      localStorage.setItem('largegrid', true);
      largegrid = true;
    }
  };
  return toggle;
})();

// Delay event with timer and reset timer on same event within duration
const delayInput = (fn, ms) => {
  let timer = 0;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(fn.bind(this, ...args), ms || 0);
  };
};

const toggleSearchBar = () => {
  $('#searchhider').trigger('click');
};

const cancelPageEvents = () => {
  $('#anim-toggle').off();
  $('#grid-toggle').off();
  $('.menu').off('click', toggleSearchBar);
  $(window).off();
};

export {
  darkmodeToggle,
  viewToggle,
  animToggle,
  clearSearch,
  throttle,
  refresh,
  populate,
  animate,
  delayInput,
  cancelPageEvents,
};
