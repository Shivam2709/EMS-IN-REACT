import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

const AdminDashboard = ({ changeUser, data }) => {
  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={changeUser} data={data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
