/// <reference types="react-scripts" />

type Todo = {
  completed: boolean,
  createdAt: string,
  id: number,
  title: string,
  updatedAt: string,
  userId: number
};

type User = {
  id: number,
  name: string,
  email: string,
  phone: number
};
