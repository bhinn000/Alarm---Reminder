//element
AmPm=document.querySelector(".AM-PM")
amPM=document.querySelector('.amPm')
hour=document.querySelector(".hour")
minute=document.querySelector(".minute")
submit=document.querySelector(".submit")
remainingTime=document.querySelector(".remHide")
or24_12content=document.querySelector(".or24_12content")


//current time
var a=new Date();
console.log(a.getHours());
console.log(a.getMinutes());
let diffHour;
let diffMinutes;
let fixHour;


const ifAfter12=()=>{

}
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

      
        if(is24or12==="12"){
                var ampm = a.getHours() >= 12 ? 'PM' : 'AM';
                if(a.getHours()>12){
                        fixHour=a.getHours()-12;
                       
                }
                else{
                        fixHour=a.getHours();
                }
                console.log("I am "+fixHour + ampm);
                
                //check if hour and minute condition is not satisfied
                if(hour.value>12){
                        console.log("Basudev")
                        hour.disabled=true;
                        hour.style.backgroundColor="red"
                      

                }
                else if(minute.value>60){
                        console.log("Basudev")
                        minute.disabled=true;
                        minute.style.backgroundColor="red"
                      
                }

                else{
                        if(hour.value>=fixHour){
                    
                                if(ampm===isAMorPM){
                                        
                                        if(a.getMinutes()>minute.value){
                                            
                                            diffHour=Math.abs(hour.value-fixHour)-1;
                                           
                                            diffMinutes=60-Math.abs(a.getMinutes()-minute.value);
                                        }
                                        else if(a.getMinutes()<minute.value){
                                            
                                            diffHour=Math.abs(hour.value-fixHour) ;
                                            diffMinutes=minute.value-a.getMinutes();
                                        }
                                        
                                }
                                else if(ampm!==isAMorPM){
                                        
                                        if(a.getMinutes()>minute.value){
                                            
                                            diffHour=Math.abs(hour.value-fixHour) +12-1;
                                            diffMinutes=60-Math.abs(a.getMinutes()-minute.value);
                                        }
                                        else if(a.getMinutes()<minute.value){
                                            
                                            diffHour=Math.abs(hour.value-fixHour) +12;
                                            diffMinutes=minute.value-a.getMinutes();
                                        }
                                      
                                }
        
                        }
                        else if(hour.value<fixHour){
                              
                                if(ampm===isAMorPM){
                             
                                        if(a.getMinutes()>minute.value){
                                            diffHour=24-Math.abs(a.getHours()-hour.value)-1;
                                            diffMinutes=60-Math.abs(minute.value-a.getMinutes());
                                           
                                        }
                                        else if(a.getMinutes()<minute.value){
                                            diffHour=24-Math.abs(a.getHours()-hour.value);
                                            diffMinutes=minute.value-a.getMinutes();
                                        }
        
                                }
                                //yesma chai pm am halnu parxa
                                else{
                                        if(a.getMinutes()>minute.value){
                                            diffHour=12-Math.abs(a.getHours()-hour.value)-1;
                                            diffMinutes=60-Math.abs(a.getMinutes()-minute.value);
                                        }
                                        else if(a.getMinutes()<minute.value){
                                            diffHour=12-Math.abs(hour.value-a.getHours()) ;
                           
                                            diffMinutes=minute.value-a.getMinutes();
                                        }
                                }
        
                        }     
        
                }
                
                
        }

        if(is24or12==="24"){
               if(a.getHours()>hour.value){
               
                        if(minute.value>=a.getMinutes()){
                                diffHour=24-(a.getHours()-hour.value);
                                diffMinutes=minute.value-a.getMinutes();
                        }
                        else if(minute.value<a.getMinutes()){
                                diffHour=24-(a.getHours()-hour.value)-1;
                                diffMinutes=60-Math.abs(minute.value-a.getMinutes());
                                console.log("Yes you are");
                        }
               }
               else if(hour.value>a.getHours()){
                        if(minute.value>=a.getMinutes()){
                                diffHour=Math.abs(a.getHours()-hour.value);
                                diffMinutes=minute.value-a.getMinutes();
                        }
                        else if(minute.value<a.getMinutes()){
                                diffHour=Math.abs(a.getHours()-hour.value)-1;
                                diffMinutes=60-Math.abs(minute.value-a.getMinutes());
                               
                        }
               }
        }

        console.log(diffHour + ":" +diffMinutes + " remaining");
        remainingTime.classList.add("remainingTime");
        // remainingTime.innerText=diffHour + "hr :" 
        remainingTime.innerText=diffHour + "hr :" + diffMinutes + " min remaining";

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

    


})










