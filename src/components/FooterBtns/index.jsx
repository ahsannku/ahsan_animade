const FooterBtns = ({ children, className }) => {
  return (
    <footer className={`bg-dark-blue-1 flex-1  fixed bottom-0 flex justify-between py-3 md:px-10 gap-2 text-center w-[90%] ${className}`}>
      {children}
    </footer>
  );
};

export default FooterBtns;
