import Button from "./Button/Button";

import logo from "../../logo.svg";

import image from "../../assets/image.png";

export default function SideMenu() {
  const infoBtns = [
    { title: "Button 1", c: <img src={logo} alt="icon" /> },
    {
      title: "Button 2",
      c: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          dolores?
        </p>
      ),
    },
    { title: "Button 3", c: <img src={image} alt="testImage" /> },
  ];

  return (
    <>
      <div
        style={{
          border: "solid 5px #009688",
          padding: "5px 20px",
          width: "300px",
          textAlign: "center",
        }}
      >
        {infoBtns.map((infobnt) => {
          return (
            <Button key={infobnt.title} title={infobnt.title}>
              {infobnt.c}
            </Button>
          );
        })}

        {/* <Button title="Button 1">
          <img src={logo} alt="icon" />
        </Button>
        <Button>
          <img src={image} alt="testImage" />
        </Button> */}
      </div>
    </>
  );
}
