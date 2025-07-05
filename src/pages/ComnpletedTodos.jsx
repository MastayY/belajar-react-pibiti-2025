import TodoList from "../components/Todo/TodoList";
import Card from "../components/UI/Card";
import { useTodoContext } from "../context/TodoContext";

const ComnpletedTodos = () => {
  const { completedTodos } = useTodoContext();

  return (
    <div className="completed-todos flex justify-center items-start py-8 bg-gray-50 min-h-screen">
      <Card className="w-full max-w-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span role="img" aria-label="completed">✅</span> Completed Todos
        </h1>
        <p className="mb-4 text-gray-700">
          You've completed <span className="font-semibold">{completedTodos.length}</span> todos. Great job!
        </p>
        {completedTodos.length === 0 ? (
          <p className="empty-state text-center text-gray-500 italic">
            No completed todos yet. Keep going! <span role="img" aria-label="muscle">💪</span>
          </p>
        ) : (
          <TodoList todos={completedTodos} />
        )}
      </Card>
    </div>
  );
};

export default ComnpletedTodos;
