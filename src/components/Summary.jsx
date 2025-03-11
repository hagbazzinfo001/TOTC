import React from 'react';

function Summary({dollar,paragraph, skin, imgSrc}) {
    return (
        <div   style={styles.summary}>
        <img src={imgSrc} alt=""    />
         <div style={styles.column}>
           <p style={styles.fi}>{paragraph}</p>
           <p style={styles.skin}>{skin}</p>
           <p style={styles.dol}  >&#36;{dollar}</p>
        </div>
        </div>
    );
}
const styles ={
    summary: {
         display:"flex",
         flexDirection: "row",
         gap: "30px",
         borderBottom: "1px solid rgb(32, 31, 31)",
         paddingBottom: "30px",
         marginBottom: "30px",
         borderRadius: "20px",
        },
      column: {
         display: "flex",
         flexDirection: "column",
         gap: "10px",
        },
      image: {
      borderRadius:"10px",
      },
      dol: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '180%', /* 43.2px */
        letterSpacing: '0.48px',
       },
       fi: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '180%', /* 32.4px */
        letterSpacing: '0.36px',
       },
       skin: {
        color: '#5B5B5B',
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '180%', /* 32.4px */
        letterSpacing: '0.36px',
       }
    }
export default Summary;