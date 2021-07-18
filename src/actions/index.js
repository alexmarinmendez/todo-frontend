import axios from "axios";

export const setList = function() {
    return function (dispatch) {
        axios.get('http://localhost:4000/api/todos')
          .then(response => 
              dispatch({
                type: "SetList",
                payload: response.data
            })
        );
      }
}

export const addTodo = function(payload) {
    return function (dispatch) {
        axios.post('http://localhost:4000/api/todos', payload)
          .then(response => 
              dispatch({
                type: "AddTodo",
                payload: response.data
            })
        );
      }
}
//     return{
//           type: "AddTodo",
//           payload: {
//             title: payload.title,
//             place: payload.place,
//             status: 'Todo'
//           }
//     }
// }

export const removeTodo = function(payload) {
    return{
          type: "RemoveTodo",
          payload
    }
}

export const toInProgress = function(payload) {
    return{
          type: "ToInProgress",
          payload
    }
}

export const toDone = function(payload) {
    return{
          type: "ToDone",
          payload
    }
}