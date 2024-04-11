//element
AmPm=document.querySelector(".AM-PM")
amPM=document.querySelector('.amPm')
hour=document.querySelector(".hour")
minute=document.querySelector(".minute")
submit=document.querySelector(".submit")
remainingTime=document.querySelector(".remHide")
or24_12content=document.querySelector(".or24_12content")
alarmTime=document.querySelector(".alarm_time")
process=document.querySelector(".process")
alarmStack=document.querySelector(".alarmStack");

//current time
var a=new Date();
console.log(a.getHours());
console.log(a.getMinutes());
let diffHour;
let diffMinutes;
let fixHour;
hour.disabled=true;
minute.disabled=true;




//function for 12 hour system
const ifAfterSameM=()=>{
    if(a.getMinutes()>minute.value){
            
        diffHour=Math.abs(hour.value-fixHour)-1;
       
        diffMinutes=60-Math.abs(a.getMinutes()-minute.value);
    }
    else if(a.getMinutes()<minute.value){
        
        diffHour=Math.abs(hour.value-fixHour) ;
        diffMinutes=minute.value-a.getMinutes();
    }
}

const ifAfterDiffM=()=>{
    if(a.getMinutes()>minute.value){
                
        diffHour=Math.abs(hour.value-fixHour) +12-1;
        diffMinutes=60-Math.abs(a.getMinutes()-minute.value);
    }
    else if(a.getMinutes()<minute.value){
        
        diffHour=Math.abs(hour.value-fixHour) +12;
        diffMinutes=minute.value-a.getMinutes();
    }
}

const ifBeforeSameM=()=>{
    if(a.getMinutes()>minute.value){
        diffHour=24-Math.abs(a.getHours()-hour.value)-1;
        diffMinutes=60-Math.abs(minute.value-a.getMinutes());
       
    }
    else if(a.getMinutes()<minute.value){
        diffHour=24-Math.abs(a.getHours()-hour.value);
        diffMinutes=minute.value-a.getMinutes();
    }
}

const ifBeforeDiffM=()=>{
    if(a.getMinutes()>minute.value){
        diffHour=12-Math.abs(a.getHours()-hour.value)-1;
        diffMinutes=60-Math.abs(a.getMinutes()-minute.value);
    }
    else if(a.getMinutes()<minute.value){
        diffHour=12-Math.abs(hour.value-a.getHours()) ;

        diffMinutes=minute.value-a.getMinutes();
    }
}

const ifAfterTime12=()=>{
    if(ampm===isAMorPM){
        ifAfterSameM();    
    }
        else if(ampm!==isAMorPM){
           ifAfterDiffM();                                             
    }
}

const ifBeforeTime12=()=>{
    if(ampm===isAMorPM){
        ifBeforeSameM();              
    }
    //yesma chai pm am halnu parxa
    else{
        ifBeforeDiffM(); 
    }

}

//function for 24 hour system
const isAfterTime24=()=>{
    if(minute.value>=a.getMinutes()){
        diffHour=24-(a.getHours()-hour.value);
        diffMinutes=Math.abs(minute.value-a.getMinutes());
    }
    else if(minute.value<a.getMinutes()){
            diffHour=24-(a.getHours()-hour.value)-1;
            diffMinutes=60-Math.abs(minute.value-a.getMinutes());

    }
}

const isBeforeTime24=()=>{
    if(minute.value>=a.getMinutes()){
        diffHour=Math.abs(a.getHours()-hour.value);
        diffMinutes=minute.value-a.getMinutes();
    }
    else if(minute.value<a.getMinutes()){
        diffHour=Math.abs(a.getHours()-hour.value)-1;
        console.log("I am here")
        diffMinutes=60-Math.abs(minute.value-a.getMinutes());
    }
    else if(minute.value==a.getMinutes()){
        console.log("I am problem here 18:15 and 18:10")
    }

}

//add
alarmTime.addEventListener("click",function(){
    hour.disabled=false;
    minute.disabled=false;
    process.classList.add("processShown")
    hour.value=""
    minute.value=""
    console.log("Basudev")
    submit.classList.remove("submit-hide")
   
})


//when submitted
submit.addEventListener("click",()=>{
        //select hour
        console.log(hour.value)

        //select minute
        console.log(minute.value)

        //select AM or PM
        isAMorPM=form1.selected[form1.selected.selectedIndex].text
        // isAMorPM >= 12 ? 'PM' : 'AM';
        console.log(isAMorPM)
        

        //select 12 hr or 24 hr
        is24or12=form2.selected[form2.selected.selectedIndex].text
        console.log(is24or12)

        if(hour.value!="" && minute.value!=" "){
            if(is24or12==="12"){
                ampm = a.getHours() >= 12 ? 'PM' : 'AM';
                if(a.getHours()>12){
                        fixHour=a.getHours()-12;
                       
                }
                else{
                        fixHour=a.getHours();
                }
                
                //check if hour and minute condition is not satisfied
                if(hour.value>12){
                        hour.disabled=true;
                        hour.style.backgroundColor="red"
                }
                else if(minute.value>60){
                        minute.disabled=true;
                        minute.style.backgroundColor="red"
                      
                }

                else{
                        if(hour.value>=fixHour){
                            ifAfterTime12();
                        }
                        else if(hour.value<fixHour){
                                ifBeforeTime12();
                                
                        }     
        
                }       
                
                if(hour.value>12 || minute.value>60){
                    remainingTime.classList.add("remainingTime");
                    // remainingTime.innerText=diffHour + "hr :" 
                    remainingTime.innerText="Give proper time";
                    hour.value="";
                    minute.value="";
                  
    
            }
            else{
                    console.log(diffHour + ":" +diffMinutes + " remaining");
                    remainingTime.classList.add("remainingTime");
                    // remainingTime.innerText=diffHour + "hr :" 
                    remainingTime.innerText=diffHour + "hr :" + diffMinutes + " min remaining";
            }
        }


        if(is24or12==="24"){
               if(a.getHours()>hour.value){
                    isAfterTime24();
                        
               }
               else if(hour.value>=a.getHours()){
                     isBeforeTime24();   
               }

               console.log(diffHour + ":" +diffMinutes + " remaining");
               remainingTime.classList.add("remainingTime");
               // remainingTime.innerText=diffHour + "hr :" 
               remainingTime.innerText=diffHour + "hr :" + diffMinutes + " min remaining";  

                
        }

        alarms();
        submit.classList.add("submit-hide")
        }
        alarmTime.innerText="Add new again"

})


const alarms=function(){
    //createElement
    const alarmList=document.createElement("div")
    const list=document.createElement("li")
    alarmList.appendChild(list);
    list.innerText="After " + diffHour + ":"+ diffMinutes ;
     alarmStack.appendChild(alarmList)
}







