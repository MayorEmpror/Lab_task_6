import { useReducer } from "react";

interface DispatchAction {
    type: "first_name_ch" | "last_name_ch" | "email_ch" | "has_joined_waitlist";
    first_name?: string;
    last_name?: string;
    email?: string;
    hasJoinedWaitList?: boolean
}

const initialDispatchState = {
    first_name: "",
    last_name: "",
    email: "",
};

const userSignUpReducer = (
    state: any,
    action: DispatchAction
): Partial<DispatchAction> | undefined => {
    switch (action.type) {
        case "first_name_ch":
            return {
                first_name: action.first_name,
                last_name: state.last_name,
                email: state.email,
                hasJoinedWaitList: state.hasJoinedWaitList

            };

        case "last_name_ch":
            return {
                first_name: state.first_name,
                last_name: action.last_name,
                email: state.email,
                hasJoinedWaitList: state.hasJoinedWaitList

            }

        case "email_ch":
            return {
                first_name: state.first_name,
                last_name: state.last_name,
                email: action.email,
                hasJoinedWaitList: state.hasJoinedWaitList

            }

        case "has_joined_waitlist":
            return {
                first_name: state.first_name,
                last_name: state.last_name,
                email: state.email,
                hasJoinedWaitList: action.hasJoinedWaitList
            }

        default:
            break;
    }
};


export {
    userSignUpReducer,
    initialDispatchState
}