console.log("connected...")

let display_img = function (url) {
    console.log(url);
    let image_obj = document.createElement("img");
    image_obj.src = url;
    let div = document.getElementById("id_dog");
    if (div.hasChildNodes()) {
        let ch = div.firstChild;
        console.log(typeof ch)
        div.replaceChild(image_obj, ch);
    }
    else {
        div.appendChild(image_obj);
    }

}


let dog_api_func = function () {
    let url = ""
    const Dogapi = fetch("https://dog.ceo/api/breeds/image/random").then((response) => response.json())
    .then((data) => display_img(data["message"]));


}

dog_api_func();
setInterval(dog_api_func, 10000);



let api_func = function () {

    let name_api = fetch("https://api.genderize.io/?name=luc").then((response) => response.json())
    .then((data) => console.log(data));

}


api_func();