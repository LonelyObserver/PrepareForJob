/**
 * 开发一个简单错误记录功能小模块，能够记录出错的代码所在的文件名称和行号。
 处理:
 1.记录最多8条错误记录，对相同的错误记录(即文件名称和行号完全匹配)只记录一条，错误计数增加；(文件所在的目录不同，文件名和行号相同也要合并)
 2.超过16个字符的文件名称，只记录文件的最后有效16个字符；(如果文件名不同，而只是文件名的后16个字符和行号相同，也不要合并)
 3.输入的文件可能带路径，记录文件名称不能带路径

 输入描述:
 一行或多行字符串。每行包括带路径文件名称，行号，以空格隔开。

 文件路径为windows格式

 如：E:\V1R2\product\fpgadrive.c 1325


 输出描述:
 将所有的记录统计并将结果输出，格式：文件名代码行数数目，一个空格隔开，如: fpgadrive.c 1325 1

 结果根据数目从多到少排序，数目相同的情况下，按照输入第一次出现顺序排序。

 如果超过8条记录，则只输出前8条记录.

 如果文件名的长度超过16个字符，则只输出后16个字符

 输入例子:
 E:\V1R2\product\fpgadrive.c 1325

 输出例子:
 fpgadrive.c 1325 1
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
    var a;
    var b;
    var c;
    var file=[];
    var res=[];
    var count=[];
    var res2=[];
    for (var i=0; i<arr.length; i++) {
        input_array=arr[i].split(" ");
        a=input_array[0].split("\\");
        c= a[a.length-1];
        b=input_array[1];
        file.push(c+" "+b);
    }
    var len = file.length < 8 ? file.length:8;
    for(var j=0;j<len;j++){
        var index=res.indexOf(file[j]);
        if(index == -1){
            res.push(file[j]);
            count.push(1);
        }
        else {
            count[index]++;
        }
    }
    res.sort(function(a,b){
        return count[res.indexOf(b)]-count[res.indexOf(a)];
    });
    count.sort(function(a,b){
       return b-a;
    });

    for(var k=0;k<res.length;k++){
        var d = res[k].split(" ")[0];
        d = d.length > 16 ? d.substring(d.length-16,d.length):d;
        d = d+" "+res[k].split(" ")[1]+" "+count[k];
        console.log(d);
    }
});