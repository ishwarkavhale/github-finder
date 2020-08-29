import React, { useContext } from 'react';
import AlertContext from '../Context/alert/AlertContext';
const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle" /> {alert.msg}
        <span style={{ float: 'right' }}>x</span>
      </div>
    )
  );
};

export default Alert;
