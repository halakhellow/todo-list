import React from "react";
import { useQuery } from "react-query";
import { useCookies } from "react-cookie";

import Loader from "../Loader/Loader";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";
import GoogleSignInBen from "../GoogleSignInBtn/GoogleSignInBtn";

import { getTodosRequest } from "../../functions";

import thumbtack from "../../images/thumbtack.png";

import "./TodoList.css";
import LogOutBtn from "../LogOutBtn/LogOutBtn";

const TodoList = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  let { isLoading, data: todos } = useQuery("todos", getTodosRequest);

  let todolist;

  if (!isLoading) {
    !todos
      ? (todolist = (
          <h2 className="no-todos">
            Let's get things <span>DONE</span> today
            <span class="circle yellow"></span>
          </h2>
        ))
      : (todolist = todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        )));
  }
  return (
    <div>
      <h1 className="TodoList-title">
        To Do :
        <img src={thumbtack} />
      </h1>
      <div className="TodoList">
        <TodoForm />
        {isLoading ? (
          <Loader />
        ) : cookies.token ? (
          <>
            {todolist} <LogOutBtn />
          </>
        ) : (
          <GoogleSignInBen />
        )}
      </div>
    </div>
  );
};

export default TodoList;
