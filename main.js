var canvas = new fabric.Canvas('myCanvas');

var superhero_block_width = 30;
var superhero_block_height = 30;

var player_x = 10;
var player_y = 10;

var player_image = "";
var block_image = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_image = Img;

        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_image);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image = Img;

        block_image.scaleToWidth(superhero_block_width);
        block_image.scaleToHeight(superhero_block_height);
        block_image.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block_image);
    });
}