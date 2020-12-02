class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string,age:number,gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn =new Human("Lynn",15,"female");

const person = {name : "ksg",
age :24,
gender :"male"};

//void는 빈것을 의미하며 저 위치에는 이 함수의 결과값에 대한 type을 지정할 수 있다
const sayhi = (person: Human): string=>{
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
}

console.log(sayhi(lynn));

export {};