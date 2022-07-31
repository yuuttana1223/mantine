import { supabase } from "~/lib";
import { Post } from "~/model/post/postType";
import { PostgrestError } from "~/model/error";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const { data, error } = await supabase.from<Post>("posts").select("*");
  if (error) {
    throw new PostgrestError({ ...error });
  }
  return data;
};

export const useQueryPosts = () => {
  return useQuery<Post[], PostgrestError>(["posts", fetchPosts], {
    suspense: true,
  });
};
