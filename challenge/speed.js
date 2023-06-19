/* Speed Detector Challenge
speed <=70 prints OK. 
for every 5 km/h above speed limit = 1 demerit point. 
12 demerit points = licence suspended */
function speedCheck(vehicleSpeed) {
    const speed = parseInt(document.getElementById('speed').value);
    let points = 0;
    if (speed < 70) {
        document.getElementById('result').textContent = 'Ok';
    } else if {
        points = Math.floor((speed - 70) / 5);
        if (points > 12) {
            document.getElementById('result').textContent = 'License suspended';
        }
    } else {
        document.getElementById('result').textContent = 'Points: ' + points;
    }
}