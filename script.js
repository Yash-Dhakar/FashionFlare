
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if (bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}


if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}



const itemBody = document.querySelector("#item-body");
const itemTotal=document.querySelectorAll(".total");
const finalTotal1=document.querySelector(".final-total1");
const font=document.querySelector("font");
const finalTotal2=document.querySelector(".final-total2");


itemBody.addEventListener("change", (e) => {
    const targetedElem = e.target;
    const itemNo = Number(targetedElem.value);
    font.textContent="";
    const itemPrice = Number(targetedElem.parentNode.previousElementSibling.textContent.slice(1));
    var itemTotalPrice = itemNo * itemPrice;
    targetedElem.parentNode.nextElementSibling.textContent = `$${itemTotalPrice}`;
    var finalTotalPrice=0;

    for (let i of itemTotal){
        finalTotalPrice+=Number(i.textContent.slice(1));

    }
    finalTotal1.textContent=`$${finalTotalPrice}`;
    finalTotal2.textContent=`$${finalTotalPrice}`;
    




});


const discountBtn=document.getElementById("discount");
const coupenCode=["cara20","newyear2024","diwalisale20"]
const font=document.querySelector("font");

discountBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let coupen=discountBtn.previousElementSibling.value;
    let newPrice= Number(finalTotal1.textContent.slice(1));
    if (coupenCode.includes(coupen)){
        discountedPrice=parseInt(newPrice*0.8);
        finalTotal2.textContent=`$${discountedPrice}`;
        font.textContent="Coupen Applied!!!";
        font.style.color="#088178";
        discountBtn.previousElementSibling.value="";

    }
    else{
        font.textContent="Invalid Coupen!!!";
        font.style.color="red";
        discountBtn.previousElementSibling.value="";


    }

})







 


