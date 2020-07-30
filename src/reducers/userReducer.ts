import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  uid: string;
  name: string;
  userImg: string;
};

const initialState: State = {
  uid: "",
  name: "",
  userImg: "",
};

export const userReducer = (state = initialState, action: UnionedAction) => {
  switch (action.type) {
    case ActionTypes.USER_DATA:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
        userImg: action.payload.userImg,
      };
    case ActionTypes.UPDATE_USER_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case ActionTypes.UPDATE_PROFILE_IMAGE:
      return {
        ...state,
        userImg: action.payload.userImg,
      };
    default: {
      return state;
    }
  }
};
