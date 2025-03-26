import "./Exercise.css";
const Exercise = (exercise3) => {
  const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <>
      <h1 style={style_header} color="red" background-color="lightblue">
        This is a Header
      </h1>
      <p className="para">This is a paragraph</p>
      <a href="">this is a link</a>
      <form action="">
        <label htmlFor="">This is a form</label>
        <br />
        <label htmlFor="">Enter your name</label>
        <input type="text" />
      </form>
      <label htmlFor="">Here is an image</label>
      <img
        src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png"
        alt=""
      />
      <label htmlFor="">this is a list</label>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </>
  );
};

export default Exercise;
