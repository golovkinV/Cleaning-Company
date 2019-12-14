const apiUrl = `http://cleanandcode.somee.com/api`;
let idClient = '';

document.addEventListener("DOMContentLoaded", function(event) { 
    //idClient = getDomElement('idOwner');
    loadAllTables();
  });

function loadAllTables() {
    loadManagerOrders(ConditionsEnum.NotConfirmed.Url, 'managerOrdersTable');
    loadManagerOrders(ConditionsEnum.Confirmed.Url, 'managerConfirmedOrdersTable');
    loadManagerOrders(ConditionsEnum.Completed.Url, 'managerCompletedTableOrders');
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
        delete: 
            '<td>' +
                `<button class="btn btn-danger" onclick="removeOrder(${order.Id})">` +
                    'Удалить заказ' +
                '</button>' +
            '</td>',
        cancel:
            '<td>' +
                `<button class="btn btn-warning" onclick="changeConditionalOrder(${order.Id}, 'Canceled')" style="width: 100%">Отменить заказ</button>` +
            '</td>',
        confirm: 
            '<td>' +
                `<button class="btn" style="background-color: #2a69af; color: white" onclick="changeConditionalOrder(${order.Id}, 'Confirmed')">` +
                    'Подтвердить заказ' +
                '</button>' +
            '</td>'

    };

    let tableOperations;
    switch(condition) {
        case 1:
            tableOperations = actions.delete;
            break;
        case 2:
            tableOperations = actions.cancel + actions.delete;
            break;
        case 3:
            tableOperations = actions.delete;
            break;
        case 4:
            tableOperations = actions.cancel + actions.delete + actions.confirm;
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
            loadAllTables();
        }).catch(() => {
            loadAllTables();
        });
    }    
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
            changedOrder.ConditionId = ConditionsEnum[condition].id;
            changedOrder.Condition.Id = ConditionsEnum[condition].id;
            sendRequest('PUT', `${apiUrl}/orders/${changedOrder.Id}`, JSON.stringify(changedOrder)).then((order) => {
                loadAllTables();
            });
        });
        
    }    
}