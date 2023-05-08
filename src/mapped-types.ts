type AreaNumber = {
    first: number,
    last: number
}
type AreaString = {
    height: string,
    width: string
}

type AreaReadOnly = {
    readonly height: number,
    readonly width: number
};

const rectangularArea: AreaReadOnly = {
    height: 5656565,
    width: 45545
}
// read only type using data only read but not value reassign
// rectangularArea.height = 645465;
type BangladeshArea = {
    name: string;
    capital: number;
    flagColor: string;
};

// generic mapped type
type Area<T> = {
    readonly [key in keyof T]: T[key];
};

type newArea = Area<BangladeshArea> 
const myAddress : Area<{name: string, capital: number, flagColor: number}> = {name: "India", capital: 4, flagColor: 4};


type A = AreaNumber['first'];
type B = keyof AreaNumber;
