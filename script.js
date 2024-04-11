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
let diffHour;
let diffMinutes;

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
                
                if(hour.value>fixHour){
                    
                        if(ampm===isAMorPM){
                                diffHour=Math.abs(hour.value-fixHour)
                                diffMinutes=Math.abs(minute.value-a.getMinutes()); 
                                
                        }
                        else{
                                diffHour=Math.abs(hour.value-fixHour) +12;
                                diffMinutes=Math.abs(minute.value-a.getMinutes());
                              
                        }

                }
                else{
                      
                        if(ampm===isAMorPM){
                                diffHour=24-Math.abs(fixHour-hour.value);
                                // diffMinutes=Math.abs(minute.value-a.getMinutes()); 
                        }
                        //yesma chai pm am halnu parxa
                        else{
                                diffHour=12-Math.abs(fixHour-hour.value);
                                // diffMinutes=Math.abs(minute.value-a.getMinutes());
                        }

                }     

        }


        // else if(is24or12==="24"){
        //        if(a.getHours()>hour.value){
        //         diffHour=24-(a.getHours()-hour.value);
        //        }
        //        else if(hour.value<a.getHours()){
        //         diffHour=Math.abs(a.getHours()-hour.value);
        //        }
        // }

    

        console.log(diffHour + ":" +diffMinutes + " remaining");
        console.log(diffHour + " remaining");

        remainingTime.classList.add("remainingTime");
        remainingTime.innerText=diffHour + "hr :" 
        // remainingTime.innerText=diffHour + "hr :" + diffMinutes + " min remaining";
})










