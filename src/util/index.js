const randomElement = (arr = []) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const kebab = (str) => {
  return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

const toggleFullScreen = () => {
  let doc = window.document;
  let docEl = doc.documentElement;

  let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  let cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
};

const getOptionText = (optionArray, value) => {
  let idx = -1;
  optionArray.forEach((el, index) => {
    if (el.val === value) {
      idx = index;
    }
  });
  if (idx == -1) {
    return "";
  } else {
    return optionArray[idx].type;
  }
}

const isEmpty = (object) => {
  return object === null || object === undefined || Object.keys(object).length === 0
}

export default {
  randomElement,
  toggleFullScreen,
  kebab,
  getOptionText,
  isEmpty
};