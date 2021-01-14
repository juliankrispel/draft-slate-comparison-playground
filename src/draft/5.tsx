import React, { useCallback } from 'react';
import {
  ContentState,
  Editor,
  EditorState,
  DraftHandleValue,
  AtomicBlockUtils,
  ContentBlock,
  convertToRaw,
  DefaultDraftBlockRenderMap,
} from 'draft-js';
import 'draft-js/dist/Draft.css';

type Plugin = Omit<Draft.EditorProps, "editorState" | "onChange"> & {
  onChange?: (editorState: EditorState) => EditorState
}


/**
 * composePlugins
 * @description
 * takes a list of plugins and returns EditorProps
 * 
 * @param plugins 
 * @param onChange 
 * @param editorState 
 * 
 */
const composePlugins = (
  plugins: Plugin[],
  onChange: Draft.EditorProps["onChange"],
): Omit<Draft.EditorProps, "editorState"> => {
  let blockRenderMap = DefaultDraftBlockRenderMap

  for (const plugin of plugins) {
    if (plugin.blockRenderMap != null) {
      blockRenderMap.merge(plugin.blockRenderMap)
    }
  }

  return {
    blockRenderMap,
    onChange(_editorState) {
      let editorState = _editorState
      for (const plugin of plugins) {
        if (plugin.onChange != null) {
          editorState = plugin.onChange(editorState)
        }
      }
      onChange(editorState)
    },
    handleBeforeInput(chars, editorState, eventTimeStamp) {
      for (const plugin of plugins) {
        if (plugin.handleBeforeInput != null) {
          const res = plugin.handleBeforeInput(chars, editorState, eventTimeStamp)
          if (res === 'handled') {
            return 'handled'
          }
        }
      }
      return 'not-handled'
    },
    handleDrop(...args) {
      for (const plugin of plugins) {
        if (plugin.handleDrop != null) {
          const res = plugin.handleDrop(...args)
          if (res === 'handled') {
            return 'handled'
          }
        }
      }
      return 'not-handled'
    },
    handlePastedText(...args) {
      for (const plugin of plugins) {
        if (plugin.handlePastedText != null) {
          const res = plugin.handlePastedText(...args)
          if (res === 'handled') {
            return 'handled'
          }
        }
      }
      return 'not-handled'
    },
    handleDroppedFiles(...args) {
      for (const plugin of plugins) {
        if (plugin.handleDroppedFiles != null) {
          const res = plugin.handleDroppedFiles(...args)
          if (res === 'handled') {
            return 'handled'
          }
        }
      }
      return 'not-handled'
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
    handlePastedFiles(...args) {
      for (const plugin of plugins) {
        if (plugin.handlePastedFiles != null) {
          const res = plugin.handlePastedFiles(...args)
          if (res === 'handled') {
            return 'handled'
          }
        }
      }
      return 'not-handled'
    },
    handleReturn(...args) {
      for (const plugin of plugins) {
        if (plugin.handleReturn != null) {
          const res = plugin.handleReturn(...args)
          if (res === 'handled') {
            return 'handled'
          }
        }
      }
      return 'not-handled'
    }
  };
};

export function D5() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createWithContent(ContentState.createFromText('Hello there\nDrop an image please')),
  );

  return <Editor
    editorState={editorState}
    onChange={setEditorState}
  />
}
