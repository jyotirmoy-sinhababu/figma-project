import './enrollfriend.css';

const EnrolledFriend = ({ name, amount }) => {
  // const date = new Date();

  return (
    <div className='data-cnt'>
      <div>
        <p className='name'>{name}</p>
        <p className='date'></p>
      </div>
      <div>
        <p>Courses Enrolled () </p>
        <div>
          <p>UI/UX</p>
          <p>photoshop</p>
          <p>illustrator</p>
          <p>MERN</p>
          <p>python</p>
          <p>Java</p>
        </div>
      </div>
      <div>
        <p>Referred amount :{amount}</p>
      </div>
    </div>
  );
};

export default EnrolledFriend;
