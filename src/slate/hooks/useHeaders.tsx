import { RenderElementProps } from "slate-react"

export const useHeaders = () => {
  return {
    renderElement: (props: RenderElementProps) => {
      if (props.element.type === 'h1') {
        return <h1 {...props.attributes}>{props.children}</h1>
      } else if (props.element.type === 'h2') {
        return <h2 {...props.attributes}>{props.children}</h2>
      } else if (props.element.type === 'h3') {
        return <h3 {...props.attributes}>{props.children}</h3>
      }

      return <p>{props.children}</p>
    }
  }
}

