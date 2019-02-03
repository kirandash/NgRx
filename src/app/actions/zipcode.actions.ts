import { Action } from '@ngrx/store';

export enum ZipcodeActionTypes {
  // Here we define all the actions
  AddZipcode = '[Zipcode] Add Zipcode',
  RemoveZipcode = '[Zipcode] Remove Zipcode'
}

// Definition of types
export class AddZipcode implements Action {
  readonly type = ZipcodeActionTypes.AddZipcode;

  constructor(public zipcode: string) {}// payload of zipcode is required for our action add zip code
}

export class RemoveZipcode implements Action {
  readonly type = ZipcodeActionTypes.RemoveZipcode;

  constructor(public zipcode: string) {}// payload of zipcode is required for our action remove zip code
}

// Type of Actions
export type ZipcodeActions = AddZipcode | RemoveZipcode; // Union type is to mention that all of our zip codes are either of type addzipcode or removezipcode
