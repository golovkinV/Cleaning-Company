const apiUrl = `http://cleanandcode.somee.com/api`;
let idCleaner = '';

document.addEventListener("DOMContentLoaded", function(event) { 
    idCleaner = getDomElement('idOwner').value;
    loadAllTables();
  });

function loadAllTables() {
    loadManagerOrders(ConditionsEnum.Confirmed.Url, 'cleanerTableActiveOrders');
    loadManagerOrders(`/orders/cleaner_orders/${idCleaner}`, 'cleanerTableOrders');
}

/**
 * @function loadManagerOrders
 * @description Метод, который загрузит таблицу
 * @param {number} idOrder
 * @returns {void}
 */
function loadManagerOrders(request, idTable) {
    sendRequest('GET', `${apiUrl}${request}`).then((result) => {
        const myOrders = JSON.parse(result);
        const table = getDomElement(idTable);
        table.innerHTML = '';
        if (myOrders.length) {
           console.log(myOrders);
            myOrders.forEach((order) => {
                table.innerHTML += insertTableRow(order);
            }); 
        } else {
            table.innerHTML += '<td><div class="d-flex text-black justify-content-start font-weight-bold" style="margin-top:20px">У Вас еще нет заказов</div></td>';
        }
        
    });
}

/**
 * @description Метод рендера таблицы заказов пользователя
 * @returns {void}
 */
function insertTableRow(order) {

    const condition = order.ConditionId;

    const actions = {
        confirm: 
            '<td>' +
                `<button class="btn" style="background-color: #2a69af; color: white" onclick="changeConditionalOrder(${order.Id}, 'Accepted')">` +
                    'Принять заказ' +
                '</button>' +
            '</td>',
        completed:
            '<td>' +
                `<button class="btn" style="background-color: #2a69af; color: white" onclick="changeConditionalOrder(${order.Id}, 'Completed')">` +
                    'Завершить заказ' +
                '</button>' +
            '</td>'
    };

    let tableOperations = '';
    switch(condition) {
        case 2:
            tableOperations = actions.confirm;
            break;
        case 6:
            tableOperations = actions.completed;
            break;
    }

    let row = '<tr> ' +
        '<td class="font-weight-bold">' + `${order.Address}, ${order.Service.Name}, ${order.Service.Cost}₽` + '</td>' +
        '<td class="font-weight-bold">' + `${order.Date}, ${order.Time}` + '</td>' +
        '<td class="font-weight-bold">' + `${order.Condition.Name}` + '</td>' +
        tableOperations +
        '</tr>';
    return row;
}


/**
 * @function confirmOrder
 * @description Метод, который обновит данные заказа
 * @param {number} idOrder
 * @returns {void}
 */
function changeConditionalOrder(idOrder, condition) {
    if (!idOrder) {
        return;
    }

    const confirm = window.confirm('Изменить статус заказа?');
    if (confirm) {
        sendRequest('GET', `${apiUrl}/orders/${idOrder}`).then((order) => {
            const changedOrder = { ...JSON.parse(order) };
            changedOrder.CleanerId = idCleaner;
            changedOrder.ConditionId = ConditionsEnum[condition].id;
            changedOrder.Condition.Id = ConditionsEnum[condition].id;
            sendRequest('PUT', `${apiUrl}/orders/${changedOrder.Id}`, JSON.stringify(changedOrder)).then((order) => {
                loadAllTables();
            });
        });
        
    }    
}