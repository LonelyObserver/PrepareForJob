/**
 * 题目描述：
Please create a  function to extract the filename extension from the given path,return the extracted filename extension or null  if none.
输入
输入数据为一个文件路径
输出
对于每个测试实例，要求输出对应的filename extension

样例输入
Abc/file.txt
样例输出
txt
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
        var count = 0;
        var line = arr[nLine++].trim();
        if(line==''){
            continue;
        }
        var index = line.lastIndexOf('.');
        var res ='';
        if(index == -1) {
            console.log('null');
        } else {
            res = line.substring(index+1);
            console.log(res);
        }
    }
});