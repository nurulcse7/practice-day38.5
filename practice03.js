/*
Practice task for local storage ("Level -3")
Step-1: Create a form like the pictrue.
Step-2: Take the inputs. 
Step-3: If you click on the "Send Name" button, the input will be set on the localStorage like pictrue. 
        Do the same for other 'send buttons'. 
Step-4: If you click on the "Delete Name" button, the name key and value will be cleared from the local storage.
        Do the same for other 'send buttons'.
Step-5: If you click on the "Reset" button, the name key and value will be cleared from the local storage.
*/

// Name Field
document.getElementById('send-name').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    console.log(nameValue)

    localStorage.setItem('name', nameValue)
})
document.getElementById('delete-name').addEventListener('click', function(){
    localStorage.removeItem('name')
})

// Email Field
document.getElementById('send-email').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;
    console.log(emailValue)

    localStorage.setItem('email', emailValue)
})
document.getElementById('delete-email').addEventListener('click', function(){
    localStorage.removeItem('email')
})

// Message Field
document.getElementById('send-message').addEventListener('click', function(){
    const messageField = document.getElementById('message-field');
    const messageValue = messageField.value;
    console.log(messageValue)

    localStorage.setItem('message', messageValue)
})
document.getElementById('delete-message').addEventListener('click', function(){
    localStorage.removeItem('message')
})

// Reset all button
document.getElementById('reset-btn').addEventListener('click', function(){
    localStorage.clear();
})

