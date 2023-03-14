import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import DetailLayout from "../../../../components/Layouts/Private/CRUD/Detail";
import { data } from "../../../../_constants/fakeData";

export const DetailExample = (props) => {
  const [entry, setEntry] = useState("");
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    setEntry(
      location.state ? location.state : data.find((item) => item.id === id)
    );
  }, [id, location]);

  return <DetailLayout {...props}>{JSON.stringify(entry)}</DetailLayout>;
};

export default DetailExample;
