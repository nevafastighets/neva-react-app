import React from "react";
import Company from "./Company";

const CompaniesList = ({ companies }) => {
  return (
    <div className="d-flex flex-wrap grid-listing justify-content-center bd-highlight">
      {companies.map(item => {
        return <Company key={item.id} company={item} />;
      })}
    </div>
  );
};

export default CompaniesList;
