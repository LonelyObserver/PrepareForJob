/**
 * 题目描述：
给定一个英文字符串,请写一段代码找出这个字符串中首先出现三次的那个英文字符。
输入
"qywyery23tdd"
输出
y

样例输入
Have you ever gone shopping and
样例输出
e
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
        line = line.replace(/(\s)|(\d)/g,'').toLowerCase();
        line = line.split('');
        var res = [];
        var count = [];
        for(var i=0; i<line.length;i++) {
            var index = res.indexOf(line[i]);
            if(index == -1) {
                res.push(line[i]);
                count.push(0);
            } else {
                count[index]++;
                if(count[index] == 2) {
                    console.log(res[index]);
                    break;
                }
            }
        }

    }
});