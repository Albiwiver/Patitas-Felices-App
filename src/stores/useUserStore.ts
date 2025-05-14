import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  subname: string;
  email: string;
  password: string;
  phone?: string;
  location: string;
  province: string;
  postalCode: string;
  country?: string;
}

interface UserState {
  users: User[];
  registerUser: (newUser: User) => boolean;
  findUser: (email: string) => User | null;
  updateUser: (updatedUser: User) => boolean;
}

const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      users: [],
      registerUser: (newUser) => {
        const exists = get().users.some((u) => u.email === newUser.email);
        if (exists) return false;
        set((state) => ({ users: [...state.users, newUser] }));
        return true;
      },
      findUser: (email) => {
        return get().users.find((u) => u.email === email) || null;
      },
      updateUser: (updatedUser: User) => {
        const userExists = get().users.some(
          (u) => u.email === updatedUser.email
        );
        if (!userExists) return false;

        set((state) => ({
          users: state.users.map((user) =>
            user.email === updatedUser.email ? updatedUser : user
          ),
        }));
        return true;
      },
    }),
    { name: "user-database" }
  )
);

export default useUserStore;
