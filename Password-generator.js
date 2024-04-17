/*
You need to write a password generator that meets the following criteria:
  6 - 20 characters long
  contains at least one lowercase letter
  contains at least one uppercase letter
  contains at least one number
  contains only alphanumeric characters (no special characters)

Return the random password as a string.

Note: 
  "randomness" is checked by counting the characters used in the generated passwords - 
  all characters should have less than 50% occurance. 
  Based on extensive tests, the normal rate is around 35%.
*/


// Solution

function passwordGen(){
  let pass = Array.apply(null, Array(Math.floor(Math.random()*(20-6+1)+6))).map(function(){
    let c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return c.charAt(Math.random() * c.length);
  }).join('');
  return /(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)^.{6,20}$/.test(pass) ? pass : passwordGen();
}

// or