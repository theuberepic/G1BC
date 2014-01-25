var canvas = $('#canvas')[0];
var ctx = canvas.getContext('2d');

img = new Image();
img.src = 'G1BCFiles/img/placeholder.jpg';

ctx.drawImage(img, 100, 150);