import React from "react";
import { pageLinks } from "../data";
import Pagelink from "./Pagelink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <div>
      <ul className={parentClass} id="nav-links">
        {pageLinks.map((link) => {
          return <Pagelink key={link.id} link={link} itemClass={itemClass} />;
        })}
      </ul>
    </div>
  );
};

export default PageLinks;
