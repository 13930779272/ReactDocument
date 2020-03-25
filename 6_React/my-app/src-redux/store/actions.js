import {INCREMENT,DECREMENT,INCREMENT1,DECREMENT1} from './actionsType';
export function add(){
  return {type:INCREMENT}
}
export function remove(){
  return {type:DECREMENT}
}
export function add1(){
  return {type:INCREMENT1}
}
export function remove1(){
  return {type:DECREMENT1}
}