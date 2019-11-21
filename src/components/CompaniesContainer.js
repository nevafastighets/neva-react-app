import React from "react";
import CompaniesList from "./CompaniesList";
import { withCompanyConsumer } from "../CompanyContext";
import Loading from "./Loading";

function CompaniesContainer({ context }) {
  const { loading, companies } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <CompaniesList companies={companies} />
    </React.Fragment>
  );
}

export default withCompanyConsumer(CompaniesContainer);
