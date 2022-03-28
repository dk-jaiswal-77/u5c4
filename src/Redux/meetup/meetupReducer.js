import {ADD_MEETUP} from "./action";

export const meetupReducer = (meetup = {meetups : []}, {type, payload}) => {
    switch (type){
        case ADD_MEETUP :
            return {meetups : payload};
        default :
            return meetup;
    }
}