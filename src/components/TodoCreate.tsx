import React from "react";

export const TodoCreate: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md mt-14 p-5">
      <div className="">
        <form>
          <label htmlFor="task" className="text-lg">
            Добавить задачу
          </label>
          <div className="flex gap-5 items-center mt-5">
            <input
              id="task"
              type="text"
              className="border border-gray-500 px-4 py-2 focus:border-gray-700 rounded grow"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 focus:ring focus:ring-offset-2 focus:ring-green-600 rounded duration-300"
            >
              Добавить
            </button>
          </div>
        </form>

        <div className="mt-14">
          <h2 className="text-lg">Новые задачи</h2>
        </div>
      </div>
    </div>
  );
};
