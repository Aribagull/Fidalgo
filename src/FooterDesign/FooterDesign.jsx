const FooterDesign = ({ details, phonenum, email, index }) => {
  return (
    <>
      <div
        className={`text-white mb-32 ml-10 mt-20 ${
          index === 1
            ? "border-x border-white border-opacity-30 px-20 py-7"
            : ""
        }`}
      >
        <div className="block text-center uppercase tracking-widest mb-3">
          {details}
        </div>

        <div className="block text-center font-light opacity-[70%] ">
          {phonenum}
        </div>

        <div className="block text-center  font-light opacity-[70%] ">
          {email}
        </div>
      </div>
    </>
  );
};

export default FooterDesign;
