const Header = ({ changeUser, data }) => {
  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {data?.username || "Admin"} &#128075;
        </span>
      </h1>
      <button
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
