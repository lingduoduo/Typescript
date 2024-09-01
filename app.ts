let msg: string = 'Hello, World!';

console.log(msg);


function double(x: number): number {
    return x * 2;
}

console.log(double(10)); 

function doubley(x: number): void {
    console.log(x * 2);

}

const triple = (x: number): number => x * 3;

let fourtimes: (x: number) => number;
fourtimes = (x: number) => x * 4;

let nums: Array<number> = [1, 2, 3, 4, 5];

let personTuple: [string, number, boolean] = ['John', 25, true];

let something: any = 'hello';

let data: any[] = [1, 'John', true, [1, 2, 3]];

