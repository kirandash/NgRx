import { Action } from '@ngrx/store';


export interface State {
  zipcodes: Array<String> // A list of zipcodes - array of string
}

export const initialState: State = {
  zipcodes: [] // Default state - empty array
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
