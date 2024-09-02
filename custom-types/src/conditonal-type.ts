type StringOrName<T1 extends string | number, T2 extends string | number> = 
T1 extends number ?
T2 extends string ? number :
string : 
string;

function combine <T1 extends string | number, T2 extends string | number> (a: string, b: string): string{
    return a + b;
}

