db=JSON.parse(localStorage.db)
 if(localStorage.db==undefined){
 			db=[novoDb]
 }
 db.splice(0,0,novoDb)
 //localStorage.db=JSON.stringify(db)
