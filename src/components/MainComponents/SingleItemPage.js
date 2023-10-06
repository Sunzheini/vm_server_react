import React from "react";
import { useContext} from "react";
import { useParams, useNavigate } from "react-router-dom";
import {SampleContext} from "../../contexts/SampleContext";


export default function SingleItemPage() {
  // Use useParams to get the itemName from the route
  const { itemName } = useParams();

  // Use useNavigate to get the navigate function from the router
  const navigate = useNavigate();

  // Use useContext to get the sample value from the SampleContext
  const sample  = useContext(SampleContext);

  return (
    <div className="all-sections-container">
      <h1>{itemName}, {sample}</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
