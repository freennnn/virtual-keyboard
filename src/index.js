let language = 'en'; // 'ru' and 'en' supported only

let rows = [
  [0, 14],
  [14, 28],
  [28, 41],
  [41, 54],
  [54, 63]
];

let keys = {
  0: ['`', 'BackQuote', 'singleSize'],
  1: ['1', 'Digit1', 'singleSize'],
  2: ['2', 'Digit2', 'singleSize'],
  3: ['3', 'Digit3', 'singleSize'],
  4: ['4', 'Digit4', 'singleSize'],
  5: ['5', 'Digit5', 'singleSize'],
  6: ['6', 'Digit6', 'singleSize'],
  7: ['7', 'Digit7', 'singleSize'],
  8: ['8', 'Digit8', 'singleSize'],
  9: ['9', 'Digit9', 'singleSize'],
  10: ['0', 'Digit10', 'singleSize'],
  11: ['-', 'Minus', 'singleSize'],
  12: ['=', 'Equal', 'singleSize'],
  13: ['delete', 'Delete', 'doubleSize', 'functional'],
  // row 2
  14: ['tab', 'Tab', 'doubleSize', 'functional'],
  15: ['q', 'keyQ', 'singleSize'],
  16: ['w', 'keyW', 'singleSize'],
  17: ['e', 'keyE', 'singleSize'],
  18: ['r', 'keyR', 'singleSize'],
  19: ['t', 'keyT', 'singleSize'],
  20: ['y', 'keyY', 'singleSize'],
  21: ['u', 'keyU', 'singleSize'],
  22: ['i', 'keyI', 'singleSize'],
  23: ['o', 'keyO', 'singleSize'],
  24: ['p', 'keyP', 'singleSize'],
  25: ['[', 'BracketLeft', 'singleSize'],
  26: [']', 'BracketRight', 'singleSize'],
  27: ['\\', 'Backslash', 'singleSize'],
  // row 3
  28: ['caps lock', 'CapsLock', 'doubleSize', 'functional'],
  29: ['a', 'KeyA', 'singleSize'],
  30: ['s', 'KeyS', 'singleSize'],
  31: ['d', 'KeyD', 'singleSize'],
  32: ['f', 'KeyF', 'singleSize'],
  33: ['g', 'KeyG', 'singleSize'],
  34: ['h', 'KeyH', 'singleSize'],
  35: ['j', 'KeyJ', 'singleSize'],
  36: ['k', 'KeyK', 'singleSize'],
  37: ['l', 'KeyL', 'singleSize'],
  38: [':', 'Semicolon', 'singleSize'],
  39: ['\'', 'Quote', 'singleSize'],
  40: ['return', 'Enter', 'doubleSize', 'functional'],
  // row 4
  41: ['shift', 'ShiftLeft', 'doubleSize', 'functional'],
  42: ['z', 'KeyZ', 'singleSize'],
  43: ['x', 'KeyX', 'singleSize'],
  44: ['c', 'KeyC', 'singleSize'],
  45: ['v', 'KeyV', 'singleSize'],
  46: ['b', 'KeyB', 'singleSize'],
  47: ['n', 'KeyN', 'singleSize'],
  48: ['m', 'KeyM', 'singleSize'],
  49: [',', 'Comma', 'singleSize'],
  50: ['.', 'Period', 'singleSize'],
  51: ['/', 'Slash', 'singleSize'],
  52: ['↑', 'ArrowUp', 'singleSize', 'functional'],
  53: ['shift', 'ShiftRight', 'doubleSize', 'functional'],
  // row 5
  54: ['control', 'ControlLeft', 'doubleSize', 'functional'],
  55: ['alt', 'AltLeft', 'singleSize', 'functional'],
  56: ['cmd', 'CommandLeft', 'singleSize', 'functional'],
  57: ['space', 'Space', 'sixSize', 'functional'],
  58: ['cmd', 'CommandRight', 'singleSize', 'functional'],
  59: ['←', 'ArrowLeft', 'singleSize', 'functional'],
  60: ['↓', 'ArrowDown', 'singleSize', 'functional'],
  61: ['→', 'ArrowRight', 'singleSize', 'functional'],
  62: ['alt', 'AltRight', 'singleSize', 'functional']
};

let keysArray = Object.keys(keys);


window.onload = function() {
  console.log('Hello my Pets enthusiast');
  // petsJSON.forEach(pet => {
  //     console.log(pet.name, pet.img);
  // });
  renderUI();
};

function renderUI() {
  // let template = '';

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'wrapper';

  const title = document.createElement('p');
  title.className = 'title';
  title.textContent = 'Virtual Keyboard - do not tap too hard!';
  contentWrapper.append(title);

  const textArea = document.createElement('textarea');
  textArea.className = 'text-area';
  textArea.setAttribute('rows', 6);
  textArea.setAttribute('columns', 50);
  contentWrapper.append(textArea);

  contentWrapper.append(createKeyboard())

  const osDescription = document.createElement('p');
  osDescription.className = 'os-description';
  osDescription.textContent = 'The keyboard is created and designed on Mac OS';
  contentWrapper.append(osDescription);

  const language = document.createElement('p');
  language.className = 'language';
  language.textContent = 'To change language use left ctrl + alt combination';
  contentWrapper.append(language);

  const body = document.querySelector('body');
  body.append(contentWrapper);
}




function createKeyboard() {

  function createKey(id, readableIdentifier, value, sizeClass, functionalClass) {
    const key = document.createElement('button');
    key.classList.add('key', `${readableIdentifier}`, `${sizeClass}`, `${functionalClass}`);
    key.setAttribute('data-id', id);
    key.textContent = value;
    return key;
  }

  function createRowAtIndex(i) {
    const row = document.createElement('div');
    row.className = 'keyboard__row';
    row.setAttribute('data-id', i);
    const rowKeys = keysArray.slice(rows[i][0], rows[i][1]);
    rowKeys.forEach(keyID => {
      const keyData = keys[keyID];
      const functionalClass = keyData[3] ? keyData[3] : 'symbol';
      let keyButton = createKey(keyID, keyData[1], keyData[0], keyData[2], functionalClass);
      row.append(keyButton);
    });
    return row;
  }



  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  for (let i=0; i< 5; i++) {
    keyboard.append(createRowAtIndex(i));
  }

  return keyboard;
}
