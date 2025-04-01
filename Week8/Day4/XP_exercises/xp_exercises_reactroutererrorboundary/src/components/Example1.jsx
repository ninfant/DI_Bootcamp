const socialMedia = ({ socialMediaData }) => {
  return (
    <>
      {socialMediaData.map((link, index) => {
        return (
          <ul key={index}>
            <li>{link}</li>
          </ul>
        );
      })}
    </>
  );
};

export default socialMedia;
