// console.log("In the JS file");

document.getElementsByTagName("button")[0].onclick = function(){
  // console.log("In the Red Button Click");
  document.body.style.backgroundColor = "#BD4932";
};

document.getElementsByTagName("button")[1].onclick = function(){
  // console.log("In the Blue Button Click");
  document.body.style.backgroundColor = "#2D4463";
};
