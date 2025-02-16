import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const EventCards = ({title, date, location, time, src}) => {
  return (
    <div>
      <Card className="relative flex flex-col items-center min-h-[22rem] max-h-[24rem] shadow-md shadow-zinc-200 border-0 rounded-t-2xl
      hover: border-lime-600">
        <CardHeader className="p-0 border-0">
          <img className="aspect-video rounded-t-2xl cursor-pointer" src={src} />
          <CardTitle className="text-center font-bold text-indigo-950 text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center pt-4 gap-2">
          <p>{date}</p>
          <div className="flex gap-2">
            <img src="/icons/location.png" className="w-4 h-4 translate-y-1" />
            <p>{location}</p>
          </div>
          <p>{time}</p>
          <a href="#" className="absolute text-indigo-600 text-sm right-2 bottom-2 p-2">Register</a>
        </CardContent>
      </Card>
    </div>
  )
}

export default EventCards