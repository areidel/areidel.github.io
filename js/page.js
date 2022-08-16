function page(i,d){
 div_page.style.height='0%'
if(i!=undefined){ resultados=''
 img=db[i].dimg    ;cero="none"
 name=db[i].name   ;unos="inline"
 addr=db[i].addr   ;dat=""
 cont=db[i].info   
 tele=db[i].phon


if(localStorage.us==db[i].id || localStorage.us==admin){
 deletes="'https://quintadb.com/apps/cBW6RdT8jmW73cOw0KWPj0/dtypes/"+db[i].id+".json?rest_api_key="+dkey+"'";

			dat='<div class="admin"><div class="title">Acceso Administrador</div><div class="back" onclick="envio('+deletes+')"> Borrar Página</div><div class="div">Servicio pagado hasta:<br/>'+db[i].fupd+' <br/> Days '+(db[i].dia)+'</div></div>'
}

if(localStorage.us==admin){
				dat+='<div class="admin">Control Acceso. <br/><b>'+db[i].pass+'</b> <div class="back" onclick="()">Activar</div> <div class="back" onclick="envio('+deletes+')">Eliminar</div></div>'
}
   


if(d==1) {

   resultados='<img src="'+img+'" class="full" onclick="dbox.style.display=cero"> <div class="back bot" onclick="dbox.style.display=unos"> info</div><div id="dbox"><div class="title bolder" onclick="acceder('+i+')">'+name+'</div>'+cont+'<div class="det"><b>Destino</b><br/> '+addr+' <br/> <a href="tel:'+tele+'">'+tele+'</a> </div>'+dat+'</div>';

if(db[i].id==admin&&localStorage.us==admin){admon()}
}

				hoja='<div class="main sp abs"> <div class="elem">Ciudad Digital</div> <div class="back" onclick="page()">Back</div> </div><div class="full">'+resultados+'</div>'

 div_page.innerHTML=hoja
 div_page.style.height='100%'
}}





function acceder(i){
		dbox.innerHTML='<div class="title">Clave de acceso</div><input type="password" id="pin"> <input type="button" value="Acceder" onclick="verifi('+i+')">Introduzca la clave de ésta página para poder configurar como administrador. '
}

function verifi(c){
			if(pin.value==db[c].pass){localStorage.us=db[c].id;page(c,1);alert("good")}
}
