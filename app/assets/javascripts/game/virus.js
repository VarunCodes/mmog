function Virus(x, y, size, colour) {
  this.x = x
  this.y = y
  this.size = size
  this.colour = colour
 }


//  var bounce = -10;
//  // for (var m = 0; m < 1; m++) {
//  //   viruses.push({
//  //     x: Math.random() * canvas.width,
//  //     y: Math.random() * canvas.height,
//  //     vx: Math.random() * 10 - 5,
//  //     vy: Math.random() * 10 - 5
//  //   })
//
//
// var i, virus;
//  for (i = 0; i < 10; i++) {
//    virus = viruses[i];
//    context.beginPath();
//    context.arc(virus.x, virus.y, 3, 0, Math.PI * 2, false);
//    context.fillStyle = "rgb(" +
//      Math.floor(Math.random() * 256) + "," +
//      Math.floor(Math.random() * 256) + "," +
//      Math.floor(Math.random() * 256) + ")";
//    context.fill();
//  }
//
//   function update() {
//
//     var i, virus;
//     for (i = 0; i < viruses.length; i++) {
//       virus = viruses[i];
//       virus.x += virus.vx;
//       virus.y += virus.vy;
//
//       if (virus.x > canvas.width) {
//         virus.x = canvas.width;
//         virus.vx *= bounce;
//       } else if (virus.x < 0) {
//         virus.x = 0;
//         virus.vx *= bounce;
//       }
//
//       if (virus.y > canvas.height) {
//         virus.y = canvas.height;
//         virus.vy *= bounce;
//       } else if (virus.y < 0) {
//         virus.y = 0;
//         virus.vy *= bounce;
//       }
//     }
//   };
