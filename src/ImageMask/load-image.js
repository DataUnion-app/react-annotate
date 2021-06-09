export const loadImage = (imageSrc) => {
  // Check if image is already loaded in a page element
  let image = typeof document !== 'undefined' && Array.from(document.getElementsByTagName("img")).find(
    (img) => img.src === imageSrc
  )

  const canvas = typeof document !== 'undefined' && document.createElement("canvas")
  const ctx = typeof document !== 'undefined' && canvas.getContext("2d")

  if (!image) {
    image = new Image()
    image.crossOrigin = "anonymous"
    image.src = imageSrc
  }

  return new Promise((resolve, reject) => {
    if (image) {
      image.onload = () => {
        canvas.width = image.naturalWidth
        canvas.height = image.naturalHeight
        ctx.drawImage(image, 0, 0)
        const imageData = ctx.getImageData(
          0,
          0,
          image.naturalWidth,
          image.naturalHeight
        )
        resolve(imageData)
      }
    }
  })
}

export default loadImage
