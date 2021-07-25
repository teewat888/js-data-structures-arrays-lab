// Write your solution here!
const drivers = ["Milo","Otis","Garfield"];

const destructivelyAppendDriver = (name)=>{
    drivers.push(name);
}

const destructivelyPrependDriver = (name)=>{
    drivers.unshift(name);
}

const destructivelyRemoveLastDriver = ()=>{
    drivers.pop();
}

const destructivelyRemoveFirstDriver = ()=>{
    drivers.shift();
}

const appendDriver = (name)=>{
    const newDrivers = [...drivers];
    newDrivers.push(name);
    return newDrivers
}

const prependDriver = (name)=>{
    const newDrivers = [...drivers];
    newDrivers.unshift(name);
    return newDrivers
}

const removeLastDriver = ()=>{
    const newDrivers = [...drivers];
    newDrivers.pop();
    return newDrivers
}

const removeFirstDriver = ()=>{
    const newDrivers = [...drivers];
    newDrivers.shift();
    return newDrivers
}