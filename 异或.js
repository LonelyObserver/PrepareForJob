/**
给定整数m以及n个数字A1, A2, …, An，将数列A中所有元素两两异或，共能得到n(n-1)/2个结果。请求出这些结果中大于m的有多少个。
输入
第一行包含两个整数n, m。
第二行给出n个整数A1, A2, …, An。
输出
输出仅包括一行，即所求的答案。

样例输入
3 10
6 5 10
样例输出
2

Hint
样例解释
可能的两两异或的结果有：
5 xor 6 = 3
5 xor 10 = 15
6 xor 10 = 12
所以异或值大于10的有两种方案。

数据范围
对于30%的数据，1 <= n, m <= 1000
对于100%的数据，1 <= n, m, Ai <= 10^5
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
        var count=0;
        var value=0;
        var line = arr[nLine++];
        var line2 = arr[nLine++];
        if(line=='' || line2==''){
            continue;
        }
        line = line.split(' ');
        line2 = line2.split(' ');
        for(var i=0;i<line2.length;i++) {
            var j=i;
            while(j<line2.length-1){
                value= parseInt(line2[i])^parseInt(line2[j+1]);
                j++;
                if(value>parseInt(line[1])){
                    count++;
                }
            }
        }
        console.log(count);
    }
});