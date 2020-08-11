
for(var i =0; i<4; i++){

document.querySelectorAll(".drum")[i].addEventListener("mouseover", mouseOver);
document.querySelectorAll(".drum")[i].addEventListener("mouseout", mouseOut);
}
function mouseOver()
{
  event.target.classList.add("highlight1");
}
function mouseOut()
{
  event.target.classList.remove("highlight1");
}
