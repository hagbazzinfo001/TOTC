import tomara from '../assets/images/Tomara.svg';
import adam from '../assets/images/Adam.svg';
import jane from '../assets/images/JaneCooper.svg';
import '../assets/css/creator.css';
function Creator() {
    const creatorDetails = [
        {
            imgSrc: tomara,
           name: 'Tomara',
        },
        {
            imgSrc: adam,
            name: 'Adam',
        },
        {
            imgSrc: jane,
            name: 'Jane Cooper',
        },
        {
            imgSrc: jane,
            name: 'Jane Cooper',
        },
        {
            imgSrc: jane,
            name: 'Jane Cooper',
        },
        {
            imgSrc: jane,
            name: 'Jane Cooper',
        }
    ]
  return (
    <>
        {creatorDetails.map((item, index) => (
            <div key={index} className="creator-details">
                <img src={item.imgSrc} alt={item.name} id='img' />
                <div className="creator-details-text">
                    <h3>{item.name}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                </div>
            </div>
        ))}
    </>)
}
export default Creator;