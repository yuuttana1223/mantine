import { NextPage } from "next";
import { AuthRoute } from "~/provider";
import { Avatar } from "~/pages-component/users/avatar/Avatar";

const AvatarPage: NextPage = () => {
  return (
    <AuthRoute>
      <Avatar />
    </AuthRoute>
  );
};

export default AvatarPage;
