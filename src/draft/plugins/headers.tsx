import { ContentBlock, EditorBlock } from "draft-js"

export function headers() {
  return {
    blockRendererFn: (block: ContentBlock) => {
      console.log('hello', block.getType())
      if (block.getType() === 'h1') {
        return {
          component: (props: any) => {
            return <h1>
              <EditorBlock {...props}/>
            </h1>
          }
        }
      } else if (block.getType() === 'h2') {
        return {
          component: (props: any) => {
            return <h2>
              <EditorBlock {...props}/>
            </h2>
          }
        }
      } else if (block.getType() === 'h3') {
        return {
          component: (props: any) => {
            return <h3>
              <EditorBlock {...props}/>
            </h3>
          }
        }
      }
    }
  }
}
