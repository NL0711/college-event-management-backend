import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import PropTypes from "prop-types";

const Hackathons_Cards = ({ title, date, themes, location, link }) => {

  return (
    <div>
      <Card className="relative p-2 flex flex-col items-center min-h-[4em]">
        <CardHeader className="flex items-center gap-2 p-0">
          <CardTitle className="text-center font-bold text-indigo-950 text-base flex-1">{title}</CardTitle>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img className="absolute rounded-t-2xl w-5 right-2 top-2" src="/icons/link.png" alt="Link" />
          </a>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {Array.isArray(themes) && themes.map((theme, index) => (
              <p key={index} className="bg-indigo-200 text-indigo-950 px-2 py-1 my-1 rounded-md">
                {theme}
              </p>
            ))}
          </div>
            <p>Starts {date}</p>
            {location && <p className="font-semibold">{location}</p>}
            <p className="text-indigo-500 cursor-pointer">Bookmarked</p>
        </CardContent>
      </Card>
    </div>
  );
};

Hackathons_Cards.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  themes: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.string,
  link: PropTypes.string.isRequired,
};

Hackathons_Cards.defaultProps = {
  location: "",
};

export default Hackathons_Cards;
