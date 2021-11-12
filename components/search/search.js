import React, { useState } from "react";
{
  SidebarData.map((item, index) => {
    return (
      <li key={index} className={item.cName}>
        <Link href={item.path}>
          <a>
            {item.icon}
            <span>{item.title}</span>
          </a>
        </Link>
      </li>
    );
  });
}