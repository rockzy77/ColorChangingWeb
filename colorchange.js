// Function to chnage color
function colorchange(){
    // get color from color input
    color = document.getElementById('color').value;

    // change bg color of div having class 'cdiv'
    var divs = document.getElementsByClassName('cdiv');
    for(var i = 0; i < divs.length; i++){
		divs[i].style.backgroundColor = color;
	}

    // change color of texts having class 'ctext'
    var text = document.getElementsByClassName('ctext');
    // if color is white change text color to black
    if(color == '#ffffff'){
        for(var i = 0; i < text.length; i++){
            text[i].style.color = 'black';
        }
    }
    else{
        for(var i = 0; i < text.length; i++){
            text[i].style.color = color;
        }
    }
    

    // using function to see if theme is dark or light
    brightness = lightOrDark(color);

    // if theme is dark nav text having class 'link' and 'nhead'' will change color to white
    if(brightness == 'dark'){
        var l = document.getElementsByClassName('link');
        for(var i = 0; i < l.length; i++){
            l[i].style.color = 'white';
        }
        document.getElementById('nhead').style.color = 'white';
    }
    // else theme is light nav text having class 'link' and 'nhead' will change color to black
    else{
        var l = document.getElementsByClassName('link');
        for(var i = 0; i < l.length; i++){
            l[i].style.color = 'black';
        }
        document.getElementById('nhead').style.color = 'black';
    }
}    



// function to define the theme brightness (light ot dark)
function lightOrDark(color) {

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
  
      // If HEX --> store the red, green, blue values in separate variables
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
  
      r = color[1];
      g = color[2];
      b = color[3];
    } 
    else {
  
      // If RGB --> Convert it to HEX: http://gist.github.com/983661
      color = +("0x" + color.slice(1).replace( 
        color.length < 5 && /./g, '$&$&'
      )
               );
  
      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;
    }
  
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );
  
    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {
  
      return 'light';
    } 
    else {
  
      return 'dark';
    }
  }