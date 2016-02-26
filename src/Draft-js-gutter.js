import React, { Component, PropTypes } from 'react';
import {Editor, EditorState} from 'draft-js';

export class EditorGutter extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
  }

  onChange(editorState) {
    this.setState({editorState: editorState});
  }

  render() {
    return (
      <div style={{
        display: 'flex'
      }}>
        <ol {...this.props.list} style={{
          margin: 0,
          padding: 0
        }}>
          {[...Array(this.state.editorState.getCurrentContent().getBlockMap().size)].map((x, i) =>
            <li key={i} style={{
              marginLeft: `calc(${(this.props.start + i).toString().length} * .6rem)`
            }}/>
          )}
        </ol>
        <div style={{flex: 1}}>
          <Editor editorState={this.state.editorState} onChange={this.onChange.bind(this)} />
        </div>
      </div>
    );
  }
}
