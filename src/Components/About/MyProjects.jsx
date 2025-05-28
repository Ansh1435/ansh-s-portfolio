import { Link } from "react-router-dom";
// import tsp from "../../resources/tsp.png";
// import cb from "../../resources/cb.png";
const MyProjects = () => {
  return (
    <>
      {/* extra large screen view */}
      <div className="hidden xl:block">
        <div className=" text-[#64ccc5] text-3xl mt-4 p-1">
          What have I coded so far?
        </div>
        <div className=" text-white text-justify px-8 mt-4">
          Developed and deployed full-stack applications such as <b>HerCare</b>,
           a secure platform built with React.js and Node.js that allows anonymous 
           sharing of harassment experiences, featuring Google Maps heatmaps and 
           encryption for user privacy. Built a <b>Social Media</b> platform using 
           the MERN stack with real-time updates, secure authentication, and a smooth 
           UI for posting content. Created a <b>Carpooling Website</b> enabling ride 
           bookings and live ride management, integrating real-time tracking, JWT-based
            login, and a clean, responsive interface. <br /><br />
    
        </div>

        {/* <div className="flex mt-6 items-center justify-center gap-6 ">
          <div className=" w-48 h-48 border-2 p-3 ">
            {" "}
            <img src={cb} alt="" />
          </div>
          <div className=" w-48 h-48 border-2 p-3">
            {" "}
            <img src={tsp} alt="" />
          </div>
        </div> */}

        <Link to="/projects">
          <div className="text-end mx-12  text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/* large screen view */}
      <div className="hidden lg:block xl:hidden">
        <div className=" text-[#64ccc5] text-2xl mt-3 p-1">
          What have I coded so far?
        </div>
        <div className=" text-white text-justify px-6 mt-3 text-[13px]">
          Developed and deployed full-stack applications such as <b>HerCare</b>,
           a secure platform built with React.js and Node.js that allows anonymous 
           sharing of harassment experiences, featuring Google Maps heatmaps and 
           encryption for user privacy. Built a <b>Social Media</b> platform using 
           the MERN stack with real-time updates, secure authentication, and a smooth 
           UI for posting content. Created a <b>Carpooling Website</b> enabling ride 
           bookings and live ride management, integrating real-time tracking, JWT-based
            login, and a clean, responsive interface. <br /><br />
        </div>

        {/* <div className="flex mt-6 items-center justify-center gap-6 ">
          <div className=" w-44 h-44 border-2 p-3 ">
            {" "}
            <img src={cb} alt="" />
          </div>
          <div className=" w-44 h-44 border-2 p-3">
            {" "}
            <img src={tsp} alt="" />
          </div>
        </div> */}

        <Link to="/projects">
          <div className="text-end mx-12  text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/* medium screen view */}
      <div className="hidden md:block lg:hidden xl:hidden">
        <div className=" text-[#64ccc5] text-4xl mt-5 p-1">
          What have I coded so far?
        </div>
        <div className=" text-white text-justify px-6 mt-3 text-lg">
          Developed and deployed full-stack applications such as <b>HerCare</b>,
           a secure platform built with React.js and Node.js that allows anonymous 
           sharing of harassment experiences, featuring Google Maps heatmaps and 
           encryption for user privacy. Built a <b>Social Media</b> platform using 
           the MERN stack with real-time updates, secure authentication, and a smooth 
           UI for posting content. Created a <b>Carpooling Website</b> enabling ride 
           bookings and live ride management, integrating real-time tracking, JWT-based
            login, and a clean, responsive interface. <br /><br />
        </div>

        {/* <div className="flex mt-6 items-center justify-center gap-6 ">
          <div className=" w-56 h-56 border-2 p-3 ">
            {" "}
            <img src={cb} alt="" />
          </div>
          <div className=" w-56 h-56 border-2 p-3">
            {" "}
            <img src={tsp} alt="" />
          </div>
        </div> */}

        <Link to="/projects">
          <div className="text-end mx-12 my-4 text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/* small screen view */}
      <div className="block md:hidden">
        <div className=" text-[#64ccc5] text-4xl mt-5 p-1">
          What have I coded so far?
        </div>
        <div className=" text-white text-justify px-6 mt-3 text-xs">
         Developed and deployed full-stack applications such as <b>HerCare</b>,
           a secure platform built with React.js and Node.js that allows anonymous 
           sharing of harassment experiences, featuring Google Maps heatmaps and 
           encryption for user privacy. Built a <b>Social Media</b> platform using 
           the MERN stack with real-time updates, secure authentication, and a smooth 
           UI for posting content. Created a <b>Carpooling Website</b> enabling ride 
           bookings and live ride management, integrating real-time tracking, JWT-based
            login, and a clean, responsive interface. <br /><br />
        </div>

        {/* <div className="flex flex-col mt-6 items-center justify-center gap-4 ">
          <div className=" w-56 h-56 border-2 p-3 ">
            {" "}
            <img src={cb} alt="" />
          </div>
          <div className=" w-56 h-56 border-2 p-3">
            {" "}
            <img src={tsp} alt="" />
          </div>
        </div> */}

        <Link to="/projects">
          <div className="text-end mx-12 my-4 text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>
    </>
  );
};

export default MyProjects;
