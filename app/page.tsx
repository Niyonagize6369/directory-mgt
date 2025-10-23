import React from 'react'
import Approved from './approved/page'
import Executive from './executive/page'
import Pendingapprovals from './pending approvals/page'
import Profile from './profile/page'
import Reports from './reports/page'
import Signout from './signout/page'

const page = () => {
  return (
    <div>
      <Approved />
      <Executive />
      <Pendingapprovals />
      <Profile/>
      <Reports/>
      <Signout/>
    </div>
  );
}

export default page
