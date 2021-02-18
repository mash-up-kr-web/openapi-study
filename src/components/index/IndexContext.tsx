import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export type State = {
  name: string;
};

type Action = { type: 'SET_NAME'; name: string };

type IndexDispatch = Dispatch<Action>;

const IndexStateContext = createContext<State | undefined>(undefined);
const IndexDispatchContext = createContext<IndexDispatch | undefined>(
  undefined,
);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_NAME':
      return {
        name: action.name,
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function IndexContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState: State = { name: '' };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <IndexStateContext.Provider value={state}>
      <IndexDispatchContext.Provider value={dispatch}>
        {children}
      </IndexDispatchContext.Provider>
    </IndexStateContext.Provider>
  );
}

export function useIndexState() {
  const state = useContext(IndexStateContext);
  if (!state) throw new Error('IndexProvider not found');
  return state;
}

export function useIndexDispatch() {
  const dispatch = useContext(IndexDispatchContext);
  if (!dispatch) throw new Error('IndexProvider not found');
  return dispatch;
}
