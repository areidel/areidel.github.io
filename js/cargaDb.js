function cargaDb() {
	 bd=[]; sessionStorage.session=0
 			var xhr= new XMLHttpRequest();
 			    xhr.open('get',keyUrl);
 			    xhr.send(null);
  xhr.onreadystatechange = function(){
  if(xhr.readyState==4){
     if(xhr.responseText!=""){
        //localStorage.db2=xhr.responseText
        xhr=JSON.parse(xhr.responseText)
 //CREAR BD
for(var i=0; i<xhr.records.length; i++){
     lect=xhr.records[i];
 ob={
 "name":lect.values.bgW5ddGmjfW4azmmkka8kD,
 "phon":lect.values.ckW7vJW5LdGiksjtH7cSoM,
 "pass":lect.values.c8nuddISjnW59wW6SXW698,
 "city":lect.values.avlcOTW4voW7NdK8klASoI,
 "dtag":lect.values.ccsuRdJebcRki7ghdcI8kj,
 "imag":lect.values.ciWOtcOgTcJOo9jmkDCCoN,
 "addr":lect.values.ddHCk7WR5cGl8eoCoyWOOl,
 "info":lect.values.cEW6CkWOXkl4kPkSk8wCoQ,
 "modu":lect.values.dcPgNdNSjfWQ0gWRfTomkW,

 "id":lect.id,
 "fCre":lect.created_at,
 "fupd":lect.updated_at,
 },
 bd.splice(i,0,ob);
}
        localStorage.db=JSON.stringify(bd)
   iniciada=0
 
  if(localStorage.ip == undefined){dataIp='';
$.getJSON("https://api.ipify.org?format=json", function(data){ dataIp=(data.ip) 
if(dataIp!=''){alert('your ip:'+data.ip); localStorage.ip=dataIp } })}
   
        alert("ACTUALIZADA db")
        localStorage.time=timeR
        xtc.click()
 if(sessionStorage.car==0){sessionStorage.car=1;document.getElementById("recarga").click()}
        home()
     }else{
     		alert('error al actualizar su base de datos revise la conexión')
     }
if(localStorage.db!=undefined){home()}
  }
  }			
}
