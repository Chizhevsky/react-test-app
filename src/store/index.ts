import { configureStore, createSlice } from '@reduxjs/toolkit'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export default configureStore({
    reducer: {
        // let's rename it to todos or todoList
        // let's create separate slice for it in separate file
        // (we have redux-toolkit for it in our project)
        // below I will describe highlevel example
        list: (state = {todos: []}, action) => {
            switch (action.type) {
                case 'ADD_TODO': {
                    const newState = state;
                    newState.todos.push(action.payload);
                    return newState;
                }
                case 'REMOVE_TODO': {
                    // here only some kind of id is expected
                    return {
                        ...state,
                        todos: state.todos.filter((t: any, index: number) => index !== action.payload),
                    };
                }
                case 'CHANGE_TODOS': {
                    // idea of reducers in redux is that here me do all mutations
                    // redux expect here only changed field and some kind of id
                    return {
                        todos: action.payload,
                    };
                }
                default:
                    return state;
            }
        },

        // todoList: createSlice({
        //     name: 'todoList',
        //     initialState: [],
        //     reducers: {
        //         addTodo: (state, action) => {
        //             // add new todo to state
        //         },
        //         // other actions are in the same style
        //     }
        // }).reducer,

        // // also we can export actions from resulted variable of call createSlice({})
        // // and then bind it for dispatching using custom hook
        // // See example below

        // export const useActions = () => {
        //     const dispatch = useDispatch()
        //     return bindActionCreators(actions, dispatch)
        // }


        // fetch('https://jsonplaceholder.typicode.com/users/').then(
        //         (users) => users.json(),
        //     ).then(users => setOptions(users))

        // Also here we can describe fetch data
        // redux-toolkit gives us queries for this case
        // jsonPLApi: createApi({
        //     reducerPath: 'jsonplaceholder/api',
        //     baseQuery: fetchBaseQuery({
        //         baseUrl: 'https://jsonplaceholder.typicode.com/',
        //     }),
        //     endpoints: build => ({
        //         getUsers: build.query({
        //             query: (search: string) => ({
        //                 url: 'users'
        //             })
        //         })
        //     }),

        // }),
        // functionality above will generate us useGetUsersQuery

        // And for the middleware we can use default one
        // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(*resulted variableOfQueryCall*.middleware)
    }
})
