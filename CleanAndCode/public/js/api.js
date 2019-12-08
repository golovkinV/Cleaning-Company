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
        Date: "01.01.1970",
        Time: "00:00",
        ServiceId: category.value,
        ConditionId: 4
    }

    const loader = getDomElement('newOrderLoader');
    loader.style.display = 'inline-block';

    sendRequest('POST', 'http://cleanandcode.somee.com/api/orders', JSON.stringify(newOrder)).then((result) => {
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

function loadMyOrders() {
    sendRequest('GET', 'http://cleanandcode.somee.com/api/orders/client_orders/' + idClient.value).then((result) => {
        const myOrders = JSON.parse(result);
        console.log(myOrders);
        const table = getDomElement('myOrdersTable');
        table.innerHTML = '';
        myOrders.forEach((order) => {
            table.innerHTML += insertTableRow(order);
        });
        


    });
}
loadMyOrders();
