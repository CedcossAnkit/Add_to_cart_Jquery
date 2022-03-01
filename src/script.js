//Globle array and var.
var products = [
    { "id": 101, "name": "Basket Ball", "image": "basketball.png", "price": 150,"quantity":1},
    { "id": 102, "name": "Football", "image": "football.png", "price": 120,"quantity":1 },
    { "id": 103, "name": "Soccer", "image": "soccer.png", "price": 110 ,"quantity":1},
    { "id": 104, "name": "Table Tennis", "image": "table-tennis.png", "price": 130 ,"quantity":1},
    { "id": 105, "name": "Tennis", "image": "tennis.png", "price": 100 ,"quantity":1}];

var cartArr = [];
var obj = {}; 
var basket=0,footbal=0,soccer=0,table=0,tennis=0;
var basket=""
var quantity = {
    basket:basket,
    footbal:footbal,
    soccer:soccer,
    table:table,
    tennis:tennis,
};

//incress quantity
function IncrssQuantity(id){
    if(id==101){
        basket++;
        displayCart();
    }
    else if(id==102){
        footbal++;
        displayCart();

    }
    else if(id==103){
        soccer++;
        displayCart();

    }
    else if(id==104){
        table++;
        displayCart();

    }
    else if(id==105){
        tennis++;
        displayCart();

    }
    
    // for(var i=0;i<products.length;i++){
    //     if(products[i].id==id && bas=)
    // }
}

//dislay()--display all iteam of products[] raay;
function Display() {
    var lst = "";
    for (var i = 0; i < products.length; i++) {
        console.log(products[i].id, products[i].name, products[i].price);
        lst += "<div>\<h3>Image</h3><li><img src='/images/" + products[i].image + "'></li>\
        <li><h3>ID</h3>"+ products[i].id + "</li>\
        <li><h3>Name :</h3>"+ products[i].name + "</li>\
        <li><h3>Price</h3>"+ products[i].price + "$</li>\
        <li><button onclick='addTOcart("+ products[i].id + ")'>Add to cart</button></li>\
        </div>"
    }
    $("#main").html(lst);
}

//checkiteam
function CheckIteam(id) {
    for (var i = 0; i < cartArr.length; i++) {
        if (id == cartArr[i].pid) {
            return false;
        }
    }
    return true;

}



function addTOcart(id) {
    if (cartArr.length == 0) {
        addTOarray(id);
    }
    else if (CheckIteam(id) == false) {
        incressQuant(id); 
        
    }
    else if (CheckIteam(id) == true) {
        addTOarray(id);
        IncrssQuantity(id);
        console.log("added");
        // $('#suc').text('Iteam added Sucesfully!');

    }

}

var a = 1;
//add to cart
function addTOarray(id) {
    console.log(' Add to cart working');

    for (var i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            obj[i] = {
                pid: String(products[i].id),
                pname: products[i].name,
                pimage: products[i].image,
                pprice: String(products[i].price),
                quantity:products[i].quantity
            };

            console.log(obj[i]);
            cartArr.push(obj[i]);


        }


    }
    displayCart();
}

//diaplayCart Item
function displayCart() {
    var temp = "";
    for (var i = 0; i < cartArr.length; i++) {


        temp += "<tr>\
            <td><img src='/images/"+ cartArr[i].pimage + "'></td>\
            <td>"+ cartArr[i].pid + "</td>\
            <td>"+ cartArr[i].pname + "</td>\
            <td>"+ cartArr[i].pprice + "$</td>\
            <td><p></p>\<h3>"+cartArr[i].quantity+"</h3>\
            <button onclick='incressQuant("+ cartArr[i].pid + ")'>+</button>\
            </td>\
            <td><buttton onclick='deleteIteam("+ cartArr[i].pid + ")'>❌</buttton></td>\
            </tr>";
        flag = 0;



    }
    $('#tBody').html(temp);


    //$('#tBody').html(temp);
}

function deleteIteam(id) {
    for (var i = 0; i < cartArr.length; i++) {
        if (id == cartArr[i].pid) {
            cartArr.splice(i, 1);
            displayCart();
        }
    }
}

//claer cart
$('#clearCart').click(function (e) {
    cartArr.splice(0, cartArr.length);
    displayCart();



});

$(document).ready(function () {
    console.log('Jquery CDN Working..');
    Display();
});

function updateQuantity(id) {
    cartArr.push(id);

}

function incressQuant(id){
    
    for(var i=0;i<cartArr.length;i++){
        if(cartArr[i].pid==id){
            cartArr[i].quantity+=1;

        }
        displayCart();

    }
}