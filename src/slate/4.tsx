import React, { CSSProperties, useCallback, useEffect } from 'react'
import { useMemo, useState } from "react"
import { Editable, RenderElementProps, RenderLeafProps, Slate, useFocused, useSelected, withReact } from 'slate-react'
import { createEditor, Editor, Node, Transforms } from "slate"
import { css } from '@emotion/css'

const Element = (props: RenderElementProps) => {
  const { attributes, children, element } = props

  switch (element.type) {
    case 'image':
      return <ImageElement {...props} />
    default:
      return <p {...attributes}>{children}</p>
  }
}

const ImageElement = ({ attributes, children, element }: RenderElementProps) => {
  const selected = useSelected()
  const focused = useFocused()
  if (!element.url) {
    return <div {...attributes}>
      <div contentEditable={false}>
        Loading
      </div>
    </div>
  }

  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          alt="Cat"
          src={element.url as string}
          className={css`
            display: block;
            max-width: 100%;
            max-height: 20em;
            box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
          `}
        />
      </div>
      {children}
    </div>
  )
}

const insertImage = (editor: Editor, url: string) => {
  const text = { text: '' }
  const image = { type: 'image', url, children: [text] }
  Transforms.insertNodes(editor, image)
}

export function S4() {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([
    {
      children: [
        {
          text: "Hello there",
        },
      ],
    },
    {
      children: [
        {
          text: "Drop an image here please",
        },
      ],
    },
  ]);

  editor.insertData = data => {
    const { files } = data

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader()
        const [mime] = file.type.split('/')

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result?.toString()
            if (url) {
              insertImage(editor, url)
            }
          })

          reader.readAsDataURL(file)
        }
      }
    }
  }

  return <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <Editable
        onDrop={(a) => [
          console.log(a)
        ]}
        renderElement={Element}
      />
    </Slate>
}
