


function display(value){
    
    
 
    
    var val=document.querySelector('#input').value+=value;

    }
    



function calculate(){
    let val=(document.querySelector('#input').value);
    try{
    let res=eval(val);
    if(res!==undefined){
     
    document.querySelector('#input').value=res;
    }
   }catch(err){
      alert(err.message)
      document.querySelector('#input').value=" ";
   }
}

function clr(){
    document.getElementById('input').value="";
}