import './card.css';

const Card = ({ rupee, firstHeading, secondHeading }) => {
  return (
    <div>
      <div>
        <img className='img' src={rupee} alt='' />
        <div>
          <p>{firstHeading}</p>
          <p> {secondHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
