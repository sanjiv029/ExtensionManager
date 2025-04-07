interface LogoProps{
    logo:string;
}

function Logo({logo}: LogoProps) {
  return (
     <img src={logo} alt="Logo" className="w-14 h-14 mr-2 p-0" />
  )
}

export default Logo