import React from "react";
import { useEffect } from "react";
import { fetchDemand } from "./services/Demand/demand";
import { fetchProduction } from "./services/Production/production";
import DataTable from "./components/Table/DataTable";

function App() {
  useEffect(()=>{
    fetchDemand();
    fetchProduction();
  }) 
  
  return (
    <DataTable />
  );
}

export default App;
