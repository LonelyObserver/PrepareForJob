/**
 * Created by joker on 16/9/6.
 */
/**
 * 题目描述

 计算字符串最后一个单词的长度，单词以空格隔开。

 输入描述:
 一行字符串，非空，长度小于5000。


 输出描述:
 整数N，最后一个单词的长度。

 输入例子:
 hello world

 输出例子:
 5
 */
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var input="";
var arr="";
process.stdin.on('data',function(data){
    input += data;
});

process.stdin.on('end',function(){
    arr = input.split("\n");
    arr.pop();
    for(var i=0;i<arr.length;i++){
        var arr1 = arr[i].split(" ");
        arr1 = arr1[arr1.length-1];
        console.log(arr1.length);
    }
});