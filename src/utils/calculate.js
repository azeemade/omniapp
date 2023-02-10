export const calculate = (nums) => {
    if(nums.operator === 'addition') {
        return Number(nums.num1) + Number(nums.num2);
    }
    else if (nums.operator === 'subtraction') {
        return Number(nums.num1) - Number(nums.num2);
    }
    else {
        return Number(nums.num1) * Number(nums.num2);
    }
}