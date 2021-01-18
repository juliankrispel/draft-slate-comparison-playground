import { EditorState, RichUtils } from "draft-js";
import { useContext } from "react";
import { EditorContext } from "../6";

export const useTypography = () => {
  const { setEditorState } = useContext(EditorContext)
  return {
    handleKeyCommand: (command: string, editorState: EditorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);

      if (newState) {
        setEditorState(newState);
        return "handled";
      }

      return "not-handled";
    }
  }
}
