import React from 'react';
import ReactDOM from 'react-dom';
import { EditorGutter } from './Draft-js-gutter';

ReactDOM.render(<div>
    <EditorGutter
      style={{
        border: '1px solid black'
      }}
      styleList={{
        background: '#eee'
      }} />
    <br />
    <EditorGutter
      list={{
        type: 'A'
      }}
      style={{
        border: '1px solid black'
      }}
      styleList={{
        background: '#eee'
      }} />
    <br />
    <EditorGutter
      list={{
        reversed: true,
        start: 10
      }}
      style={{
        border: '1px solid black'
      }}
      styleList={{
        background: '#eee'
      }} />
  </div>, document.getElementById('root'));