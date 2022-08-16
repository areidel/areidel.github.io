function tags(x,d,city){
 div_search.style.height='0%'
if(x!=undefined){ resultados='';cta=0;

 for(var i=0; i<tdb; i++){
//VARIABLES DE USO
 tag=db[i].dtag
 city=cit=db[i].city
      if(micity==citys[0]){cit=micity}
 img=db[i].dimg
 name=db[i].name
 addr=db[i].addr
 modu=db[i].modu
 
//CONDICIONES PARA MOSTRAR  
 		if(tag==x && cit==micity && db[i].dia>0){

 //DISEÑOS BUSCADOR
 	if(d==1) { cta++;
 		resultados+='<div class="result" onclick="page('+i+',1)"> <img src="'+img+'"> <div>'+name+'</div><p>'+addr+'</p> </div>'			
 	}
 		
 			
 	if(d==2) { cta++;
 		resultados+='<div class="result2" onclick="page('+i+',1)"> <img src="'+img+'"> <div>'+name+' $'+modu+'</div><p>'+citys[city]+' '+addr+'</p> </div>'			
 	}
 		
 			
  		}
 }



hoja='<div class="main sp abs"> <div class="elem">Ciudad Digital</div> <div class="back" onclick="tags()">Back</div> </div><div class="full"><div class="sp"></div><div class="title cent">'+cta+' en la ciudad</div>'+resultados+'</div>'

 div_search.innerHTML=hoja
 div_search.style.height='100%'
}}
