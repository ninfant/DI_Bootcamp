const skillsData = ({ skillsData }) => {
  return (
    <>
      {skillsData.map((area, index) => {
        return (
          <div key={index}>
            <h3>{area.Area}</h3>

            {area.SkillSet.map((skill, i) => (
              <li key={i}>{skill.Name}</li>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default skillsData;
