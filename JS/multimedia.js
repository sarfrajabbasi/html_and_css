var video1 = document.getElementById('video1');

function playPause(){
  video1.paused? video1.play():video1.pause()
}
var makeBig = ()=>{
    video1.width = 560;
}
var makeSmall = ()=>{
    video1.width = 320;
}
var  makeNormal = ()=>{
    video1.width = 420;
}
// navigator{geolocation}{method:getcurretpotison(callback)}
var para = document.getElementById('location')
function getlocation(){
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition,showError)
}else{
    para.innerHTML = "Geolocation is not supported by this browser."
}

function showPosition(position){
    para.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
function showError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            para.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            para.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            para.innerHTML = "The request to get user location timed out."    
            break;
        case error.UNKNOWN_ERROR:
            para.innerHTML = "An unknown error occurred."        
            break;
    }
}
}

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
    
function showPosition(position) {
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}