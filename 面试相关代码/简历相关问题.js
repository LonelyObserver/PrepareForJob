//工厂模式
function createPerson (name, age, sex) {
    var o = {
        name: name,
        age: age,
        sex: sex,
        sayName: function () {
            alert(name);
        }
    }
    return o;
}

var person = createPerson('joker', 18, 'male');
console.log(person);


//构造函数模式
function Person (name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sayName = function () {
        alert(name);
    }
}

var person = new Person('joker', 18, 'male');

