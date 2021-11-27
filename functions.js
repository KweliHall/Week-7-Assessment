//#1




//#2
function unique(str) {
    let obj = {};
    for (var i = 0; i < str.length; i++) {
      var ch = str[i];
      if (obj[ch]) return false;
      obj[ch] = true;
    }
    return true;
}
// O(n) O(n)

//#3
function Pangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
}
// O(n) O(n)

//#4
function findLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
}
// O(n) O(n)

