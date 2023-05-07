import { AppState } from "./app-state";
import { Action } from "./action";
import { ActionType } from "./action-type";
import ICoupon from "../models/ICoupon";

const appStateInitialValue = new AppState();

// This function is NOT called direcrtly by you
export function reduce(oldAppState: AppState = appStateInitialValue, action: Action): AppState {
    debugger;
    // Cloning the oldState (creating a copy)
    const newAppState = { ...oldAppState };

    switch (action.type) {
        case ActionType.SaveCouponsList:
            newAppState.couponsList = action.payload.coupons;
            break;

        case ActionType.SaveDecryptedToken:
            newAppState.successfulLoginData = action.payload.decryptedToken;
            break;
            
        case ActionType.ChangeCouponName:
            let couponId = action.payload.couponId;
            let coupon = newAppState.couponsList.find((coupon) => coupon.id == couponId) as ICoupon;
            coupon.name = 'xxx';
            break;

        case ActionType.SaveSubText:
            newAppState.subText = action.payload.subText;
            break;

    }

    // After returning the new state, it's being published to all subscribers
    // Each component will render itself based on the new state
    return newAppState;
}