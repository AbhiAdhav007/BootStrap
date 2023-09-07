
let products  = [

    {
        id : 1,
        name : "Honda-SUV",
        price: 1500000,
        model_Year:2021,
        color :"Black"
    },
    {
        id : 2,
        name : "Tiago",
        price: 1100000,
        model_Year:2022,
        color :"Navy-Blue"
    },
    {
        id : 3,
        name : "Swift",
        price: 500000,
        model_Year:2019,
        color :"White"
    },
    {
        id : 4,
        name : "Creta",
        price: 2500000,
        model_Year:2023,
        color :"Red"
    }
]

let id;

const tableBody = document.getElementById('table_body');

let container = document.getElementsByClassName('container')[0];

let body = document.getElementById('body');

let confirmBtn = document.getElementById('delete');

let viewProdContainer = document.getElementById('view_product');


let addNewProdBtn = document.getElementById('newProductBtn');


//add lsit of product present
let addProduct = ()=>{

    products.forEach((product)=>{

        let tr = document.createElement('tr');

        tr.innerHTML =`
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>
         <div class="action-buttons"  id=${product.id}>
             <ion-icon name="eye-outline"onclick="viewProduct(event)"></ion-icon>
             <ion-icon name="create-outline" onclick="editProduct(event)"></ion-icon>
             <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="deletProduct(event)">
                          Delete
                         </button>
         </div>
        </td>`

     tableBody.appendChild(tr);
    })
};
addProduct();


//view Product

function viewProduct(event){
    viewProdContainer.innerText = ""
    
    let id = event.target.parentNode.id;
    console.log(id);

    let product = products.find((product)=>{
        if(product.id==id){
            return product;
        }
    })
    console.log(product);
    let ele = document.createElement('div');

    ele.innerText = `1.Name: ${product.name}
    2.Color: ${product.color}
    3.Model_Year: ${product.model_Year}
    4.Price: ${product.price}`
    viewProdContainer.appendChild(ele);
}

//delete selected Prodduct

function deletProduct(event){

    id = event.target.parentNode.id;

}

//Confirm to delete selected product

confirmBtn.addEventListener('click' , ()=>{

    viewProdContainer.innerText = ""
    // console.log(id);
    products.forEach((product , index) =>{

        if(product.id == id){
            
            if (index > -1) { // only splice array when item is found
                products.splice(index, 1); // 2nd parameter means remove one item only
              }
            //   console.log(products);
              console.log('Product is removed')
              return;
              
        }
    })

    tableBody.innerHTML= '';

    addProduct()
})

function editProduct(event){

    viewProdContainer.innerText = ""
    id = event.target.parentNode.id;

    let field = prompt("Please enter field name that you want to change ?");

    let value = prompt("Enter new value..!")

    products.forEach((product)=>{

        if(product.id == id){
            product[field] = value; 
            console.log(product)
            tableBody.innerHTML= '';
            addProduct();
            return;
        }

    })

}

addNewProdBtn.addEventListener('click' , (event)=>{

    viewProdContainer.innerText = ""
    let a = document.createElement('a');
    a.href = './addNewProd.html'
    a.target = '_blank'
    a.click();
    let product = JSON.parse(localStorage.getItem('product'));

    if(product){
        console.log(product);
        product['id'] = products.length + 1;
        products.push(product);
        tableBody.innerText = '';
        addProduct();
        localStorage.removeItem('product');
        // let div = document.createElement('div');
        viewProdContainer.innerHTML = `<div class="alert alert-primary" role="alert">
        Product Added SuccessFully..!
      </div>`
    //   container.appendChild(div)
    }
    
})



// //for adding the product
// const submitBtn = document.getElementById('submitBtn');
// let Prodcolor = document.getElementById('color')
// const productName = document.getElementById('name');
// const productPrice = document.getElementById('price');
// const model_Year = document.getElementById('year')


// //Adding new Product
// submitBtn.addEventListener('click', (event) => {

//     event.preventDefault();

//     console.log('testfdsufbdsuidsifdsifnsdifdsiubdsuiizdhfdgvndfuigndfghsu')
    
//     let name = productName.value;
//     let price = parseInt(productPrice.value);
//     let color = Prodcolor.value;
//     let model_year = model_Year.value;

//     if (productName.value) {
//         productName.value = "";
//     }
//     if (productPrice.value) {
//         productPrice.value = "";
//     }

//     let product = {
//         name,
//         price,
//         color,
//         model_year
//     }
//     products.push(product);
//     console.log(products);

// })