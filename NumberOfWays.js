function dfs(array,target,sum, index){
    if(index>=array.length){
        if(sum=== target){
            return 1;
        }
        return 0;
    }
    let select = dfs(array, target, sum+array[index],index+1) + dfs(array,target,sum-array[index],index+1);
    let notSelect = dfs(array,target,sum,index+1);
    return notSelect + select;
}

let arr = [-1, 9, 8, -3, 4];
let target = 5;

console.log(dfs(arr, target, 0, 0));