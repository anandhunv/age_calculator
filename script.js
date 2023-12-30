let userInput=document.getElementById("date");
let result=document.getElementById("result");
//we can select future dates also ,so we can change it

userInput.max=new Date().toISOString().split("T")[0];

function calculateAge(){
    if(userInput.value===''){
        alert("Select Your Date of Birth!");
    }else{

let birthDate =new Date(userInput.value); // 2-10-2001
let birthDay=birthDate.getDate();        // 2
let birthMonth=birthDate.getMonth() + 1; //10
let birthYear=birthDate.getFullYear();  //2001


let today=new Date();  //30-12-2001

let todayDay=today.getDate();    //30
let todayMonth=today.getMonth() + 1; //12
let todayYear=today.getFullYear(); //2023


let diffDay,diffMonth,diffYear

diffYear =todayYear-birthYear;

if(todayMonth>=birthMonth){ //12>10;
    diffMonth=todayMonth-birthMonth; //12-10=2;
}else{
    diffYear--; //-1
    diffMonth=12 + todayMonth-birthMonth; 
}
if(todayDay>=birthDay){
    diffDay=todayDay-birthDay;
}else{
    diffMonth--;
    diffDay=getDaysInMonth(birthYear,birthMonth) + todayDay-birthDay; 
}
if(diffMonth<0){
    diffMonth=11;
    diffYear--;
}
result.classList.add("result");
result.innerHTML=`You are <span>${diffYear}</span> years,<span>${diffMonth}</span> month,<span>${diffDay}</span> days Old`;
    }
}

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}