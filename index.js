
function myEach(collection, callback){
    const updatedCollection = newCollection(collection);
    for (let item = 0; item<updatedCollection.length; item++){
        callback(updatedCollection[item])
    }
    return collection
}

function myMap(collection, callback){
    const updatedCollection = newCollection(collection);
    const newColl = []
    for (let item = 0; item<updatedCollection.length; item++){
        newColl.push(callback(updatedCollection[item]))
    }
    return newColl
}

function myReduce(collection, callback, acc){
    let updatedCollection = newCollection(collection);

    if(!acc){
        acc = updatedCollection[0]
        updatedCollection = updatedCollection.slice(1);
    }
    for (let item = 0; item<updatedCollection.length; item++){
        acc = callback(acc, updatedCollection[item], updatedCollection)
    }
    return acc   
}

function myFind(collection, predicate){
    let updatedCollection = newCollection(collection);
    for(let item = 0; item< updatedCollection.length; item++){
        if(predicate(updatedCollection[item])){
            return updatedCollection[item]
        }
    }
}
function myFilter(collection, predicate){
    let updatedCollection = newCollection(collection);
    let newColl = []
    for(let item = 0; item< updatedCollection.length; item++){
        if(predicate(updatedCollection[item])){
            newColl.push(updatedCollection[item])
        }
    }return newColl
}
function mySize(collection){
    let updatedCollection = newCollection(collection);
    return updatedCollection.length
}
function myFirst(array, n){
    if (n){
        return array.slice(0,n)
    }else {
        return array[0]
    }
}

function myLast(array, n){
    return n? array.slice(array.length-n):array[array.length-1]
}

function myKeys(object){
    let newKeys = []
    for(let key in object){
       newKeys.push(key)
    }return newKeys
}

function myValues(object){
    let newValues = []
    for(let value in object){
       newValues.push(object[value])
    }return newValues
}

function newCollection(collection){
    if (Array.isArray(collection)){
        return collection.slice();
    }else{
        return Object.values(collection)
    }
}
