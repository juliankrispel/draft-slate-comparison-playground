import React, { CSSProperties, useCallback } from 'react'
import { useMemo, useState } from "react"
import { Editable, RenderLeafProps, Slate, withReact } from 'slate-react'
import { createEditor, Editor, Node } from "slate"

const styles: {[key: string]: CSSProperties } = {
  b: { fontWeight: 'bold' },
  i: { fontStyle: 'italic' },
  u: { textDecoration: 'underline' }
}

export function S2() {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([{
    children: [{
      text: 'Hello Slate'
    }]
  }])

  const onKeyDown = useCallback(({ key, metaKey }) => {
    const marks = Editor.marks(editor) || {}

    if (metaKey == null || styles[key] == null) {
      return
    }

    if (marks[key] != null) {
      Editor.removeMark(editor, key)
    } else {
      Editor.addMark(editor, key, true)
    }
  }, [editor]);


  const renderLeaf = useCallback((props: RenderLeafProps) => {
    const { text, ...rest } = props.leaf
    const style = Object.keys(rest).reduce(
      (acc, key) => ({ ...acc, ...styles[key] }),
      {}
    );

    return <span {...props.attributes} style={style}>
      {props.children}
    </span>
  }, [])

  console.log({ value })

  return <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <Editable
        onKeyDown={onKeyDown}
        renderLeaf={renderLeaf}
      />
    </Slate>
}
