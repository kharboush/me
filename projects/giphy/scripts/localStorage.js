export const store = (id, key) => {
  const stored = localStorage.getItem(key);
  const storedId = id;

  if (Storage !== undefined) {
    if (stored === null) {
      localStorage.setItem(key, `${storedId}`);
    } else {
      localStorage.setItem(key, [stored, `${storedId}`]);
    }
  } else {
    alert('Sorry, your browser does not support Web Storage, so we can\'t remember that');
  }
};

export const del = (id, key) => {
  const storedId = id;
  let stored = localStorage.getItem(key);
  
  if (Storage !== undefined) {
    if (stored.includes(`${storedId},`)) {
      stored = stored.replace(`${storedId},`, '');
    } else {
      stored = stored.replace(`${storedId}`, '');
    }
    localStorage.setItem(key, stored);
  } else {
    alert('Sorry, your browser does not support Web Storage, so we can\'t remember that');
  }
};
