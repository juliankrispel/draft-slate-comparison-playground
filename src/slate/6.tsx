import React from 'react'
import { useMemo, useState } from "react"
import { Editable, Slate, withReact } from 'slate-react'
import { createEditor, Editor, Node } from "slate"
import { EditableProps } from 'slate-react/dist/components/editable'
import { useTypography } from './hooks/useTypography'
import { useBlockMenu } from './hooks/useBlockMenu'

export type EditablePropsHook = () => EditableProps

function EditableWithContext() {
  return <Editable
    {...useBlockMenu()}
    {...useTypography()}
  />
}

export function S6() {

  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([
    {
      type: "h1",
      children: [
        {
          text: "header one",
        },
      ],
    },
    {
      type: "h2",
      children: [
        {
          text: "header two",
        },
      ],
    },
    {
      type: "h3",
      children: [
        {
          text: "header three",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Just body text",
        },
      ],
    }
  ]);
  
  return <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <EditableWithContext />
    </Slate>
}
