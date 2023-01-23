function twoSum(arr,target){
    var sums = []
    for (let i =  0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                sums.push([arr[i], arr[j]] )
            }
        }
    }
    return sums
}
document.write(twoSum([3,5,2,-4,8,11],7),"<br>")

function trianglePascal(numRows){
    if(numRows === 0)return[];
    if(numRows === 1) return [[1]]
    let result = []
    for(let row = 1;row <= numRows; row++){
        let arr = []
        for(let col = 0;col<row;col++){
            if(col === 0 || col === row - 1){
                arr.push(1)
            }else{
                arr.push((result[row-2][col-1]+ result[row-2][col]))
            }
        }
        result.push(arr)
    }
    return result
}
document.write(trianglePascal(5))