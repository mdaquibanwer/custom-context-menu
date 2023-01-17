const customContextMenu = document.querySelector(".container");
const shareMenu = customContextMenu.querySelector(".share-menu")

document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();

    let x = e.offsetX, y = e.offsetY; // offsetX return the x-coordinate of the mouse pointer and offsetY return the y-coordinate of the mouse pointer
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let customCMWidth = customContextMenu.offsetWidth;
    let customCMWHeight = customContextMenu.offsetHeight;

    // if x is greater than screen width - context menu width  - sharemenu width then show the share menu to the left else show it to the right
    if(x > (screenWidth - customCMWidth - shareMenu.offsetWidth)){
        shareMenu.style.left = "-200px"
    }else{
        shareMenu.style.left = ""
        shareMenu.style.right = "-200px"
    }

    x = x > screenWidth - customCMWidth ? screenWidth - customCMWidth : x;
    y = y > screenHeight - customCMWHeight ? screenHeight - customCMWHeight : y;
    customContextMenu.style.left = `${x}px`
    customContextMenu.style.top = `${y}px`
    customContextMenu.style.visibility = "visible";
})

document.addEventListener("click",()=>{
    customContextMenu.style.visibility = "hidden";
})