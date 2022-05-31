import Profile from '../components/profile';
import Dashboard from '../components/dashboard';
import Cartc from '../components/cartc';


function Cart() {
  return (
    <div className='flex flex-row'>
      <Dashboard/>
      <Profile/>
      <Cartc/>
    </div>
  );
}

export default Cart;
