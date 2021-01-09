import React from 'react'
import { useMemo, useState } from "react"
import { Editable, Slate, withReact } from 'slate-react'
import { createEditor, Node } from "slate"

export default function SlateEditor() {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([{
    type: 'paragraph',
    children: [{
      text: 'Hello Slate'
    }]
  }])
  return <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <Editable />
    </Slate>
}
