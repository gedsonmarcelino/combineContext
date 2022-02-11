import React, {
  createContext,
  useState,
  FC,
  ComponentProps,
  useContext,
} from 'react';

interface IPost {
  id: string;
  title: string;
  content: string;
}

interface IPostContext {
  post: IPost;
  getById: (id: string) => IPost;
}

const PostContext = createContext({} as IPostContext);

export const PostContextProvider: FC = (props: ComponentProps<FC>) => {
  const [post] = useState({} as IPost);

  const getById = (id: string): IPost => {
    return {
      id,
      title: 'Lorem',
      content: 'Lorem Ipsum Dolor Sit',
    };
  };

  return (
    <PostContext.Provider
      value={{
        post,
        getById,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export function usePostContext(): IPostContext {
  const context = useContext(PostContext);
  return context;
}
