O(n log n) time | O(n) space

const twoSum = (array, targetSum) => {
    let l_ptr = 0;
    let r_ptr = array.length - 1;

    array.sort((a, b) => a - b);

    while(l_ptr < r_ptr) {
        const currentSum = array[l_ptr] + array[r_ptr];

        if(currentSum === targetSum) return [array[l_ptr], array[r_ptr]];
        else if(currentSum < targetSum) {
            l_ptr++;
        } else rptr--;
    }
    return [];
}

console.log(twoSum([-4, -1, 1, 3, 5, 6, 8, 11], 10));
