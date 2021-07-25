const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: "https://swapi.dev/api",
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().loadCharacters();
			},

			loadCharacters: async () => {
				const endPointCharacters = "/people/";
				try {
					const response = await fetch(`${getStore().apiURL}${endPointCharacters}`);
					const data = await response.json();
					console.log(data);
					setStore({ characters: data.results });
				} catch (error) {
					throw new Error(error);
				}
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
