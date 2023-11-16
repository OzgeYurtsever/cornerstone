/**
 * Sets size and clears canvas
 *
 * @param {Object} enabledElement Cornerstone Enabled Element
 * @param {Object} image Image to be rendered
 * @returns {void}
 * @memberof rendering
 */
export default function (enabledElement, image) {
  const renderCanvas = enabledElement.renderingTools.renderCanvas;

  console.log("----> image");
  console.log(" ---> image.width", image.width);
  console.log(" ---> image.height", image.height);
  
  // Resize the canvas
  renderCanvas.width = image.width;
  renderCanvas.height = image.height;
  
  const canvasContext = renderCanvas.getContext('2d', {
    desynchronized: true
  });
  
  // NOTE - we need to fill the render canvas with white pixels since we
  // control the luminance using the alpha channel to improve rendering performance.
  canvasContext.fillStyle = 'white';
  canvasContext.fillRect(0, 0, renderCanvas.width, renderCanvas.height);
  
  const renderCanvasData = canvasContext.getImageData(0, 0, image.width, image.height);
  
  console.log(' ----> canvas context');
  console.log(canvasContext);
  
  enabledElement.renderingTools.renderCanvasContext = canvasContext;
  enabledElement.renderingTools.renderCanvasData = renderCanvasData;
}
