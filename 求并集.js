/**
 * Created by joker on 16/9/5.
 */
var lineAdd=0;//输入行计数
var inputArr=['1 2','1','2 3','1 2','1','1 3']; //输入两行

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
    var k=1;
    var arr1=[];
    var arr2=[];
    while(line = readline()){
        line = line.split(' ');
        if(k%3 == 2) {
            arr1.push(line);
        }
        else if(k%3 == 0){
            arr2.push(line);
        }
        k++;
    }
    for(var i=0;i<arr1.length;i++) {
    main(arr1[i],arr2[i]);
}
    function main(n,m) {
        var result = [];
        var arr = n.concat(m);
        for(var i=0;i<arr.length;i++) {
            if(result.indexOf(arr[i])==-1){
                result.push(arr[i]);
            }
        }
        print(result.join(' '));
    }
})()

