const apiUrl = `http://cleanandcode.somee.com/api`;
const idClient = getDomElement('idOwner');

function getDomElement(idElement) {
    return document.getElementById(idElement);
}

function newOrder() {

    const address = getDomElement('addressInput');
    const category = getDomElement('category');
    const date = getDomElement('date').value.split('T');

    const newOrder = {
        ClientId: idClient.value,
        CleanerId: -1,
        Address: address.value,
        Date: date[0],
        Time: date[1],
        ServiceId: category.value,
        ConditionId: 4
    }

    const loader = getDomElement('newOrderLoader');
    loader.style.display = 'inline-block';

    sendRequest('POST', `${apiUrl}/orders`, JSON.stringify(newOrder)).then((result) => {
        address.value = "";
        loader.style.display = 'none';
        console.log('Заявка оформлена');
    });
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
//selectBlock('#addOrder');


$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function removeOrder(idOrder) {
}

/**
 * @function loadMyOrders
 * @description Метод, который загрузит список заказов пользователя
 * @returns {void}
 */
function loadMyOrders() {
    sendRequest('GET', `${apiUrl}/orders/client_orders/${idClient.value}`).then((result) => {
        const myOrders = JSON.parse(result);
        console.log(myOrders);
        const table = getDomElement('myOrdersTable');
        table.innerHTML = '';
        myOrders.forEach((order) => {
            table.innerHTML += insertTableRow(order);
        });
    });
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
            loadMyOrders();
        });
    }    
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


loadMyOrders();
