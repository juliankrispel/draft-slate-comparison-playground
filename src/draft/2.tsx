import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import {ContentState, Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';

export function D2() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createWithContent(ContentState.createFromText('Hello World')),
  );

  const handleKeyCommand = useCallback((command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  }, []);

  return <Editor
    handleKeyCommand={handleKeyCommand}
    editorState={editorState} onChange={setEditorState}
  />;
}
