// Write your solution in this file!
const employee = {
    name: 'Pauline',
    streetAddress: 'Rainbow Road'
}

function updateEmployeeWithKeyAndValue(obj,key,value){
//    const newObj = {...obj};
//     newObj[key]=value
//     return newObj
    return {...obj, [key]:value }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value;
    return obj
}

function deleteFromEmployeeByKey(obj, key, value){
    const newObj={...obj};
    newObj[key]=value;
    delete newObj.key;
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(obj,key,value){
    obj[key]=value;
    delete obj.key;
    return obj
}
