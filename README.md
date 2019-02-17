# State management with NgRx in Angular

## 1. Introduction 

### What background you should have before you start this course.
Angular basics
npm 
Angular cli

### What is State Management
State management is the answer to all your state related questions while building an app. Like: how to refresh data in UI when data from server side is updated?
It gives us a pattern to follow... while building our app by following a set of rules. 

1. State management helps us first define all the inputs and outputs of our application. 
2. Then it helps us define how data flows in the application. 
3. It has a common architecture or set of rules or pattern that we learn once and use again and again and again everywhere through out the app and in several projects.

#### How it is done?
State management is achieved by the help of reactive programming with Redux. Reactive programming means: Our code reacts to change in data/state. Redux is a javascript library which helps us do state management easily since a lot of code is already written in the library.

So in state management we will be mainly looking at two thing:
1. How Front end reflects/reacts to any change in data.
2. How User can change state of data from front end.

#### Drawback:
Learning curve: It takes some time to learn how to use state management. But... I would say it is worth it. Spend your time to learn NgRx, to be able to build quality scalable apps in future.

## 2. State and Action

### What is state?
State represents data in our application. For example: data we see on the screen and also data that are stored in the database that we might use such as: user information, session information etc.

State can only be read. In order to change state, we need actions.

### What is an action?
An action tells our app what change needs to be done. For exaple: log in or log out or add to cart.

Actions can directly change the state. But most of the time, Actions also might need payloads/data that is used to change the state. For example: when we add a product to cart in a shopping app, add to cart is an action but what we are adding to the cart is the payload or data that we are feeding to the action.

## 3. Redux Reducer And Redux Store

### What is redux reducer?
A reducer is a function that takes an action and a state as input and returns a new state as ouput. Please note that, a reducer does not edit the current state. It always returns a new state. Reducer works synchronously. There is another functionality called effects which works asynchronously.

### What is a Redux Store?
Store is an object which holds all the current state and all the reducers in our application. We use store to change a state or subscribe to any changes/updates happening in any state.

## 4. NgRx Setup and Create first State

### Installation
Install angular: ng new ngrx
Install schematics: npm install @ngrx/schematics --save-dev (only for dev purposes)
Install store: npm install @ngrx/store --save
Install dev tools: npm install @ngrx/store-devtools --save

Generate default state of our application - and default store for it.
ng generate @ngrx/schematics:store State --root --module app.module.ts
This will create reducres file: app/reducer/index.ts with basic structure to hold state and reducers. It also modifies app.module.ts

Generate reducer
ng generate @ngrx/schematics:reducer ZipCodes --group (The group option will create all the reducers in one place. Inside reducers folder)
It will create a reducer file: reducer/zip-codes.reducer.ts with an empty state, empty defaultstate and a reducer function with default structure.

### 6. Create First Action
ng generate @ngrx/schematics:action Zipcode --group (group option is to group all the files into one folder called actions)

### 7. Use Actions in Reducer
Use AddZipcode and RemoveZipcode in zip-codes.reducer.ts file

Link the state and reducers in index.ts file of reducers

### 8. Setup Components, Services in Angular
1. Main page component to hold zipcode entry section and current conditions section
2. Create zip code entry component with add & remove service
3. On Adding zip code / location, current conditions component is updated.
4. In current conditions, on click: we load forecast-list component.