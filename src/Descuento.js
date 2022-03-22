function DescuentoCalcular(valorcompra){
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
    return res = (valorcompra*valorDescuento);
}
export default DescuentoCalcular;