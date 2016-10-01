/**
题目描述：
继MIUI8推出手机分身功能之后，MIUI9计划推出一个电话号码分身的功能：首先将电话号码中的每个数字加上8取个位，然后使用对应的大写字母代替
（"ZERO", "ONE", "TWO", "THREE", "FOUR",
"FIVE", "SIX", "SEVEN", "EIGHT", "NINE"），
然后随机打乱这些字母，所生成的字符串即为电话号码对应的分身。
输入
第一行是一个整数T（1<=T<=100)表示测试样例数；接下来T行，每行给定一个分身后的电话号码的分身（长度在3到10000之间）。
输出
输出T行，分别对应输入中每行字符串对应的分身前的最小电话号码（允许前导0）。

样例输入
4
EIGHT
ZEROTWOONE
OHWETENRTEO
OHEWTIEGTHENRTEO
样例输出
0
234
345
0345
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
    for (var i=1; i<arr.length; i++) {
        var res;
        var arr2=[];
        while(arr[i].length>0) {
            if (arr[i].indexOf('ZERO') > -1) {
                arr2.push(2);
                arr[i] = arr[i].replace('ZERO', '');
            }
            if (arr[i].indexOf('ONE') > -1) {
                arr2.push(3);
                arr[i] = arr[i].replace('ONE', '');
            }
            if (arr[i].indexOf('TWO') > -1) {
                arr2.push(4);
                arr[i] = arr[i].replace('TWO', '');
            }
            if (arr[i].indexOf('THREE') > -1) {
                arr2.push(5);
                arr[i] = arr[i].replace('THREE', '');
            }
            if (arr[i].indexOf('FOUR') > -1) {
                arr2.push(6);
                arr[i] = arr[i].replace('FOUR', '');
            }
            if (arr[i].indexOf('FIVE') > -1) {
                arr2.push(7);
                arr[i] = arr[i].replace('FIVE', '');
            }
            if (arr[i].indexOf('SIX') > -1) {
                arr2.push(8);
                arr[i] = arr[i].replace('SIX', '');
            }
            if (arr[i].indexOf('SEVEN') > -1) {
                arr2.push(9);
                arr[i] = arr[i].replace('SEVEN', '');
            }
            if (arr[i].indexOf('EIGHT') > -1) {
                arr2.push(0);
                arr[i] = arr[i].replace('EIGHT', '');
            }
            if (arr[i].indexOf('NINE') > -1) {
                arr2.push(1);
                arr[i] = arr[i].replace('NINE', '');
            }

        }

        res = arr2.sort().join('')
        console.log(res);





    }
});