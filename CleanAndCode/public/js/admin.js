const apiUrl = `http://cleanandcode.somee.com/api`;
let idClient = '';

document.addEventListener("DOMContentLoaded", function(event) { 
    //idClient = getDomElement('idOwner');
    loadManagerOrders();
  });

function loadManagerOrders() {
    sendRequest('GET', `${apiUrl}/orders/manager_orders`).then((result) => {
        const myOrders = JSON.parse(result);
        const table = getDomElement('managerOrdersTable');
        if (myOrders.length) {
           console.log(myOrders);
            table.innerHTML = '';
            myOrders.forEach((order) => {
                table.innerHTML += insertTableRow(order);
            }); 
        } else {
            table.innerHTML += 'У Вас еще нет заказов';
        }
        
    });
}

/**
 * @description Метод рендера таблицы заказов пользователя
 * @returns {void}
 */
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
                `<button class="btn btn-danger" onclick="removeOrder(${order.Id})">` +
                    'Удалить заказ' +
                '</button>' +
        '</td>' +
        '<td>' +
                `<button class="btn" style="background-color: #2a69af; color: white" onclick="confirmOrder(${order.Id})">` +
                    'Подтвердить заказ' +
                '</button>' +
        '</td>' +
    '</tr>';
    return row;
}

/**
 * @function removeOrder
 * @description Метод, который удалит заказ из БД
 * @param {number} idOrder
 * @returns {void}
 */
function removeOrder(idOrder) {
    if (!idOrder) {
        return;
    }

    const confirm = window.confirm('Вы действительно хотите удалить заказ? Это действие отменить невозможно!');
    if (confirm) {
        sendRequest('DELETE', `${apiUrl}/orders/${idOrder}`).then(() => {
            loadManagerOrders();
        }).catch(() => {
            loadManagerOrders();
        });
    }    
}