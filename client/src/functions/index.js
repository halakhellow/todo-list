import axios from "axios";

const url = "http://localhost:5000/api/todos";

export const getTodosRequest = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const addTodoRequest = async (task) => {
  try {
    const { data } = await axios.post(url, {
      task,
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const editTodoRequest = async (todo) => {
  try {
    const { data } = await axios.put(`${url}/${todo._id}`, {
      task: todo.task,
      completed: todo.completed,
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteTodoRequest = async (todo) => {
  try {
    await axios.delete(`${url}/${todo._id}`);
    return;
  } catch (err) {
    console.log(err.message);
  }
};
