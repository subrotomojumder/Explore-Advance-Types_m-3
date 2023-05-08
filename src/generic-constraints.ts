
type PersonType = {
    name: string,
    age: number,
    address: string
};

type newType = "name" | "address" | "age";

type newTypeUsingKeyOf = keyof PersonType;

const a: newType = "address";
const b: newTypeUsingKeyOf = "address";

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key]
}


const property = getProperty({ name: "roton", age: 544545 }, "name");