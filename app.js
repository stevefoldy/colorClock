function colorClock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours <= 9) {
        hours = '0' + hours;
    }
    if (minutes <= 9) {
        minutes = '0' + minutes;
    }
    if (seconds <= 9) {
        seconds = '0' + seconds;
    }

    var clockFace = hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = clockFace;

    var hexColor = '#' + hours + minutes + seconds;

    document.getElementById('clock').style.background = hexColor;

    setTimeout(function() {
        colorClock();
    }, 1000);

    console.log(hexColor);

    if ( hours > 12 ) {
        document.getElementById('clock').style.color = 'white';
    }

}

colorClock();