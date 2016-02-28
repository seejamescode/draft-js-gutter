# Draft.js Gutter
A component that compliments Draft.js with a line number/letter gutter.

## To Use

Install:
```
npm install draft-js draft-js-gutter --save
```

Example:
```
import React from 'react';
import ReactDOM from 'react-dom';
import { EditorGutter } from './Draft-js-gutter';

ReactDOM.render(
  <EditorGutter
    style={{border: '1px solid black'}}
    styleList={{background: '#eee'}} />
, document.getElementById('root'));
```

Props:
- **editor** {object} - Spreads all props to the editor
- **editorState** - Accepts whatever you want the editor component's default state to be. Creates empty editorState if no property specified.
- **list** {object} - List object accepts all [html attributes for ol](https://www.w3.org/wiki/HTML/Elements/ol) elements as properties
- **style** {object}
- **styleEditor** {object}
- **styleList** {object}
- **styleListItem** {object}

## To Contribute

To Develop:
```
git clone https://github.com/yepnamesjames/draft-js-gutter.git
cd draft-js-gutter
npm install
npm start
```
Navigate to localhost:3000.

To Build:
```
npm run build
```

Things that could make this better:
- [ ] Accept the editor as a child component
- [ ] Manipulate the editor's onChange to accept a prop and append necessary function
- [ ] Check line height for each line and apply it to the appropiate gutter text
- [ ] Default themes for styling

## License
MIT
