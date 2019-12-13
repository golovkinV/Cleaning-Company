const apiUrl = `http://cleanandcode.somee.com/api`;
let idClient = '';


/**
 * @function newOrder
 * @description Метод, который добавит новый заказ
 * @returns {void}
 */
function newOrder() {

    const address = getDomElement('addressInput');
    const category = getDomElement('category');
    const date = getDomElement('date').value;
    const time = getDomElement('time').value;

    const newOrder = {
        ClientId: idClient.value,
        CleanerId: -1,
        Address: address.value,
        Date: date,
        Time: time,
        ServiceId: category.value,
        ConditionId: 4
    }

    const loader = getDomElement('newOrderLoader');
    loader.style.display = 'inline-block';

    sendRequest('POST', `${apiUrl}/orders`, JSON.stringify(newOrder)).then((result) => {
        address.value = "";
        loader.style.display = 'none';
        console.log('Заявка оформлена');
        const email = {
            ClientName: getDomElement('userName').value,
            Email: 'vladimir.golovkin16@yandex.ru', //getDomElement('userEmail').value,
            Date: date,
            Time: time,
        }
        sendRequest('POST', `${apiUrl}/email`, JSON.stringify(email));
        loadMyOrders();
    });
}


/**
 * @function loadMyOrders
 * @description Метод, который загрузит список заказов пользователя
 * @returns {void}
 */
function loadMyOrders() {
    sendRequest('GET', `${apiUrl}/orders/client_orders/${idClient.value}`).then((result) => {
        const myOrders = JSON.parse(result);
        const table = getDomElement('myOrdersTable');
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
 * @function editOrder
 * @description Метод, который обновит данные заказа
 * @param {number} idOrder
 * @returns {void}
 */
function editOrder(idOrder) {
    if (!idOrder) {
        return;
    }

    const confirm = window.confirm('Вы действительно хотите отменить заказ?');
    if (confirm) {
        sendRequest('GET', `${apiUrl}/orders/${idOrder}`).then((order) => {
            const changedOrder = { ...JSON.parse(order) };
            changedOrder.ConditionId = 1;
            changedOrder.Condition.Id = 1;
            sendRequest('PUT', `${apiUrl}/orders/${changedOrder.Id}`, JSON.stringify(changedOrder)).then((order) => {
                console.log(order);
                loadMyOrders();
            });
        });
        
    }    
}

/**
 * @description Метод рендера таблицы заказов пользователя
 * @returns {void}
 */
function insertTableRow(order) {

    const condition = order.ConditionId === 1 ? `Отменен` : `Отменить заказ`;

    let row = '<tr> ' +
        '<td class="font-weight-bold">' + `${order.Address}, ${order.Service.Name}, ${order.Service.Cost}₽` + '</td>' +
        '<td class="font-weight-bold">' + `${order.Date}, ${order.Time}` + '</td>' +
        '<td class="font-weight-bold">' + `${order.Condition.Name}` + '</td>' +
        '<td>' +
                `<button class="btn btn-${order.ConditionId === 1 ? `secondary` : `warning` }" onclick="editOrder(${order.Id})" style="width: 100%">${condition}</button>` +
                '</button>' +
        '</td>' +
    '</tr>';
    return row;
}

/**
 * @description Событие, которое вызовет загрузку данных по готовности страницы
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", function(event) { 
    idClient = getDomElement('idOwner');
    loadMyOrders();
  });
