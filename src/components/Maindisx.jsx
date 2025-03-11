import React from 'react';

function Maindisx({ dollar, paragraph, skin, imgSrc }) {
  const styles = getStyles();

  return (
    <div style={{ ...styles.summary, backgroundImage: `url(${imgSrc})` }}>
      <div style={styles.overlay}>
        <div style={styles.column}>
          <p style={styles.dol}>{dollar}</p>
          <p style={styles.skin}>{skin}</p>
          <p style={styles.fi}>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

const getStyles = () => {
  const isMobile = window.innerWidth <= 800;

  return {
    summary: {
      display: "flex",
      flexDirection: "row",
      gap: "30px",
      borderBottom: "1px solid rgb(32, 31, 31)",
      paddingBottom: "30px",
      marginBottom: "30px",
      borderRadius: "20px",
      width: isMobile ? "100%" : "450px", // Adjust width for mobile
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      overflow: "hidden",
      height: isMobile ? "300px" : "340px", // Adjust height for mobile
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent overlay for better readability
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      color: "#fff", // Ensure text is white for better readability
      zIndex: 1,
      padding: "20px",
    },
    dol: {
      color: "#FFF",
      fontFamily: "Poppins",
      width: "fit-content",
      fontSize: isMobile ? "20px" : "30px", // Adjust font size for mobile
      fontWeight: 700,
      borderRadius: "10px",
      background: "#49BBBD",
      padding: "5px",
      lineHeight: "normal",
    },
    fi: {
      color: "#FFF",
      fontFamily: 'Poppins',
      fontSize: isMobile ? '16px' : '20px', // Adjust font size for mobile
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '180%', /* 36px */
      letterSpacing: '0.4px',
    },
    skin: {
      color: "#FFF",
      fontFamily: "Poppins",
      fontSize: isMobile ? "24px" : "28px", // Adjust font size for mobile
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    }
  };
};

export default Maindisx;