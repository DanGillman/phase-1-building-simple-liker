
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.5; 

      if (isSuccess) {
        resolve('Success response');
      } else {
        reject('Error response');
      }
    }, 1000); 
  });
}
mimicServerCall()
  .then((response) => {
    // Handle the success response from the server
    console.log(response);
  })
  .catch((error) => {
    // Handle the error response from the server
    console.error(error);
    const errorModal = document.getElementById('error-modal');
    errorModal.classList.remove('hidden');
    setTimeout(() => {
      errorModal.classList.add('hidden');
    }, 3000);
    // Perform additional error handling or show error message to the user
  });;


  mimicServerCall()
    .then((response) => {
      // Handle the success response from the server
      console.log(response);
      heart.innerText = FULL_HEART;
      heart.classList.add('activated-heart');
    })
    .catch((error) => {
      // Handle the error response from the server
      console.error(error);
      // Perform additional error handling or show error message to the user
    });
    const heart = document.getElementById('heart'); // Assuming you have an HTML element with id "heart"

    heart.addEventListener('click', function() {
      if (heart.innerText === FULL_HEART) {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      } else {
        // Handle the case when the heart is empty or in another state
      }
    });


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
