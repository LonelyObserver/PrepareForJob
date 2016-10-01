/**
 * Created by joker on 16/9/5.
 */
var lineAdd=0;//输入行计数
var inputArr=['1 2','3 4']; //输入两行

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
    while(line = readline()){
        line = line.split(' ');
        print(parseInt(line[0]) + parseInt(line[1]));
    }
})()