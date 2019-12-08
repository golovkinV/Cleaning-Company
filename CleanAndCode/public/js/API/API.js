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


function insertTableRow(order) {
    let row = '<tr> ' +
        '<td class="font-weight-bold">' + `${order.Address}, ${order.Service.Name}` + '</td>' +
        '<td class="font-weight-bold">' + `${order.Date}, ${order.Time}` + '</td>' +
        '<td class="font-weight-bold">' + `${order.Condition.Name}` + '</td>' +
        '<td>' +
            '<a href="/edit/">' +
                '<button class="btn btn-warning">Отменить заказ' +
                '</button>' +
            '</a>' +
        '</td>' +
        '<td>' +
            '<a href="/remove/">' +
                `<button class="btn btn-warning" onclick="removeOrder(${order.Id})">` +
                    'Удалить заказ' +
                '</button>' +
            '</a>'
        '</td>' +
    '</tr>';
    return row;
}