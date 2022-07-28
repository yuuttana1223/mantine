import { Avatar, Button, Group, Indicator, Loader } from "@mantine/core";
import { CameraIcon } from "@heroicons/react/solid";
import { useQueryProfileAvatarUrl } from "~/model/profile/useQueryAvatarUrl";
import { supabase } from "~/lib";
import { useMutateAvatar } from "~/model/profile/useMutateAvatar";
import { useMemo } from "react";

export const AvatarPresenter = () => {
  const { data: avatarUrl } = useQueryProfileAvatarUrl(
    supabase.auth.user()?.id
  );
  const {
    upsertAvatarUrlMutation: {
      mutate: upsertMutate,
      isLoading: upsertIsLoading,
    },
    uploadAvatarToStorageMutation: {
      mutate: uploadMutate,
      isLoading: uploadIsLoading,
    },
  } = useMutateAvatar();

  const isLoading = useMemo(
    () => upsertIsLoading || uploadIsLoading,
    [uploadIsLoading, upsertIsLoading]
  );

  return (
    <Group direction="column" position="center">
      {isLoading && <Loader />}
      {avatarUrl && (
        <Indicator
          label="new"
          size={16}
          offset={7}
          position="bottom-end"
          color="green"
          withBorder
          classNames={{ indicator: "text-xs -top-1" }}
        >
          <Avatar
            size="lg"
            src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/avatars/${avatarUrl}`}
          />
        </Indicator>
      )}

      <label htmlFor="avatar">
        <CameraIcon className="my-3 h-7 w-7 cursor-pointer text-gray-500" />
      </label>
      <input
        type="file"
        id="avatar"
        className="hidden"
        accept="image/*"
        onChange={(e) => uploadMutate(e.target.files)}
      />
      <Button onClick={() => upsertMutate(avatarUrl)}>Upsert</Button>
    </Group>
  );
};
