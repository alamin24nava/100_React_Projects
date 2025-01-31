import CreateTodo from "../components/CreateTodo";
import Footer from "../components/Footer";
import Table from "../components/Table";

const Home = () => {
    return (
        <div>
            <CreateTodo/>
            <Table/>
            <Footer/>
        </div>
    );
};

export default Home;