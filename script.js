document.addEventListener("DOMContentLoaded",function(){
    const allimages=document.getElementsByClassName("image");
    let currDraggedImage;
    let drop=false;
    for (const currimage of allimages) {
        currimage.addEventListener("dragstart",(e)=>{
            console.log("DRAG STARTED");
            setTimeout(() => {
                currDraggedImage=e.target.parentElement;
                e.target.parentElement.classList.add('hide');
            }, 0);
            
        });

        currimage.addEventListener("dragend",(e)=>{
            console.log("DRAG End");
            e.target.parentElement.className='image';
            
        });

        
    }
    const alltiers=document.getElementsByClassName("content");
    for(const tier of alltiers){
        tier.addEventListener("dragover",(e)=>{
            console.log("dragover occures");
            e.preventDefault();
        })

        tier.addEventListener("drop",(e)=>{
            console.log("item dropped");
            if(currDraggedImage){
                drop=true;
                e.target.append(currDraggedImage);
                drop=false;
            }

            if (currDraggedImage && e.target.tagName === 'IMG') {
                e.target.parentElement.parentElement.append(currDraggedImage);
            }

        });
    }

    const imgbox=document.getElementsByClassName("image-Container");
    imgbox[0].addEventListener("dragover",(e)=>{
        console.log("item dragging on image box");
        e.preventDefault();
    });

    imgbox[0].addEventListener("drop",(e)=>{
        if(currDraggedImage){
            console.log("item dropped on image box");
            drop=true;
            e.target.append(currDraggedImage);
            drop=false;
        }

        if (currDraggedImage && e.target.tagName === 'IMG') {
            e.target.parentElement.parentElement.append(currDraggedImage);
        }
    })

    



});