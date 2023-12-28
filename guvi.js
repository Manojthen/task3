//print odd number in an array
function(array){
    for(var i =0;i< array.lenght; i++){
        if (arry[i]%2!=0){
            console.log(arry[i])
        }
    }
}

//convert all the strings to title caps in a strng array
function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }


//sum of all number in an array
  function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }

//return all the prime number is an array
function(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}

//return all the palindromes is an array
function (arr, n)
{
    // Traversing each element of the array
    // and check if it is palindrome or not
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}

 
//remove duplicates from an araray
function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }


 //rotatae an array by in k
 function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    } 

    
    //arrow function
    //print odd number in an array
cont (array)   => {
  for(var i =0;i< array.lenght; i++){
      if (arry[i]%2!=0){
          console.log(arry[i])
      }
  }
}



