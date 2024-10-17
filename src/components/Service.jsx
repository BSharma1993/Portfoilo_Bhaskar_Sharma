import React from "react";

const Service = () => {
  const items = [
    {
      id: 1,
      title: "Web Design",
      description:
        "Creating visually appealing and user-friendly web designs.Creating visually appealing and user-friendly web designs.",
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces.Building responsive and interactive user interfaces.",
    },
    {
      id: 3,
      title: "Backend Development",
      description:
        "Developing robust server-side logic and databases.Developing robust server-side logic and databases.",
    },
    {
      id: 4,
      title: "Full-Stack Development",
      description:
        "Combining both frontend and backend development skills.Combining both frontend and backend development skills.",
    },
    {
      id: 5,
      title: "Content Writing",
      description:
        "Writing content for your business and companies.Writing content for your business and companies.",
    },
    {
      id: 6,
      title: "Digital Marketing",
      description:
        "Promote your business with our digital marketing team.Promote your business with our digital marketing team.",
    },
  ];
  return (
    <>
      <div
        name="Service"
        className=" border-black px-10 max-w-screen h-fit container m-auto md:mt-24 md:px-10"
      >
        {" "}
        <div className=" mb-12">
          <h1 className=" text-center text-4xl font-bold ">
            {" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]">
              MY
            </span>
            SERVICE
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className=" px-6 pb-6 rounded-lg hover:shadow-lg transform 
            transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {item.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {item.title}
              </h3>
              <p className="mt-2 text-black">{item.description}</p>
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
