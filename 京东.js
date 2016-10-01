/**
 * Created by joker on 16/9/5.
 */
function main(n,m) {
    var result = [];
    var arr = n.concat(m);
    for(var i=0;i<arr.length;i++) {
        if(result.indexOf(arr[i])==-1){
            result.push(arr[i]);
        }
    }
    for(var j=0;j<result.length;j++) {
        console.log(result[j]+" ");
    }
}

main(["1"],["1","3"]);

