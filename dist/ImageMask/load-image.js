export var loadImage = function loadImage(imageSrc) {
  if (typeof document !== 'undefined') {
    // Check if image is already loaded in a page element
    var _image = Array.from(document.getElementsByTagName("img")).find(function (img) {
      return img.src === imageSrc;
    });

    var _canvas = document.createElement("canvas");

    var _ctx = _canvas.getContext("2d");

    if (!_image) {
      _image = new Image();
      _image.crossOrigin = "anonymous";
      _image.src = imageSrc;
    }
  }

  return new Promise(function (resolve, reject) {
    image.onload = function () {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      ctx.drawImage(image, 0, 0);
      var imageData = ctx.getImageData(0, 0, image.naturalWidth, image.naturalHeight);
      resolve(imageData);
    };
  });
};
export default loadImage;