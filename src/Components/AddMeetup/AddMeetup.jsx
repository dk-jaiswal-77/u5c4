// User should be able to add/create new meetups 
import { useState } from "react";

export const AddMeetup = () => {

  const [meetup, setMeetup] = useState({
    title : "",
    location : "",
    date : "",
    time : "",
    theme : "",
    description : "",
    image : ""
  });

  function handleChange(e){
    setMeetup({
      ...meetup, [e.target.className] : e.target.value
    });
  }

  function handleSubmit(){
    
  }

  return (
    <div className="addMeetupContainer">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input type="text" className="title" value={meetup.title} onChange={(event) => {
          handleChange(event);
         }} required />
        <label>Location</label>
        <select className="location" value={meetup.location} onChange={(event) => { 
          handleChange(event);
        }}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date" 
          value={meetup.date} 
          onChange={(event) => {
            handleChange(event);
           }}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"  
          value={meetup.time} 
          onChange={(event) => { 
            handleChange(event);
          }}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select value={meetup.theme} className="theme" onChange={(event) => { 
          handleChange(event);
        }}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description" 
          value={meetup.description} 
          onChange={(event) => { 
            handleChange(event);
          }}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          className="image" 
          value={meetup.image} 
          onChange={(event) => {
            handleChange(event);
           }}
          required
        />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
