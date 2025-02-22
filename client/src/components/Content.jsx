import PropTypes from 'prop-types';

// ✅ เพิ่ม PropTypes เพื่อตรวจสอบค่าที่ถูกส่งเข้ามา
ContentBox.propTypes = {
  Detailsimage: PropTypes.string.isRequired,   // ต้องเป็น string และจำเป็นต้องมีค่า
  Detailscategory: PropTypes.string,
  Detailstitle: PropTypes.string.isRequired,
  DetailsDescription: PropTypes.string,
  Detailsauthor: PropTypes.string,
  Detailsdate: PropTypes.string,
  viewPostPage: PropTypes.func.isRequired, // ต้องเป็น function และจำเป็นต้องมีค่า
  DetailsId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // อาจเป็น string หรือ number
};

export function ContentBox({ 
    Detailsimage,
    Detailscategory,
    Detailstitle,
    DetailsDescription,
    Detailsauthor,
    Detailsdate,
    viewPostPage,
    DetailsId
  })
   {
    return (
      <>
          <div className="sm:w-3/4 lg:w-full mx-auto">
            <div className="container flex flex-col items-center  px-4 py-4 ">
              <img
                src={Detailsimage}
                alt=""
                className="w-full h-[212px] object-cover rounded-lg shadow-lg mx-4 mb-8 lg:h-[360px] "
              />
              <div>
                <div className="w-14 h-8 px-3 py-1 rounded-full bg-[#D7F2E9]">
                  <p className="text-[#12B279] font-medium">{Detailscategory}</p>
                </div>
                <a href="" className="text-xl font-semibold" onClick={() => viewPostPage(DetailsId)}>
                  {Detailstitle} 
                </a>
                <p className="text-gray-500 my-2">{DetailsDescription}</p>
                <div className="flex items-center justify-between w-[285px]">
                  <div className="flex">
                    <img
                      src="https://st2.depositphotos.com/3904951/8925/v/380/depositphotos_89250312-stock-illustration-photo-picture-web-icon-in.jpg"
                      alt=""
                      className="w-6 h-6 rounded-full"
                    />
                    <p>{Detailsauthor}</p>
                  </div>
                  <p>{Detailsdate}</p>
                </div>
              </div>
            </div>
          </div>
      </>
    );
}



export default ContentBox;
