import * as api from './api.js';
import * as utils from './utils.js';

// CHANGE THIS BETWEEN PAGES
const heading = 'Uploads';
const fetch = api.fetchUploads;

const randomMessage = () => {
  /* eslint-disable-next-line */
  UIkit.notification(
    `<p class="uk-text-small">You haven't uploaded, so Faith picked a random for you!</p>`,
    { pos: 'bottom-left', timeout: 3000 }
  );
};

// COPY THIS
export const refresh = () => {
  $('.uk-heading:first').text(`${heading}`);
  if (localStorage.getItem('favorites') === null) {
    utils.throttle(randomMessage, 1000);
  }
  $('#spinner').hide();
  utils.refresh(fetch);
  const $container = $('#gif-list');
  $container.append(
    `<div class="giphy-gif-grid details-overlay uk-scrollspy-inview uk-animation-fade" uk-scrollspy="cls:uk-animation-fade">
    <div class="uk-card-primary uk-padding" style="border-radius:8px">
    <span class="uk-margin-small-bottom" uk-icon="icon: cloud-upload"></span><br>
    <span class="uk-text-middle uk-margin-top">Upload a GIF by dropping it here or</span>
    <div uk-form-custom>
        <input type="file">
        <span class="uk-link" id="upload-button">selecting it!</span>
    </div>
</div>
    </div>
    </div>`
  );
};

export const nextPage = (() => {
  const offsetNum = 30;

  const addCount = () => {
    // offsetNum += 30;
    // utils.populate(fetch, undefined, offsetNum);
  };
  return addCount;
})();

export const upload = ev => {
  const file = ev.target.files[0];
  const formData = new FormData();
  formData.append('file', file);
  console.log(formData.get('file'));
  api.fetchUpload(formData);
};

export const clickOnUploas = ev => {
  // const clicked = ev.target();
  console.log(ev);
};
