var places = ["Abohar","Achalpur","Adilabad","Adityapur","Adoni","Agartala","Agra"];
var relief = ["Bedsheets","Milk","First Aid Kits","Sanitary Pads"];
var input = "Milk and Bedsheets required at Abohar"
var input_array = input.split(" ");
var relief_array = [];
for(i in relief && j in places){
    if(i in input_array){
        relief_array.push(i);
    }
    else if(j in input_array){
        relief_array.push(j);
    }
}
console.log(relief_array);