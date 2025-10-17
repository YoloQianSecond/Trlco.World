import React from "react";
function GlobalNetwork() {
  return (
    <>
      <div className="xl:px-0 px-4">
        <div className="max-w-[1205px] mx-auto bg-cover bg-no-repeat bg-center md:bg-[url('./assets/images/global-network-bg.png')]  bg-[url('./assets/images/mobile-global-network-bg.png')] md:rounded-[40px] rounded-3xl md:min-h-[424px] min-h-[520px] flex items-center justify-center p-6">
          <div className="max-w-[798px] mx-auto w-full text-center">
            <h2 className="text-white text-[28px] md:text-[48px] md:leading-[52px] leading-[36px] text-center outfit-bold block mb-6">
              Global network of diverse properties
            </h2>
            <span className="text-base font-normal text-[#F6F6F2] text-center">
              Choose from an extensive selection of homes worldwide, from urban
              apartments to suburban houses. Immerse yourself in different
              cultures and lifestyles without the commitment of traditional
              property ownership.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalNetwork;
