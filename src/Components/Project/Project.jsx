import Header from "../Header";
import tsp from "../../resources/tsp.png";
import hercare from "../../resources/hercare.png";
import PageWrapper from "../PageWrapper/PageWrapper";

const Experience = () => {
  return (
    <PageWrapper>
      <div className="w-screen pb-14 bg-[#0F0F0F] font-kodeMono hidden xl:block">
        <Header />
        <div className="text-center font-kodeMono text-5xl font-semibold text-[#64ccc5]">
          PROJECTS
        </div>

        <div className="text-center mt-3 text-white font-kodeMono text-xl">
          Transforming Ideas into Functional and Innovative Solutions Through My
          Projects
        </div>

        <div className="mt-16 mx-20 border-2 p-8 ">
          <div className="grid grid-cols-10 gap-36 ">
            <div className="w-60 col-span-2 flex items-start mt-10">
              <img src={hercare} alt="" className="scale-110"  />
            </div>
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
                01. Her Care
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Tech Stack:HTML,CSS,JavaScript,ReactJs,NodeJs,MongoDB,Material UI
              </p>
              <ul className="text-white list-disc ">
                <li>
                 Engineered a web platform that crowdsources personal stories of 
                 sexual harassment and abuse anonymously.
                </li>
                <li>
                  Leveraged ReactJs to design a user-friendly and responsive
                   front-end interface. Built a robust back-end using
                  JavaScript and Node.js to manage data and user interactions.
                </li>
                <li>
                  Utilized Google Maps API visualizes harassment 
                  trends with interactive heatmaps, empowering data-driven
                   decision-making.
                </li>
                <li>
                  Implemented secure user authentication and data
                   encryption to ensure anonymity and protect sensitive user
                 information throughout the platform.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://hercare-women.web.app/"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

<div className="mt-16 mx-auto border-2 p-8 max-w-4xl text-center">
  <p className="text-white text-3xl mb-2">02. Social Media</p>

  <p className="text-[#64ccc5] text-xl mb-4">
    Tech Stack: HTML, CSS, JavaScript, React.js, Node.js, MongoDB
  </p>

  <ul className="text-white list-disc list-inside text-left mx-auto max-w-3xl">
    <li>
      Built a full-stack social media platform with secure authentication and authorization using the MERN stack, ensuring data privacy and safe access.
    </li>
    <li>
      Created an intuitive UI/UX for seamless text and image posting, increasing user-generated content by 40%.
    </li>
    <li>
      Improved user satisfaction by 25% through smooth navigation and engaging interface features.
    </li>
    <li>
      Developed scalable backend services supporting real-time interactions and dynamic content management.
    </li>
  </ul>

  <div className="mt-4">
    <a
      href="https://github.com/Ansh1435/Social-Media-"
      target="_blank"
      className="text-[#64ccc5] text-2xl hover:underline hover:underline-offset-2"
    >
      GitHub Repository
    </a>
  </div>
</div>


<div className="mt-16 mx-auto border-2 p-8 max-w-4xl text-center">
  <p className="text-white text-3xl mb-2">03. Carpooling Website</p>

  <p className="text-[#64ccc5] text-xl mb-4">
    Tech Stack: HTML, CSS, JavaScript, React.js, Node.js, MongoDB
  </p>

  <ul className="text-white list-disc list-inside text-left mx-auto max-w-3xl">
    <li>
     Developed a MERN stack carpooling platform enabling ride bookings and real-time ride management.
    </li>
    <li>
    Built a clean UI for entering source, destination, time, and passenger count, improving usability.
    </li>
    <li>
    Used JWT authentication for secure sessions and data protection.
    </li>
    <li>
    Added real-time tracking, notifications, and responsive design for a consistent user experience.
    </li>
  </ul>

  <div className="mt-4">
    <a
      href="https://github.com/Ansh1435/Hackathon"
      target="_blank"
      className="text-[#64ccc5] text-2xl hover:underline hover:underline-offset-2"
    >
      GitHub Repository
    </a>
  </div>
</div>
      </div>



      
/////////////////////////////////////////////////////////////////////////////////////////////////////////


      <div className="w-screen pb-14 bg-[#0F0F0F] font-kodeMono hidden lg:block xl:hidden">
        <Header />
        <div className="text-center font-kodeMono text-5xl font-semibold text-[#64ccc5]">
          PROJECTS
        </div>

        <div className="text-center mt-3 text-white font-kodeMono text-xl">
          Transforming Ideas into Functional and Innovative Solutions Through My
          Projects
        </div>

        <div className="mt-16 mx-12 border-2 p-8 ">
          <div className="grid grid-cols-4 gap-32 ">
            <div className="w-52 col-span-1">
              <img src={hercare} alt="" />
            </div>
            <div className="col-span-3">
              <p className="text-white text-3xl mb-2">
                {" "}
                01. Her Care
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Tech Stack:HTML,CSS,JavaScript,ReactJs,NodeJs,MongoDB,Material UI
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Engineered a web platform that crowdsources personal stories of 
                 sexual harassment and abuse anonymously.

                </li>
                <li>
                  Leveraged ReactJs to design a user-friendly and responsive
                   front-end interface. Built a robust back-end using
                  JavaScript and Node.js to manage data and user interactions.
                </li>
                <li>
                  Utilized Google Maps API visualizes harassment 
                  trends with interactive heatmaps, empowering data-driven
                   decision-making.

                </li>
                <li>
                  Implemented secure user authentication and data
                   encryption to ensure anonymity and protect sensitive user
                 information throughout the platform.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://hercare-women.web.app/"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-12 border-2 p-8">
          <div className="grid grid-cols-4 gap-32 ">
            {/* <div className="w-52 col-span-1">
              <img src={tsp} alt="" />
            </div> */}
            <div className="col-span-3">
              <p className="text-white text-3xl mb-2">
                {" "}
                02. Social Media
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
               Tech Stack: HTML, CSS, JavaScript, React.js, Node.js, MongoDB
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Built a full-stack social media platform with secure authentication and authorization using the MERN stack, ensuring data privacy and safe access.
                </li>
                <li>
                  Created an intuitive UI/UX for seamless text and image posting, increasing user-generated content by 40%.
                </li>
                <li>
                  Improved user satisfaction by 25% through smooth navigation and engaging interface features.
                </li>
                <li>
                 Developed scalable backend services supporting real-time interactions and dynamic content management.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/Ansh1435/Social-Media-"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>



         <div className="mt-16 mx-12 border-2 p-8">
          <div className="grid grid-cols-4 gap-32 ">
            {/* <div className="w-52 col-span-1">
              <img src={tsp} alt="" />
            </div> */}
            <div className="col-span-3">
              <p className="text-white text-3xl mb-2">
                {" "}
                03. Carpooling Website
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
               Tech Stack: HTML, CSS, JavaScript, React.js, Node.js, MongoDB
              </p>
              <ul className="text-white list-disc ">
                <li>
                 Developed a MERN stack carpooling platform enabling ride bookings and real-time ride management.
                </li>
                <li>
                 Built a clean UI for entering source, destination, time, and passenger count, improving usability.
                </li>
                 <li>
                  Used JWT authentication for secure sessions and data protection.

                </li>
                 <li>
                 Added real-time tracking, notifications, and responsive design for a consistent user experience.

                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/Ansh1435/Hackathon"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      <div className="w-screen pb-14 bg-[#0F0F0F] font-kodeMono hidden md:block lg:hidden">
        <Header />
        <div className="text-center font-kodeMono text-5xl font-semibold text-[#64ccc5]">
          PROJECTS
        </div>

        <div className="text-center mt-3 text-white font-kodeMono text-xl">
          Transforming Ideas into Functional and Innovative Solutions Through My
          Projects
        </div>

        <div className="mt-16 mx-8 border-2 p-8 ">
          <div className="flex flex-col items-center ">
            <div className="w-60 my-6">
              <img src={hercare} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
                01. Her Care
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Tech Stack:HTML,CSS,JavaScript,ReactJs,NodeJs,MongoDB,Material UI
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Engineered a web platform that crowdsources personal stories of 
                 sexual harassment and abuse anonymously.
                </li>
                <li>
                  Leveraged ReactJs to design a user-friendly and responsive
                   front-end interface. Built a robust back-end using
                  JavaScript and Node.js to manage data and user interactions.
                </li>
                <li>
                  Utilized Google Maps API visualizes harassment 
                  trends with interactive heatmaps, empowering data-driven
                   decision-making.
                </li>
                <li>
                 Implemented secure user authentication and data
                   encryption to ensure anonymity and protect sensitive user
                 information throughout the platform.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://hercare-women.web.app/"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-8 border-2 p-8">
          <div className="flex flex-col items-center ">
            {/* <div className="w-60 my-6">
              <img src={tsp} alt="" />
            </div> */}
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
                02. Social Media
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Tech Stack: HTML, CSS, JavaScript, React.js, Node.js, MongoDB
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Built a full-stack social media platform with secure authentication and authorization using the MERN stack, ensuring data privacy and safe access.
                </li>
                <li>
                  Created an intuitive UI/UX for seamless text and image posting, increasing user-generated content by 40%.
                </li>
                <li>
                 Improved user satisfaction by 25% through smooth navigation and engaging interface features.
                </li>
                <li>
                 Developed scalable backend services supporting real-time interactions and dynamic content management.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/Ansh1435/Social-Media-"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>

         <div className="mt-16 mx-8 border-2 p-8">
          <div className="flex flex-col items-center ">
            {/* <div className="w-60 my-6">
              <img src={tsp} alt="" />
            </div> */}
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
               03. Carpooling Website
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
               Tech Stack: HTML, CSS, JavaScript, React.js, Node.js, MongoDB
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Developed a MERN stack carpooling platform enabling ride bookings and real-time ride management.
                </li>
                <li>
                  Built a clean UI for entering source, destination, time, and passenger count, improving usability.
                </li>
                <li>
                  Used JWT authentication for secure sessions and data protection.
                </li>
                <li>
                  Added real-time tracking, notifications, and responsive design for a consistent user experience.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/Ansh1435/Hackathon"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      <div className="w-screen pb-14 bg-[#0F0F0F] font-kodeMono md:hidden block ">
        <Header />
        <div className="text-center font-kodeMono text-5xl font-semibold text-[#64ccc5]">
          PROJECTS
        </div>

        <div className="text-center mt-3 text-white font-kodeMono text-xl">
          Transforming Ideas into Functional and Innovative Solutions Through My
          Projects
        </div>

        <div className="mt-16 mx-8 border-2 p-4 ">
          <div className="flex flex-col items-center ">
            <div className="w-60 my-6">
              <img src={hercare} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-xl mb-2">
                {" "}
                01. Her Care
              </p>
              <p className="text-[#64ccc5]   mb-4">
                Tech Stack:HTML,CSS,JavaScript,ReactJs,NodeJs,MongoDB,Material UI
              </p>
              <ul className="text-white text-sm list-disc ">
                <li>
                  Engineered a web platform that crowdsources personal stories of 
                 sexual harassment and abuse anonymously.
                </li>
                <li>
                  Leveraged ReactJs to design a user-friendly and responsive
                   front-end interface. Built a robust back-end using
                  JavaScript and Node.js to manage data and user interactions.
                </li>
                <li>
                 Utilized Google Maps API visualizes harassment 
                  trends with interactive heatmaps, empowering data-driven
                   decision-making.
                </li>
                 <li>
                Implemented secure user authentication and data
                   encryption to ensure anonymity and protect sensitive user
                 information throughout the platform.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://hercare-women.web.app/"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-8 border-2 p-4">
          <div className="flex flex-col items-center ">
            {/* <div className="w-60 my-6">
              <img src={tsp} alt="" />
            </div> */}
            <div className="col-span-8">
              <p className="text-white text-xl mb-2">
                {" "}
               02. Social Media
              </p>
              <p className="text-[#64ccc5]   mb-4">
               Tech Stack: HTML, CSS, JavaScript, React.js, Node.js, MongoDB
              </p>
              <ul className="text-white list-disc text-sm ">
                <li>
               Built a full-stack social media platform with secure authentication and authorization using the MERN stack, ensuring data privacy and safe access.
                </li>
                <li>
                  Created an intuitive UI/UX for seamless text and image posting, increasing user-generated content by 40%.
                </li>
                <li>
                 Improved user satisfaction by 25% through smooth navigation and engaging interface features.
                </li>
                <li>
                 Developed scalable backend services supporting real-time interactions and dynamic content management.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/Ansh1435/Social-Media-"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-16 mx-8 border-2 p-4">
          <div className="flex flex-col items-center ">
            {/* <div className="w-60 my-6">
              <img src={tsp} alt="" />
            </div> */}
            <div className="col-span-8">
              <p className="text-white text-xl mb-2">
                {" "}
             03. Carpooling Website
              </p>
              <p className="text-[#64ccc5]   mb-4">
                  Tech Stack: HTML, CSS, JavaScript, React.js, Node.js, MongoDB
              </p>
              <ul className="text-white list-disc text-sm ">
                <li>
                  Developed a MERN stack carpooling platform enabling ride bookings and real-time ride management.
                </li>
                <li>
                 Built a clean UI for entering source, destination, time, and passenger count, improving usability.
                </li>
                <li>
                 Used JWT authentication for secure sessions and data protection.
                </li>
                <li>
                  Added real-time tracking, notifications, and responsive design for a consistent user experience.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/Ansh1435/Hackathon"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;
