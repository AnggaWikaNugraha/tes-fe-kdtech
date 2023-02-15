import Type from '../type/globalReducer';

const StatusPageState = {
  data: []
};

export function BarangReducer(state = StatusPageState, action) {
  switch (action.type) {
    case Type.SET_BARANG:
      return { ...state, data: action.data};
    case Type.ADD_BARANG:
      return { 
        ...state, 
        data: [
          action.barang,
          ...state.data
        ]};
    default:
      return state;
  }
}