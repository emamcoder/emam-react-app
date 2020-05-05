import * as Types from "../Actions/ActionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case Types.CREATE_COURSE:
      return [...state, { ...action.course }];

    default:
      return state;
  }
}
