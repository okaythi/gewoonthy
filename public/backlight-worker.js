let canvas = null;
let ctx = null;

// The smoothing factor determines how fast the ambilight responds to scene changes.
// Lower value = slower, smoother transitions (more temporal smoothing).
// Higher value = more instantaneous, flashy (might flicker).
const SMOOTHING_FACTOR = 0.15; 

self.onmessage = function (e) {
  if (e.data.type === 'INIT') {
    canvas = e.data.canvas;
    ctx = canvas.getContext('2d', { 
      alpha: false, // Opaque canvas is faster
      willReadFrequently: false 
    });
  } else if (e.data.type === 'FRAME') {
    if (!ctx) {
      if (e.data.frame) e.data.frame.close();
      return;
    }
    
    const frame = e.data.frame;
    
    // Draw the new frame over the existing canvas with alpha blending.
    // This creates an extremely efficient, hardware-accelerated temporal easing
    // without needing to loop over pixel data arrays manually.
    ctx.globalAlpha = SMOOTHING_FACTOR;
    
    // We draw the entire frame into our tiny 64x64 canvas.
    // Because the canvas sits directly behind the video element and is scaled outwards,
    // only the edges of this canvas will bleed out from behind the video,
    // perfectly matching the border colors.
    ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
    
    // Explicitly release the ImageBitmap memory to prevent garbage collection pauses
    frame.close();
  }
};
