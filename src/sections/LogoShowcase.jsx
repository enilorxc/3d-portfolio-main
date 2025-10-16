import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => (
  <div className="flex-none flex-center marquee-item">
    <img src={icon.imgPath} alt={icon.name || "logo"} />
  </div>
);

const LogoShowcase = () => {
  // If no logos, render nothing (no wrappers, no spacing)
  if (!Array.isArray(logoIconsList) || logoIconsList.length === 0) return null;

  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`a-${index}`} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`b-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
