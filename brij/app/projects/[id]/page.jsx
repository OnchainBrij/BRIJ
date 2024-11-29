import Image from "next/image";
import { IoIosCheckmark } from "../../../utils/icons";
import styles from "./projectDetails.module.css";
import JoinUs from "../../../components/JoinUs";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { projects } from "../../../public/assets/assets";

async function ProjectDetails({ params }) {
  const id = (await params).id;
  const matchedProject = projects.find((item) => item._id === id);
  // console.log(matchedProject);

  return (
    <div className={`bg-[#1b1f2e] h-fit w-full ${styles.projectDetails}`}>
      <Navbar />
      <div className="pl-10 pt-24 pb-5 max-md:pl-3">
        <div className="flex items-center space-x-7 max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:space-x-0">
          <p className="text-gray-500">Home</p>
          <div className="flex items-center space-x-2 font-bold">
            <span className="w-[0.3rem] h-[0.3rem] bg-white rounded-full animate-pulse"></span>
            <p>{matchedProject.name}</p>
          </div>
        </div>
        <div className="flex mt-6 space-x-10 2xl:space-x-0 max-md:flex-col-reverse max-md:space-x-0">
          <div className="w-1/2 max-md:w-full">
            <div className="max-md:mt-4">
              <div className="flex flex-col space-y-3">
                <div className="w-full max-w-[600px]">
                  {/* "https://res.cloudinary.com/dwedz2laa/image/upload/v1732537535/Vr-glasses_k7zabc.png" */}
                  <Image
                    src={matchedProject.backgroundImage}
                    alt="human in VR"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="flex space-x-1 w-full max-w-[600px] max-sm:flex-wrap max-sm:space-x-0 max-sm:gap-2">
                  <Image
                    src="https://imagizer.imageshack.com/v2/321x319q90/922/LybLCu.png"
                    alt="human in VR"
                    width={150}
                    height={150}
                    className="border border-purple-400"
                  />
                  <Image
                    src="https://res.cloudinary.com/dwedz2laa/image/upload/v1732486227/camera_stjpop.png"
                    alt="camera"
                    width={150}
                    height={150}
                  />
                  <Image
                    src="https://imagizer.imageshack.com/v2/371x318q90/922/k4DPIX.png"
                    alt="Desk with notes"
                    width={150}
                    height={150}
                    className="opacity-50"
                  />
                  <Image
                    src="https://imagizer.imageshack.com/v2/371x319q90/924/kMCUtv.png"
                    alt="Human Body"
                    width={150}
                    height={150}
                    className="opacity-50"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-7 mt-7">
              <div className="flex items-center space-x-3 [&_p]:cursor-pointer [&_p]:p-5 [&_p]:text-center ">
                <p className={`${styles.active} w-[8.5rem] max-sm:w-[6rem] `}>
                  Story
                </p>
                <p className="bg-[#323543] w-[8.5rem] max-sm:w-[6rem]">
                  Updates
                </p>
                <p className="bg-[#323543] w-[8.5rem] max-sm:w-[8.5rem]">
                  Reviews (0)
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="space-y-3">
                  <h2 className="font-bold text-2xl">Story</h2>
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla impedit doloremque, excepturi quaerat esse
                    voluptatibus est aspernatur facere vel consequatur.
                    Temporibus voluptates error non. Maxime alias recusandae
                    voluptates qui explicabo.
                  </p>
                </div>
                <div className="space-y-4 [&_p]:space-x-3 [&_span]:text-gray-500">
                  <p className="flex items-start space-x-3">
                    <IoIosCheckmark
                      className="bg-[#29F0B4] text-black rounded-full flex-shrink-0 self-auto"
                      size={20}
                    />
                    <span>Lorem ipsum dolor sit, amet consectetur.</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <IoIosCheckmark
                      className="bg-[#29F0B4] text-black rounded-full flex-shrink-0 self-auto"
                      size={20}
                    />
                    <span>est aspernatur facere vel consequatur.</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <IoIosCheckmark
                      className="bg-[#29F0B4] text-black rounded-full flex-shrink-0 self-auto"
                      size={20}
                    />
                    <span>
                      Maxime alias recusandae voluptates qui explicabo.
                    </span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <IoIosCheckmark
                      className="bg-[#29F0B4] text-black rounded-full flex-shrink-0 self-auto"
                      size={20}
                    />
                    <span>
                      Sequi odio eos ratione tempore tempora veritatis
                      praesentium.
                    </span>
                  </p>
                </div>
                <div>
                  <Image
                    src={matchedProject.image}
                    alt="Man In Vr"
                    width={500}
                    height={500}
                  />
                  <p className="text-gray-500 mt-3">
                    Integer feugiat est in tincidunt congue. Nam eget accumsan
                    ligula. Nunc auctor ligula a quam fermentum, non iaculis
                    diam suscipit. Aliquam lacinia lorem vel suscipit pulvinar.
                    Etiam condimentum nunc non ultricies hendrerit. Sed nec
                    blandit libero, ut gravida quam. Nam tortor est, faucibus at
                    dolor id, blandit venenatis leo. Praesent euismod tempus
                    libero et accumsan. Nunc ultrices sit amet urna sed euismod.
                    Pellentesque finibus ipsum non mi sodales, vel ullamcorper
                    ipsum pharetra. Praesent nec pharetra neque.
                  </p>
                  <div className="flex space-x-3 mt-3">
                    <Image
                      src="https://res.cloudinary.com/dwedz2laa/image/upload/v1732538869/Yen_ibv4vx.png"
                      alt="Yen"
                      width={200}
                      height={200}
                      className="max-sm:w-[150px] max-sm:h-[150px]"
                    />
                    <Image
                      src="https://res.cloudinary.com/dwedz2laa/image/upload/v1732538869/heart_ujtrqh.png"
                      alt="Mechanical Heart"
                      width={200}
                      height={200}
                      className="max-sm:w-[150px] max-sm:h-[150px]"
                    />
                  </div>
                  <p className="text-gray-500 mt-3">
                    Nulla in ex at mi viverra sagittis ut non erat raesent nec
                    congue elit. Nunc arcu odio, convallis a lacinia ut,
                    tristique id eros. Suspendisse leo erat, pellentesque et
                    commodo vel, varius in felis. Nulla mollis turpis porta
                    justo eleifend volutpat. Cras malesuada nec magna eu
                    blandit. Nam sed efficitur ante. Quisque lobortis sodales
                    risus, eu dapibus dolor porta vitae. Vestibulum eu ex
                    auctor, scelerisque velit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 space-y-3 max-md:w-full">
            <div className="space-y-2">
              <p className="bg-white text-black p-3 w-fit text-sm tracking-[0.2rem]">
                {matchedProject.category}
              </p>
              <p className="font-extrabold text-xl">{matchedProject.name}</p>
            </div>
            <div className="w-full">
              <div className="flex space-x-3 max-md:flex-wrap max-md:justify-start max-md:items-center max-md:space-y-2 max-md:space-x-0 max-md:gap-x-3">
                <p className="bg-[#323543] p-10 w-fit flex flex-col items-center space-y-3">
                  <span className="text-xl">${matchedProject.raised}</span>
                  <span className="text-gray-500">Pledged</span>
                </p>
                <p className="bg-[#323543] p-10 w-fit flex flex-col items-center space-y-3">
                  <span className="text-xl">1</span>
                  <span className="text-gray-500">Backers</span>
                </p>
                <p className="bg-[#323543] p-10 w-fit flex flex-col items-center space-y-3">
                  <span className="text-xl">217</span>
                  <span className="text-gray-500">Days Left</span>
                </p>
              </div>
              <div className="lg:w-[80%] flex flex-col mt-3 2xl:w-1/2 max-sm:w-full md:w-[60%]">
                <div className="flex justify-between items-center">
                  <p>Raised:</p>
                  <p>
                    {(
                      (matchedProject.raised / matchedProject.goal) *
                      100
                    ).toFixed(1)}
                    %
                  </p>
                </div>
                <progress
                  max="100"
                  value={(matchedProject.raised / matchedProject.goal) * 100}
                  className={styles.progressBar}
                />
              </div>
              <div className="mt-3">
                <p>
                  Goal:{" "}
                  <span className="text-[#29F0B4]">${matchedProject.goal}</span>
                </p>
                <div className="flex space-x-2 [&_p]:bg-white [&_p]:text-black [&_p]:p-3 [&_p]:text-sm mt-3">
                  <p>$10</p>
                  <p>$30</p>
                  <p>$50</p>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  <p>$</p>
                  <div className="flex">
                    <input
                      type="text"
                      name="amount"
                      className="w-[4rem] outline-none bg-[#323543] pl-2"
                    />
                    <button className="bg-gradient-to-r from-[#36bb91] to-[#4b47ff] p-3">
                      BACK CAMPAIGN
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              <Image
                src="/assets/profile-img.png"
                alt="A small profile picture"
                width={50}
                height={50}
              />
              <div className="[&_p]:text-gray-500 [&_p]:text-sm">
                <p>
                  Created by{" "}
                  <span className="text-white font-bold">Rock Lee</span>
                </p>
                <p>9 Campaigns | 0 Loved campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinUs />
      <Footer />
    </div>
  );
}

export default ProjectDetails;
