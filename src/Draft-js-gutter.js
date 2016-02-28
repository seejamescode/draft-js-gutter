import React, { Component, PropTypes } from 'react';
import {Editor, EditorState} from 'draft-js';

export class EditorGutter extends Component {
  static defaultProps = {
    style: {},
    styleEditor: {},
    styleList: {},
    styleListItem: {}
  }

  constructor(props) {
    super(props);
    this.state = {editorState: props.editorState || EditorState.createEmpty()};
  }

  onChange(editorState) {
    this.setState({editorState: editorState});
  }

  render() {

    return (
      <div style={Object.assign(this.props.style, {
          display: 'flex'
        })}>
        <ol {...this.props.list}
          style={Object.assign(this.props.styleList, {
            margin: 0,
            padding: 0
          })}>
          {[...Array(this.state.editorState.getCurrentContent().getBlockMap().size)].map((x, i) =>
            <li key={i}
              {...this.props.listItem}
              style={Object.assign(this.props.styleListItem, {
                listStylePosition: 'inside'
              })} />
          )}
        </ol>
        <div style={{flex: 1}}>
          <Editor {...this.props.editor}
            style={this.props.styleEditor}
            editorState={this.state.editorState}
            onChange={this.onChange.bind(this)} />
        </div>
      </div>
    );
  }
}
