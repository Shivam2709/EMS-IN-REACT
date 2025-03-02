const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600  text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-black text-sm font-semibold">{data.taskDate} </h4>
      </div>
      <h2 className="text-black mt-5 text-2xl font-semibold">
        {data.taskTitle}
      </h2>
      <p className="text-black text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-4">
        <button className=" w-full mt-20 bg-red-500 py-1 px-2 text-sm rounded">
          Failed Task
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
