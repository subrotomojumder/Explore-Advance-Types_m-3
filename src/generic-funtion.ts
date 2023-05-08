// arrow generic function
const createArray = (param: string): string[] => {
    return [param];
};

const newArrow = createArray("hero alom");

const createArray2 = <T>(param: T): T[] => {
    return [param]
};
function createArray5<T>(param: T): T[]{
    return [param]
};

const results1 = createArray2<boolean>(true);
const results2 = createArray2<string>("Rohim");

type Name = { name: string };
const results3 = createArray2<Name>({ name: "Hero Alom" })

const createArray3 = <U, X>(param1: U, param2: X): [U, X] => {
    return [param1, param2]
};
const results6 = createArray3<Name, boolean>({ name: "Kasem" }, true);
const results7 = createArray3<boolean, Array<string>>(true, ['nami', 'rohim']);
// console.log(results7)

// spread operator
const crushS = "Kate Winslet";
const addInMyCrushMind = <T>(myInfo: T) => {
    const crushS = "Kate Winndlet"
    const newData = { ...myInfo, crushS };
    return newData;
}
interface InfoInterface{
    name: string,
    role: string
}
const myInfo = {
    name: "Hero Alom",
    role: "Admin"
};
const results10 = addInMyCrushMind<InfoInterface>(myInfo);
console.log(results10)