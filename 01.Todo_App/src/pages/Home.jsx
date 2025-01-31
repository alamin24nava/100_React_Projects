import CreateTodo from "../components/CreateTodo";
import Footer from "../components/Footer";
import Table from "../components/Table";

const Home = ({data}) => {
    return (
        <div>
            <CreateTodo/>
            <Table data={data}/>
            <Footer/>
        </div>
    );
};

export default Home;