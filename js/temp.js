const image = ' https://www.proremodeler.com/sites/proremodeler/files/Jasper%20copy.jpg';

image.onload = function() {
  // The image has loaded successfully
  console.log('Image is fully loaded.');
};

image.onerror = function() {
  // The image failed to load
  console.log('Image failed to load.');
};

image.src = imageUrl; // Start loading the image