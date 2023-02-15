import Type from '../type/globalReducer';

const StatusPageState = {
  data: []
};

export function BarangReducer(state = StatusPageState, action) {
  switch (action.type) {
    case Type.SET_BARANG:
      return { ...state, data: action.data};
    default:
      return state;
  }
}