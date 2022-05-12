const getState = ({ getStore, getActions, setStore }) => {
	/*
	getStore Para acceder a los elementos de store
	getActions Para acceder a actions
	setStore para modificar los elementos de Store	
	*/
	return {
		store: {
			personajes: [],
			planetas: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async ()=> {
				//LEEMOS LOS PERSONAJES
				await fetch('https://swapi.dev/api/people')
				.then(response => response.json())
				.then(data => {
					console.log(data.results)
					setStore({personajes: data.results})
				})
				.catch(error=> console.log(error))
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				//LEEMOS LOS PLANETAS
				
				await fetch('https://swapi.dev/api/planets')
				.then(response => response.json())
				.then(data => {
					console.log(data.results)
					setStore({planetas: data.results})
				})
				.catch(error=> console.log(error))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
