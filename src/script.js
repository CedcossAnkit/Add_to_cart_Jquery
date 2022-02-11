//Globle array and var.
var products = [
    { "id": 101, "name": "Basket Ball", "image": "basketball.png", "price": 150 },
    { "id": 102, "name": "Football", "image": "football.png", "price": 120 },
    { "id": 103, "name": "Soccer", "image": "soccer.png", "price": 110 },
    { "id": 104, "name": "Table Tennis", "image": "table-tennis.png", "price": 130 },
    { "id": 105, "name": "Tennis", "image": "tennis.png", "price": 100 }];

var cartArr=[];
var obj={};

//dislay()--display all iteam of products[] raay;
function Display(){
    var lst="";
    for(var i=0;i<products.length;i++){
        console.log(products[i].id,products[i].name,products[i].price);
        lst+="<div>\<h3>Image</h3><li><img src='/images/"+products[i].image+"'></li>\
        <li><h3>ID</h3>"+products[i].id+"</li>\
        <li><h3>Name :</h3>"+products[i].name+"</li>\
        <li><h3>Price</h3>"+products[i].price+"$</li>\
        <li><button onclick='addTOcart("+products[i].id+")'>Add to cart</button></li>\
        </div>"
    }
    $("#main").html(lst);
}


//add to cart
function addTOcart(id){
    console.log(' Add to cart working');
    for(var i=0;i<products.length;i++){
        if(id==products[i].id){
            obj[i]={
                pid:String(products[i].id),
                pname:products[i].name,
                pimage:products[i].image,
                pprice:String(products[i].price),
            };
           
            console.log(obj[i]);
            cartArr.push(obj[i]);
           


        }
        
    }
    displayCart();
    
    //checking cartarray
    // for(var j=0;j<cartArr.length;j++){
    //     console.log("array: "+cartArr[j].pname);
    // }

    

    //checing json obj
}

//diaplayCart Item

function displayCart(){
    var temp="";
    for(var i=0;i<cartArr.length;i++){
        temp+="<tr>\
        <td><img src='/images/"+cartArr[i].pimage+"'></td>\
        <td>"+cartArr[i].pid+"</td>\
        <td>"+cartArr[i].pname+"</td>\
        <td>"+cartArr[i].pprice+"$</td>\
        <td>1</td>\
        <td><buttton>❌</buttton></td>\
        </tr>"
    }
    $('#tBody').html(temp);
}

$(document).ready(function () {
    console.log('Jquery CDN Working..');
    Display();
});