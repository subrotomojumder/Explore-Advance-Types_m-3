// generic interface declare
interface CrushInterface<T, U = null> {
    name: string,
    husband: T,
    wife?: U
};

const crush1: CrushInterface<boolean, string> = {
    name: "Nadim",
    husband: true,
    wife: 'Cokhina'
};

interface PersonInterface{
    name: string,
    age: number
}
const crush4: CrushInterface<PersonInterface, PersonInterface>={
    name: "Jakir kha",
    husband: {
        name: "Akkass",
        age: 64
    },
    wife:  {
        name: "Anika", 
        age: 15
    }
}

const crush2: CrushInterface<string> = {
    name: "Fokir khan",
    husband: "Kholil"
};

// child interface 
interface HusbandInterface<T, U = null> {
    name: T,
    salary: U
};
const crush3: CrushInterface<HusbandInterface<string, number>> = {
    name: "Fokira bibi",
    husband: {
        name: "Babul ",
        salary: 4646446
    }
};

