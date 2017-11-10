

$( document ).ready(function() {
    getCSV();
});


function getCSV() {
    myBG = [];
    $.get('../../bg.csv', function(data) {
        myBG = data.split("\n").map(function(row){return row.split(";");})
        //clean array of ""
        Array.prototype.clean = function(deleteValue) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == deleteValue) {
                    this.splice(i, 1);
                    i--;
                }
            }
            return this;
        };
        console.log(myBG);
        for (i = 0; i < myBG.length-1; i++){
            $('.display ul').append('<li><em>'+myBG[i][0]+"</em><strong>"+myBG[i][1]+'<strong></li>');
        }
    });
}

function insertLevels(){
    var fs = require('fs');

    today = new Date();
    bg = $('#bg').val();
    pwd = $('#pwd').val();
    pass = 3125259;
    ouput;

    if (pwd != pass){
        console.log('Incorrect Password.');
    } else if (pwd == pass) {
        output = bg + ';' + today + '\r\n';
        fs.appendFile('../../bg.csv', myBG + output, function (err){
            if (err) throw err;
            console.log('replaced.');
        });
        console.log('Insert BG into csv');
    }

    $('.display ul').empty();
    getCSV();
}
