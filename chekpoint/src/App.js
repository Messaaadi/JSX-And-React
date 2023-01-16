import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return ( 
    <div>
      <h1>My Profile</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;