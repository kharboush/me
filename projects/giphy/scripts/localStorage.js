export const store = (ev, key) => {
  const stored = localStorage.getItem(key);
  const id = $(ev.target).attr('id');
  if (typeof Storage !== 'undefined') {
    if (stored === null) {
      localStorage.setItem(key, `${id}`);
    } else {
      localStorage.setItem(key, [stored, `${id}`]);
    }
  } else {
    alert(
      "Sorry, your browser does not support Web Storage, so we can't remember that"
    );
  }
};

export const del = (ev, key) => {
  let stored = localStorage.getItem(key);
  const id = $(ev.target).attr('id');
  if (typeof Storage !== 'undefined') {
    if (stored.includes(`${id},`)) {
      stored = stored.replace(`${id},`, '');
    } else {
      stored = stored.replace(`${id}`, '');
    }
    localStorage.setItem(key, stored);
  } else {
    alert(
      "Sorry, your browser does not support Web Storage, so we can't remember that"
    );
  }
};

// const id = $(ev.target).attr('id');
