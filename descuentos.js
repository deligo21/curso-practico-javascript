// const precioOriginal = 120;
// const descuento = 18;

const cupones = [
    {
        name: "deligo21",
        discount: 15
    },
    {
        name: "cariño",
        discount: 20
    },
    {
        name: "valorant",
        discount: 25
    }
]

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calculatePriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = cupones.find(isCouponValueValid);
    

    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = `El precio con descuento es: ${precioConDescuento}`;
    }
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });