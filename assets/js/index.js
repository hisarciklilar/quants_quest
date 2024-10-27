// Add event listeners
// I followed the love-maths walkthrough example to add page load listener 
// I wrote my own version of the button listeners
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (button.getAttribute("id") === "create-username") {
                startUsernameForm();
            }
        });
    }
})

function startUsernameForm() {
    let html = 
    `
    <form id="username-form">
      <h2>Create User Name</h2>
          <!-- Adding text fields -->
          <div class="user-detail">
            <div>
              <label for="username-1">Create username of minimum 8 and maximum 10 characters </label>
              <input
                id="username-1"
                type="text"
                name="username-1"
                placeholder="Username"
                required
                class="block-label"
                aria-labelledby="username"
              >
            </div>
            <div>
              <label for="username-2">Re-type your username</label>
              <input
                id="username-2"
                type="text"
                name="username-2"
                placeholder="Re-type username"
                required
                class="block-label"
                aria-labelledby="username"
              >
            </div>
          </div>

          <div>
            <button type="submit" id="create">Create</submit>
          </div>
        </form>
    `
    document.getElementById("login-container").innerHTML = html;   
    document.getElementById('username-form').addEventListener('submit', submitHandle);
}

// The following code for localStorage is written using a few sources:
// The information and examples provided on 
// https://www.w3schools.com/html/html5_webstorage.asp
// after my second meeting with my mentor, Matt Bodden; and also examples from
// "Getting Form Values" and "Form Submission" modules on Code Institute pages
function submitHandle(event) {
    event.preventDefault(); 
    let usernameOne = document.getElementById('username-1').value;
    let usernameTwo = document.getElementById('username-2').value;
    localStorage.setItem("username", usernameOne);
    if (usernameOne === usernameTwo) {
        let html = `
        <div id="message"> Username "${usernameOne}" saved! Thank you! </div>
        <a href="quiz.html" id="start-quiz-now"> <div>Start the quiz!</div></a>
        `;
        document.getElementById("login-container").style.backgroundColor = "white"
        document.getElementById("login-container").style.border = "5px solid #3a3a3a";
        document.getElementById("login-container").style.borderRadius = "10px";
        document.getElementById("login-container").innerHTML = html;
     } else {
        alert("Usernames do not match! Please try again.");
        startUsernameForm();
    }
};


