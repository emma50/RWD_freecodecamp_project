
    // To validate a string is a palindrome
    function isPalindrome(str) {
       let reversedStr;
    
       for (let i = 0; i < str.length; i++) {
           if (str.charAt(i) == str.charAt(str.length - 1)) {
              reversedStr = str.charAt(i) == str.charAt(str.length - (i + 1));
           } else {
               return false;
           }
        }
        return reversedStr;
    }
