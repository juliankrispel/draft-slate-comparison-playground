import { css } from "@emotion/css"
import { Transforms } from "slate"
import { RenderElementProps, useEditor } from "slate-react"
import { useHeaders } from "./useHeaders"

const options = ['h1', 'h2', 'h3', 'p']

export const useBlockMenu = () => {
  const editor = useEditor()
  const { renderElement } = useHeaders(editor)

  return {
    renderElement: function RenderElement(props: RenderElementProps)  {
      const content = renderElement(props)
      
      return <div className={css`
        position: relative;
        align-items: center;
        display: flex;
      `}>
        <div
          contentEditable={false}
          className={css`
          `}>
          <select value={props.element.type as string} onChange={(event) => {
            Transforms.setNodes(editor, { type: event.target.value }, {
            })
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
