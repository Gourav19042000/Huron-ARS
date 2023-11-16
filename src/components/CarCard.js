import React from "react";
import { useSelector } from "react-redux";

//<img src={CarData.car_data.image_urls[1]} alt="car Img"/>
const CarCard = ({name,image_urls,rating_v3,brand,accessories,pricing}) => {
  //const {name,image_urls,rating_v3,brand,accessories,pricing} = automobile
  const quantity = useSelector(store => store.cart.items)
  return (
    <>
      <div className=" p-[20px]  rounded-xl ">
        <div className="shadow-xl border-solid border-2 h-[430px] border-black rounded-xl w-[300px] p-2">
          <div>
            <img
              className="rounded-xl w-[100%] h-[190px]"
              src={image_urls[0]}
              alt="img"
            />
            <h2 className="flex font-bold">
              <img
                className="w-[25px] h-[25px]"
                alt="img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAllBMVEX////+zgD/vg7///3+zAD/vQD/uwD7ywD/31f+wAz+xwf8uQD///r7uwD999r9yQD+/fD63HP/3Ef+3U77zhv90yT54YP9+N/9+Ob86J/400n80z791zb6x0r622r44KL668H603L888v72l/433v744v77br6zzH51oD5xTj80GT789H5ylL50Wr32Ij33Zb76q/5wSn97vaZAAAEPUlEQVR4nO2Z63aiMBSFE5MQFVBEELU6olaqxXH0/V9ucgEKXpBSIrNmZa+lf2rN5z6XnAQAtLS0tLS0tLS0tLS0tFoQahvgHyAAYLNpmyCmNG5xeR6ELcRbgNoLBwIDCuFw0GJGIDDCGMJRawCJCRC2mg0jzBFwizZwE/w2beCZAD1P2tBGQiKRCXgBRTa0UhRsyRGEnkRopygQCFgmuFQi0KANBvCOoe9iiYAnbRAM2MquDxOxbHi9uAnjlADi9xcvz3IxYNXopnFg8oLXFgWSPaGbxeH1vSEph684tFEUE5YJ3UUe4dVFMeUmdGFBdPpSBGGCW0SAL7VBlEM+GdOiAKpnaj4jIv4mTBjTKwS8E3/mn1DFkX3vxoPYvYlDbm5Q54QVbKLdrzkdskmlexMHzkDno10UB1ZDC37ZiZxpHM1G8w8PUiwaIh13x7cEIhrsA97HfDSL4qmToqD6Yz6ynCCaTbZvPsU43RTZy3e73QW+z5CSUOq9bferMHAslP8939KZrU3pEHNB7Pm+v1i4rjsed5nGXhlBor5hmKZ9+NxH9Qhiyn+n5/GFx3LdnBZP12eHnI4QIYZRb8B15tJqVnvU4/KFD9wI161CAHudRGTp1LNhOs+HuxD60jzIwpASGMvavduZV1npkXAvI3DqnnxRFotaSgnIsWYUZB0529oMaRiMz9oeACQZhvUIcErAPKh/AYH4v1o1feilHvx0z+IMv+owJGEwfls/vYPhzd2pwZAR1M+Dog+j7+ZDUo/Cg58CSAbwXYaEYA2aGR14OqHJ9YRUKhkGY4+auovj+WBNvpEPfWGCeUJ1t+h7EOw1qRwL6YF5anR+E1+1qxgLSWCfgIIRclcpFsMvgmYlfagQi2GWB2rm6NlTH6QH5I+yOd56Ni8mk1rH+snMXCrnSUb2k73JdpS5MCgPRDaoEXUXT+dShIygR87KEMrKMpsUeWtuviRTlezaeYIO+VRFgO4cZBMN8wQdclF1tH5cEP1OUbwklGjzoDsWLeD5aMaKHpk9KIgbApaPkYr1gbjeeZKH+ZJo3gXWcbf3suAeASsJFWFgk/TbHQvuEnTIQUU+yjvfIgAvBELuMfTUXINurhB4DIi5PJp3IEw1z+wK0wIWAMYytFC4NG4gzJUShPccwFAAHM7iqGKdD9cQxl5FRYCv+w4JYK94zonZxFn1ihDk2DwCK4iPQgguq8L9prW65CHIpfmSQOLqWwL0OsblVByMuBOnS94IFQ9IIpr2YsPeB1c3quLYFOx7RmZDqABh1pedkJhrWfSFjQjJZ2ZrO4EwVJTEWthM7PXjwZBBDBIIcapuWgfCAY4xeLwDiScR8Scx2Ph4aJ4A2SwExxCBkhN78iwkXLKGaTffFyzbPIRVPxwdTFPBRhWHVsUhgDfMUMEmIRavOI2h7E1LS0tLS0tLS0tLS0vrP9Zfk6060VrHEmQAAAAASUVORK5CYII="
              />
              {rating_v3.rating}
            </h2>
            <div className="flex space-x-1">
              <h1 className="font-extrabold">{brand}</h1>
              <h1 className="font-bold space-x-2">{name}</h1>
            </div>
            <h4 className="text-gray-400">{accessories.join("  |  ")}</h4>
            <h1 className="text-2xl font-extrabold">
              {pricing.payable_amount}
            </h1>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
          <div className="justify-center">
            {quantity === 0 ? (
              <button
                type="button"
                className="text-white w-[100%] mt-7 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 me-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                + Add to Book
              </button>
            ) : (
              <div className="flex flex-wrap justify-center ">
                <div className="flex justify-center m-1">
                  <button
                    type="button"
                    className="text-white    bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    -
                  </button>
                  <div className="mt-2">
                    <span className="font-bold ">{quantity + " "}</span>to Book
                  </div>{" "}
                  <button
                    type="button"
                    className="text-white ml-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="text-white   bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
