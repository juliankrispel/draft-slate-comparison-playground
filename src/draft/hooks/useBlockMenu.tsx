import { css } from "@emotion/css"
import { ContentBlock, EditorBlock, EditorState, Modifier } from "draft-js"
import { DraftEditorHook } from "../6"
import { useHeaders } from "./useHeaders"

const options = ['h1', 'h2', 'h3', 'unstyled']

export const useBlockMenu: DraftEditorHook = (editorState, setEditorState) => {
  const { blockRendererFn } = useHeaders()

  return {
    blockRendererFn: (block: ContentBlock) => {
      const headers = blockRendererFn(block)
      return {
        component: (props: { block: ContentBlock }) => {
          let content = <EditorBlock {...props} />
          if (headers?.component) {
            content = <headers.component {...props} />
          }

          return <div className={css`
            position: relative;
            align-items: center;
            display: flex;
          `}>
            <div
              contentEditable={false}
              className={css`
              `}>
              <select
              onMouseDown={(event) => {
                console.log('is this reached?')
                event.stopPropagation()
                //event.stopPropagation()
              }}
              value={props.block.getType()}
              onClick={(event) => {
                console.log('on click')
              }}
              onChange={(event) => {
                console.log('what about this')
                setEditorState(
                  EditorState.push(
                    editorState,
                    Modifier.setBlockType(
                      editorState.getCurrentContent(),
                      editorState.getSelection(),
                      event.target.value
                    ),
                    'change-block-type'
                  ),
                );
              }}>
                {options.map(opt => (
                  <option value={opt} key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            {content}
          </div>
        }
      }
    }
  }
}
