import axios from "axios";

const baseUrl = "http://localhost:5000/api";

export const getTodosRequest = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/todos`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const addTodoRequest = async (task) => {
  try {
    const { data } = await axios.post(`${baseUrl}/todos`, {
      task,
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const editTodoRequest = async (todo) => {
  try {
    const { data } = await axios.put(`${baseUrl}/todos/${todo._id}`, {
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
    await axios.delete(`${baseUrl}/todos/${todo._id}`);
    return;
  } catch (err) {
    console.log(err.message);
  }
};
