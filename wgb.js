

function onLoad(){
    handleWgbInit();
}

function handleWgbInit(){
    handleWgbImages();
    handleWgbCanvas();
}

function handleWgbImages(){
    images=document.getElementsByClassName("wgb.image");
    for(image of images){
        image.classList.add("image");
        image.setAttribute("draggable", "true");
        image.addEventListener("dragstart", moveImageStart, false);
        image.addEventListener("dragend", moveImageEnd, false);
        addResizeCorner(image);
    }
}

function addResizeCorner(item){
  let el = document.createElement("div");
  el.style.top=item.style.top+item.style.height;
  el.classList.add("corner");
  item.parentElement.appendChild(el);
}

function handleWgbCanvas(){
    canvas=document.getElementsByClassName("wgb.canvas");
    for(canva of canvas){
        canva.addEventListener("dragover", allowDrop, false);
        canva.classList.add("canvas");
    }
}

function allowDrop(e) {
  e.preventDefault();
}

function moveImageStart(e) {
    image = this;
    var rect = image.getBoundingClientRect();
    image.decalX=e.clientX-rect.left;
    image.decalY=e.clientY-rect.top;
    document.addEventListener("drag", moveImage, false);
}

function moveImageEnd(e) {
  document.removeEventListener("drag", moveImage); 
}

function moveImage(e){
  if(e.clientX != 0 && e.clientY != 0){
    image.style.left = e.clientX - image.decalX + "px";
    image.style.top = e.clientY - image.decalY + "px";    
  }
}
