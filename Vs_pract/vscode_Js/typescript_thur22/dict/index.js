"use strict";
function tscall(name, num) {
    console.log(`${name} is my${num}`);
}
tscall("kiran", 1);
var PeopleManagemet;
(function (PeopleManagemet) {
    class People {
        constructor(name, email) {
            this._name = name;
            this._email = email;
        }
    }
})(PeopleManagemet || (PeopleManagemet = {}));


