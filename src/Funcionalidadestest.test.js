import DescuentoCalcular from "./Descuento";
import ImpFORstate from "./ImpuestosEst";
describe("Impuesto por Estado",()=>{
    it("Impuesto UT",()=>{
        expect(ImpFORstate(20,"UT")).toEqual(1.33);
    });
    it("Impuesto NV",()=>{
        expect(ImpFORstate(20,"NV")).toEqual(1.6);
    });
    it("Impuesto TX",()=>{
        expect(ImpFORstate(20,"TX")).toEqual(1.25);
    });
    it("Impuesto AL",()=>{
        expect(ImpFORstate(20,"AL")).toEqual(0.8);
    });
    it("Impuesto CA",()=>{
        expect(ImpFORstate(50,"CA")).toEqual(4.125);
    });
});
describe("Descuento",()=>{
    it("Descuento mayor a  30000",()=>{
        expect(DescuentoCalcular(30001)).toEqual(4500.15);
    });
    it("Descuento mayor a  10000",()=>{
        expect(DescuentoCalcular(10001)).toEqual(1000.1);
    });
    it("Descuento mayor a  7000",()=>{
        expect(DescuentoCalcular(7001)).toEqual(490.07000000000005);
    });
    it("Descuento mayor a  3000",()=>{
        expect(DescuentoCalcular(3001)).toEqual(150.05);
    });
    it("Descuento mayor a  1000",()=>{
        expect(DescuentoCalcular(1001)).toEqual(30.029999999999998);
    });
});