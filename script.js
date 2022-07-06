const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
list.innerHTML = '';

let total= 0;



const products = ['Underpants:6.99','Socks:5.99','T-shirt:14.99','Trousers:31.99','Shoes:23.99'] ;
for(let item of products){
     const splitted = item.split(":");
     const names = splitted[0];
     const price = Number(splitted[1]);
     total += price;
     let itemText = names + ':' + price;
     const listItem = document.createElement('li');
     listItem.textContent = itemText;
     list.appendChild(listItem);
}
totalBox.textContent =  'Total: $' + total.toFixed(2);