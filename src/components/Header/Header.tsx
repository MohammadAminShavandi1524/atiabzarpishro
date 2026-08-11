"use client";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <div>
      <div className="w90 flex flex-col">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className=""></div>

          {/* search bar */}
          <div className=""></div>

          {/* theme and language switcher */}
          <div className=""></div>
          
        </div>
        <div className="flex items-center justify-between">

          {/* nav */}
          <div className=""></div>

          {/* faq buttton */}
          <div className=""></div>

        </div>
      </div>
    </div>
  );
};

export default Header;
