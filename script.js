const newButton = document.querySelector('.newWorkoutButton')
const loginButton = document.querySelector('#login')
const logoutButton = document.querySelector('#logout')
const signupButton = document.querySelector('#signup')

let isSignedIn = 1

function hideButton() {
  if(isSignedIn > 0) {
    logoutButton.style.visibility = 'hidden'
  }
}

hideButton()