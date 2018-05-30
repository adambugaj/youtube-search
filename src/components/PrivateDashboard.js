import React from 'react';
import HeaderDashboard from './HeaderDashboard';
import View from './ViewComponent';

// Loged in Dashboard
const PrivateDashboard = (props) => {
  return (
    <div>
      <HeaderDashboard />
      <View />
    </div>
  )
}

export default PrivateDashboard;
