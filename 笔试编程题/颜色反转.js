/**
 例如 #0000FF 表示蓝色，#FF7F50 表示珊瑚红。在这道题中，我们要求把给定的一种颜色取反，方法是把 RGB 的每个位转换成十进制 rgb，
 再用 255 减去，再转换成 16 进制。例如蓝色取反是黄色（#FFFF00）。
 输入
 请从控制台读取输入，输入不超过50行，每行包含一个16进制 RGB 表示一种颜色，保证题目中的字母均大写。
 输出
 请向控制台输出你的结果，对于读取的每一行输入，输出一行格式相同的 16 进制 RGB 表示取反后的颜色，要求字母也是大写。

样例输入
#0000FF
#FFFF00
样例输出
#FFFF00
#0000FF
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

    var res;
    var array;
    for (var i=0; i<arr.length; i++) {
        array = arr[i].split('');
        for (var j=1;j<array.length;j++){
            var a;
            a = 15-parseInt(array[j],16);
            array[j]= a.toString(16).toUpperCase();
        }
         res = array.join('');
        console.log(res);


    }
});