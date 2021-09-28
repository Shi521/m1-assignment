var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li id='gallerylist'>";
var closeList = "</li>";
var captionList = [
  "Yawnnnn!",
  "Are you looking at me :)",
  "Best Friend Forever",
  "Time for food",
  "Hi!Bunny!",
  "Don't push!",
  "Awww",
  "Gimme Food",
  "Hi!Human!",
  "Smile :)",
  "Squeezeee",
  "Hola!",
];
var openCaptionTag = "<p>";
var closeCaptionTag = "</p>";
var openDescTag = "<div id='desc' class='desc' onclick='popWindow( ";
var closeDescTag = "</div>";
var descList = [
  " This is Lucy. She's 3y now! ",
  "Say hi to Maddy! She loves to look at people.",
  "These two cuties always stay together.",
  "It's meal time! Can't wait to get food!",
  "Our bunny-'little white' is always white and clean.",
  "Sometimes, when it gets too crowded in the cage.",
  "They enjoy taking nap together!",
  "Carrots and broccolis are their fav.",
  "Sorry for always keep staring at you lol.",
  "Smile! and everything will be fine!",
  "It's comfy when everyone stays together",
  "Do you like my hair style?",
];
var infoCloseText ="Click here to close!"
var popupboxList =[];

for (var i = 0; i < 12; i++) {
  fileNames.push("gallery" + (i + 1));
  photos.push("<img src='images/" + fileNames[i] + ".jpg'>");
  image =
    openList +
    photos[i] +
    openCaptionTag +
    captionList[i] +
    closeCaptionTag +
    openDescTag + /*"value=" + i + ">" +*/ i +")'>" +
    descList[i] +
    closeDescTag +
    closeList;
  imageList.push(image);
}

document.getElementById("pictures").innerHTML = imageList.join("");

//pop up box

var textlink = document.getElementById("textlink");

textlink.addEventListener("click", hideInfo);


function popWindow(i){
    document.getElementById("popup").style.visibility="visible";
    document.getElementById("heading").innerHTML = captionList[i];
    document.getElementById("textinfo").innerHTML = descList[i];
    document.getElementById("textlink").innerHTML = infoCloseText;    

}


function hideInfo(){
    document.getElementById("popup").style.visibility="hidden";
}