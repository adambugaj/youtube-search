import React from 'react';
import Header from './Header';
import View from './ViewComponent';

// Shows component to the non-logged-in users
const PublicDashboard = (props) => {
 return (
    <div>
      <Header />
      <View />
    </div>
  );
};

export default PublicDashboard;
