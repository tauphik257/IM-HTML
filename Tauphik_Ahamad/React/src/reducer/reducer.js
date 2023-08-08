export const INITIAL_STATE = {
  countData: 0,
  name: "",
};

//     const state = {
//         name: 'ABC',
//         address: '',
//         data: [],
//         emp: {}
//     }
//     // 1st time => state.name  => ABC
//     state.name = 'ABCD'

// // 2nd time => state.name  => ABCD

export const countReducer = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return { countData: state.countData + 1 };
    case "MINUS":
      return { countData: state.countData - 1, name: "Updated Name By Minus" };
    default:
      return { countData: 0 };
  }
};
