import React, {  } from 'react'
import { useMemo, useState } from "react"
import { Editable, RenderElementProps, Slate, useFocused, useSelected, withReact } from 'slate-react'
import { createEditor, Editor, Node, Transforms } from "slate"
import { withHistory } from 'slate-history'
import { css } from '@emotion/css'
import { toDataURL } from '../utils/toDataUrl'

type ElementProps = RenderElementProps & {
  imageStore: {
    [key: string]: string | null
  }
}

const Element = (props: ElementProps) => {
  const { attributes, children, element } = props

  switch (element.type) {
    case 'image':
      return <ImageElement {...props} />
    default:
      return <p {...attributes}>{children}</p>
  }
}

const ImageElement = ({ attributes, children, element, imageStore }: ElementProps) => {
  const selected = useSelected()
  const focused = useFocused()
  const src = imageStore[element.entity as string]
  if (!src) {
    return <div {...attributes}>
      <div contentEditable={false}>
        Loading
      </div>
      {children}
    </div>
  }

  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          alt="Cat"
          src={src}
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

const insertImage = (editor: Editor, entity: string) => {
  const text = { text: '' }
  const image = { type: 'image', entity, children: [text] }
  Transforms.insertNodes(editor, image)
}

export function S4() {
  const editor = useMemo(() => withReact(withHistory(createEditor())), [])
  const [imageStore, setImageStore] = useState({})

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
        setImageStore({
          ...imageStore,
          [file.name]: null
        })

        insertImage(editor, file.name)

        setTimeout(async () => {
          const src = await toDataURL(file)
          setImageStore({
            ...imageStore,
            [file.name]: src
          })
        }, 3000)
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
        renderElement={(props) => {
          return <Element {...props} imageStore={imageStore}/>
        }}
      />
    </Slate>
}
