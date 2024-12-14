import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      {/* <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi secClr cursor-pointer hover:firstClr">Blog Page</li>
        <li className="sidenavLi secClr cursor-pointer hover:firstClr">Portfolio Page</li>
      </ul> */}
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi secClr cursor-pointer hover:firstClr">Web Development</li>
        <li className="sidenavLi secClr cursor-pointer hover:firstClr">E-commerce</li>
        <li className="sidenavLi secClr cursor-pointer hover:firstClr">Portfolio Websites</li>
      </ul>
      {/* <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi secClr cursor-pointer hover:firstClr">UI & UX Conference at Lviv 2022</li>
        <li className="sidenavLi secClr cursor-pointer hover:firstClr">How to become a creative designer</li>
        <li className="sidenavLi secClr cursor-pointer hover:firstClr">
          Designers thoughts about mobile UI templates
        </li>
        <li className="sidenavLi secClr cursor-pointer hover:firstClr">Designer Conference at Florida, USA 2020</li>
      </ul> */}
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi secClr cursor-pointer hover:firstClr"> <a href="tel:+91-9834694381"  rel="noreferrer" className="cursor-pointer hover:firstClr">
              +91-9834694381
          </a></li>
        <li className="sidenavLi secClr cursor-pointer hover:firstClr"><a href="mailto:rilesh.1998@gmail.com"  rel="noreferrer" className="cursor-pointer hover:firstClr">
              rilesh.1998@gmail.com
            </a></li>
      </ul>
    </div>
  );
}

export default Sidenav