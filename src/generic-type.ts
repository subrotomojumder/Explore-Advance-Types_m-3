// const rollNumbers :Array<number>=[4,45,45]

// generic type declare
type GenericArray<T> = Array<T> //t for type declare

const rollNumbers: GenericArray<number> = [4, 45, 45];
const allNames: GenericArray<string> = ["Robin", "Jakir", "Pokir"];
const weMarried: GenericArray<boolean> = [true, false];

type NameRoleType = { name: string, roll: number };
const userRollAndNames: GenericArray<NameRoleType> = [
    {
        name: "Abul khan",
        roll: 1541,
    },
    {
        name: "Mamun khan",
        roll: 1541,
    },
    {
        name: "Bulbul khan",
        roll: 45,
    },
];

// generic tuple type declare
type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<string, string> = ["Robin", "Mukta"];

const crushConvert: GenericTuple<object, string> = [
    {
        name: "Rohim",
        salary: 1515
    },
    "Khadija"
];

interface ISalaryType {
    name: string,
    salary: number
};

const crushConvert2: GenericTuple<ISalaryType, string> = [
    {
        name: "Kabila",
        salary: 454545
    },
    "Kolia"
]


