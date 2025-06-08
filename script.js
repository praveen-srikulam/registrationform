var submit = document.getElementById("submit")

submit.addEventListener("click", function () {
        event.preventDefault()

        var nameRegex = /^[a-zA-z]+$/
        var emailRegex = /^[a-zA_Z0-9]+@gmail\.com$/
        var passwordRegex = /^.{6,}$/

        var name = document.getElementById("name")
        var email = document.getElementById("email")
        var password = document.getElementById("password")

        var validate = true
        if (nameRegex.test(name.value) == false) {
            document.querySelector(".nameError").style.display = "block"
            validate = false
        }
        else {
            document.querySelector(".nameError").style.display = "none"
        }
        if (emailRegex.test(email.value) == false) {
            document.querySelector(".emailError").style.display = "block"
            validate = false
        }
        else {
            document.querySelector(".emailError").style.display = "none"
        }

        if (passwordRegex.test(password.value) == false) {
            document.querySelector(".passwordError").style.display = "block"
            validate = false
        }
        else {
            document.querySelector(".passwordError").style.display = "none"
        }

        if(validate == true)
        {
            alert("You have successfully registered.")
        }

})