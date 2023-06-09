import "./SideBar.css";
import React, { useState } from "react";
import { Data } from "../../assets/Data/sidebarData";
import Logo from "../../assets/img/logo.svg";

const SideButton = ({
  idx,
  item,
  btnActive,
  toggleActive,
  setlistBtnActive,
  setMoreButton,
}) => {
  return (
    <div className="sidebtn-container" key={idx}>
      <button
        value={idx}
        className={"btn" + (idx === btnActive ? " active" : "")}
        onClick={(e) => {
          toggleActive(e);
          setlistBtnActive("");
          setMoreButton(false);
        }}
      >
        <item.icon
          className={"icon" + (idx === btnActive ? " icon-active" : "")}
        />
        {item.heading}
      </button>
    </div>
  );
};

const SideMenuButton = ({
  idx,
  item,
  btnActive,
  toggleActive,
  toggleList,
  listBtnActive,
  moreActive,
  moreButton,
}) => {
  // const moreActive = (e) => {
  //   setMoreButton((prev) => !prev);
  // };

  // const [moreButton, setMoreButton] = useState(false);

  return (
    <div className="sidebtn-container" key={idx}>
      <button
        value={idx}
        className={"btn" + (idx === btnActive ? " active" : "")}
        onClick={(e) => {
          toggleActive(e);
          moreActive();
        }}
      >
        <item.icon
          className={"icon" + (idx === btnActive ? " icon-active" : "")}
        />
        {item.heading}
        <item.icon2 className="icon" />
      </button>
      <div className={"menu" + (moreButton ? " more-menu" : " hidden-menu")}>
        {item.menu.map((itm, idx) => {
          return (
            <div key={idx}>
              <button
                onClick={toggleList}
                value={idx}
                className={
                  "btn morebtn" +
                  (2 === btnActive && idx === listBtnActive
                    ? " moreactive"
                    : "")
                }
              >
                {itm}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [btnActive, setBtnActive] = useState(0);
  const [listBtnActive, setlistBtnActive] = useState();
  const moreActive = (e) => {
    setMoreButton((prev) => !prev);
  };

  const [moreButton, setMoreButton] = useState(false);

  const toggleList = (e) => {
    setlistBtnActive((prev) => {
      return parseInt(e.target.value);
    });
  };

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return parseInt(e.target.value);
    });
  };

  return (
    <div className="sidebar">
      <div id="logoImg">
        <img src={Logo} alt="" />
      </div>
      <div className="menu">
        {Data.map((item, idx) => {
          if (item.icon2) {
            return (
              <SideMenuButton
                key={idx}
                item={item}
                idx={idx}
                btnActive={btnActive}
                toggleActive={toggleActive}
                toggleList={toggleList}
                listBtnActive={listBtnActive}
                moreActive={moreActive}
                moreButton={moreButton}
              />
            );
          } else {
            return (
              <SideButton
                item={item}
                key={idx}
                idx={idx}
                btnActive={btnActive}
                toggleActive={toggleActive}
                setlistBtnActive={setlistBtnActive}
                setMoreButton={setMoreButton}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sidebar;
