import todos from "./todos"
import filter from "./filter"
import { combineReducers } from "redux";
const reducer = combineReducers({
//  todos: todos, -> 이름이 같으므로 그냥 todos라고 씀.
  todos,
  filter,
});

export default reducer;
