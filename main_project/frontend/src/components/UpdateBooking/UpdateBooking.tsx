/* import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const UpdateBooking = () => {
  const [showDeletePage, setShowDeletePage] = useState(false);
  const [showUpdatePage, setShowUpdatePage] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowDeletePage(true);
    setShowUpdatePage(false);
    navigate('/updatebooking/deletebooking');
  };

  let html = <></>;

  if (showDeletePage) {
    html = <Outlet />;
  } else if (showUpdatePage) {
    html = (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          corporis velit commodi porro doloribus voluptas id quaerat,
          necessitatibus nulla reiciendis. Incidunt ut sed laudantium excepturi
          esse expedita aut quis repellendus?
        </p>
        <button onClick={handleClick}>deleteBooking</button>
      </>
    );
  }

  return <>{html}</>;
};
 */
