import React from 'react';
import {ContentState, Editor, EditorState, Modifier, EditorBlock} from 'draft-js';
import 'draft-js/dist/Draft.css';

export function D3() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createWithContent(ContentState.createFromText('Hello World')),
  );

  // Modifier.setBlockType(content)

  return <>
    <button onClick={() => {
      const selection = editorState.getSelection()
      const key = selection.getAnchorKey()
      const content = editorState.getCurrentContent()
      const block = content.getBlockForKey(key)
      setEditorState(
        EditorState.push(
          editorState,
          Modifier.setBlockType(
            editorState.getCurrentContent(),
            editorState.getSelection(),
            block.getType() === 'h1' ? "unstyled" : 'h1'
          ),
          'change-block-type'
        ),
      );
    }}>h1</button>
    <Editor
      blockRendererFn={(block) => {
        console.log('hello', block.getType())
        if (block.getType() === 'h1') {
          return {
            component: (props: any) => {
              return <h1>
                <EditorBlock {...props}/>
              </h1>
            }
          }
        }
        console.log(block.getType())
      }}
      editorState={editorState} onChange={setEditorState}
    />
  </>;
}
