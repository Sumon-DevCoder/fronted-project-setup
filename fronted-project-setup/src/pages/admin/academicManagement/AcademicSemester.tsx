import React from "react";
import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);

  console.log("data", data);

  return <div>AcademicSemester</div>;
};

export default AcademicSemester;
