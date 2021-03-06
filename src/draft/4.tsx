import React, { useCallback } from 'react';
import {ContentState, Editor, EditorState, DraftHandleValue, AtomicBlockUtils, ContentBlock, convertToRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { toDataURL } from '../utils/toDataUrl';

function Image(props: any) {
  const block = props.block as ContentBlock
  const contentState = props.contentState as ContentState
  const key = block.getEntityAt(0)
  const ent = contentState.getEntity(key)
  const data = ent.getData()
  if (!data.src) {
    return <div contentEditable={false}>
      Loading {data.name}
    </div>
  }
  return <div>
    <img alt={data.name} src={data.src}/>
  </div>
}

export function D4() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createWithContent(ContentState.createFromText('Hello there\nDrop an image please')),
  );

  const handleDroppedFiles = useCallback((selection, files: File[]) => {
    if (files != null && files.length > 0) {
      for (const file of files) {
        let contentState = editorState.getCurrentContent()
        contentState = contentState.createEntity(
          'image',
          'IMMUTABLE',
          {
            name: file.name,
            src: null
          }
        )

        const entityKey = contentState.getLastCreatedEntityKey()

        setEditorState(AtomicBlockUtils.insertAtomicBlock(
          EditorState.push(
            editorState,
            contentState,
            'apply-entity'
          ),
          entityKey,
          ' '
        ))

        setTimeout(async () => {
          const dataurl = await toDataURL(file)
          contentState.mergeEntityData(
            entityKey,
            { src: dataurl}
          )
          // just wrapping this in a timeout for demo purposes
        }, 2000)
      }
      return 'handled'
    }

    return 'not-handled' as DraftHandleValue
  }, [editorState])

  const blockRendererFn = useCallback((block) => {
    if (block.getType() === "atomic") {
      return {
        component: Image,
      };
    }
  }, []);

  // Modifier.setBlockType(content)
  
  console.log(convertToRaw(editorState.getCurrentContent()))

  return <Editor
    handleDroppedFiles={handleDroppedFiles}
    blockRendererFn={blockRendererFn}
    editorState={editorState} onChange={setEditorState}
  />
}
