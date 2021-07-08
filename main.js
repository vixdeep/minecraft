
var canvas = new fabric.Canvas("myCanvas");
block_width = 30;
block_height = 30;
block_y = 10;
block_x = 10;
player_x = 10;
player_y = 10;
var player_object = "";

function player_update(){
fabric.Image.fromURL("player.png", function(Img){
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
});
};



function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_object);
    });
    };


    window.addEventListener("keydown", my_keydown);

    function my_keydown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(e.shiftKey == true && keyPressed == '80'){
            console.log("p and shift pressed together");
            block_height += 10;
            block_width += 10;
            document.getElementById("current_width").innerHTML = block_width
            document.getElementById("current_height").innerHTML = block_height
        }
        if(e.shiftKey == true && keyPressed == '77'){
            console.log("m and shift pressed together");
            block_height -= 10;
            block_width -= 10;
            document.getElementById("current_width").innerHTML = block_width
            document.getElementById("current_height").innerHTML = block_height
        }
        if(keyPressed == '38'){
            up();
            console.log("up") 
        }
        if(keyPressed == '39'){
            right();
            console.log("right") 
        }
        if(keyPressed == '40'){
            down();
            console.log("down") 
        }
        if(keyPressed == '37'){
            left();
            console.log("left") 
        }
        if(keyPressed == '87'){
            block_update('wall.jpg');
            console.log("w") 
        }
        if(keyPressed == '71'){
            block_update('ground.png');
            console.log("g") 
        }
        if(keyPressed == '76'){
            block_update('light_green.png');
            console.log("l") 
        }
        if(keyPressed == '84'){
            block_update('trunk.jpg');
            console.log("t") 
        }
        if(keyPressed == '82'){
            block_update('roof.jpg');
            console.log("r") 
        }
        if(keyPressed == '89'){
            block_update('yellow_wall.png');
            console.log("y") 
        }
        if(keyPressed == '68'){
            block_update('dark_green.png');
            console.log("d") 
        }
        if(keyPressed == '85'){
            block_update('unique.png');
            console.log("u") 
        }
        if(keyPressed == '67'){
            block_update('cloud.jpg');
            console.log("c") 
        }
    }
    function up(){
        if(player_y >= 0){
            player_y  = player_y - block_height;
            console.log("block_height = "+ block_height);
            console.log("when up arrow is pressed x  = " + player_x  + "y  = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    function down(){
        if(player_y <= 500){
            player_y  = player_y + block_height;
            console.log("block_height = "+ block_height);
            console.log("when down arrow is pressed x  = " + player_x  + "y  = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    function left(){
        if(player_x >= 0){
            player_x  = player_x - block_height;
            console.log("block_height = "+ block_height);
            console.log("when left arrow is pressed x  = " + player_x  + "y  = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    function right(){
        if(player_x <= 750){
            player_x  = player_x + block_height;
            console.log("block_height = "+ block_height);
            console.log("when right arrow is pressed x  = " + player_x  + "y  = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }