import Image from "next/image";

function InvestModal({ projectItem, setIsModalOpen }) {
  return (
    <div
      className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 w-full z-50"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-[#33353D] w-1/2 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-x-6">
          <Image
            src={projectItem?.image}
            alt="human in VR"
            width={150}
            height={150}
          />
          <div>
            <div className="space-y-2">
              <p className="bg-white text-black p-3 w-fit text-sm tracking-[0.2rem]">
                {projectItem?.category}
              </p>
              <p className="font-extrabold text-xl">{projectItem?.name}</p>
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
                  Created by
                  <span className="text-white font-bold">Rock Lee</span>
                </p>
                <p>9 Campaigns | 0 Loved campaigns</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[80%] flex flex-col mt-3 ">
            <div className="flex justify-between items-center">
              <p>Raised:</p>
              <p>
                {((projectItem.raised / projectItem.goal) * 100).toFixed(1)}
              </p>
            </div>
            <progress
              max="100"
              value={(projectItem.raised / projectItem.goal) * 100}
              className="progress-bar"
            />
          </div>

          <div className="flex justify-between items-center">
            <p>
              Goal: <span className="text-[#29F0B4]">$30,000</span>
            </p>
            <p>
              <span>Pledged</span>
              <span>$4,000</span>
            </p>
          </div>

          <div className="flex items-center gap-x-8">
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
                  Invest
                </button>
              </div>
            </div>

            <p>
              217 <span>Days Left</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestModal;
