import React from "react";

const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <div>
      <li>
        <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
          <i className={icon}></i>
        </a>
      </li>
    </div>
  );
};

export default SocialLink;
