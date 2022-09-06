import axios from "axios";

const url = "http://localhost:5000/api/todos";

// const addTodo = (newTodo) => axios.post(url, newTodo);

export const getTodos = async () => {
  try {
    const { data } = await axios.get(url);
    console.log("data", data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const addTodo = async (newTodo) => {
  try {
    const { data } = await axios.post(url, newTodo);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
