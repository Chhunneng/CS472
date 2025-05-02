"use strict";
let greetings = "hello"
let user = {
    firstName: "John",
    sayHi: function(str){
        console.log(this, str)
        console.log(this?.firstName);
        console.log(greetings);
    }
}
user.sayHi("Hello")
let func = user.sayHi
func()

func.bind(user)("hello");
func.bind(user, "hello")();
func.apply(user, ["hello"])
func.call(user, "hello")