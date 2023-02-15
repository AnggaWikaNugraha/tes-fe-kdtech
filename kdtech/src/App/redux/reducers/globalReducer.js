import Type from '../type/globalReducer';

const StatusPageState = {
  isAuthenticated: true,
          token: '79854yh3434329343rhd',
          email: 'admin@gmail.com',
          role: 'admin',
          name: 'gani',
};
/* 
conto action
// STATUS_PAGE_SET
dispatch({
  type: Type.STATUS_PAGE_SET,
  indexKey: isAuthenticated,
  valueKey: true
})
// STATUS_PAGE_SET_MULTIPLE
dispatch({
  type: Type.STATUS_PAGE_SET,
  payload: {
    isAuthenticated: true,
    token: 123,
    email: angga@gmail.com,
    role: admin,
  }
})
*/
export function StatusPageReducer(state = StatusPageState, action) {
  switch (action.type) {
    case Type.STATUS_PAGE_SET:
      return { ...state, [action.payload.indexKey]: action.payload.valueKey };
    case Type.STATUS_PAGE_SET_MULTIPLE:
      return { ...state, ...action.payload };
    case Type.STATUS_PAGE_RESET:
      return { ...state, [action.payload.indexKey]: action.payloadd.valueKey };
    case Type.STATUS_PAGE_RESET_ALL:
      return StatusPageState;
    default:
      return state;
  }
}

const StatusModal = {
  modal: false,
};

export function StatusModalReducer(state = StatusModal, action) {
  switch (action.type) {
    case Type.SET_MODAL_UP:
      return { ...state, modal: true };
    case Type.SET_MODAL_CLOSED:
      return { ...state, modal: false };
    default:
      return state;
  }
}