// mocking

interface ITodo {
    id: number,
    userId: number,
    title: string,
    body: string
}
const getTodo = async (): Promise<ITodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json()
    return data;
}
const getTodoPromise = async ():Promise<void> => {
    const post = await getTodo();
    console.log(post)
}

// getTodoPromise()

const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data fetched success";
        if (data) {
            resolve(data)
        } else {
            reject("Fetch to failed")
        }
    });
};

const getPromise = async () => {
    const results1 = await makePromise();
    console.log(results1)
}
// getPromise()



const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if (data) {
            resolve(true)
        } else {
            reject("Fetch to failed")
        }
    });
};

const getPromiseBoolean = async () => {
    const results1 = await makePromiseBoolean();
    console.log(results1)
}
// getPromiseBoolean()

type DataType = {
    data: string
}

const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: "kjkdjfkj" };
        if (data) {
            resolve(data)
        } else {
            reject("Fetch to failed")
        }
    });
};

const getPromiseObject = async () => {
    const results1 = await makePromiseObject();
    console.log(results1)
}
// getPromiseObject()
