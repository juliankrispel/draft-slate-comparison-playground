import { CSSProperties } from "react";
import { Editor } from "slate";
import { RenderLeafProps, useEditor } from "slate-react";
import { EditablePropsHook } from "../6";

const styles: {[key: string]: CSSProperties } = {
  b: { fontWeight: 'bold' },
  i: { fontStyle: 'italic' },
  u: { textDecoration: 'underline' }
}

export const useTypography: EditablePropsHook = () => {
  const editor = useEditor()
  return {
    renderLeaf: (props: RenderLeafProps) => {
      const { text, ...rest } = props.leaf;
      const style = Object.keys(rest).reduce(
        (acc, key) => ({ ...acc, ...styles[key] }),
        {}
      );

      return (
        <span {...props.attributes} style={style}>
          {props.children}
        </span>
      );
    },
    onKeyDown: ({ key, metaKey }) => {
      const marks = Editor.marks(editor) || {};

      if (metaKey == null || styles[key] == null) {
        return;
      }

      if (marks[key] != null) {
        Editor.removeMark(editor, key);
      } else {
        Editor.addMark(editor, key, true);
      }
    },
  };
}
