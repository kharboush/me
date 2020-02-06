import * as api from './api.js';
import * as utils from './utils.js';

// CHANGE THIS BETWEEN PAGES
const heading = 'Uploads';
const fetch = api.fetchUploads;

const randomMessage = () => {
  /* eslint-disable-next-line */
  UIkit.notification(
    `<p class="uk-text-small">You haven't uploaded, so Faith picked at random!</p>`,
    { pos: 'bottom-left', timeout: 3000 }
  );
};

// COPY THIS
export const refresh = () => {
  $('.uk-heading:first').text(`${heading}`);
  $('#gif-list').attr('uk-grid', 'masonry: true; parallax: 0');
  if (localStorage.getItem('favorites') === null) {
    utils.throttle(randomMessage, 1000);
  }
  $('#spinner').hide();
  utils.refresh(fetch);
  const $container = $('#gif-list');
  $container.append(
    `<div class="giphy-gif-grid details-overlay uk-scrollspy-inview uk-animation-fade" uk-scrollspy="cls:uk-animation-fade">
    <div class="uk-card-primary uk-padding" style="border-radius:8px" id="upload-input-card">
    <span class="uk-margin-small-bottom" uk-icon="icon: cloud-upload"></span><br>
    <span class="uk-text-middle uk-margin-top">Click to upload a GIF</span>
    <div uk-form-custom>
    <input type="file" id="upld-input" name="upload-file">
        
    </div>
</div>
    </div>
    </div>`
  );
};

// Package uploaded file to formData object
export const upload = ev => {
  const file = ev.target.files[0];
  const formData = new FormData();
  formData.append('file', file);
  // console.log(formData.get('file'));
  api
    .gifUpload(formData)
    .then(() => refresh())
    .then($('#spinner').show())
    .then(
      setTimeout(() => {
        $('#spinner').hide();
      }, 3000)
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

// <<
// << << < Updated upstream

export const clickOnUploads = ev => {
  $('#upload-input').click();
};
