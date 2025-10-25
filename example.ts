function   greet(name:string){console.log("Hello, "+name+"!")}

interface Person{firstName:string;lastName:string;age:number}

const people :Person[]=[{firstName:"Alice",lastName:"Smith",age:25},
{firstName:"Bob",lastName:"Brown",age:30}, {firstName:"Charlie",lastName:"Davis",age:35}];

for(let i=0;i<people.length;i++){let p=people[i]; if(p.age>28){console.log(p.firstName+" is older than 28") } else{console.log(p.firstName+" is 28 or younger")}}

const add=(a:number,b:number)=>{return a+b}

console.log(add(5,10))

class Calculator{private result:number=0;add(n:number){this.result+=n}subtract(n:number){this.result-=n}getResult(){return this.result}}

const calc=new Calculator();calc.add(10);calc.subtract(3);console.log(calc.getResult())