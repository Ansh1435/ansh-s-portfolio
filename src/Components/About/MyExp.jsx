// import mod from "../../resources/mod.jpeg";
// import sinter from "../../resources/sinter.png";
// import finter from "../../resources/finter.png";
import { Link } from "react-router-dom";
const MyExp = () => {
  return (
    <>
      {/* extra larg screen view */}
      <div className="hidden xl:block">
        <div className=" text-[#64ccc5] text-3xl mt-4 p-1">
          Where have I worked before?
        </div>
        <div className=" text-white text-justify px-8 mt-4">
  With hands-on experience across diverse technologies and real-world applications, I have contributed to
     impactful software development projects during my internships at Digicraft Technovision and Kshipta 
     Technologies. At Digicraft, I built a dynamic Elasticsearch query builder to boost data retrieval efficiency,
      and developed a multi-tenant service that streamlined user management while ensuring secure
       authentication and access control. I also created and integrated ONDC-compliant RESTful APIs
        using Nest.js and Prisma ORM, which enabled seamless interoperability between services and
         aligned with the BECKN protocol for digital commerce.
At Kshipta Technologies, I led the design and deployment of a 
full-fledged booking system, developed using Angular and Node.js, which
 improved customer bookings by 15%. I implemented cronjobs to automate 
 recurring tasks, integrated RESTful APIs, and applied MVC patterns to 
 enhance system performance, achieving a 10% improvement in loading time.
My work spans full-stack development, from building intuitive UIs in 
Angular and React.js, to backend optimization with Node.js, Express.js,
 and MongoDB. These experiences have refined my ability to design scalable
  systems, implement secure JWT-based authentication, and debug complex 
  issues, while reinforcing a strong foundation in collaborative, standards-driven development.
I’m proficient with the MERN stack, have engineered real-time applications,
 and bring a deep understanding of scalable architecture and modern web development practices.
        </div>

        {/* <div className="flex mt-6 items-center justify-center gap-6 ">
          <div className=" w-48 h-48 border-2 p-3">
            {" "}
            <img src={mod} alt="" />
          </div>
          <div className=" w-48 h-48 border-2 p-3 ">
            {" "}
            <img src={sinter} alt="" />
          </div>
          <div className=" w-48 h-48 border-2 p-3">
            {" "}
            <img src={finter} alt="" />
          </div>
        </div> */}

        <Link to="/experience">
          <div className="text-end mx-12  text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/*larg screen view */}
      <div className="hidden lg:block xl:hidden">
        <div className=" text-[#64ccc5] text-xl mt-4 p-1">
          Where have I worked before?
        </div>
        <div className=" text-white text-justify px-6 mt-2 text-[13px]">
         With hands-on experience across diverse technologies and real-world applications, I have contributed to
     impactful software development projects during my internships at Digicraft Technovision and Kshipta 
     Technologies. At Digicraft, I built a dynamic Elasticsearch query builder to boost data retrieval efficiency,
      and developed a multi-tenant service that streamlined user management while ensuring secure
       authentication and access control. I also created and integrated ONDC-compliant RESTful APIs
        using Nest.js and Prisma ORM, which enabled seamless interoperability between services and
         aligned with the BECKN protocol for digital commerce.
At Kshipta Technologies, I led the design and deployment of a 
full-fledged booking system, developed using Angular and Node.js, which
 improved customer bookings by 15%. I implemented cronjobs to automate 
 recurring tasks, integrated RESTful APIs, and applied MVC patterns to 
 enhance system performance, achieving a 10% improvement in loading time.
My work spans full-stack development, from building intuitive UIs in 
Angular and React.js, to backend optimization with Node.js, Express.js,
 and MongoDB. These experiences have refined my ability to design scalable
  systems, implement secure JWT-based authentication, and debug complex 
  issues, while reinforcing a strong foundation in collaborative, standards-driven development.
I’m proficient with the MERN stack, have engineered real-time applications,
 and bring a deep understanding of scalable architecture and modern web development practices.
        </div>

        {/* <div className="flex mt-6 items-center justify-center gap-4 ">
          <div className=" w-36 h-36 border-2 p-3">
            {" "}
            <img src={mod} alt="" />
          </div>
          <div className=" w-36 h-36 border-2 p-3 ">
            {" "}
            <img src={sinter} alt="" />
          </div>
          <div className=" w-36 h-36 border-2 p-3">
            {" "}
            <img src={finter} alt="" />
          </div>
        </div> */}

        <Link to="/experience">
          <div className="text-end mx-12  text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/*medium screen view */}
      <div className="hidden md:block lg:hidden xl:hidden">
        <div className=" text-[#64ccc5] text-3xl mt-4 p-1">
          Where have I worked before?
        </div>
        <div className=" text-white text-justify px-6 mt-2 text-lg">
     With hands-on experience across diverse technologies and real-world applications, I have contributed to
     impactful software development projects during my internships at Digicraft Technovision and Kshipta 
     Technologies. At Digicraft, I built a dynamic Elasticsearch query builder to boost data retrieval efficiency,
      and developed a multi-tenant service that streamlined user management while ensuring secure
       authentication and access control. I also created and integrated ONDC-compliant RESTful APIs
        using Nest.js and Prisma ORM, which enabled seamless interoperability between services and
         aligned with the BECKN protocol for digital commerce.
At Kshipta Technologies, I led the design and deployment of a 
full-fledged booking system, developed using Angular and Node.js, which
 improved customer bookings by 15%. I implemented cronjobs to automate 
 recurring tasks, integrated RESTful APIs, and applied MVC patterns to 
 enhance system performance, achieving a 10% improvement in loading time.
My work spans full-stack development, from building intuitive UIs in 
Angular and React.js, to backend optimization with Node.js, Express.js,
 and MongoDB. These experiences have refined my ability to design scalable
  systems, implement secure JWT-based authentication, and debug complex 
  issues, while reinforcing a strong foundation in collaborative, standards-driven development.
I’m proficient with the MERN stack, have engineered real-time applications,
 and bring a deep understanding of scalable architecture and modern web development practices.
        </div>

        {/* <div className="flex mt-6 items-center justify-center gap-4 ">
          <div className=" w-48 h-48 border-2 p-3">
            {" "}
            <img src={mod} alt="" />
          </div>
          <div className=" w-48 h-48 border-2 p-3 ">
            {" "}
            <img src={sinter} alt="" />
          </div>
          <div className=" w-48 h-48 border-2 p-3">
            {" "}
            <img src={finter} alt="" />
          </div>
        </div> */}

        <Link to="/experience">
          <div className="text-end mx-12 my-4 text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/*small screen view */}
      <div className="block md:hidden">
        <div className=" text-[#64ccc5] text-3xl mt-4 p-1">
          Where have I worked before?
        </div>
        <div className=" text-white text-justify px-6 mt-2 text-xs">
    With hands-on experience across diverse technologies and real-world applications, I have contributed to
     impactful software development projects during my internships at Digicraft Technovision and Kshipta 
     Technologies. At Digicraft, I built a dynamic Elasticsearch query builder to boost data retrieval efficiency,
      and developed a multi-tenant service that streamlined user management while ensuring secure
       authentication and access control. I also created and integrated ONDC-compliant RESTful APIs
        using Nest.js and Prisma ORM, which enabled seamless interoperability between services and
         aligned with the BECKN protocol for digital commerce.
At Kshipta Technologies, I led the design and deployment of a 
full-fledged booking system, developed using Angular and Node.js, which
 improved customer bookings by 15%. I implemented cronjobs to automate 
 recurring tasks, integrated RESTful APIs, and applied MVC patterns to 
 enhance system performance, achieving a 10% improvement in loading time.
My work spans full-stack development, from building intuitive UIs in 
Angular and React.js, to backend optimization with Node.js, Express.js,
 and MongoDB. These experiences have refined my ability to design scalable
  systems, implement secure JWT-based authentication, and debug complex 
  issues, while reinforcing a strong foundation in collaborative, standards-driven development.
I’m proficient with the MERN stack, have engineered real-time applications,
 and bring a deep understanding of scalable architecture and modern web development practices.
        </div>

        {/* <div className="flex flex-col mt-6 items-center justify-center gap-4 ">
          <div className=" w-36 h-36 border-2 p-3">
            {" "}
            <img src={mod} alt="" />
          </div>
          <div className=" w-36 h-36 border-2 p-3 ">
            {" "}
            <img src={sinter} alt="" />
          </div>
          <div className=" w-36 h-36 border-2 p-3">
            {" "}
            <img src={finter} alt="" />
          </div>
        </div> */}

        <Link to="/experience">
          <div className="text-end mx-12 my-4 text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>
    </>
  );
};

export default MyExp;
