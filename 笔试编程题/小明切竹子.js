/**
*题目描述：
小明的爸爸买个一根很长的竹子长N，但是太长了，小明的爸爸想把竹子切成许多根短的竹子方便储存，切完后的竹子长度依旧是整数，
 小明很淘气不喜欢两根长度一样，并且小明希望任意三根都不能组成三角形。请问如果小明爸爸按照小明的要求最多能切成多少根。
输入
第一行一个整数 T(T≤10) 表示数据组数。
每组数据有一行, 一个正整数 N(1≤N≤1e9)。
输出
对于每一个数据输出一个整数，表示可以切成的竹子数。

样例输入
1
6
样例输出
3
 * */

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
    arr.shift();

    for (var i=0; i<arr.length; i++) {
        var res = [];
        var num = parseInt(arr[i]);
        var j=1;
        num = num - j;
        while(num > 0) {
            if(res.length < 3){
                res.push(j);
            }
            else if(res[0]+ res[1] > res[res.length-1]){
                num = num + j;
            } else {
                res.push(j);
            }
            j++;
            num = num - j;
        }
        num = num + j;
        if(res.indexOf(num) > -1){
            console.log(res.length);
        } else if(res[0]+ res[1] > num){
            console.log(res.length);
        } else {
            console.log(res.length+1);
        }

    }
});