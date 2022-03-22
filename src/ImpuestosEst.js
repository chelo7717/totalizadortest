function precioTotal(cantidad,precio)
{
    if((cantidad <= 0) || (precio <= 0))
    {
        alert("Numero negativo");
    }
    let res=cantidad*precio;
    return res;
}

function ImpFORstate(valorcompra, valueState) {
    let valorImpuestos=0;
    let res;
    switch (valueState) {
        case 'UT':
            valorImpuestos = 0.0665;
            break;
        case 'NV':
            valorImpuestos = 0.08;
            break;
        case 'TX':
            valorImpuestos = 0.0625;
            break;
        case 'AL':
            valorImpuestos = 0.04;
            break;
        case 'CA':
            valorImpuestos = 0.0825;
            break;
        default:
            alert("No existe");
    }
    res = valorcompra * valorImpuestos;
    return res;
}
export default ImpFORstate;


function DescuentoMostrar(valorcompra){
    let valorDescuento=0;
    let res;
    if(valorcompra>30000){
        valorDescuento=0.15;
    }else{
        if(valorcompra>10000){
            valorDescuento=0.1;
        }else{
            if(valorcompra>7000){
                valorDescuento=0.07;
            }else{
                if(valorcompra>3000){
                    valorDescuento=0.05;
                }else{
                    if(valorcompra>1000)
                    {
                        valorDescuento=0.03
                    }
                }
            }
        }
    }
    return valorDescuento*100;
}


