import { useQuery } from "@tanstack/react-query";
import { supabase } from "~/lib";
import { ToDo } from "~/model/todo/todoType";
import { sleep } from "~/util/sleep";
import { PostgrestError } from "~/model/error";

export const useQueryToDos = () => {
  const fetchToDos = async () => {
    const { data, error } = await supabase
      .from<ToDo>("todos")
      .select("*")
      .order("created_at", { ascending: false });
    await sleep(2000);
    if (error) {
      throw new PostgrestError({ ...error });
    }
    return data;
  };

  return useQuery<ToDo[], PostgrestError>(["todos"], fetchToDos, {
    staleTime: Infinity,
  });
};
