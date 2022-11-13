import './card.css';

const Card = ({ Img, firstTxt, secondTxt }) => {
  return (
    <div>
      <div>
        <img className='img' src={Img} alt='' />
        <div>
          <p>{firstTxt}</p>
          <p> {secondTxt}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
