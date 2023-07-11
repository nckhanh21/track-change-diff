
// add text to div with id="display"
const Diff = require('diff');
const text_add = document.getElementById('display');
text_add.innerHTML = 'Hello World!';


const one = 'beep boop',
    other = 'beep boob blah',
    color = '';

let span = null;

const diff = diff.diffChars(one, other),
    display = document.getElementById('display'),
    fragment = document.createDocumentFragment();
    
diff.forEach((part) => {
    // green for additions, red for deletions
    // grey for common parts
    const color = part.added ? 'green' :
        part.removed ? 'red' : 'grey';
    span = document.createElement('span');
    span.style.color = color;
    span.appendChild(document
        .createTextNode(part.value));
    fragment.appendChild(span);
    }
);

display.appendChild(fragment);
display.appendChild(document.createElement('br'));
display.appendChild(document.createElement('br'));

// Path: diff-words.js