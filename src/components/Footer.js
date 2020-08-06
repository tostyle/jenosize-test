import React from "react";

const useStyle = () => {
  return {
    footer: {
      width: "100%",
      backgroundColor: "#343a40",
      color: "#fff",
      position: "fixed",
      bottom: 0,
      left: 0,
      height: "60px",
      lineHeight: "60px",
      padding: "1rem",
    },
  };
};
function Footer() {
  const style = useStyle();
  return (
    <footer style={style.footer}>
      <h3>Footer</h3>
    </footer>
  );
}

export default Footer;
