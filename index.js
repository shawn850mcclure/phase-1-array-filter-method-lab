function findMatching(drivers,names){
    return drivers.filter((parameter) => parameter.toUpperCase().includes(names.toUpperCase()))
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toUpperCase().substring(0, letters.length) === letters.toUpperCase());
}

function matchName(drivers, argument){ 
    return drivers.filter(driver => driver.name === argument)
}