function sendOrder(){


let name =
document.getElementById("name").value;


let phone =
document.getElementById("phone").value;


let address =
document.getElementById("address").value;


let product =
document.getElementById("product").value;


let quantity =
document.getElementById("quantity").value;



let message =

"Dark Chocolate Order %0A%0A" +

"Customer Name : " + name + "%0A" +

"Phone Number : " + phone + "%0A" +

"Address : " + address + "%0A" +

"Product : " + product + "%0A" +

"Quantity : " + quantity;



let whatsappNumber =
"91XXXXXXXXXX";



let url =

"https://wa.me/" +
whatsappNumber +
"?text=" + message;



window.open(url,"_blank");

}