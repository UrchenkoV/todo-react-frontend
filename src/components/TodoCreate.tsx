import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchTodoCreate } from "../redux/todo/todo.slice";
import { TTodoItem } from "../redux/todo/todo.types";
import { TodoList } from "./TodoList";

export const TodoCreate: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isLoading },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<{ title: string }> = async (title) => {
    console.log("onSubmit", title);

    try {
      const d = await dispatch(fetchTodoCreate(title));
      console.log(d);
      reset();
    } catch (err) {
      console.log(err);
    }
  };
  console.log(errors, isLoading, isValid);
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md mt-14 p-5">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="task" className="text-lg">
            Добавить задачу
          </label>
          <div className="flex gap-5 items-center mt-5">
            <input
              id="task"
              type="text"
              {...register("title", { required: true })}
              className="border border-gray-500 px-4 py-2 focus:border-gray-700 rounded grow"
            />
            <button
              type="submit"
              disabled={!isValid}
              className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 focus:ring focus:ring-offset-2 focus:ring-green-600 rounded duration-300 disabled:opacity-50 disabled:hover:bg-green-500"
            >
              Добавить
            </button>
          </div>
        </form>

        <div className="mt-14">
          <h2 className="text-lg">Новые задачи</h2>
          <TodoList />
        </div>
      </div>
    </div>
  );
};
