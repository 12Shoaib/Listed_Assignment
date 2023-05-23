import { BiBell, BiSearch } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { useRecoilState } from "recoil";
import { hamburgerMenu } from "../../Recoil/RecoilAtom";
import { IoClose } from "react-icons/io5";
import dashboardheader from "./dashboardheader.module.css";

const DashboardHeader = () => {
  const [show, setShow] = useRecoilState(hamburgerMenu);
  const handleHamburgerMenuClick = () => {
    setShow(!show);
  };
  return (
    <div className={dashboardheader.container}>
      <div className={dashboardheader.header}>
        {!show ? (
          <GoThreeBars
            onClick={handleHamburgerMenuClick}
            className={dashboardheader.bar_icon}
          />
        ) : (
          <IoClose
            onClick={handleHamburgerMenuClick}
            className={dashboardheader.bar_icon}
          />
        )}
        <h3 className={dashboardheader.heading}>Dashboard</h3>
      </div>
      <div className={dashboardheader.wrapper}>
        <div className={dashboardheader.input_box_wrapper}>
          <input
            type="text"
            placeholder="Search..."
            className={dashboardheader.input_box}
          />
          <BiSearch className={dashboardheader.logo} />
        </div>
        <BiBell />
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
          className={dashboardheader.image}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
