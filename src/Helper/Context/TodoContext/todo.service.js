import axiosInstance from "../AxiosConfig/axios-todo-config";

const getTodos = async () => {
  try {
    const res = await axiosInstance.get("todos")
    // console.log(res.data.data)
    return (res.data.data)
  } catch (error) {
    console.log(error)
  }
};

const getTodoById = async (todoId) => {
  try {

    const res = await axiosInstance.get("/todos/" + todoId)
    // console.log(res.data)
    return (res.data[0])
  } catch (error) {
    console.log(error)
  }
}

const TodoServices = {
  getTodos,
  getTodoById
};

export default TodoServices;