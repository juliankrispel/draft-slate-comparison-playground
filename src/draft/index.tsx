import React from 'react';
import ReactDOM from 'react-dom';
import {ContentState, Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

function DraftEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createWithContent(ContentState.createFromText('Hello Draft')),
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

export default DraftEditor
