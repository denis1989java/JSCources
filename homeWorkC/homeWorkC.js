"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    var uniqColors={};
    console.log( 'цветов: ' + colorsCount );
    for ( var i=1; i<=colorsCount; i++ ) {
        var n=randomDiap(1,7);
        uniqColors[colors[n]]='';
    }
    for (var key in uniqColors)
    console.log(key);
}

mood(5);