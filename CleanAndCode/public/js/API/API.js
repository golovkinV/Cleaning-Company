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


const ConditionsEnum = {
    Canceled: { id: 1},
    Confirmed: { id: 2, Url: '/orders/good_orders'},
    Completed: { id: 3, Url: '/orders/end_orders' },
    NotConfirmed: { id: 4, Url: '/orders/manager_orders'},
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