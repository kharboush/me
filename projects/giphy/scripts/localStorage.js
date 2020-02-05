import * as utils from './utils.js';

export const store = (id, key) => {
  const stored = localStorage.getItem(key);
  const storedId = id;
  if (typeof Storage !== 'undefined') {
    if (stored === null) {
      localStorage.setItem(key, `${storedId}`);
    } else {
      localStorage.setItem(key, `${stored},${storedId}`);
    }
  } else {
    alert(
      "Sorry, your browser does not support Web Storage, so we can't remember that"
    );
  }
};

export const del = (id, key) => {
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
    alert(
      "Sorry, your browser does not support Web Storage, so we can't remember that"
    );
  }
};

// const id = $(ev.target).attr('id');

export const loadUserPrefs = () => {
  if (localStorage.getItem('largegrid') === 'true') {
    utils.viewToggle();
  }
  if (localStorage.getItem('dark') === 'true') {
    utils.darkmodeToggle();
  }
};
