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

var lineAdd=0;//输入行计数
var inputArr=['81 4','2 2']; //输入两行

//模拟输入
function readline(){
    var line=inputArr[lineAdd];
    lineAdd++;
    return line;
}

//模拟输出
function print(x){
    console.log(x);
}

////////////////////////以上代码模拟输入输出，不需提交，以下代码为提交部分///////////////////////////////////////
//模拟a+b
(function(){

    var line;
    var m;
    var n;
    while(line = readline()){
        var num =0;
        line = line.split(' ');
        m=parseInt(line[1]);
        n=parseInt(line[0]);
        for(var i=0;i<m;i++) {
            num += n;
            n = Math.sqrt(n);
        }
        num = num.toFixed(2);
        print(num);
    }


})()