export const ADD_MEETUP = "ADD_MEETUP";

// action creator
export const addMeetup = (payload) => {
    return {type : ADD_MEETUP, payload};
}