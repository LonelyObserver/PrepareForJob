/**
 * Created by joker on 16/9/5.
 */
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
var input_array = "";
process.stdin.on('data', function (data) {
    input += data;
});
function solveMeFirst(a, b) {
    return a + b;
}
process.stdin.on('end', function () {
    var arr = input.split("\n");

    // for(var x in arr) {
    //     if(arr[x]=="") {
    //         arr.splice(x,1);
    //     }
    // }
    arr.pop();
    for (var i=0; i<arr.length; i++) {
        input_array=arr[i].split(" ");

        var inline = 0;
        var res;
        var _a = parseInt(input_array[inline].trim(), 10);
        inline += 1;

        var _b = parseInt(input_array[inline].trim(), 10);
        inline += 1;

        res = solveMeFirst(_a, _b);
        process.stdout.write(" " + res + " \n");
    }
});

//nodejs控制台结束输入快捷键是Command + D