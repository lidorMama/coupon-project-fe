import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/app-state";
import axios from "axios";
import { ActionType } from "../../redux/action-type";
import Coupon from "../coupon/Coupon";

function Home() {
    const dispatch = useDispatch();
    let [pageNumber, setPageNumber] = useState(1);
    useEffect(() => { getAllCoupons(); }, [pageNumber]);
    const couponsList = useSelector((state: AppState) => state.couponsList);
    let subText: string = useSelector((state: AppState) => state.subText);
    let fixSubText: string = subText.trim().toLowerCase();


    async function getAllCoupons() {
        let url = `http://localhost:8080/coupon?pageNumber=${pageNumber}`;
        let response = await axios.get(url);
        let coupons = response.data;
        dispatch({ type: ActionType.SaveCouponsList, payload: { coupons } });
    }

    return (
        <div className="Home">
            <div className="couponContoner">
                {couponsList.filter((coupon) => {
                    if (fixSubText === "") {
                        return true;
                    }
                    return coupon.name.trim().toLowerCase().includes(fixSubText) || coupon.description.trim().toLowerCase().includes(fixSubText) || coupon.categoryName.trim().toLowerCase().includes(fixSubText) || coupon.price.toString().includes(fixSubText);
                })
                    .map((coupon) => (<Coupon key={coupon.id} name={coupon.name} price={coupon.price} description={coupon.description} id={coupon.id} startDate={coupon.startDate} endDate={coupon.endDate} categoryName={coupon.categoryName} companyName={coupon.companyName} />))}
            </div>
        </div>
    )
}
export default Home;