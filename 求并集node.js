var input = "";
var input_array = "";
input = "1 2\n1\n2 3\n1 2\n1\n2 3";
function main(n,m) {
    var result = [];
    var arr = n.concat(m);
    for(var i=0;i<arr.length;i++) {
        if(result.indexOf(arr[i])==-1){
            result.push(arr[i]);
        }
    }
    process.stdout.write(result.join(' ')+"\n");
}
    var arr = input.split("\n");
    var arr1=[];
    var arr2=[];
    var inline = 1;
    for (var i=0; i<arr.length; i++) {
        input_array=arr[i].split(" ");
        if(inline%3 == 2) {
            arr1.push(input_array);
        }
        else if(inline%3 == 0){
            arr2.push(input_array);
        }
        inline++;
    }

    for(var i=0;i<arr1.length;i++) {
        main(arr1[i],arr2[i]);
    }