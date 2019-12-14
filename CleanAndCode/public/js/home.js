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

    if (!address.value || !category || !date || !time) {
        alert('Не все данные заполнены');
        return;
    }

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
            Email: 'aleksandr7211@gmail.com', //getDomElement('userEmail').value,
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
 * @function changeConditionalOrder
 * @description Метод, который обновит данные заказа
 * @param {number} idOrder
 * @param {number} condition
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
                loadMyOrders();
            });
        });
        
    }    
}


/**
 * @function setRatingOrder
 * @description Метод, который обновит данные заказа
 * @param {number} idOrder
 * @returns {void}
 */
function setRatingOrder(idOrder) {
    if (!idOrder) {
        return;
    }

    const confirm = window.confirm('Изменить оценку заказа?');
    if (confirm) {
        sendRequest('GET', `${apiUrl}/orders/${idOrder}`).then((order) => {
            const changedOrder = { ...JSON.parse(order) };
            changedOrder.Evaluation = getDomElement('ratingOrder').value;
            sendRequest('PUT', `${apiUrl}/orders/${changedOrder.Id}`, JSON.stringify(changedOrder)).then((order) => {
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

    const condition = order.ConditionId;

    const actions = {
        cancel:
            '<td>' +
                `<button class="btn btn-warning" onclick="changeConditionalOrder(${order.Id}, 'Canceled')" style="width: 100%">Отменить заказ</button>` +
            '</td>',
        rating:
            '<td>' +
                `<button class="btn btn-warning" onclick="setRatingOrder(${order.Id})" style="width: 100%">Оценить заказ</button>` +
            '</td>',
        mark:
            '<td>' +
                `<select сlass="form-control{{ $errors->has('category') ? ' is-invalid' : '' }}"` +
                `id="ratingOrder" name="ratingOrder"> style="width="width: 30px"`+
                `<option value="1">✩</option>`+
                `<option value="2">✩✩</option>`+
                `<option value="3">✩✩✩</option>`+
                `<option value="4">✩✩✩✩</option>`+
                `<option value="5">✩✩✩✩✩</option>`+
                `</select>`+
            '</td>',
    };

    let tableOperations = '';
    switch(condition) {
        case 2:
            tableOperations = actions.cancel;
            break;
        case 3:
            tableOperations = (order.Evaluation === 0 ? actions.rating + actions.mark : '');
            break;
        case 4:
            tableOperations = actions.cancel;
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
 * @description Событие, которое вызовет загрузку данных по готовности страницы
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", function(event) { 
    idClient = getDomElement('idOwner');
    loadMyOrders();
  });
