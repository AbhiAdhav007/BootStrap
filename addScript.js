//for adding the product
let submitBtn = document.getElementById('submitEvent');
let Prodcolor = document.getElementById('color')
const productName = document.getElementById('name');
const productPrice = document.getElementById('price');
const model_Year = document.getElementById('year')

// submitBtn.addEventListener('click' , (event)=>{
//     event.preventDefault()
// })
// Adding new Product
submitBtn.addEventListener('click', (event) => {

    event.preventDefault()
    
    let name = productName.value;
    let price = parseInt(productPrice.value);
    let color = Prodcolor.value;
    let model_year =parseInt(model_Year.value);

    if (productName.value) {
        productName.value = "";
    }
    if (productPrice.value) {
        productPrice.value = "";
    }
    if (Prodcolor.value) {
        Prodcolor.value = "";
    }
    if (model_Year.value) {
        model_Year.value = "";
    }

    let product = {
        name,
        price,
        color,
        model_year
    }
    // products.push(product);
    console.log(product);
    localStorage.setItem('product' , JSON.stringify(product));
    close();


})