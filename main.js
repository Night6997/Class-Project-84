canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var NasaMarsImgs = ["nasa1.jpg",
                    "nasa2.jpg",
                    "nasa3.jpg",
                    "nasa4.jpg"
];

randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);

rover_x = 10;
rover_y = 10;

rover_img = "rover.png";
backgroundImg = NasaMarsImgs[randomNumber];
console.log("background img = " + backgroundImg);

rover_height= 90;
rover_width = 100;

function add() {
    backgroundImg_tag = new Image();
    backgroundImg_tag.onload = uploadBackground;
    backgroundImg_tag.src = backgroundImg;

    roverImg_tag = new Image();
    roverImg_tag.onload = uploadRover;
    roverImg_tag.src = rover_img;
}

function uploadBackground() {
    ctx.drawImage(backgroundImg_tag, 0,0, canvas.width, canvas.height);
}
function uploadRover() {
    ctx.drawImage(roverImg_tag, rover_x,rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38"){
        up();
        console.log("up");
    }
    if(keyPressed == "40"){
        down();
        console.log("down");
    }
    if(keyPressed == "37"){
        left();
        console.log("left");
    }
    if(keyPressed == "39"){
        right();
        console.log("right");
    }
     
}

function up(){
    if(rover_y >=0){
    rover_y = rover_y - 10;
    console.log("When up arrow key is pressed x = "+rover_x+ " and y is = "+rover_y);
    uploadBackground();
    uploadRover();
}
}

function down(){
    if(rover_y <=500){
        rover_y = rover_y + 10;
        console.log("When down arrow key is pressed x = "+rover_x+ " and y is = "+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x >=0){
        rover_x = rover_x - 10;
        console.log("When left arrow key is pressed x = " + rover_x + " and y is = "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x <=700){
        rover_x = rover_x + 10;
        console.log("When right arrow key is pressed x = "+rover_x+ " and y is = "+rover_y);
        uploadBackground();
        uploadRover();
    }
}
