
// type is dependent on another type

type a1 = null;
type a2 = a1 extends string ? string : null;


// nested conditional type
type a3 = undefined;
type a4 = number;
type d = a3 extends null ? null : a1 extends null ? null : a4 extends number ? number : any;

type Sheikh = {
    wife1: string,
    wife2: string
}

type CheckProperty<T, K> = K extends keyof T ? true : false;

type CheckWife = CheckProperty<Sheikh, "wife2">;

// const habbi: CheckWife = 

type Friends = "Rakhal" | "Horilal" | "Monolal";
type RemoveFriend<T, Y> = T extends Y ? never : T  ;
type CurrentFriend = RemoveFriend<Friends, "Rakhal">;






