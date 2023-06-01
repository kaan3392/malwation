import { create } from "zustand";
import { User } from "./types";
import { data } from "./data";

interface Store {
  users: User[];
  singleUser?: User;
  usersLoading?: boolean;
  usersError?: Error;
  updateUserLoading?: boolean;
  updateUserError?: Error;
  deleteUserLoading?: boolean;
  deleteUserError?: Error;
  singleUserLoading?: boolean;
  singleUserError?: Error;
  fetchUsers: () => Promise<void>;
  fetchSingleUser: (id: string) => Promise<void>;
  updateUser: (id: string, user: Partial<User>) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  login: (email: string, password: string) => Promise<{ success: boolean }>;
  loginLoading?: boolean;
  loginError?: Error;
  logout: () => void;
  isAuth: boolean;
  currentUser?: User;
  currentPage: number;
  changePage: (page: number) => void;
  resetSingleUser: () => void;
}

enum LocalStorageKey {
  IsAuth = "isAuth",
  CurrentUser = "currentUser",
}

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const useStore = create<Store>((set) => ({
  users: [],
  singleUser: undefined,
  usersLoading: false,
  usersError: undefined,
  isAuth: JSON.parse(localStorage.getItem(LocalStorageKey.IsAuth) || "false"),
  currentUser:
    JSON.parse(localStorage.getItem(LocalStorageKey.CurrentUser) || "null") ??
    undefined,
  deleteUserError: undefined,
  deleteUserLoading: false,
  updateUserError: undefined,
  updateUserLoading: false,
  loginError: undefined,
  loginLoading: false,
  singleUserError: undefined,
  singleUserLoading: false,
  currentPage: 1,

  fetchUsers: async () => {
    set((prev) => ({ ...prev, usersLoading: true }));
    try {
      await wait();
      set((prev) => ({
        ...prev,
        usersLoading: false,
        usersError: undefined,
        users: data.map((item) => {
          const { password, ...userInfo } = item;
          return userInfo;
        }),
      }));
    } catch (err) {
      set((prev) => ({
        ...prev,
        usersLoading: false,
        usersError: err as Error,
      }));
    }
  },

  fetchSingleUser: async (id) => {
    set((prev) => ({ ...prev, singleUserLoading: true }));
    try {
      await wait();
      const user = data.find((u) => u.id === id);
      if (!user) throw new Error("User not found");
      const { password, ...userInfo } = user;
      set((prev) => ({
        ...prev,
        singleUserLoading: false,
        singleUserError: undefined,
        singleUser: userInfo,
      }));
    } catch (err) {
      set((prev) => ({
        ...prev,
        singleUserLoading: false,
        singleUserError: err as Error,
      }));
    }
  },
  resetSingleUser: () => {
    set((prev) => ({
      ...prev,
      singleUserLoading: false,
      singleUserError: undefined,
      singleUser: undefined,
    }));
  },

  updateUser: async (id, user) => {
    set((prev) => ({ ...prev, updateUserLoading: true }));
    try {
      await wait();
      set((prev) => ({
        ...prev,
        updateUserLoading: false,
        updateUserError: undefined,
        users: prev.users.map((u) => (u.id === id ? { ...u, ...user } : u)),
      }));
    } catch (err) {
      set((prev) => ({
        ...prev,
        updateUserLoading: false,
        updateUserError: err as Error,
      }));
    }
  },

  deleteUser: async (id) => {
    set((prev) => ({ ...prev, deleteUserLoading: true }));
    try {
      await wait();
      set((prev) => ({
        ...prev,
        deleteUserLoading: false,
        deleteUserError: undefined,
        users: prev.users.filter((u) => u.id !== id),
      }));
    } catch (err) {
      set((prev) => ({
        ...prev,
        deleteUserLoading: false,
        deleteUserError: err as Error,
      }));
    }
  },

  login: async (email, pass) => {
    set((prev) => ({ ...prev, loginLoading: true }));
    try {
      await wait();
      const user = data.find((u) => u.email === email && u.password === pass);

      if (!user) throw new Error("Invalid credentials");
      const { password, ...userInfo } = user;

      set((prev) => ({
        ...prev,
        loginLoading: false,
        loginError: undefined,
        isAuth: true,
        currentUser: userInfo,
      }));
      localStorage.setItem(LocalStorageKey.IsAuth, JSON.stringify(true));
      localStorage.setItem(LocalStorageKey.CurrentUser, JSON.stringify(user));
      return {
        success: true,
      };
    } catch (err) {
      set((prev) => ({
        ...prev,
        loginLoading: false,
        loginError: err as Error,
      }));
      localStorage.setItem(LocalStorageKey.IsAuth, JSON.stringify(false));
      localStorage.removeItem(LocalStorageKey.CurrentUser);
      return {
        success: false,
      };
    }
  },

  logout: () => {
    set((prev) => ({
      ...prev,
      isAuth: false,
      currentUser: undefined,
    }));
    localStorage.setItem(LocalStorageKey.IsAuth, JSON.stringify(false));
    localStorage.removeItem(LocalStorageKey.CurrentUser);
  },

  changePage: (page: number) => {
    set((prev) => ({
      ...prev,
      currentPage: page,
    }));
  },
}));
