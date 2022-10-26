
var moving = false;

function onLoad(){
    handleWgbInit();
}

function handleWgbInit(){
    handleWgbImages();
}
function handleWgbImages(){
    images=document.getElementsByClassName("wgb.image");
    for(image of images){
        image.className="wgb.image image unSelectedItem";
        image.setAttribute("onmousedown","selectItem(this)");
        //image.setAttribute("draggable", "true");
        image.addEventListener("dragstart", moveImageStart, false);
    }
}

function moveImageStart(e) {

    console.log("test");
    if(moving){
        console.log("test2");
      image.classList.remove("imageOnTheMove");
      image.removeEventListener("dragmove", move);
      moving = !moving;
      return;
    }
    
    moving = !moving;
    image = this;

    var rect = image.getBoundingClientRect();
    image.decalX=e.clientX-rect.left;
    image.decalY=e.clientY-rect.top;

    image.addEventListener("dragmove", move, false);
    image.classList.add("imageOnTheMove");
  
  }

  function move(e){
    console.log("test23");
    image.style.left = e.clientX - image.decalX + "px";
    image.style.top = e.clientY - image.decalY + "px";    
  }

function selectItem(image){
    image.classList.add("selectedItem");
    image.classList.remove("unSelectedItem");
}
