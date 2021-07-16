///# arrays in JS
// shuffle elements in thegiven  array
var a = [3,12,6,77,8];
// additional function 
function random_foo(x,y){
    return Math.random() - 0.5;
    }
function shuffle(arr){
    arr.sort(random_foo);
    }
    
// sorting an array without changing the original one
function foo(x,y){
    return x - y;
    }
    
arr = [2,3,1,4,,56];
function sortNoChangeOriginal(arr){
    var helpArr = arr.slice();
    helpArr.sort(foo);
    return helpArr;
    }
var arr_new =  sortNoChangeoriginal(arr);   
// small change to test git
    
