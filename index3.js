//word is anagram with the other word

    function anagram(wrd1, wrd2) {
        if (wrd1.length !== wrd2.length) {
            return false;
        }

        const result = {};
        for (let i=0;i<wrd1.length;i++) {
            let char = wrd1[i];
            result[char] = result[char] ? result[char] += 1 : result[char] = 1;
        }
    
        for (let i=0;i<wrd2.length;i++) {
            let char = wrd2[i];
            if (!result[char]) {
                return false;
            }
            else {
                result[char] = -1;
            }
        }

        return true;
    }
    
    console.log(anagram('ban','nan'));          //give the two words here to check if it is anagrom or not

