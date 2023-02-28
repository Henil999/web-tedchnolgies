document.querySelector(".arrow").addEventListener("click",function(){
    let hello = "";
    val = document.querySelector(".input1").value;
    
    hello = (val) => "Hello " + val;
    document.querySelector("#arrow").innerHTML = hello(val);
})

document.querySelector(".darray").addEventListener("click",function(){
    let arr = ["John", "Doe"];
// destructuring assignment
// sets firstname = arr[0]
// and surname = arr[1]
let [firstname, surname] = arr;
    document.querySelector("#darray").innerHTML = firstname +" " + surname ;
})

document.querySelector(".dobject").addEventListener("click",function(){
    let options = {
        title: "Car",
        model: "BMW M5",
        year: 2020
      };
      let {
        title,
        model,
        year
      } = options;
    document.querySelector("#object").innerHTML = title + " " + model+ " " + year ;
})

const { firstName, lastName, ...otherInfo } = {
    firstName: "Mahesh",
    lastName: "Babu", 
    companyName: "CodeSweetly",
    profession: "Web Developer",
    gender: "Male"
  }

document.querySelector(".fname").addEventListener("click",function(){
    document.querySelector("#fname").innerHTML = firstName;
})

document.querySelector(".lname").addEventListener("click",function(){
    document.querySelector("#lname").innerHTML = lastName;
})

document.querySelector(".othinfo").addEventListener("click",function(){
    document.querySelector("#othinfo").innerHTML = otherInfo;
})

document.querySelector(".sp").addEventListener("click",function(){
    let str = document.querySelector(".spread").value;
    document.querySelector("#spread").innerHTML = [...str];
})
