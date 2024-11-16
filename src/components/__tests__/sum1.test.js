import { sum } from "../sum1";

test("sum function should calucate sum of two numbers",() => {
     
    const result= sum(3,4);
    //assertion
    expect(result).toBe(7);
});