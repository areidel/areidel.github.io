function home(){
 //VALORES INICIO
 bonosT=casas=cafe=aloja=resta=otro=places=0
 casasv='No hay casas en venta en tu ciudad'
  for(var i=0; i<tdb; i++){

bono=db[i].dia=bonos-(parseInt(((new Date(time).getTime())-(new Date(db[i].fupd).getTime()))/(1000*60*60*24)))


tag=db[i].dtag
city=cit=db[i].city
if(micity==citys[0]){cit=micity}

  //EXPLORER CITY
  if(tag>0&&tag<5&&cit==micity&&bono>0&&db[i].name!=''){
  				places++
  				if(tag==1){cafe++}
  				if(tag==2){aloja++}
  				if(tag==3){resta++}
  				if(tag==4){otro++}
  		}//end explore city

if(tag==5){ if(casas==0){casasv=''} casas++;
casasv+='<img src="'+db[i].dimg+'">'
}

if(bono<0){bonosT++}
  }//end for
 cafes.innerHTML=cafe
 alojas.innerHTML=aloja
 restas.innerHTML=resta
 otros.innerHTML=otro
 casa.innerHTML=casas
     casasV.innerHTML=casasv
 dplace.innerHTML=places
 ciudad.innerHTML=micity
 
 if(localStorage.time!=timeR && permiso==1 && sessionStorage.session!=0){cargaDb()}
}






function admon(){
	resultados='<div class="sp"></div><a href="go:editor"><div class="title">Administrador de red</div></a> <div class="text">Total DB <b>'+tdb+'</b><br/>Cafés <b>'+cafe+'</b><br/>Alojamiento <b>'+aloja+'</b><br/>Restaurante <b>'+resta+'</b><br/>Otros <b>'+otro+'</b><br/>Casas <b>'+casas+'</b></div><div class="admin" onclick="cargaDb()">Vencidas: '+bonosT+'</div>'
}
