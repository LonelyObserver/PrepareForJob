/**
 * Created by joker on 16/9/6.
 */
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
var input_array = "";
process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine=0;
    while(nLine < input_array.length){
        var line = input_array[nLine++];//第一行:0
        var line2 = input_array[nLine++];
        var line3 = input_array[nLine++];
        if(line === ''||line2 === ''|| line3===''){
            continue;
        }
        var input_arrays1 = line.split(' ');
        var input_arrays2 = line2.split(' ');
        var input_arrays3 = line3.split(' ');
        var num = +input_arrays1[0];
        if(num==0) return;
        else {

        }
    }
});
