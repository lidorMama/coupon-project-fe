import ICategory from "../models/ICategory";
import ICoupon from "../models/ICoupon";
import ISuccessfulLoginData from "../models/ISuccessfulLoginData";

export class AppState {
    public couponsList: ICoupon[] = [];
    public coupon: ICoupon = { id: 0, name: "", price: 0, description: "", categoryName: "" };
    public successfulLoginData: ISuccessfulLoginData = { id: 0, userType: "", companyId: 0 }
    public subText: string = "";
    public categoriesList: ICategory[] = [];
    public category: ICategory = { id: 0, name: "" };
}