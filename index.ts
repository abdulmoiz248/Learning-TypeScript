let menuid=1;
const menu:Pizza[]=[
    {id:menuid++,name:'Pizza',price: 15},
    {id:menuid++,name:'BurgerPizza',price: 12},
    {id:menuid++,name:'PastaPizza',price: 12},
    {id:menuid++,name:'ShawarmaSharma',price: 11},
    {id:menuid++,name:'E-pIZza',price:10 }
]

type Pizza={
    id:Number,
    name:string,
   price:number
}

type Order={
    id:number,
    pizza:Pizza,
    price:number,
    status:'Ordered' | 'Completed',
    review? :string
}

let wallet:number=100;
let orderQ:Order[]=[];
let orderid=0;

let addNewitem=(pizza:Omit<Pizza,'id'>):Pizza=>{
  let pizzas:Pizza={
    id:menuid++,
    ...pizza,
   }
    menu.push(pizzas);
    console.log(`${pizza.name} added to the order`);
    return pizzas;
}


let placeOrder=(pizzaName:string):Order | undefined =>{
    const pizza=menu.find(p=>p.name===pizzaName);
    if(pizza){
        wallet+=pizza.price;
        let order:Order={
            id:++orderid,
            pizza: pizza,
            price: pizza.price,
            status:'Ordered',
          //  review: 'CHeez baiya ha lkin kharcha itna ha'
        }
        orderQ.push(order);
        return order;
    } else {
        console.log('Invalid pizza name');
    }
}

let completeOrder=(orderId:number):void=>{
    const order=orderQ.find(o=>o.id===orderId);
    if(order){
        order.status='Completed';
        console.log(`${order.pizza.name} order completed`);
    } else {
        console.log('Invalid order ID');
    }
}

let getPizzaDetails=(identifier:number | string):Pizza | undefined  => {
   if(typeof(identifier)==='number'){
     return menu.find((pizza)=> identifier===pizza.id);
   }else {
    return menu.find((pizza)=> identifier.toLocaleLowerCase()===pizza.name.toLocaleLowerCase());
   }
}

 addNewitem({name:'BBQ',price:20});
// placeOrder('BBQ');

// addNewitem({id:menuid++,name:'Pepperoni',price:25});
// completeOrder(1);

// console.log('Current wallet balance:', wallet);
// console.log(orderQ);
// console.log(menu);


