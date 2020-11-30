/* const name = "ksg",
age =24,
gender ="male";
 */
//void는 빈것을 의미하며 저 위치에는 이 함수의 결과값에 대한 type을 지정할 수 있다
const sayhi = (name:string,age:number,gender:string):void=>{
    console.log(`hello ${name}, you are ${age}, you are a ${gender}`);
}

sayhi("ksg",24,"male");

export {};