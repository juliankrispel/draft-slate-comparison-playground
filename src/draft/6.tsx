import React, { useContext } from 'react';
import {convertFromRaw, Editor, EditorProps, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { useTypography } from './hooks/useTypography';
import { useBlockMenu } from './hooks/useBlockMenu';

export type DraftEditorHook = (editorState: EditorState, setEditorState: EditorProps["onChange"]) => Omit<EditorProps, "editorState" | "onChange">

export const EditorContext = React.createContext({
  editorState: EditorState.createEmpty(),
  setEditorState: (editorState: EditorState) => {},
  getEditorState: () => EditorState.createEmpty(),
});

export function EditorWithProps(){
  const { editorState, setEditorState } = useContext(EditorContext)

  return <Editor
    {...useTypography()}
    {...useBlockMenu()}
    {...{ editorState, onChange: setEditorState }}
  />
}

export function D6() {
  const raw = {
    "blocks": [
      {
        "key": "1",
        "text": "Header One",
        "type": "h1",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      },
      {
        "key": "2",
        "text": "Header Two",
        "type": "h2",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      },
      {
        "key": "3",
        "text": "Header Three",
        "type": "h3",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      },
      {
        "key": "4",
        "text": "Plain Text",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      }

    ],
    "entityMap": {}
  }

  const [editorState, setEditorState] = React.useState(
    () => EditorState.createWithContent(convertFromRaw(raw)),
  );

  const getEditorState = () => {
    return editorState
  }

  return (
    <EditorContext.Provider value={{ editorState, setEditorState, getEditorState }}>
      <EditorWithProps />
    </EditorContext.Provider>
  );
}
