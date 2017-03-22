// function Storage() {
//     this.store = [];
// }
//
// Storage.prototype = {
//     add: function (obj) {
//         this.store.push(obj);
//     },
//     delete: function (arg) {
//         if(typeof arg == 'string') {
//             for(var x in this.store) {
//                 if(this.store[x][key=arg] != undefined) {
//                     this.store.splice(this.store.indexOf(this.store[x]),1);
//                 }
//             }
//         } else {
//             for(var x in this.store) {
//                 if(JSON.stringify(this.store[x]) == JSON.stringify(arg)) {
//                     this.store.splice(this.store.indexOf(this.store[x]),1);
//                 }
//             }
//         }
//     },
//     update: function (k,val) {
//         for(var x in this.store) {
//             if(this.store[x][key=k] !=undefined) {
//                 this.store.splice(this.store.indexOf(this.store[x]),1,val);
//             }
//         }
//     },
//     find: function (k) {
//         for(var x in this.store) {
//             if(this.store[x][key=k] !=undefined) {
//                 return this.store[x];
//             }
//         }
//     }
// }


var  Storage = function () {
    var store = [];
    var add = function (obj) {
        store.push(obj);
    }
    var deletes =  function (arg) {
        if(typeof arg == 'string') {
            for(var x in store) {
                if(store[x][key=arg] != undefined) {
                    store.splice(store.indexOf(store[x]),1);
                }
            }
        } else {
            for(var x in store) {
                if(JSON.stringify(store[x]) == JSON.stringify(arg)) {
                    store.splice(store.indexOf(store[x]),1);
                }
            }
        }
    }
    var update = function (k,val) {
        for(var x in store) {
            if(store[x][key=k] !=undefined) {
                store.splice(store.indexOf(store[x]),1,val);
            }
        }
    }
    var find = function (k) {
        for(var x in store) {
            if(store[x][key=k] !=undefined) {
                return store[x];
            }
        }
    }

    return {
        add: function (obj) {
            add(obj);
            return store;
        },
        delete: function (arg) {
            deletes(arg);
            return store;
        },
        update: function (k,val) {
            update(k,val);
            return store;
        },
        find: function (k) {
            return find(k);
        }
    }
}();


