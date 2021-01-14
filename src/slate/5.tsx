import React from 'react'
import { useMemo, useState } from "react"
import { Editable, Slate, withReact } from 'slate-react'
import { createEditor, Editor, Node } from "slate"
import { EditableProps } from 'slate-react/dist/components/editable'

type SlatePlugin = EditableProps & {
  decorateEditor: (editor: Editor) => Editor
}

function composePlugins(plugins: SlatePlugin) {
  
}

export function S5() {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([{
    children: [{
      text: 'Hello Slate'
    }]
  }])

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable />
    </Slate>
  );
}
