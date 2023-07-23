import React from 'react';

function About() {
  return (
    <div
      id="About"
      className="w-screen  bg-gradient-to-b from-gray-800 to-black text-white pb-14 pt-20 md:pb-20 
    "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <div className="w-[85%] mx-auto">
          <p className="text-base md:text-lg mt-5 md:mt-10 ">
            <strong> Welcome to my portfolio page!</strong> I am a passionate
            and skilled frontend web developer, committed to creating
            captivating and user-centric digital experiences. With a deep-rooted
            love for design and technology, I specialize in building modern and
            responsive websites using the latest frameworks and technologies.
            <br />
            <br />
            My journey in web development began several years ago, and since
            then, I have immersed myself in the ever-evolving world of frontend
            technologies. Proficient in{' '}
            <span className="font-semibold underline text-lg md:text-xl"> Next.js </span>,{' '}
            <span className="font-semibold underline text-lg md:text-xl">React.js</span>,{' '}
            <span className="font-semibold underline text-lg md:text-xl">Tailwind CSS</span>, etc.
            I take pride in crafting visually stunning and highly interactive
            user interfaces that leave a lasting impression on visitors.
            <br />
            <br />
            But my expertise doesn{"'"}t stop at the frontend. I also possess a
            strong foundation in backend technologies, enabling me to take on
            full-stack web development projects with ease. 
            <span className="font-bold text-lg md:text-xl">&nbsp;I am well-versed in
            integrating headless CMS solutions</span>, ensuring efficient content
            management and seamless user experiences across all devices.
            <br />
            <br />
            Beyond my technical skills, I am deeply committed to adhering to
            industry best practices. From optimizing website performance to
            ensuring accessibility standards, I believe in delivering projects
            that stand the test of time and cater to a diverse audience. When I
            {"'"}m not coding, you can find me exploring new hiking trails,
            indulging in photography, or experimenting with new recipes in the
            kitchen. These passions fuel my creativity and problem-solving
            abilities, enriching my approach to web development.
          </p>
          <p className="text-sm md:text-base">
            <br />
            <br />
            <br />
            <br />
            Whether you{"'"}re a startup looking to establish a strong online
            presence or an established business seeking to revamp your website,
            I am eager to collaborate and bring your vision to life. Browse
            through my portfolio to explore some of my recent projects and get
            in touch to discuss how we can work together to create something
            amazing. Let{"'"}s build exceptional digital experiences that leave
            a lasting impact!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
