const Myself = () => {
  return (
    <>
      {/* extra large screen view */}
      <div className="hidden xl:block ">
        <div className=" text-[#64ccc5]  text-3xl mt-4 p-4">Who am I?</div>
        <div>
          <ul className=" text-white text-justify ">
            <li className="my-4 px-8">
             Hi! I am Ansh, a final-year B.Tech student in Electronics and Communication Engineering
              with a strong inclination toward backend development and scalable systems.
               My journey in tech is driven by curiosity and a passion for 
               building impactful digital solutions, especially within 
               web development and open network ecosystems like ONDC.
            </li>
            <li className="my-4 px-8">
             With hands-on experience in a wide array of technologies—such 
             as JavaScript, Node.js, NestJS, React, Angular, MongoDB, Prisma ORM,
              ElasticSearch, and RESTful APIs—I specialize in developing scalable
               applications, building secure authentication systems, and enhancing 
               backend performance. My skills span from intuitive front-end interfaces 
               to high-performance server-side architecture.
            </li>
            <li className="px-8">
              I’m driven by the opportunity to solve real-world problems through technology.
               I enjoy collaborating in fast-paced environments, where I can apply my strengths
                in debugging, performance optimization, and full-stack development. My 
                internships and personal projects have equipped me to take on complex 
                technical challenges while continuously learning and adapting to the 
                evolving tech landscape.
            </li>
          </ul>
        </div>
      </div>

      {/* large screen view */}
      <div className="hidden lg:block xl:hidden ">
        <div className=" text-[#64ccc5]  text-2xl mt-2 p-2">Who am I?</div>
        <div>
          <ul className=" text-white text-justify text-[13px]">
            <li className="my-1 px-6">
              Hi! I am Ansh, a final-year B.Tech student in Electronics and Communication Engineering
              with a strong inclination toward backend development and scalable systems.
               My journey in tech is driven by curiosity and a passion for 
               building impactful digital solutions, especially within 
               web development and open network ecosystems like ONDC.
            </li>
            <li className="my-2 px-6">
             With hands-on experience in a wide array of technologies—such 
             as JavaScript, Node.js, NestJS, React, Angular, MongoDB, Prisma ORM,
              ElasticSearch, and RESTful APIs—I specialize in developing scalable
               applications, building secure authentication systems, and enhancing 
               backend performance. My skills span from intuitive front-end interfaces 
               to high-performance server-side architecture.
            </li>
            <li className="px-6 mb-2">
              I’m driven by the opportunity to solve real-world problems through technology.
               I enjoy collaborating in fast-paced environments, where I can apply my strengths
                in debugging, performance optimization, and full-stack development. My 
                internships and personal projects have equipped me to take on complex 
                technical challenges while continuously learning and adapting to the 
                evolving tech landscape.
            </li>
          </ul>
        </div>
      </div>

      {/* medium screen view */}
      <div className="hidden md:block lg:hidden xl:hidden ">
        <div className=" text-[#64ccc5] font-semibold  text-4xl mt-4 p-6 ">Who am I?</div>
        <div>
          <ul className=" text-white text-justify text-[17px]">
            <li className="my-2 px-6">
             Hi! I am Ansh, a final-year B.Tech student in Electronics and Communication Engineering
              with a strong inclination toward backend development and scalable systems.
               My journey in tech is driven by curiosity and a passion for 
               building impactful digital solutions, especially within 
               web development and open network ecosystems like ONDC.
            </li>
            <li className="my-2 px-6">
             With hands-on experience in a wide array of technologies—such 
             as JavaScript, Node.js, NestJS, React, Angular, MongoDB, Prisma ORM,
              ElasticSearch, and RESTful APIs—I specialize in developing scalable
               applications, building secure authentication systems, and enhancing 
               backend performance. My skills span from intuitive front-end interfaces 
               to high-performance server-side architecture.
            </li>
            <li className="px-6 mb-3">
              I’m driven by the opportunity to solve real-world problems through technology.
               I enjoy collaborating in fast-paced environments, where I can apply my strengths
                in debugging, performance optimization, and full-stack development. My 
                internships and personal projects have equipped me to take on complex 
                technical challenges while continuously learning and adapting to the 
                evolving tech landscape.
            </li>
          </ul>
        </div>
      </div>

      {/* small screen view */}
      <div className="block md:hidden ">
        <div className=" text-[#64ccc5] font-semibold  text-4xl mt-4 p-6 ">Who am I?</div>
        <div>
          <ul className=" text-white text-justify text-xs">
            <li className="my-2 px-6">
             Hi! I am Ansh, a final-year B.Tech student in Electronics and Communication Engineering
              with a strong inclination toward backend development and scalable systems.
               My journey in tech is driven by curiosity and a passion for 
               building impactful digital solutions, especially within 
               web development and open network ecosystems like ONDC.
            </li>
            <li className="my-2 px-6">
             With hands-on experience in a wide array of technologies—such 
             as JavaScript, Node.js, NestJS, React, Angular, MongoDB, Prisma ORM,
              ElasticSearch, and RESTful APIs—I specialize in developing scalable
               applications, building secure authentication systems, and enhancing 
               backend performance. My skills span from intuitive front-end interfaces 
               to high-performance server-side architecture.
            </li>
            <li className="px-6 mb-3">
               I’m driven by the opportunity to solve real-world problems through technology.
               I enjoy collaborating in fast-paced environments, where I can apply my strengths
                in debugging, performance optimization, and full-stack development. My 
                internships and personal projects have equipped me to take on complex 
                technical challenges while continuously learning and adapting to the 
                evolving tech landscape.
            </li>
          </ul>
        </div>
      </div>
      
    </>
  );
};

export default Myself;
