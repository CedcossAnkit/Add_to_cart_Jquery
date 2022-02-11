var products = [
    { "id": 101, "name": "Basket Ball", "image": "basketball.png", "price": 150 },
    { "id": 102, "name": "Football", "image": "football.png", "price": 120 },
    { "id": 103, "name": "Soccer", "image": "soccer.png", "price": 110 },
    { "id": 104, "name": "Table Tennis", "image": "table-tennis.png", "price": 130 },
    { "id": 105, "name": "Tennis", "image": "tennis.png", "price": 100 }];
    
function Display(){
    var lst="";
    for(var i=0;i<products.length;i++){
        console.log(products[i].id,products[i].name,products[i].price);
        lst+="<div>\<h3>Image</h3><li><img src='/images/"+products[i].image+"'></li>\
        <li><h3>ID</h3>"+products[i].id+"</li>\
        <li><h3>Name :</h3>"+products[i].name+"</li>\
        <li><h3>Price</h3>"+products[i].price+"$</li>\
        <li><button>Add to cart</button></li>\
        </div>"
    }
    $("#main").html(lst);
}

$(document).ready(function () {
    console.log('Jquery CDN Working..');
    Display();
});