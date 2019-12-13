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
        switch(type) {
            case 'GET':
                request.send();
                break;
            case 'POST':
                request.send(data);
                break;
            case 'DELETE':
                request.send();
            case 'PUT':
                request.send(data);
        }
    });
}

/**
 * @function getDomElement
 * @description Метод, который вернет ссылку на DOM-элемент
 * @returns {void}
 */
function getDomElement(idElement) {
    return document.getElementById(idElement);
}

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