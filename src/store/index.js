// C'est dans le store qui va être stocké la plupart des informations de notre appli
import { createStore } from 'redux';

import rootReducer from './reducers';



// appel à la fonction createStore()
// reducer() : paramètre obligatoire de createStore qui va initialiser notre state
const store = createStore(rootReducer);

export default store;