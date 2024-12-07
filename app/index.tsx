import { Redirect } from "expo-router";
const Home = () => {
    return <Redirect href={"/(auth)/login"} />;
};

export default Home;