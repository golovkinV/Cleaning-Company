function sendRequest(type, url, data) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open(type, url, true);
        request.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
        request.addEventListener("load", function() {
            if (request.status < 400)
                resolve(request.response);
            else
                reject(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function() {
            reject(new Error("Network error"));
        });
        type === 'GET' ? request.send() : request.send(data);
    });
}

// sendRequest('GET', 'http://cleanandcode.somee.com/api/orders/1').then((res) => {
//     console.log(JSON.parse(res));
//     document.getElementById('loader').style.display = 'none';
//     const div = document.getElementById('vovaLoh');
//     div.innerHTML = div.innerHTML + JSON.parse(res).Address;
// });

let data = {
    ClientId: -1,
    CleanerId: -1,
    Address: "пока привет",
    Date: "01.01.1970",
    Time: "00:00",
    ServiceId: 1
}
sendRequest('POST', 'http://cleanandcode.somee.com/api/orders', JSON.stringify(data)).then((res) => {
    console.log(JSON.parse(res));
});


function selectBlock(idBlock)
{
    $('.blockHidden').hide();
    $( idBlock ).show();
}

function selectBlock(idBlock)
{
    $('.blockHidden').hide();
    $( idBlock ).show();
}

var today = new Date().toISOString().split('T')[0];
document.getElementsByName("dateEnd")[0].setAttribute('min', today);
document.getElementsByName("dateEnd")[0].setAttribute('value', today);

$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

