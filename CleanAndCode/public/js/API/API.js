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


function insertTableRow(order) {

    const condition = order.ConditionId === 1 ? `Отменен` : `Отменить заказ`;

    let row = '<tr> ' +
        '<td class="font-weight-bold">' + `${order.Address}, ${order.Service.Name}` + '</td>' +
        '<td class="font-weight-bold">' + `${order.Date}, ${order.Time}` + '</td>' +
        '<td class="font-weight-bold">' + `${order.Condition.Name}` + '</td>' +
        '<td>' +
                `<button class="btn btn-${order.ConditionId === 1 ? `secondary` : `warning` }" onclick="editOrder(${order.Id})" style="width: 100%">${condition}</button>` +
                '</button>' +
        '</td>' +
        '<td>' +
                `<button class="btn btn-warning" onclick="removeOrder(${order.Id})">` +
                    'Удалить заказ' +
                '</button>' +
        '</td>' +
    '</tr>';
    return row;
}