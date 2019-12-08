// sendRequest('GET', 'http://cleanandcode.somee.com/api/orders/19').then((res) => {
//     console.log(JSON.parse(res));
//     document.getElementById('loader').style.display = 'none';
//     const div = document.getElementById('vovaLoh');
//     div.innerHTML = div.innerHTML + JSON.parse(res).Address;
// });


// sendRequest('POST', 'http://cleanandcode.somee.com/api/orders', JSON.stringify(data)).then((res) => {
//     console.log(JSON.parse(res));
// });

function getInputValue(idElement) {
    return document.getElementById(idElement).value;
}

function newOrder() {
    let newOrder = {
        ClientId: getInputValue('idOwner'),
        CleanerId: -1,
        Address: getInputValue('addressInput'),
        Date: "01.01.1970",
        Time: "00:00",
        ServiceId: getInputValue('category'),
        ConditionId: 4
    }

    sendRequest('POST', 'http://cleanandcode.somee.com/api/orders', JSON.stringify(newOrder)).then((result) => {
        alert('Заявка оформлена');
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
selectBlock('#addCompany');


$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

