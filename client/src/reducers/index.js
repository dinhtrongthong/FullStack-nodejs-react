import { combineReducers } from "redux";

import counter from "./counter";
import note from './note';

const allReducers = combineReducers({
  counter,
  note
});

export default allReducers;