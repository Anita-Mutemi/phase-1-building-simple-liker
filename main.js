// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

                                // Your JavaScript code goes here!
                                document.addEventListener("DOMContentLoaded", () => {
                                  const errorModal = document.getElementById("modal");
                                  const errorMessage = document.getElementById("modal-message");

                                  // Add the .hidden class to the error modal initially
                                  errorModal.classList.add("hidden");

                                  // Function to handle the server response
                                  const handleServerResponse = (response) => {
                                    if (response === "success") {
                                      // Change the heart to a full heart
                                      event.target.innerHTML = `Like! <span class="like-glyph activated-heart">&#x2665;</span>`;
                                    } else {
                                      // Display the error modal
                                      errorModal.classList.remove("hidden");
                                      errorMessage.textContent = "Server Error. Please try again.";

                                      // Hide the modal after 3 seconds
                                      setTimeout(() => {
                                        errorModal.classList.add("hidden");
                                      }, 3000);
                                    }
                                  };

                                  // Function to handle the like action
                                  const handleLikeAction = (event) => {
                                    const likeGlyph = event.target;

                                    // Simulate server request
                                    mimicServerCall()
                                      .then((response) => handleServerResponse(response))
                                      .catch(() => {
                                        // Display the error modal
                                        errorModal.classList.remove("hidden");
                                        errorMessage.textContent = "Network Error. Please try again.";

                                        // Hide the modal after 3 seconds
                                        setTimeout(() => {
                                          errorModal.classList.add("hidden");
                                        }, 3000);
                                      });

                                    // Toggle heart state
                                    likeGlyph.classList.toggle("activated-heart");
                                  };

  // Attach event listener to each like button
  const likeButtons = document.querySelectorAll(".like");
  likeButtons.forEach((button) => {
    button.addEventListener("click", handleLikeAction);
  });
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
