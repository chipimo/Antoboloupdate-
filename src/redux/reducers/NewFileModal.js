import { OPENMODAL, CLOSEMODAL } from "./types";

const NewFileModal = (
  state = {
    ModalState: false
  },
  action
) => {
  switch (action.type) {
    case OPENMODAL:
      state = {
        ...state,
        ModalState: true
      };
      break;
    case CLOSEMODAL:
      state = {
        ...state,
        ModalState: false
      };
      break;

    default:
      return state;
  }
  return state;
};

export default NewFileModal;
