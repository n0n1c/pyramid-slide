function drawPyramid(height, char) {

    // before drawing, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "\u00A0";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += char;
        }

       // create a text element with the string of characters
       textElem = document.createTextNode(rowStr);

       // create a <p> element with the text inside
       rowElem = document.createElement("p");
       rowElem.appendChild(textElem);

       // insert the paragraph as a child of the container <div>
       document.getElementById('pyramid').appendChild(rowElem);
   }
}

function slideNum(val) {
    document.getElementById('heightLabel').innerText = val;
}

function getChar() {
    var pChar = document.getElementById('pChar').value;
    return pChar;
}

function getHeight() {
    var pHeight = document.getElementById('pHeight').value;
    return pHeight;
}
