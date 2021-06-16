//find 3rd largest number in array
 
function thirdLargestNum(arr, arr_size)
{
    /* There should be
    atleast three elements */
    if (arr_size < 3)
    {
        console.log('Invalid Input');
        return;
    }
   
    // Find first
    // largest element
    let first_large_num = arr[0];
    for (let i = 1;
             i < arr_size ; i++)
        if (arr[i] > first_large_num)
        first_large_num = arr[i];
   
    // Find second
    // largest element
    let second_large_num = Number.MIN_VALUE;
    for (let i = 0;
             i < arr_size ; i++)
        if (arr[i] > second_large_num &&
            arr[i] < first_large_num)
            second_large_num = arr[i];
   
    // Find third
    // largest element
    let third_large_num = Number.MIN_VALUE;
    for (let i = 0;
             i < arr_size ; i++)
        if (arr[i] > third_large_num &&
            arr[i] < second_large_num)
            third_large_num = arr[i];
   
   console.log('The third Largest element is ', third_large_num);
}
 
// Driver Code
 
    let arr = [12, 13, 1, 10, 34, 16];
    let n = arr.length;
    thirdLargestNum(arr, n);
                         

