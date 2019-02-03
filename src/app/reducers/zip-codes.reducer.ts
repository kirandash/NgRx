import { Action } from '@ngrx/store';
import { ZipcodeActionTypes, ZipcodeActions } from '../actions/zipcode.actions';


export interface ZipcodeState {
  // Change name of state to ZipcodeState
  zipcodes: Array<String> // A list of zipcodes - array of string
}

export const initialState: ZipcodeState = {
  zipcodes: [] // Default state - empty array
};

export function zipcodeReducer(state = initialState, action: ZipcodeActions): ZipcodeState {
  // Explicitly named zipcodeReducer
  switch (action.type) {
      case ZipcodeActionTypes.AddZipcode:
        return {...state, zipcodes: [...state.zipcodes, action.zipcode]} // Here we are taking the current state, making a copy of it with the three dots. In zipcodes: we are having the current zipcode state.zipcodes and we are adding zipcode from our action. Note that the reducer will not affect the current state but will return a new state. The three dots are used to copy state and create a new one.
      case ZipcodeActionTypes.RemoveZipcode:
        return {...state, zipcodes: state.zipcodes.filter(item => item !== action.zipcode)} // create a copy of our state, then do the required changes which is remove the zipcode coming with action. Filter the zipcodes array and keep all items except the item which is coming from action.zipcode
    default:
      return state;
  }
}
