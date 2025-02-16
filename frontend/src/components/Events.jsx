import EventsCards from "./EventsCards";

const Events = () => {
  return (
    <div className="grid grid-cols-3 px-6 gap-x-4 gap-y-6">
      <EventsCards 
        title="Fr. Conceicao Rodrigues Memorial Debate" 
        date="September 2024" 
        location="Samvaad Hall, Campus" 
        time="10:00 AM - 4:00 PM" 
        src="/images/event_pic/debate.png" 
      />

      <EventsCards 
        title="Euphoria Cultural Fest" 
        date="15th - 17th November 2024" 
        location="Campus" 
        time="9:00 AM - 10:00 PM" 
        src="/images/event_pic/cultural.png"
      />

      <EventsCards 
        title="Crescendo Technical Festival" 
        date="5th - 7th January 2025" 
        location="Campus" 
        time="9:30 AM - 6:00 PM" 
        src="/images/event_pic/technical.png"
      />

      <EventsCards 
        title="Athlos Sports Fest" 
        date="20th - 22nd February 2025" 
        location="Sports Grounds" 
        time="7:00 AM - 6:00 PM" 
        src="/images/event_pic/sports.png"
      />

      <EventsCards 
        title="The Heart & Sole Run 5" 
        date="19th March 2024" 
        location="Fr. Agnel Ashram" 
        time="6:00 AM - 10:00 AM" 
        src="/images/event_pic/marathon.png"
      />

      <EventsCards 
        title="Beach Clean Up" 
        date="9th October 2022" 
        location="Mumbai Beaches" 
        time="7:00 AM - 11:00 AM" 
        src="/images/event_pic/beach.png" 
      />
    </div>
  )
}

export default Events