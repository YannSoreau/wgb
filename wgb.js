
function onLoad(){
    handleWgbInit();
}

function handleWgbInit(){
    handleWgbImages();
}
function handleWgbImages(){
    let images=document.getElementsByClassName("wgb.image");
    for(let i=0;i<images.length;i++){
        let image = images[i];
        image.className="image unSelectedImage";
        image.setAttribute("onclick","changeSelected(this)");
        image.setAttribute("draggable","true");
        item.addEventListener('dragstart', dragImageStart);
    }
}

function dragImageStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.classList.add('hide');
}

function changeSelected(image){
    image.classList.toggle('unSelectedImage');
    image.classList.toggle('selectedImage');
}
