let flowerArray = ["blueFlower.jpg", "orangeFlower.jpg", "purpleFlower.jpg", "redFlower.jpg", "yellowFlower.jpg"];

let currentImageLocation = 0;

document.addEventListener("DOMContentLoaded",()=>{



  document.querySelector("#previous").addEventListener("click",(e)=>{
    console.log('click');

    if(currentImageLocation == 0) {
      document.getElementById("flower").src=flowerArray[4];
      currentImageLocation = 4;
    }
    else {
      document.getElementById("flower").src=flowerArray[currentImageLocation-1];
      currentImageLocation--;
    }
  })

  document.querySelector("#next").addEventListener("click",(e)=>{
    console.log('click');
    if(currentImageLocation == 4) {
      document.getElementById("flower").src=flowerArray[0];
      currentImageLocation = 0;
    }
    else{
      document.getElementById("flower").src=flowerArray[currentImageLocation+1];
      currentImageLocation++;
    }
  })

})
