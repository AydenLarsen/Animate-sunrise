//Set up canvas and properties
let cnv = document.getElementById("cnv");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;
let sun = {
  x: 200,
  y: 300,
  r: 20,
  red: 255,
  green: 0,
  blue: 0,
};
let cloud = {
  x1: 150,
  y1: 100,
  x2: 200,
  y2: 150,
};
requestAnimationFrame(animate);
function animate() {
  //Begin drawing on canvas
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 400, 400);

  ctx.fillStyle = `rgb(${sun.red}, ${sun.green}, ${sun.blue})`;
  ctx.beginPath();
  ctx.arc(sun.x, sun.y, sun.r, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.fillRect(0, 300, 400, 100);

  let cloudIMG = document.getElementById("cloud");
  ctx.drawImage(cloudIMG, cloud.x1, cloud.y1);
  ctx.drawImage(cloudIMG, cloud.x2, cloud.y2);

  cloud.x1 -= 1;
  cloud.x2 += 1;
  sun.y -= 0.8;
  sun.r += 0.2;
  sun.green += 0.6;

  requestAnimationFrame(animate);
}
