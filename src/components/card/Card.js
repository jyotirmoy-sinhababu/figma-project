import './card.css';

const Card = ({ rupee, firstHeading, secondHeading }) => {
  return (
    <div>
      <div>
        <img className='img' src={rupee} alt='' />
        <div>
          {firstHeading ? <p>{firstHeading}</p> : null}
          <p> {secondHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
