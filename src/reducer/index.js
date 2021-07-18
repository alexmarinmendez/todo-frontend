const initialState = [];

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SetList":
      return {
        ...state,
        payload
    }    
    // case "AddTodo":
    //   return [
    //     ...state,
    //     {
    //       title: action.payload.title,
    //       place: action.payload.place,
    //       status: "Todo",
    //     },
    //   ];
    // case "RemoveTodo":
    //   return state.filter((el) => el.id !== action.payload);
    // case "ToInProgress":
    //   // return state.map((el) => el.id === action.payload ? el.status = 'ToInProgress' : el.status = el.status);
    //   for (var i = 0; i < state.length; i++) {
    //     if (state[i].id === action.payload) {
    //       state[i].status = "InProgress";
    //     }
    //   }
    //   return [...state];
    // case "ToDone":
    //   // return state.map((el) => el.id === action.payload ? el.status = 'Done' : el.status);
    //   for (i = 0; i < state.length; i++) {
    //     if (state[i].id === action.payload) {
    //       state[i].status = "Done";
    //     }
    //   }
    //   return [...state];
    default:
      return state;
  }
};

export default todos;
