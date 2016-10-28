/**
 * 二叉树后序遍历非递归(2个栈)\(1个栈)
 */
var tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value:7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}



var posOrderUnrecur2 = function (node) {
    if(!node) {
        throw Error('Empty tree');
    }
    var s1 = [];
    var s2 = [];
    s1.push(node);
    while(s1.length !==0) {
        node = s1.pop();
        s2.push(node);
        if(node.left) s1.push(node.left);
        if(node.right) s1.push(node.right);
    }
    while(s2.length !==0) {
        console.log(s2.pop().value);
    }
}

var posOrderUnrecur1 = function (node) {
    if(!node) {
        throw Error('Empty tree');
    }
    var stack = [];
    stack.push(node);
    var tmp = null;
    while(stack.length !== 0) {
        tmp = stack[stack.length - 1];
        if(tmp.left && node !== tmp.left && node !== tmp.right) {
            stack.push(tmp.left);
        } else if(tmp.right && node !== tmp.right) {
            stack.push(tmp.right);
        } else {
            console.log(stack.pop().value);
            node = tmp;
        }
    }

}

posOrderUnrecur1(tree);
