/**
* 题目描述：
小赛正在做文档排版工作，可是工作量太大了，他需要用一个程序解决。
小赛得到一个字符串，字符串只由大小写字母和空格组成。连续字母构成一个单词，单词之间由空格隔开。小赛希望在最后的文档中，每个单词的第一个字母大写，
 其余字母小写。每行的单词与单词之间由一个空格隔开。为了达到较好的阅读效果，希望在文档的每一行中，最多只能有K个字母（不计空格的个数）。
 因此，他在排版的过程中，把单词一行一行依次往下排版，每行放尽可能多的单词，同时也要满足字母个数限制，直到把所有单词都排完。
你能帮他写出这个程序吗？
输入
输入第一行一个数K（K<=100000）。第二行为一个字符串，字符串只由字母和空格组成，长度不超过100000，表示要排版的原始文档。输入保证任何一个单词的长度不超过K。
输出
输出最后排版完成后的文档。（不要在任何一行的行末输出多余的空格）

样例输入
20
IT is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife
样例输出
It Is A Truth
Universally
Acknowledged That A
Single Man In
Possession Of A Good
Fortune Must Be In Want
Of A Wife
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
        var line = arr[nLine++];
        var line2 = arr[nLine++];
        if(line=='' || line2==''){
            continue;
        }
        line = line.trim();
        line2 = line2.trim();
        var k = parseInt(line);
        var words = line2.split(' ');
        var output = [];
        var len = 0;
        for(var i=0; i<words.length; i++) {
            words[i] = words[i].toLowerCase();
            var wordsarr = words[i].split('');
            wordsarr.splice(0,1,wordsarr[0].toUpperCase());
            words[i] = wordsarr.join('');
            len += words[i].length;
            if(len <= k){
                output.push(words[i]);
            } else {
                console.log(output.join(' '));
                output = [];
                i--;
                len =0;
            }
        }
        console.log(output.join(' '));



    }
});