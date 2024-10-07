function RotateImage(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<i;j++){
            let temp = arr[i][j];
            arr[i][j]=arr[j][i];
            arr[j][i]=temp;
        }
    }
    for(let i=0;i<arr.length;i++){
       arr[i].reverse();
    }
    return arr;
}
let matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(RotateImage(matrix));