/*

1.First thing is, Redux is not mandatory in your application
2.Use only when it required, like you have a very large application and on that application data is so big then only use redux.
3.Redux and React both are Javascript libraries.
4.Redux is a state management library. Redux is not the only one for managing state. "Zustand" is also a state management library.
5.Redux offers easy debugging.
6.There are two packages redux offers:
    a.React-Redux
    b.Redux Tool Kit(RTK)


// Theroy to understand Redux-Toolkit
1.Redux Store:
    a.Redux store is nothing but a big object with lot of data and it is kept in a cental global place so we can access the data from redux store anywhere in our program.
2.Slices:
    a.Slices is like logic for a separate things like User Data, theme, Cart. We can create separate slices ex: userSlice, cartSlice, themeSlice.
3.selector(Subscriber to the store):
    a.selecor is used to read data from slice and it is used to update the data.



// How to setup redux toolkit
1.Install @reduxjs/toolkit and react-redux
--> npm i @reduxjs/toolkit and npm i react-redux
2.Build our store:
    a.create file in utils folder and name that file related to app name
    b.Create store using configureStore function which is given by reduxjs/toolkit and in this function we can create our slices. configureStore take object as an argument. Slices will be created in that object.
    c.This store container a big reducer and this reducer contain the reducers of slice
        eg: 
            const appStore = configureStore({
                reducers:{

                }
            })
3.Connect our store to our app:
    a.To connect our app to the store we need provider from react-redux to provide the data of store to react;
    b.We can provide provider to any component in our app if you want to provide only that component.
    c.Simply, wrap your top level component into <Provider store={}></Provider> and pass a prop "store" and in this prop pass the store you want of pass to the compenent.
4.Create a slice(card Slice for this app):
    a.First, you can create separate file for all the slices but you also put it into utils folder.
    b.To create slice, we need to import a function createSlice from @reduxjs/toolkit and it takes the configuration as an object.
    c.First configuration it takes the name of slice
        eg: const cartSlice = createSlice({
            name:'cart'
        })
    d.Second configuration is initial state which tell what is the initial value of the slice. Initialstate is an object and it take the key value pair of initial value
         eg: const cartSlice = createSlice({
            name:'cart',
            initialState:{
                items:[]
            }
        })
    e.Third configuration is reducer object, in this we will write functions for those actions which we have to perform. Actions like add, remove the item or clear the cart these things come in actions:
        eg: const cartSlice = createSlice({
            name:'cart',
            initialState:{
                items:[]
            },
            reducers:{
                addItem: (state, action) => {
                    state.items.push(action.payload);
                },
                removeItem: (state) => {
                    state.items.pop();
                },
                clearCart: (state) => {
                    state.items.length = 0;
                }
            }
        })
    f.In the above code, reducers is the object which take actions, here "addItem" is the action and the callback function which we stored in teh "addItem" key is reducer and this reducer funcition is responsible to add the items in the cart.
    g.The reducer function takes the "state" which have access of the initialstate and "action" as a parameter.
    h.In some cases, you do not need "action" parameter in the reducer function.
    i.Behind the scence createSlice will return an object and it will store in cartSlice like this:
    {
            actions:{
                additem,
                removeItem,
                clearCart
            },
            reducer:{
                items:[]
            }
        }
    j.Then we have to export two things from this slice:
            export const {addItem, removeItem, clearCart} = cartSlice.actions;
            export default cartSlice.reducer;
    k.we exported the slice now, we have to pass this slice to out appStore:
        eg:
            import cartReducer from './slice/cartSlice.js' 

            const appStore = configureStore({
                reducer:{
                    cart: cartReducer;
                }
            })
    l.Lets read the data, to read data from the component we have to use selector and this selector is a hook which is given by react-redux. Basically we are subscrbing to the store using selector. Put the below code where you want to read the data and update the data.
        eg:
            import {useSelector} from 'react-redux';
            const cart = useSelector((store) => store.cart.items)
    m.The selector have access of the store(appStore) and from their we can use our slices
5.dispatch(action):
    a.To dispatch the action, we have to use a hook called useDispatch() which is given by react-redux.
    b. use useDispatch where you have to dispatch the actions:
            eg: 
                import {useDispatch} from 'react-redux'
                import {addItem} from '../slice/cartSlice
                const dispatch = useDispatch();
                const handleAddItem = () =>{
                    dispatch(addItem("Pizza", "Burger"))
                }
                // What dispatch does behind the scene:
                    {
                        payload:{
                            "pizzas",
                            "burger"
                        }
                    }
    c.And we can recevie the data in the slice where we have the second parameter called action. It is shown in below code
                eg:
                    const cartSlice = createSlice({
                            name:'cart',
                            initialState:{
                                items:[]
                            },
                            reducers:{
                                addItem: (state, action) => {
                                    state.items.push(action.payload);
                                },
                                removeItem: (state) => {
                                    state.items.pop();
                                },
                                clearCart: (state) => {
                                    state.items.length = 0;
                                }
                            }
                        })
            

6.Selector:
    a.To read the data from the store we have to use useSelector hook.
    b.Or to subscribe the store we have to use the same.
    eg:
            import { useSelector } from '../utils/slice/cartSlice

            const cartItems = useSelector((store) => store.cart.items)


// Points to remember in redux or for interviews
1.useSelector:
    1.Whenever we use useSelector, make sure you're subscribing to the right store.
    2.If you don't subscribe to the right store then it will be a big performance lose. because if you subscribe to whole store then whenever any thing changes to the store it will affect that component where we subscribe the store.
        eg:SUppose you are in your cart.js and you're subscribing the whole store.
                    const store = useSelector((store) => store)
                    const cartItems = store.cart.items   //Do not subscribe the whole store. Always subscribe to those store which is required for the component.
                    const cartItems = useSelector((store) => store.cart.items)  //Like this
2.reducers and reducer
    1.reducer is the big object which is configure in configureStore that can hold multiple small reducer
    2.reducers is the object which is configure in creating slice and it takes reducers function
3.History of redux
    1.Vanila or order version of Redux --> Don't mutate state;
        eg: state.items.push(action.payload) // This is prohibited in the vanila redux or older redux
    2.How state are managed in redux in earlier
        eg: const newState = [...state];
            newState.items.push(action.payload);
            return newState;
        But in RTK ---> We have to mutate the state.
    3.Redux used immer library behind the scenes
    4.The earlier code is still used by redux but it doesn't ask developer to do that. It handle all these itself.
    5.RTK  --->  either mutate the state or return {items: []} whatever you will pass in the array it will replaced by it
4.Redux Dev Tools:
5.RTK Query.

*/