//count the word element

let counter = word => {
    return word.split('').reduce((total, letter) => {
      total[letter] ? total[letter]++ : total[letter] = 1;
      return total;
    }, {});
  };
  
  console.log('Word count is :',counter("Apple") ); 


