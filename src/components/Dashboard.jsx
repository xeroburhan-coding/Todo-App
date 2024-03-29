// Dashboard.js
import React from "react";

const Dashboard = ({ todos, doneTodos }) => {
  return (
    <div className="flex justify-center">
      <div className="mt-10 h-48 w-96 border-2 border-offwhite border-opacity-70 rounded-2xl flex items-center justify-between px-10">
        <div>
          <h1 className="text-offwhite font-medium font-ITC text-2xl">
            Todo Done
          </h1>
          <p className="text-offwhite font-light font-ITC text-md opacity-50">
            {todos.length > 0
              ? doneTodos.length === todos.length
                ? "All done !"
                : "Complete All."
              : "Add some task"}
          </p>
        </div>
        <div className="h-32 w-32 bg-orng rounded-full flex justify-center items-center">
          <h1 className="text-background font-bold font-ITC text-2xl">
            {doneTodos.length}/{todos.length}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
