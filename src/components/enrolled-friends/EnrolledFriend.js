import './enrollfriend.css';

const EnrolledFriend = ({ name, amount }) => {
  // const date = new Date();

  return (
    <div className='data-cnt'>
      <div className='name-date-cnt'>
        <p className='name'>{name}</p>
        <p className='date'></p>
      </div>
      <div className='main-cnt'>
        <p className='txt'>Courses Enrolled () </p>
        <div className='main-course-cnt'>
          <div className='course-cnt'>
            <p className='courses'>UI/UX</p>
          </div>
          <div className='course-cnt'>
            <p className='courses'>photoshop</p>
          </div>
          <div className='course-cnt'>
            <p className='courses'>illustrator</p>
          </div>
          <div className='course-cnt'>
            <p className='courses'>MERN</p>
          </div>

          <div className='course-cnt'>
            <p className='courses'>python</p>
          </div>
          <div className='course-cnt'>
            <p className='courses'>Java</p>
          </div>
        </div>
        <div>
          <p>Referred amount :{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default EnrolledFriend;
