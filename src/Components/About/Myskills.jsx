// import tailwind from "../../resources/tailwind.png";
// import nextjs from "../../resources/nextjs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import node from "../../resources/Node.png";
import mongodb from "../../resources/mongodb.png";
import express from "../../resources/Express.png";
import tsl from "../../resources/tsl.png";
import cl from "../../resources/cl.png";
import cpl from "../../resources/cpl.png";
import jsl from "../../resources/jsl.png";
import git from "../../resources/git.png";
import gith from "../../resources/gith.png";
// import fgm from "../../resources/fgm.png";
import vsc from "../../resources/vsc.png";
import elastic from "../../resources/elastic.png";
import angular from "../../resources/angular.png";
import nestjs from "../../resources/nestjs.png";
import { Link } from "react-router-dom";

const Myskills = () => {
  return (
    <>
      {/* extra large screen view */}
      <div className="hidden xl:block">
        <div className=" text-[#64ccc5] text-3xl mt-4 p-1">What do I know?</div>
        <div className=" text-white text-justify px-8 ">
       I am proficient in C, C++, HTML, CSS, JavaScript, and SQL, 
       with hands-on experience using front-end frameworks like React.js,
        Angular, and Material UI, and back-end technologies including Node.js,
         Express.js, and NestJS. I have worked extensively with MongoDB for
          database management and have applied design principles like MVC
           architecture and RESTful API development. My technical foundation
            includes Object-Oriented Programming, Data Structures, and Algorithms.
             I’m also familiar with developer tools such as Git, GitHub, VS Code, 
             Postman, Docker, and MongoDB Compass, enabling me to build responsive,
              scalable, and secure web applications.

        </div>

        <div className="grid grid-cols-8 p-8 gap-6">
          <div className="w-24 h-24 border-2">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-[#64ccc5] p-3 text-[70px]"
            />
          </div>
          <div className="w-24 h-24 border-2 ">
            <FontAwesomeIcon
              icon={faCss3}
              className="text-[#64ccc5] p-3 text-[70px]"
            />
          </div>
          <div className="w-24 h-24 border-2">
            {" "}
            <FontAwesomeIcon
              icon={faReact}
              className="text-[#64ccc5] p-3 text-[70px]"
            />
          </div>
          {/* <div className="w-24 h-24 border-2 p-3">
            <img src={tailwind} alt="" />
          </div> */}
          {/* <div className="w-24 h-24 border-2 p-3">
            <img src={nextjs} alt="" />
          </div> */}
          <div className="w-24 h-24 border-2 p-3">
            <img src={node} alt="" />
          </div>
          <div className="w-24 h-24 border-2 p-3">
            <img src={mongodb} alt="" />
          </div>
          <div className="w-24 h-24 border-2 p-3">
            <img src={express} alt="" />
          </div>
          <div className="w-24 h-24 border-2 p-3">
            <img src={tsl} alt="" />
          </div>
          <div className="w-24 h-24 border-2 p-3">
            <img src={cl} alt="" />
          </div>
          <div className="w-24 h-24 border-2 p-3">
            <img src={cpl} alt="" />
          </div>
          <div className="w-24 h-24 border-2 p-3">
            <img src={jsl} alt="" />
          </div>
          <div className="w-24 h-24 border-2 p-3">
            <img src={git} alt="" />
          </div>
          <div className="w-24 h-24 border-2 p-3">
            <img src={gith} alt="" />
          </div>
          {/* <div className="w-24 h-24 border-2 p-3">
            <img src={fgm} alt="" />
          </div> */}
          <div className="w-24 h-24 border-2 p-3">
            <img src={vsc} alt="" />
          </div>
           <div className="w-24 h-24 border-2 p-3">
            <img src={angular} alt="" />
          </div>
           <div className="w-24 h-24 border-2 p-3">
            <img src={elastic} alt="" />
          </div>
           <div className="w-24 h-24 border-2 p-3">
            <img src={nestjs} alt="" />
          </div>
        </div>

        <Link to="/skills">
          <div className="text-end mx-8 text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/*  large screen view */}
      <div className="hidden lg:block xl:hidden">
        <div className=" text-[#64ccc5] text-2xl mt-3 p-1">What do I know?</div>
        <div className=" text-white text-[13px] text-justify px-8 ">
       {/* I am proficient in C, C++, HTML, CSS, JavaScript, and MySQL, with expertise 
     in front-end tools like React.js, Angular, and Material UI, and back-end technologies
      including Node.js, Express.js, NestJS, and MongoDB. With a solid foundation
       in Object-Oriented Programming, RESTful APIs, and MVC architecture,
        along with experience in tools like Git, GitHub, VS Code, Postman, 
        Docker, and MongoDB Compass, I deliver scalable, secure, and high-performance web solutions. */}
        I am proficient in C, C++, HTML, CSS, JavaScript, and SQL, 
       with hands-on experience using front-end frameworks like React.js,
        Angular, and Material UI, and back-end technologies including Node.js,
         Express.js, and NestJS. I have worked extensively with MongoDB for
          database management and have applied design principles like MVC
           architecture and RESTful API development. My technical foundation
            includes Object-Oriented Programming, Data Structures, and Algorithms.
             I’m also familiar with developer tools such as Git, GitHub, VS Code, 
             Postman, Docker, and MongoDB Compass, enabling me to build responsive,
              scalable, and secure web applications.
        </div>

        <div className="grid grid-cols-8 p-4 gap-4">
          <div className="w-20 h-20 border-2">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-[#64ccc5] p-3 text-[55px]"
            />
          </div>
          <div className="w-20 h-20 border-2">
            <FontAwesomeIcon
              icon={faCss3}
              className="text-[#64ccc5] p-3 text-[55px]"
            />
          </div>
          <div className="w-20 h-20 border-2">
            {" "}
            <FontAwesomeIcon
              icon={faReact}
              className="text-[#64ccc5] p-3 text-[55px]"
            />
          </div>
          {/* <div className="w-20 h-20 border-2 p-3">
            <img src={tailwind} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={nextjs} alt="" />
          </div> */}
          <div className="w-20 h-20 border-2 p-3">
            <img src={node} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={mongodb} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={express} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={tsl} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={cl} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={cpl} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={jsl} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={git} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={gith} alt="" />
          </div>
          {/* <div className="w-20 h-20 border-2 p-3">
            <img src={fgm} alt="" />
          </div> */}
          <div className="w-20 h-20 border-2 p-3">
            <img src={vsc} alt="" />
          </div>
        </div>

        <Link to="/skills">
          <div className="text-end mx-8 text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/*  medium screen view */}
      <div className="hidden md:block lg:hidden xl:hidden">
        <div className=" text-[#64ccc5] text-2xl mt-3 p-1">What do I know?</div>
        <div className=" text-white text-lg text-justify px-8 ">
        I am proficient in C, C++, HTML, CSS, JavaScript, and SQL, 
       with hands-on experience using front-end frameworks like React.js,
        Angular, and Material UI, and back-end technologies including Node.js,
         Express.js, and NestJS. I have worked extensively with MongoDB for
          database management and have applied design principles like MVC
           architecture and RESTful API development. My technical foundation
            includes Object-Oriented Programming, Data Structures, and Algorithms.
             I’m also familiar with developer tools such as Git, GitHub, VS Code, 
             Postman, Docker, and MongoDB Compass, enabling me to build responsive,
              scalable, and secure web applications.
        </div>

        <div className="grid grid-cols-8 p-6 gap-3">
          <div className="w-20 h-20 border-2">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-[#64ccc5] p-3 text-[55px]"
            />
          </div>
          <div className="w-20 h-20 border-2">
            <FontAwesomeIcon
              icon={faCss3}
              className="text-[#64ccc5] p-3 text-[55px]"
            />
          </div>
          <div className="w-20 h-20 border-2">
            {" "}
            <FontAwesomeIcon
              icon={faReact}
              className="text-[#64ccc5] p-3 text-[55px]"
            />
          </div>
          {/* <div className="w-20 h-20 border-2 p-3">
            <img src={tailwind} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={nextjs} alt="" />
          </div> */}
          <div className="w-20 h-20 border-2 p-3">
            <img src={node} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={mongodb} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={express} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={tsl} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={cl} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={cpl} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={jsl} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={git} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={gith} alt="" />
          </div>
          {/* <div className="w-20 h-20 border-2 p-3">
            <img src={fgm} alt="" />
          </div> */}
          <div className="w-20 h-20 border-2 p-3">
            <img src={vsc} alt="" />
          </div>
        </div>

        <Link to="/skills">
          <div className="text-end mx-8 text-xl mb-2 text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/*  small screen view */}
      <div className="block md:hidden">
        <div className=" text-[#64ccc5] text-2xl mt-3 p-1">What do I know?</div>
        <div className=" text-white text-xs text-justify px-8 ">
        I am proficient in C, C++, HTML, CSS, JavaScript, and SQL, 
       with hands-on experience using front-end frameworks like React.js,
        Angular, and Material UI, and back-end technologies including Node.js,
         Express.js, and NestJS. I have worked extensively with MongoDB for
          database management and have applied design principles like MVC
           architecture and RESTful API development. My technical foundation
            includes Object-Oriented Programming, Data Structures, and Algorithms.
             I’m also familiar with developer tools such as Git, GitHub, VS Code, 
             Postman, Docker, and MongoDB Compass, enabling me to build responsive,
              scalable, and secure web applications.
        </div>

        <div className="grid grid-cols-3 p-6 gap-3">
          <div className="w-20 h-20 border-2">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-[#64ccc5] p-3 text-[55px]"
            />
          </div>
          <div className="w-20 h-20 border-2">
            <FontAwesomeIcon
              icon={faCss3}
              className="text-[#64ccc5] p-3 text-[55px]"
            />
          </div>
          <div className="w-20 h-20 border-2">
            {" "}
            <FontAwesomeIcon
              icon={faReact}
              className="text-[#64ccc5] p-3 text-[55px]"
            />
          </div>
          {/* <div className="w-20 h-20 border-2 p-3">
            <img src={tailwind} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={nextjs} alt="" />
          </div> */}
          <div className="w-20 h-20 border-2 p-3">
            <img src={node} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={mongodb} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={express} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={tsl} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={cl} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={cpl} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={jsl} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={git} alt="" />
          </div>
          <div className="w-20 h-20 border-2 p-3">
            <img src={gith} alt="" />
          </div>
          {/* <div className="w-20 h-20 border-2 p-3">
            <img src={fgm} alt="" />
          </div> */}
          <div className="w-20 h-20 border-2 p-3">
            <img src={vsc} alt="" />
          </div>
        </div>

        <Link to="/skills">
          <div className="text-end mx-8 text-xl mb-2 text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

    </>
  );
};

export default Myskills;
