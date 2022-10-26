
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
        image.setAttribute("onclick","selectItem(this)");
        //image.setAttribute("draggable", "true");
        image.addEventListener("mousedown", moveImageStart, false);
    }
}

function moveImageStart(e) {

    if(moving){
      image.classList.remove("imageOnTheMove");
      document.removeEventListener("mousemove", move);
      moving = !moving;
      return;
    }
    
    moving = !moving;
    image = this;

    var rect = image.getBoundingClientRect();
    image.decalX=e.clientX-rect.left;
    image.decalY=e.clientY-rect.top;

    document.addEventListener("mousemove", move, false);
    image.classList.add("imageOnTheMove");
  
  }

  function move(e){
    image.style.left = e.clientX - image.decalX + "px";
    image.style.top = e.clientY - image.decalY + "px";    
  }

function selectItem(image){
    image.classList.toggle("selectedItem");
    image.classList.toggle("unSelectedItem");
}
