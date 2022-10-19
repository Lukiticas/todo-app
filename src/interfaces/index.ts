export interface Todo {
  payload: string;
  id: string;
  isDone: boolean;
}

export interface Filter {
  name: string;
  isPartOf: string;
}

export interface FilterProps {
  filters: Filter[];
  handleQuery: {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  };
}

export interface MainFooterProps {
  itemsRemaining: number | string;
  handleClear: () => void;
  handleQuery: {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  };
}

export interface TodoTaskProps {
  payload: string;
  id: string;
  idx: number;
  isDone: boolean;
}

export interface TodoListProps {
  listOfTodos: Todo[];
}
