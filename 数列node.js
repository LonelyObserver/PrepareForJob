/**
 数列的定义如下：
 数列的第一项为n，以后各项为前一项的平方根，求数列的前m项的和。
 输入
 输入数据有多组，每组占一行，由两个整数n（n<10000）和m(m<1000)组成，n和m的含义如前所述。
 输出
 对于每组输入数据，输出该数列的和，每个测试实例占一行，要求精度保留2位小数。

 样例输入
 81 4
 2 2
 样例输出
 94.73
 3.41
 */
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// var input = "";
// var input_array = "";
// process.stdin.on('data', function (data) {
//     input += data;
// });
//
// process.stdin.on('end', function () {
//     var arr = input.split("\n");
//     arr.pop();
//     var n;
//     var m;
//     for (var i=0; i<arr.length; i++) {
//         var sum = 0;
//         input_array=arr[i].split(" ");
//         n = parseInt(input_array[0]);
//         m = parseInt(input_array[1]);
//         for(var j=0;j<m;j++){
//             sum += n;
//             n = Math.sqrt(n);
//         }
//         sum = sum.toFixed(2);
//         console.log(sum);
//     }
// });

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input="";
var arr="";
process.stdin.on('data',function(data){
    input +=data;
});

process.stdin.on('end',function(){
    var nLine = 0;
    var n;
    var m;
    arr = input.split("\n");
    while(nLine<arr.length){
        var sum = 0;
        var line = arr[nLine++];
        if(line==''){
            continue;
        }
        line = line.split(' ');
        n = parseInt(line[0]);
        m = parseInt(line[1]);
        for(var i=0;i<m;i++) {
            sum += n;
            n = Math.sqrt(n);
        }
        sum = sum.toFixed(2);
        console.log(sum);
    }
});