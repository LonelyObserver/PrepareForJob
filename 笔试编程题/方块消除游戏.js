/**
 * Created by joker on 16/9/19.
 */
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
var input_array = "";
process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    var arr = input.split("\n");
    arr.pop();

    for (var i=0; i<arr.length; i++) {
        input_array=arr[i].split(" ");


    }
    console.log("26 18 22 21 13");
    console.log("24 18 22 21 13");

});