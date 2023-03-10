let newdiv="";
let olddiv="";
let newernewdiv="";
let newerolddiv="";
let variable = 0;
let count =0;
var randomnumber1=0;
var randomnumber2=0;
var randomnumber3=0;
let newVariable="";
let newVariable1="";
var value =0;
let usedpicnum=new Array(16);
 usedpicnum.fill("");
let usedpic=new Array(8);
usedpic.fill("");
let pic=new Array(16);
pic.fill("");
let ache=""
let photopath='/photo/random';
let idk=document.getElementById("ok1")
while(usedpicnum.includes("")){ 
        
    randomnumber1 = Math.floor(Math.random() * 16);
    randomnumber2 = Math.floor(Math.random() * 16);
    randomnumber3 = Math.floor(Math.random()*8);
    
    if (pic[randomnumber1]=="" && pic[randomnumber2]=="" && randomnumber1 != randomnumber2 && !usedpic.includes(randomnumber3)){
        pic[randomnumber1]=randomnumber3+1;
        pic[randomnumber2]=randomnumber3+1;
        usedpic[count]=randomnumber3;
        usedpicnum[randomnumber1]=1;
        usedpicnum[randomnumber2]=1;
        count+=1;
       
    }
    
    
    }
    console.log(pic);
    pic.forEach((element, index) => {
        index+=1;
        ache="card"+index;
        idk=document.getElementById(ache);
        photopath+=element+'.jpeg';
        
        idk.style.backgroundImage=`url(${photopath})`;
        idk.style.transform="rotateY(180deg)";
        console.log(photopath);
        photopath='/photo/random';
        
      });

function clicker(clickeddiv){
    
    newdiv=clickeddiv
    if(newdiv!=olddiv){
        if(variable==0 || variable ==1 ){
            
        let thediv=document.getElementById(clickeddiv);
        
        thediv.style.animation="showfront .5s forwards";
        
        
        
         

        }
       
        if(variable==1){
            //here add logic of matching images



            //logic for shwoing the behind of the card again
            
         
            
            let oops=document.getElementById(newdiv);
            let assdiv=document.getElementById(olddiv);
            newVariable = olddiv.replace("ok", "");
            newVariable1 = newdiv.replace("ok", "");
            let oops1=document.getElementById(olddiv);
           
            let assdiv1=document.getElementById(newdiv);
            
            
            oops.style.animation="showback .5s linear";
          
            
           
           
           
            assdiv.style.animation="showback .5s linear";
            
            assdiv.addEventListener('animationend', () => {
                console.log(pic[newVariable1],pic[newVariable])
                if (pic[newVariable1-1]==pic[newVariable-1]){
                    oops1.remove();
                    console.log(oops1)
                    assdiv1.remove();
                    console.log(assdiv1)
                    olddiv="";
                    newdiv="";
                    newVariable=1;
                    newVariable1=0;
                    
                }
                  else{  oops.style.animation="";
                    assdiv.style.animation="";
                    assdiv="";}
                
            });
          
      
            
            
           
           
        }
        variable +=1;
      
        
        if (variable ==2){
        
       
            
            variable=0;
            newdiv="";
            old="";
           
        }
        olddiv=newdiv;
   
 
    
        

}      
    
}

