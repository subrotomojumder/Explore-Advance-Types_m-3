let suburb: any;

suburb = "Noakhali Bangladesh";

// any type variable assertion
(suburb as string).length
console.log((suburb as string).length)

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === "string") {
        return `This Converted result is: ${parseFloat(param) * 1000}`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(50) as number; 

// second assertion system only for ts 
const resultToBeNumber2 = <string>kgToGram('50');

type CustomErrorType =  {
    message: string
}

try {
    
} catch (err) {
    console.log((err as CustomErrorType).message )
}