import * as utils from './utils.js';

const randomMessage = () => {
  /* eslint-disable-next-line */
  UIkit.notification(
    `<p class="uk-text-small">Sorry, your browser does not support Web Storage, so we can't remember that!</p>`,
    { pos: 'bottom-left', timeout: 3000 }
  );
};

// Receives an ID and key and adds it to the string, without overwriting
const store = (id, key) => {
  const stored = localStorage.getItem(key);
  const storedId = id;
  if (typeof Storage !== 'undefined') {
    if (stored === null) {
      localStorage.setItem(key, `${storedId}`);
    } else {
      localStorage.setItem(key, `${stored},${storedId}`);
    }
  } else {
    utils.throttle(randomMessage, 1000);
  }
};

// Receives an ID and key and deletes it from the string
const del = (id, key) => {
  let stored = localStorage.getItem(key);
  const storedId = id;
  if (typeof Storage !== 'undefined') {
    if (stored === storedId) {
      localStorage.removeItem(key);
    } else {
      if (stored.includes(`,${storedId}`)) {
        stored = stored.replace(`,${storedId}`, '');
      } else {
        stored = stored.replace(`${storedId},`, '');
      }
      localStorage.setItem(key, stored);
    }
  } else {
    utils.throttle(randomMessage, 1000);
  }
};

// Checks the user's View and Dark Mode preferences and changes on page load.
const loadUserPrefs = () => {
  if (localStorage.getItem('largegrid') === 'true') {
    utils.viewToggle();
  }
  if (localStorage.getItem('dark') === 'true') {
    utils.darkmodeToggle();
  }
};

export { store, del, loadUserPrefs };
