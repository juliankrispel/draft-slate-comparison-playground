import React, { useCallback } from 'react';
import {ContentState, Editor, EditorState, DraftHandleValue, AtomicBlockUtils, ContentBlock} from 'draft-js';
import 'draft-js/dist/Draft.css';

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

async function toDataURL(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('loadend', () => {
      resolve(reader.result)
    })
    reader.readAsDataURL(file)
    reader.addEventListener('abort', reject)
    reader.addEventListener('error', reject)
  })
}

export function D4() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createWithContent(ContentState.createFromText('Hello World')),
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
    console.log("hello", block.getType());
    if (block.getType() === "atomic") {
      return {
        component: Image,
      };
    }
    console.log(block.getType());
  }, []);

  // Modifier.setBlockType(content)

  return <Editor
    handleDroppedFiles={handleDroppedFiles}
    blockRendererFn={blockRendererFn}
    editorState={editorState} onChange={setEditorState}
  />
}
