import { useDispatch, useSelector } from 'react-redux';
import ICoupon from '../../models/ICoupon';
import './Coupon.css';
import { AppState } from '../../redux/app-state';
import { ActionType } from '../../redux/action-type';
import { CiEdit } from 'react-icons/ci';
import { BsTrash } from 'react-icons/bs';


function Coupon(props: ICoupon) {
  const dispatch = useDispatch();
  const logInData = useSelector((state: AppState) => state.successfulLoginData);

  async function changeName(coupon: ICoupon) {
    let couponId = coupon.id
    dispatch({ type: ActionType.ChangeCouponName, payload: { couponId } });
  }

  return (
    <div className="Coupon">
      <img src="https://brownhotels.com/sites/default/files/styles/smush_mobile/public/deluxe_1.jpg?itok=KJm0MOU3" alt="view" />
      <div className="card">
        <h2>{props.name}</h2>
        <p id="description">{props.description}</p>
      </div>
      <div className="price"> <p>price: {props.price}</p></div>
      <div className="purchse-button">
        <button>
          {logInData.userType == "Customer" && (<input type="button" value={"purchase"} onClick={() => changeName(props)} />)}
          buy now
        </button>
      </div>
      <div className="options-button">
          {logInData.userType == "Admin" &&
            (<select className="option-drop-down">
              <option value="none" selected disabled hidden> options </option>
              <option> <CiEdit></CiEdit> edit </option>
              <option> <BsTrash></BsTrash> remove </option>
            </select>)}
        </div>
      <div className="end-date">
        <p>expires:  {new Date(props.endDate).toLocaleDateString()} </p>
      </div>
    </div>
  );

}
export default Coupon