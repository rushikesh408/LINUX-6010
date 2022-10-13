const input = prompt("What's your xxx?");

console.log(input)


function onlySpecialchars(str)
      {
        // Regex to check if a string
        // contains only special
        // characters
        var regex = /^[^a-zA-Z0-9]+$/;
 
        // If the string is empty
        // then print No
        if (str.length < 1) {
          console.log("please enter a password");
          return;
        }
 
        // Find match between given
        // string & regular expression
        var matchedAuthors = regex.test(str);
 
        // Print Yes If the string matches
        // with the Regex
        if (matchedAuthors) console.log("Yes");
        else console.log("No");
      }
 
      // Driver Code
      
     // Given string str
      var str = prompt("What's your xxx?");
      
     // Function Call
      onlySpecialchars(str);
