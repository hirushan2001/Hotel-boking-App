import { Redirect } from "expo-router";
const HomeLayout = () => {
    return <Redirect href={"/(auth)/login"} />;
};

export default HomeLayout;