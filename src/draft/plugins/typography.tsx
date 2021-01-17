import { RichUtils } from "draft-js";
import {  DraftPluginFactory } from "../5";

export const typography: DraftPluginFactory = (
  editorState,
  setEditorState
) => {
  return {
    handleKeyCommand: (command, editorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);

      if (newState) {
        setEditorState(newState);
        return "handled";
      }

      return "not-handled";
    }
  }
}
