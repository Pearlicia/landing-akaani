import Profile from '../components/profile';
import Dashboard from '../components/dashboard';
import RightSideBar from '../components/rightSidebar';


function Landing() {
  return (
    <div className='flex flex-row'>
      <Dashboard/>
      <Profile/>
      <RightSideBar/>
    </div>
  );
}

export default Landing;
