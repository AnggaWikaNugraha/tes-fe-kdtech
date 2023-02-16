import Type from '../type/globalReducer';

const BarangState = {
  data: []
};

export function BarangReducer(state = BarangState, action) {
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

const CartState = {
  data: []
};

export function CartStateReducer(state = CartState, action) {
  switch (action.type) {
    // case Type.ADD_CART:
    //   if (state.data.find(item => item.name)) {
        
    //   }
      // return { 
      //   ...state, 
      //   data: [
      //     ...action.barang,
      //     ...state.data,
      //   ]
      // };
    default:
      return state;
  }
}