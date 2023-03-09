import React from "react";

function Pagelink({ link, itemClass }) {
  return (
    <div>
      <li kye={link.id}>
        <a href={link.href} className={itemClass}>
          {link.text}
        </a>
      </li>
    </div>
  );
}

export default Pagelink;
