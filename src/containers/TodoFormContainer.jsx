import {useDispatch} from "react-redux";
import { useCallback } from "react";
import {addTodo} from "../redux/actions";
import TodoForm from "../components/TodoForm";

export default function TodoFormContainer(){
  const dispatch = useDispatch();

  const add = useCallback((text)=>{
    dispatch(addTodo(text));
  },[dispatch]);
  return <TodoForm add ={add} />;
}