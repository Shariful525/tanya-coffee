import { projectsData } from "@/constants/projectsData";
import React from "react";
import ProjectDetailsCard from "../cards/ProjectDetailsCard";

const OurWork = () => {
  return (
    <div className="max-w-[470px] mx-auto space-y-5">
      {projectsData?.map((project, index) => (
        <ProjectDetailsCard data={project} key={index} />
      ))}
    </div>
  );
};

export default OurWork;
