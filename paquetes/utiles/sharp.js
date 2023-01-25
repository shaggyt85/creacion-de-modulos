const sharp = require('sharp');

sharp('original.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');

    //sirve para redimenzionar imagenes o cambiar a blanco y negros