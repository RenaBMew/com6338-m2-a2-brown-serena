function greet() {

var username = prompt("What is your name?");
    if (username) {
        alert("Hello, " + username);
    }   else {
        alert("Hello Human!");
    }

var userage = prompt("How old are you?");
    console.log(parseInt(userage));

var bdayyes = confirm("Did you already celebrate your birthday this year?");

var currentyear = new Date().getFullYear();

var birthyear;
    if (bdayyes) {
        birthyear = currentyear - userage;
    }
    else {
        birthyear = currentyear - userage - 1;
    }

alert ("Hello, " + username + "! You were born in " + birthyear + "!");

}

// single line comment, cntrl + /

/* multi line comment

    Use a prompt to ask the user for her name.

        The user should be prompted with the text "What is your name?"
    Use alert to greet the user with her name.
        E.g. if the user entered "Sally", the alert should display "Hello, Sally"

    Use another prompt call to ask the user their age.
        The user should be shown the text "How old are you?"
        Use the parseInt method to convert the user's answer into a number.

    Use a confirm to ask the user if she has had a birthday yet this year.

    Use an alert to tell the user what year she was born in.

        If the user has had a birthday this year, subtract their age from the current year.
        If the user has not yet had a birthday this year, subtract their age plus one from the current year.
        Use new Date().getFullYear() to get the current year.

*/