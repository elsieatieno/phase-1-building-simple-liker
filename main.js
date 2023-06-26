// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function toggleLike(event) {
  const heart = event.target;
  mimicServerCall()
    .then(() => {
      heart.classList.toggle('activated-heart');
      if (heart.innerHTML === '♡') {
        heart.innerHTML = '♥';
      } else {
        heart.innerHTML = '♡';
      }
    })
    .catch(error => {
      errorMessage.textContent = error;
      errorModal.classList.remove('hidden');
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

for (let heart of hearts) {
  heart.addEventListener('click', toggleLike);
}


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
