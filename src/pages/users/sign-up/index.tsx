import { NextPage } from "next";
import { Avatar } from "~/pages-component/users/avatar/Avatar";
import { AuthRoute } from "~/provider";

const AvatarPage: NextPage = () => {
  return (
    <AuthRoute>
      <Avatar />
    </AuthRoute>
  );
};

export default AvatarPage;
