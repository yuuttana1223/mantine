import { useQuery } from "@tanstack/react-query";
import { STATUS_CODE } from "~/const/statusCode";
import { supabase } from "~/lib";
import { PostgrestError } from "~/model/error";
import { Profile } from "~/model/profile/profileType";
import { useCallback } from "react";

export const useQueryProfileAvatarUrl = (id?: string) => {
  const fetchProfileAvatarUrl = useCallback(async () => {
    if (typeof id === "undefined") {
      return "";
    }

    const { data, error, status } = await supabase
      .from<Profile>("profiles")
      .select("avatar_url")
      .eq("id", id)
      .single();

    if (error && status !== STATUS_CODE.NOT_ACCEPTABLE) {
      throw new PostgrestError({ ...error });
    }
    return data?.avatar_url ?? "";
  }, [id]);

  return useQuery<string, PostgrestError>(["avatarUrl"], fetchProfileAvatarUrl);
};
