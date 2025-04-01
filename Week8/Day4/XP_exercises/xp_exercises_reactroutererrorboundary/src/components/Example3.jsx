const ExperienceData = ({ experienceData }) => {
  return (
    <>
      {experienceData.map((datos, index) => {
        return (
          <div key={index}>
            <img src={datos.logo} alt="" />
            <h3>{datos.companyName}</h3>
            {datos.roles.map((role, i) => (
              <div key={i}>
                <p>{role.title}</p>
                <p>{role.startDate}</p>
                <p>{role.location}</p>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default ExperienceData;
