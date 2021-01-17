import React, { FormEvent, useCallback } from 'react'
import { useMemo, useState } from "react"
import { Editable, Slate, useEditor, withReact } from 'slate-react'
import { createEditor, Editor, Node } from "slate"
import { EditableProps, RenderElementProps, RenderLeafProps } from 'slate-react/dist/components/editable'
import { headers } from './plugins/headers'
import { typography } from './plugins/typography'

export type SlatePlugin = Omit<EditableProps, "renderElement" | "renderLeaf">  & {
  renderElement?: (props: RenderElementProps) => void | JSX.Element
  renderLeaf?: (props: RenderLeafProps) => void | JSX.Element
}

export type SlatePluginFactory = (editor: Editor) => SlatePlugin

function PluginsEditable({ plugins }: {
  plugins: SlatePlugin[]
}) {
  const renderElement = useCallback((props: RenderElementProps) => {
    for (const plugin of plugins) {
      if (plugin.renderElement != null) {
        const content = plugin.renderElement(props)
        if (content != null) {
          return content
        }
      }
    }
    const { children, ...rest } = props
    return <p {...rest}>{children}</p>
  }, [plugins])

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    for (const plugin of plugins) {
      if (plugin.renderLeaf != null) {
        const content = plugin.renderLeaf(props)
        if (content != null) {
          return content
        }
      }
    }
    const { attributes, children} = props
    return <span {...attributes}>{children}</span>
  }, [plugins])

  const onBeforeInput = useCallback((event) => {
    for (const plugin of plugins) {
      if (plugin.onBeforeInput != null) {
        plugin.onBeforeInput(event)
      }
    }
  }, [plugins])

  const onKeyDown = useCallback((event) => {
    for (const plugin of plugins) {
      if (plugin.onKeyDown != null) {
        plugin.onKeyDown(event)
      }
    }
  }, [plugins])


  return <Editable
    renderElement={renderElement}
    renderLeaf={renderLeaf}
    onKeyDown={onKeyDown}
    onBeforeInput={onBeforeInput}
  />
}

export function S5() {
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

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <PluginsEditable
        plugins={[headers(editor), typography(editor)]}
      />
    </Slate>
  );
}
