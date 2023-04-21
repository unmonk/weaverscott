const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer footer-center block mb-5 pt-10">
      <div className="pb-2">&copy; {today.getFullYear()} Scott Weaver</div>
    </footer>
  );
};

export default Footer;
