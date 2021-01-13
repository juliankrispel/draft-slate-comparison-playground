export async function toDataURL(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('loadend', () => {
      resolve(reader.result)
    })
    reader.readAsDataURL(file)
    reader.addEventListener('abort', reject)
    reader.addEventListener('error', reject)
  })
}
