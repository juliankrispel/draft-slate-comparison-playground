import React, { CSSProperties, useCallback } from 'react'
import { useMemo, useState } from "react"
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react'
import { createEditor, Editor, Node, Transforms } from "slate"

export function S3() {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([{
    children: [{
      text: 'Hello Slate'
    }]
  }])

  const renderElement = useCallback(({ element, children, ...props}: RenderElementProps) => {
    if (element.type === 'h1') {
      return <h1 {...props}>{children}</h1>
    } else if (element.type === 'h2') {
      return <h1 {...props}>{children}</h1>
    } 

    return <p {...props}>{children}</p>
  }, [])

  return <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <button onClick={() => {
        Transforms.setNodes(editor, { type: 'h1' })
      }}>
        h1
      </button>
      <Editable
        renderElement={renderElement}
      />
    </Slate>
}
