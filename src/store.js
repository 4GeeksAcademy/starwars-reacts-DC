export const initialStore=()=>{
  return{
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_people':
      return {
        ...store,
        people: action.payload
      };
       case 'get_planets':
      return {
        ...store,
        planets: action.payload
      };
       case 'get_vehicles':
      return {
        ...store,
        vehicles: action.payload
      };
       case 'add_favorite':
      if (!store.favorites.includes(action.payload)) {
        return {
          ...store,
          favorites: [...store.favorites, action.payload]
        };
      }
      return store;
    case 'remove_favorite':
      return {
        ...store,
        favorites: store.favorites.filter(item => item !== action.payload)
      };

    default:
      return store
  }    
}
