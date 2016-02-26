import React from 'react';
import ReactDOM from 'react-dom';
import { EditorGutter } from '../dist/Draft-js-gutter';

ReactDOM.render(<EditorGutter list={{
  compact: true,
  reversed: true,
  start: 500,
  type: 'A'
}} />, document.getElementById('root'));