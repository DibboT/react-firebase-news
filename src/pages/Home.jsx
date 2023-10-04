import BreakingNews from "./Shared/BreakingNews";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNav";
import NavBar from "./Shared/NavBar";
import RightSideNav from "./Shared/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <h2 className="text-3xl font-poppins font-semibold">This is home</h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border">
                    <h3 className="text-2xl">News is Coming Soon</h3>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;