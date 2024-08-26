function interested() {
                let name = prompt("What is your name?");
                let email = prompt("What is your email address?");
                let game = prompt("What is your favorite game?");

                if (name === ""|| email ===""|| game ===""
                 ) {
                    alert("You have not entered your information ☹️");
                } else {
                    alert("Thank you, " + name + ". We will keep you updated on new games similar to " + game + " at " + email + ".");
                }
            }

            let InterestedButton = document.querySelector("#InterestedButton");
            InterestedButton.addEventListener("click", interested);
    
    