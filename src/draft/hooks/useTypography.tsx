import { RichUtils } from "draft-js";
import { DraftEditorHook } from "../6";

export const useTypography: DraftEditorHook = ( editorState, setEditorState) => {
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
