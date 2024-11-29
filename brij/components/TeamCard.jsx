import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

export const teamData = [
  {
    name: "Chidile Ozoemena",
    role: "Team Lead",
    image:
      "https://res.cloudinary.com/dwedz2laa/image/upload/v1732272715/chidile_sumv3b.jpg",
    alt: "Team Lead",
  },
  {
    name: "Uzoma Favour",
    role: "Community Manager",
    image:
      "https://res.cloudinary.com/dwedz2laa/image/upload/v1732272714/cop_yoz7nh.jpg",
    alt: "Community Manager",
  },
  {
    name: "Ogaziechi Jonathan",
    role: "Project Manager",
    image:
      "https://res.cloudinary.com/dwedz2laa/image/upload/v1732272714/dr_jo_sso3kd.jpg",
    alt: "Project Manager",
  },
  {
    name: "Kosisochukwu Moronu",
    role: "Research Analyst",
    image:
      "https://res.cloudinary.com/dwedz2laa/image/upload/v1732272714/kosi_wm6caz.jpg",
    alt: "Research Analyst",
  },
  {
    name: "Egbo Chikosolu",
    role: "Social Media Manager",
    image:
      "https://res.cloudinary.com/dwedz2laa/image/upload/v1732272716/chikosolu_is0fl4.jpg",
    alt: "Social Media Manager",
  },
  {
    name: "Madukairo Emenike",
    role: "Marketing Lead",
    image:
      "https://res.cloudinary.com/dwedz2laa/image/upload/v1732312954/Emenike_rovz07.jpg",
    alt: "Marketing Lead",
  },
  {
    name: "Nwachukwu Daniel",
    role: "Smart Contract Developer",
    image:
      "https://res.cloudinary.com/dwedz2laa/image/upload/v1732272714/danny_xgxzly.jpg",
    alt: "Smart Contract Developer",
  },
  {
    name: "Charles Lemuel",
    role: "UI/UX Designer",
    image:
      "https://res.cloudinary.com/dwedz2laa/image/upload/v1732401116/suiden_lryl7x.jpg",
    alt: "UIUX Designer",
  },
  {
    name: "Okeke Chinedu",
    role: "Frontend Developer",
    image:
      "https://res.cloudinary.com/dwedz2laa/image/upload/v1732272715/nedu_ytf6zp.jpg",
    alt: "Frontend Developer",
  },
  {
    name: "Nebolisa Ugochukwu",
    role: "Frontend Developer",
    image:
      "https://res.cloudinary.com/dwedz2laa/image/upload/v1732272715/nebolisa_slicpt.jpg",
    alt: "Frontend Developer",
  },
  {
    name: "Onwuajuese Somtocukwu",
    role: "Backend Developer",
    image:
      "https://res.cloudinary.com/dwedz2laa/image/upload/v1732401032/Somto_ldsovv.jpg",
    alt: "Backend Developer",
  },
];

function TeamCard({ className }) {
  return (
    <div
      className={`team-card min-h-screen flex flex-col w-full overflow-hidden pr-[5rem] pl-[5rem] max-xl:pt-[2rem] pb-[2rem] mt-[100px] relative ${className}`}
    >
      <h2 className="text-[2.1rem] font-bold mt-12 mb-5 2xl:mb-3 text-white">
        Our Team
      </h2>
      <div className="flex-1">
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {teamData.map((team, index) => (
            <div
              key={team.name}
              className={`team-card-box  relative  flex justify-center z-10 items-center aspect-square overflow-hidden cursor-pointer transition-all teamcard ${
                index === 7 ? "aspect-square" : ""
              }`}
            >
              <Image
                src={team.image}
                alt={team.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute text-[1.2rem] bottom-0 h-0 w-full flex flex-col items-center justify-center transition-all bg-black bg-opacity-50 overflow-hidden teamcard-overlay">
                <p className="text-white text-center font-bold">{team.name}</p>
                <p className="text-gray-300 text-center text-sm">{team.role}</p>
                <span className="w-full flex flex-row gap-5 text-white justify-center px-3 py-3 text-[1.5rem]">
                  <a href="#" className="hover:text-[#24c2a5] transition-all">
                    <FaGithub />
                  </a>
                  <a href="#" className="hover:text-[#24c2a5] transition-all">
                    <FaXTwitter />
                  </a>
                  <a href="#" className="hover:text-[#24c2a5] transition-all">
                    <FaLinkedin />
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="blur"></div>
    </div>
  );
}

export default TeamCard;
