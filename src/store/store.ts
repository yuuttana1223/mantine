import create from "zustand";
import { Session } from "@supabase/supabase-js";
import { devtools } from "zustand/middleware";

type State = {
  session: Session | null;
  setSession: (payload: Session | null) => void;
  avatarUrl: string;
  setAvatarUrl: (payload: string) => void;
};

export const useStore = create(
  devtools<State>((set) => ({
    session: null,
    setSession: (payload) => set({ session: payload }),
    avatarUrl: "",
    setAvatarUrl: (payload) => set({ avatarUrl: payload }),
  }))
);
