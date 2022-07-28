import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "~/lib";
import { PostgrestError } from "~/model/error";
import { Profile } from "~/model/profile/profileType";

/**
 * profilesテーブルになければ作成、あれば更新
 */
const upsertAvatarUrl = async (avatarUrl?: string) => {
  if (typeof avatarUrl === "undefined") {
    return "";
  }
  //
  const { data, error } = await supabase.from<Profile>("profiles").upsert(
    {
      id: supabase.auth.user()?.id,
      avatar_url: avatarUrl,
    },
    {
      returning: "minimal",
    }
  );
  if (error) {
    throw new PostgrestError({ ...error });
  }
  return data[0].avatar_url;
};

/**
 * ストレージに画像を保存する
 */
const uploadAvatarToStorage = async (files: FileList | null) => {
  if (files === null || files.length === 0) {
    throw new Error("no file");
  }
  const avatarFile = files[0];
  const extension = avatarFile.name.split(".").slice(-1)[0];
  const newFileName = `${Date.now()}.${extension}`;

  const { error } = await supabase.storage
    .from("avatars")
    .upload(newFileName, avatarFile);

  if (error) {
    throw new Error(error.message);
  }
  return newFileName;
};

export const useMutateAvatar = () => {
  const queryClient = useQueryClient();

  const upsertAvatarUrlMutation = useMutation(upsertAvatarUrl, {
    onSuccess: (avatarUrl) => {
      if (avatarUrl) {
        queryClient.setQueryData(["avatarUrl"], avatarUrl);
      }
    },
  });

  const uploadAvatarToStorageMutation = useMutation(uploadAvatarToStorage, {
    onSuccess: (avatarUrl) => {
      if (avatarUrl) {
        queryClient.setQueryData(["avatarUrl"], avatarUrl);
      }
    },
  });

  return { upsertAvatarUrlMutation, uploadAvatarToStorageMutation };
};
