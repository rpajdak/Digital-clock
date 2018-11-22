function setDate() {
    var now = moment();
    var hours = moment().format('kk');
    var minutes = moment().format('mm');
    var seconds = moment().format('ss');
    const hoursfirstdigit = document.querySelector("#digit1");
    const hoursseconddigit = document.querySelector("#digit2");
    const minutesfirstdigit = document.querySelector("#digit3");
    const minutesseconddigit = document.querySelector("#digit4");
    const secondsfirstdigit = document.querySelector("#digit5");
    const secondsseconddigit = document.querySelector("#digit6");
    console.log(seconds[1]);
    for (i = 0; i < 10; i++) {
        hoursfirstdigit.className = ("digit num" + hours[0]);
        hoursseconddigit.className = ("digit num" + hours[1]);
        minutesfirstdigit.className = ("digit num" + minutes[0]);
        minutesseconddigit.className = ("digit num" + minutes[1]);
        secondsfirstdigit.className = ("digit num" + seconds[0]);
        secondsseconddigit.className = ("digit num" + seconds[1]);
    }


}

setInterval(setDate, 1000);
