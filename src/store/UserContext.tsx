import React, {
  createContext,
  useState,
  ReactNode,
  FC,
  ComponentProps,
  useContext,
} from 'react';

interface IUser {
  username: string;
  password: string;
}

interface IUserContext {
  user: IUser;
  login: (username: string, password: string) => void;
}

const UserContext = createContext({} as IUserContext);

export const UserContextProvider: FC = (props: ComponentProps<FC>) => {
  const [user, setUser] = useState({} as IUser);

  const login = (username: string, password: string) => {
    setUser({ username, password });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export function useUserContext(): IUserContext {
	const context = useContext(UserContext);
	return context;
}