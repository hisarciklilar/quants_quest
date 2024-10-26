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
    html = `
    <form id="username-form" action="./thankyou.html" method="get">
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
            <div>
              <label for="email-address">Your email address</label>
              <input
                id="email-address"
                type="email"
                name="email_address"
                placeholder="Your email address"
                required
                class="block-label"
                aria-labelledby="email-address"
              >
            </div>
          </div>

          <div class="confirm">
            <input type="submit" class="block-label" value="Create" aria-label="Submit">
            <input type="reset" value="Reset" aria-label="Reset">
          </div>
        </form>
        `
    document.getElementById("index-main").innerHTML = html;     
}