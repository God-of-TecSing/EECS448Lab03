
document.getElementById("dummyText").innerHTML = "This is the Green Bay Packers super fan. He was born on September 26, 1994. He was a baby when Brett Favre won SuperBowl XXXI. He was 17 when Aaron Rodgers won SuperBowl XLV. The Green Bay Packers super fan has 11 Packer Hats. The Green Bay Packers fan has 3 pairs of Packer sunglasses. He is sad that the Packers have not reached a SuperBowl since 2011.";

document.addEventListener("DOMContentLoaded", () => {
  let redBorder = document.querySelector("#redBorder");
  let greenBorder = document.querySelector("#greenBorder");
  let blueBorder = document.querySelector("#blueBorder");
  let width = document.querySelector("#width");
  let redBackground = document.querySelector("#redBackground");
  let greenBackground = document.querySelector("#greenBackground");
  let blueBackground = document.querySelector("#blueBackground");

  document.querySelector("#button").addEventListener("click",(e) =>{
    console.log('click');
    console.log('redBorder', redBorder.value);
    console.log('greenBorder', greenBorder.value);
    console.log('blueBorder', blueBorder.value);
    console.log('width', width.value);
    console.log('redBackground', redBackground.value);
    console.log('greenBackground', greenBackground.value);
    console.log('blueBackground', blueBackground.value);

    redStringBorder = redBorder.value.toString();
    greenStringBorder = greenBorder.value.toString();
    blueStringBorder = blueBorder.value.toString();

    widthInt = parseInt(width.value);

    redStringBackground = redBackground.value.toString();
    greenStringBackground = greenBackground.value.toString();
    blueStringBackground = blueBackground.value.toString();

    stringBorder = redStringBorder.concat(greenStringBorder, blueStringBorder);
    stringBackground = redStringBackground.concat(greenStringBackground, blueStringBackground);

    hexBorder = stringBorder.toString(16);
    hexBackground = stringBackground.toString(16);

    let tag = document.getElementById("dummyText");

    tag.style.borderColor = hexBorder;
    tag.style.borderWidth = widthInt;
    tag.style.backgroundColor = hexBackground;

    })
})
