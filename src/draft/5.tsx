import React from 'react';
import {
  Editor,
  EditorState,
  DefaultDraftBlockRenderMap,
  convertFromRaw,
} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { typography } from './plugins/typography';
import { headers } from './plugins/headers';

export type DraftPlugin = Omit<Draft.EditorProps, "editorState" | "onChange"> & {
  onChange?: (editorState: EditorState) => EditorState
}

export type DraftPluginFactory = (
  editorState: EditorState,
  setEditorState: Draft.EditorProps["onChange"],
) => DraftPlugin

const usePlugins = ({ editorState, setEditorState, plugins }: {
  editorState: EditorState,
  setEditorState: Draft.EditorProps["onChange"],
  plugins: DraftPlugin[],
}): Draft.EditorProps => {
  let blockRenderMap = DefaultDraftBlockRenderMap

  for (const plugin of plugins) {
    if (plugin.blockRenderMap != null) {
      blockRenderMap.merge(plugin.blockRenderMap)
    }
  }

  return {
    editorState,
    blockRenderMap,
    onChange(_editorState) {
      let editorState = _editorState
      for (const plugin of plugins) {
        if (plugin.onChange != null) {
          editorState = plugin.onChange(editorState)
        }
      }
      setEditorState(editorState)
    },
    handleKeyCommand(...args) {
      for (const plugin of plugins) {
        if (plugin.handleKeyCommand != null) {
          const res = plugin.handleKeyCommand(...args)
          if (res === 'handled') {
            return 'handled'
          }
        }
      }
      return 'not-handled'
    },
    blockRendererFn(...args) {
      for (const plugin of plugins) {
        if (plugin.blockRendererFn != null) {
          const res = plugin.blockRendererFn(...args)
          if (res != null) {
            return res
          }
        }
      }
    },

  };
};

export function D5() {
  const raw = {
    "blocks": [
      {
        "key": "1",
        "text": "Header One",
        "type": "h1",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      },
      {
        "key": "2",
        "text": "Header Two",
        "type": "h2",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      },
      {
        "key": "3",
        "text": "Header Three",
        "type": "h3",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      },
      {
        "key": "4",
        "text": "Plain Text",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      }

    ],
    "entityMap": {}
  }

  const [editorState, setEditorState] = React.useState(
    () => EditorState.createWithContent(convertFromRaw(raw)),
  );

  return (
    <Editor
      {...usePlugins({
        editorState,
        setEditorState,
        plugins: [
          typography(editorState, setEditorState),
          headers(),
        ],
      })}
    />
  );
}
