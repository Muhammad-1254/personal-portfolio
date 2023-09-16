import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
      style: 'rounded-tr-md',
    },

    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Muhammad-1254',
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: 'https://mailto:usmansoomro124@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: 'https://drive.google.com/file/d/1wtyXlrl1FAtumcrOzO3A_AYTge5OXRxK/view?usp=drive_link',
      style: 'rounded-br-md',
      download: true,
    },
  ];
  return (
    <div className="hidden   lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links?.map(({
            id,child,href,style,download
        })=>(
            <li key={id}
          // eslint-disable-next-line no-useless-concat
          className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500` + ` ` + style}
        >
          <a 
            className="flex justify-between items-center w-full text-white"
            href={href}
            download={download} target='_blank' rel='noreferrer'
          >
            {child}
          </a>
        </li>
        ))}
        
      </ul>
    </div>
  );
}

export default SocialLinks;
