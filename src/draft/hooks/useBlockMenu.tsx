import { css } from "@emotion/css"
import { ContentBlock, EditorBlock, EditorState, Modifier } from "draft-js"
import { memo, useCallback, useContext } from "react"
import { EditorContext } from "../6"
import { useHeaders } from "./useHeaders"

const options = ['h1', 'h2', 'h3', 'unstyled']

const Select = memo((props: {
    block: ContentBlock;
}) => {
  const { editorState, setEditorState } = useContext(EditorContext)
  const onChange = (event: any) => {
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
    event.preventDefault()
  }

  return (
    <select
      value={props.block.getType()}
      onMouseDown={(event) => {
        console.log("onMouseDown");
        event.stopPropagation();
        // event.preventDefault();
      }}
      onClick={(event) => {
        console.log("on click");
        event.stopPropagation();
        //event.preventDefault();
      }}
      onMouseUp={(event) => {
        console.log("on click");
        event.stopPropagation();
        //event.preventDefault();
      }}

      onChange={onChange}
    >
      {options.map((opt) => (
        <option value={opt} key={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
})

export const useBlockMenu = () => {
  const { blockRendererFn } = useHeaders()

  function Component(props: { block: ContentBlock }) {
    const headers = blockRendererFn(props.block)
    
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
        onMouseDown={(event) => event.stopPropagation()}
        className={css`
        `}>
          <Select
            block={props.block}
          />
      </div>
      {content}
    </div>
  }  

  const fn = useCallback(() => {
    return {
      component: Component
    }
  }, [])

  return {
    blockRendererFn: fn
  }
}
