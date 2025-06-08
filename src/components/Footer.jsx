import { Facebook ,  Instagram,  Twitter,Youtube} from 'lucide-react'

const Footer = () => {
    const socialMedia = [
  { name: "Facebook",  icon: <Facebook size={20} /> },
  { name: "Twitter",  icon: <Twitter size={20} /> },
  { name: "Instagram",  icon: <Instagram size={20} /> },
  { name: "LinkedIn",  icon: <Youtube size={20} /> }
];

  return (
    <footer className=" pt-8 pb-4 text-xs md:text-sm">
      <div className=" mx-auto  ">
        <div className="grid grid-cols-1 items-end  px-5 md:grid-cols-3 gap-4 ">
      
          {/* Logo & Description */}
        <div className="text-start" >
            <span className="text-glow   text-primary">lana/teck</span>
             <p className="mt-2">Escape the ordinary. Discover nature, peace, and adventure with us.
             Follow us on</p>
        </div>
          {/* Links Section 1 */}
          <ul className='text-start text-base'>
            <li >📍 Mountain View Campgrounds, CA</li>
            <li className='animate-bounce  mt-2'>📞 <a className='text-primary' href="/">(123) 456-7890</a> | <a href="/">✉️ info@campwander.com</a></li>
        </ul>

          {/* Newsletter / Social */}
    <div className='flex flex-col items-start gap-2.5'>
    <div className="flex gap-4">
      {socialMedia.map((platform, index) => (
        <a
          key={index}
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition transition-all duration-200 
           hover:-translate-y-1 active:scale-95"
        >
          {platform.icon}
        </a>
      ))}
    </div>
    <p>Follow us and share your experience — don’t forget to tag!</p>
    </div>
        </div>

        {/* Bottom Section */}
        <div className=" border-t mt-2  px-5  border-gray-700 pt-4 text-sm text-gray-500 text-start">
          <p className="text-primary">Lana Lezhava | © 2025 All rights reserved.</p>
        </div>
        </div>
      
    </footer> 
  );
};

export default Footer;
