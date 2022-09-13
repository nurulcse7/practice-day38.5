/*
Practice task for local storage ("Level -4")
Step-1: All task are same as previous.
Step-2: One extra thing is added here. "Send" button.
Step-3: If you click on the "Send" button, all of the inputs (Name, Email, Message) will be set on the 
        localStorage at a time.
*/

// Name Field
document.getElementById('send-name').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    nameField.value = '',
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
    emailField.value = '',
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
    messageField.value = '',
    console.log(messageValue)

    localStorage.setItem('message', messageValue)
})
document.getElementById('delete-message').addEventListener('click', function(){
    localStorage.removeItem('message')
})

// Send all button
document.getElementById('send-all').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    localStorage.setItem('name', nameValue)

    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;
    localStorage.setItem('email', emailValue)

    const messageField = document.getElementById('message-field');
    const messageValue = messageField.value;
    localStorage.setItem('message', messageValue)


})

// Reset all button
document.getElementById('reset-btn').addEventListener('click', function(){
    localStorage.clear();
})


