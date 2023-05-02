const lista = document.getElementById('lista');

Sortable.create(lista,{
	animation : 155,
	chosenClass: "seleccionado",
	dragClass: "drag",

	onEnd: () =>{
		console.log('Insertado en el nuevo lugar');
	},
	group: "lista-personas",
	store :{
		//Guardamos el orden de la lista
		set : (sortable) =>{
			//lo guardamos en un array
			const orden = sortable.toArray();
			//el array lo convertimos en una cadena de texto para guardarlo en localstarage
			localStorage.setItem(sortable.options.group.name, orden.join('-'));
			console.log(orden);
		},
			get : (sortable) =>{
			//Retomamos los ultimos valores guardados en localstarage
			const orden = localStorage.getItem(sortable.options.group.name);
			//a la inversa convertimos la cadena de texto a un array
			return orden ? orden.split('-') : [];
			console.log(orden);
		},

	}


});