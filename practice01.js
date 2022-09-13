/*
Practice task for local storage ("Level -1")
01. Clear your local storage;
02. Set a local storage item. key: name, value: Shakib Khan;
03. Set a local storage item. key: age, value: 40;
04. Get the local storage item you have set.
05. Remove the local storage key 'name' & key 'age'
06. Set a object as local storage item. The object is {firstName: 'Abraham', lastName: 'Linkon'}
*/

// 01.
// localStorage.clear()

// 02. 
// localStorage.setItem('name', 'Nurul Islam')

// // 03. 
// localStorage.setItem('age', 30)

// // 04. 
// localStorage.getItem('name') // 'Nurul Islam'
// localStorage.getItem('age')  // '32'

// // 05. 
// localStorage.removeItem('name')
// localStorage.removeItem('age')



// 06. 
const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addName = () =>{
    const firstName = getInputValueById('first-name-field');
    const lastName = getInputValueById('second-name-field');
    // console.log(firstName, lastName);
    // // set to local storage(simple way)
    // localStorage.setItem(firstName, lastName)
    // set to local storage(like a object)
    saveItemToLocalStorage(firstName, lastName)
}

const getFullNameFromLocalStorage = () => {
    let savedName = localStorage.getItem('name');
    let name = {};
    if(savedName){
        name = JSON.parse(savedName)
    }
    return name;
}

const saveItemToLocalStorage = (firstName, lastName) =>{
    const name = getFullNameFromLocalStorage();
    // add firstName to the object as property
    name[firstName] = lastName
    const nameStringified = JSON.stringify(name)
    // save to local storage
    localStorage.setItem('name', nameStringified)
}