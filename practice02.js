/*
Practice task for local storage ("Level -2") 
Step-1: HTML file will have a p tag and a button.
Step-2: The p tag will show "the count" which is initially 0. 
        (initially the value in local storage is 0)
Step-3: Every time, after clicking the button the number will be increased by 1. 
        and the result will be show in the p tag.
Step-4: With every click on the button, the result will be stored in the local storage also.
Step-5: Now the result is stored in local storage. So, if you reload the page or close the tab and open again,
        the result of "the count" is not 0. Rather it will show the value from local storage without reset.
*/
// ref. 28-1
// console.log('first')

document.getElementById('increase-value').addEventListener('click', function(){
    // console.log('button clicked')
    const increaseField = document.getElementById('increase-field')
    const increaseValueString = increaseField.innerText;
    const previousIncreaseValue = parseInt(increaseValueString)
    // console.log(previousIncreaseValue);
    const newIncreaseNumber = previousIncreaseValue + 1;
    increaseField.innerText = newIncreaseNumber;
    console.log(newIncreaseNumber)
    localStorage.setItem()
})

// need help 4 and 5