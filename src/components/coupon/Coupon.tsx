import { useSelector } from 'react-redux';
import ICoupon from '../../models/ICoupon';
import './Coupon.css';
import { AppState } from '../../redux/app-state';


function Coupon(props: ICoupon) {
  const userType = useSelector((state: AppState) => state.successfulLoginData.userType);


  return (
    <div className="Coupon">
      <img src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.18169-9/25659743_1678669455488429_8544415159609159416_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=AjRjW44HVDoAX9zonPG&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfDsIXyIt2G2IniE0PLJ8I1CasifChvKbWltXmFnyH5uSQ&oe=647698D1" alt="view" />
      <div className="card">
        <h2>{props.name}</h2>
        <p>price: {props.price}</p>
        {userType == 'Admin' &&
          (<div className="change">
            <input type="button" className="button" value="change" />
          </div>)}
      </div>
    </div>
  );

}
export default Coupon