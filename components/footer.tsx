const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer footer-center block mb-5 pt-10">
      <div className="pb-2 flex flex-row justify-center">
        <img
          className="w-[50px] h-[30px]"
          src="/assets/il.svg"
          alt="profile image"
        />
        &copy; {today.getFullYear()} Scott Weaver
        <img
          className="w-[50px] h-[30px]"
          src="/assets/ll.svg"
          alt="profile image"
        />
      </div>
    </footer>
  );
};

export default Footer;
