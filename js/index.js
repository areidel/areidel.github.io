function inicio(){
 tdb=db.length;
				home()
}


function envio(url) {

	var xhr= new XMLHttpRequest();
 			 xhr.open('delete',url); 			 
 			 xhr.send({});
  xhr.onreadystatechange = function(){
  if(xhr.readyState==4){
     if(xhr.responseText!=""){
     				alert(xhr.responseText)
     }else{alert("error de conexión")}
}}}
