import React from "react";

export default function Post({title,content}) {
  return (
    <div className="row mt-2">
      <div className="card">
        <ul className="list-group list-group-flush text-center">
          <li className="list-group-item ">{title}</li>
          <li className="list-group-item">{content}</li>
        </ul>
      </div>
    </div>
  );
}
