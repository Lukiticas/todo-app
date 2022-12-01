import { useState } from "react";
import useTodo from "./hooks/useTodo";

import TodoContextSupplier from "./stores/TodoContextSupplier.stores";
import ThemeSupplier from "./stores/ThemeSupplier.stores";

import { Background, Header, MainFooter, TodoList } from "./components";
import * as A from "./styles/global.styles";

const App = () => {
  const [filterValue, setFilterValue] = useState("all");
  const { todos, actions } = useTodo(filterValue);

  return (
    <ThemeSupplier>
      <TodoContextSupplier values={{ ...actions }}>
        <A.MainApp>
          <Background />
          <Header />
          <A.MainContent>
            <TodoList listOfTodos={todos} />
            <MainFooter
              itemsRemaining={todos.length}
              handleQuery={{ query: filterValue, setQuery: setFilterValue }}
              handleClear={actions.handleRemoveCompletedItems}
            />
          </A.MainContent>
          <A.Footer>
            <p>Drag and drop to reorder list</p>
          </A.Footer>
        </A.MainApp>
      </TodoContextSupplier>
    </ThemeSupplier>
  );
};

export default App;
