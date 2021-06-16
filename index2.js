//Missing number in given range

function Missing(arr, low, high)
{
    let num_of_range = Array(high - low + 1).fill(0);           

    for (let i = 0; i < arr.length; i++) {
  
        if (low <= arr[i] && arr[i] <= high)
        num_of_range[arr[i] - low] = true
    }  
      console.log('Missing Numbers:');

    for (let x = 0; x <= high - low; x++) {
        if (num_of_range[x] == false)
   
            console.log(((low + x) + " "))
    }

}


    let arr = [13,11,12,14,15,17,13,18,19]
    let low = 10
    let high = 19
    console.log(Missing(arr, low, high)) 

   
