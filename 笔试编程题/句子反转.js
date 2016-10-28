/**
 题目描述：
 给定一个句子（只包含字母和空格）， 将句子中的单词位置反转，单词用空格分割, 单词之间只有一个空格，前后没有空格。
 比如：
 （1） “hello xiao mi”-> “mi xiao hello”
 输入
 输入数据有多组，每组占一行，包含一个句子(句子长度小于1000个字符)
 输出
 对于每个测试示例，要求输出句子中单词反转后形成的句子

 样例输入
 hello xiao mi
 样例输出
 mi xiao hello
 */

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input="";
var arr="";
process.stdin.on('data',function(data){
    input +=data;
});

process.stdin.on('end',function(){
    var nLine = 0;
    arr = input.split("\n");
    while(nLine<arr.length){
        var line = arr[nLine++].trim();
        if(line==''){
            continue;
        }
        line = line.split(' ');
        line.reverse();
        console.log(line.join(' '));


    }
});