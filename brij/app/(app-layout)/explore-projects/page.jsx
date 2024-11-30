import ProjectCard from "../../../components/projects/ProjectCard";
import { projects } from "../../../public/assets/assets";

function ExploreProjects() {
  return (
    <div className="h-screen pl-5">
      <h1 className="font-bold mb-6">Explore Projects</h1>
      <div className="grid grid-cols-3 2xl:grid-cols-4 gap-y-5 mb-6">
        {projects.map((item, index) => (
          <ProjectCard
            item={item}
            daysRemaining={20}
            percentageRaised={Math.floor((item.raised / item.goal) * 100)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ExploreProjects;
