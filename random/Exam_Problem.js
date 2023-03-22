const calculate1 = (num) => {
    let table = document.getElementById("table1");
    table.innerHTML = "";
    let count1 = vovelCount(num);
    let count2 = numberCount(num);
    let count3 = wordCount(num);
    let find1 = findLongestWord(num);
    let find2 = findSmallstWord(num);

      let row = table.insertRow();
      let cell01= row.insertCell();
      let cell02 = row.insertCell();
      cell01.innerHTML = "Total Vovel:";
      cell02.innerHTML = count1;

      let row2 = table.insertRow();
      let cell11 = row.insertCell();
      let cell12= row.insertCell();
      cell11.innerHTML = "Total Number:";
      cell12.innerHTML = count2;

      let row3 = table.insertRow();
      let cell21 = row.insertCell();
      let cell22= row.insertCell();
      cell21.innerHTML = "Total Words:";
      cell22.innerHTML = count3;

      let row4 = table.insertRow();
      let cell31 = row.insertCell();
      let cell32= row.insertCell();
      cell31.innerHTML = "Longest Word:";
      cell32.innerHTML = find1;
      
      let row5 = table.insertRow();
      let cell41 = row.insertCell();
      let cell42= row.insertCell();
      cell41.innerHTML = "Smallest Word:";
      cell42.innerHTML = find2;
    }

const calculate2 = (num) => {
    let table = document.getElementById("table2");
    table.innerHTML = " ";

    let count01 = numberOccurence(num);
    let count02 = numberOccurence(num);
    let count03 = SpcharOccurence1(num);
    let count04 = SpcharOccurence2(num);
    let count05 = SpcharOccurence3(num);

    // for (let i = 1; i <= 10; i++) {
    //     let row = table.insertRow();
    //     let cell1 = row.insertCell();
    //     let cell2 = row.insertCell();
    //     cell1.innerHTML = i;
    //     cell2.innerHTML = numberOccurence(num);
    //   }

      let row2 = table.insertRow();
      let cell11 = row2.insertCell();
      let cell12= row2.insertCell();
      cell11.innerHTML = "Total Number:";
      cell12.innerHTML = count02;

      let row3 = table.insertRow();
      let cell21 = row3.insertCell();
      let cell22= row3.insertCell();
      cell21.innerHTML = "Occurence of @:";
      cell22.innerHTML = count03;

      let row4 = table.insertRow();
      let cell31 = row4.insertCell();
      let cell32= row4.insertCell();
      cell31.innerHTML = "Occurence of #:";
      cell32.innerHTML = count04;
      
      let row5 = table.insertRow();
      let cell41 = row5.insertCell();
      let cell42= row5.insertCell();
      cell41.innerHTML = "Occurence of $:";
      cell42.innerHTML = count05;
    }

  document.getElementById("calculate").onsubmit = (e) => {
    e.preventDefault();
    let num = document.getElementById("words").value;
    calculate1(num);
    calculate2(num);
};

function vovelCount(num){
    let count = 0;
    let vowels = ["a","e","i","o","u"];
    let str = num.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}

function numberCount(num){
    let count = 0;
    let numbers = ["0","1","2","3","4","5","6","7","8","9"];
    for(let i = 0; i < num.length; i++){
        if(numbers.includes(num[i])){
            count++;
        }
    }
    return count;
}

function wordCount(num){
    let count = 1;
    let str = num.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i] == " "){
            count++;
        }
    }
    return count;
}

function findLongestWord(num){
    let arr = num.split(" ");
    let longest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;
}

function findSmallstWord(num){
    let arr = num.split(" ");
    let smallest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length < smallest.length){
            smallest = arr[i];
        }
    }
    return smallest;
}

function numberOccurence(num){
    let f0 = 0 , f1 = 0 , f2 = 0 , f3 = 0 , f4 = 0 , f5 = 0 , f6 = 0 , f7 = 0 , f8 = 0 , f9 = 0;
    let numbers = ["0","1","2","3","4","5","6","7","8","9"];
    for(let i = 0; i < num.length; i++){
        if(numbers.includes(num[i])){
            if(num[i] == "0"){
                f0++;
            }
            if(num[i] == "1"){
                f1++;
            }
            if(num[i] == "2"){
                f2++;
            }
            if(num[i] == "3"){
                f3++;
            }
            if(num[i] == "4"){
                f4++;
            }
            if(num[i] == "5"){
                f5++;
            }
            if(num[i] == "6"){
                f6++;
            }
            if(num[i] == "7"){
                f7++;
            }
            if(num[i] == "8"){
                f8++;
            }
            if(num[i] == "9"){
                f9++;
            }
        }
    }
    return f0 + " " + f1 + " " + f2 + " " + f3 + " " + f4 + " " + f5 + " " + f6 + " " + f7 + " " + f8 + " " + f9;
}


function SpcharOccurence1(num){
    let occ = 0;
    let str = num.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i] == "@" ){
            occ++;
        }
    }
    return occ;
}

function SpcharOccurence2(num){
    let occ = 0;
    let str = num.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i] == "#" ){
            occ++;
        }
    }
    return occ;
}

function SpcharOccurence3(num){
    let occ = 0;
    let str = num.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i] == "$" ){
            occ++;
        }
    }
    return occ;
}