const cleanStr = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== "@" && str.charAt(i) !== "#") {
            result = result + str.charAt(i);
        }
    }
    return result;
};


const sortUserName = (usernames) => {
    return usernames.sort((a, b) => {
        const cleanA = cleanStr(a);
        const cleanB = cleanStr(b);
        console.log(cleanA, cleanB);
        if (cleanA < cleanB) return -1;
        if (cleanA > cleanB) return 1;
        return 0;
    });
};

const input = ["@john", "hello#world", "abc", "#def"];
console.log(sortUserName(input));


console.log("Hello World");

const fun = () => {
    try {
        console.log("Hello World");
        throw new Error("Hello World");
        return 100;
    } catch (err) {
        console.log("Catch block", err.message);
        return 200;
    } finally {
        console.log("THIS IS FINALLY");
        return 300;
    }
};

console.log(fun());


console.log("==== High Order Function =====")

function greet(greeting) {
    function Name(name) {
        return `${greeting}, ${name}`;
    }
    return Name;
}

const sayHello = greet("Hello!");
console.log(sayHello("Adhi"));