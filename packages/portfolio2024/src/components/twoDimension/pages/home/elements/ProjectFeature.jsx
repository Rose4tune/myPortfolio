const ProjectFeature = (features) => {
  return features.map(({ title, des }, i) => {
    return (
      <div key={`pjFeature${i}`}>
        <strong className="project-detail-des-title">{title}</strong>
        <p>{des}</p>
      </div>
    );
  });
};

export default ProjectFeature;
