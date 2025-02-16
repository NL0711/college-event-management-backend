const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center text-xl py-6">
      <div className="">
        <p className="text-3xl font-semibold">Fr. Conceicao Rodrigues College of Engineering</p>
        <p className="text-base mt-1">Bandra (West), Mumbai - 400050</p>
        <p className="text-base">Phone: (91-22) 6711 4000 | Email: <a href="mailto:frcrce@frcrce.ac.in" className="text-blue-300">frcrce@frcrce.ac.in</a></p>
        
        <div className="flex justify-center space-x-4 mt-3">
          <a href="https://www.facebook.com/frcrce">
            <img className="w-8" src="/icons/facebook.png"/>
          </a>
          <a href="https://twitter.com/frcrce">
            <img className="w-8" src="/icons/instagram.png"/>
          </a>
          <a href="https://www.linkedin.com/school/frcrce">
            <img className="w-8" src="/icons/linkedin.png"/>
          </a>  
        </div>

        <p className="text-xs mt-4 opacity-80">© {new Date().getFullYear()} CRCE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
