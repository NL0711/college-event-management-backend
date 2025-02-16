import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import HackathonsCards from "./HackathonsCards";

const Hackathons = () => {
  return (
    <div className="w-[15rem]">
      <div className="bg-indigo-950 py-2 px-6 text-white text-center">Hackathons</div>
      <Tabs defaultValue="tab1" className="w-full bg-indigo-950">
        <TabsList className="flex space-x-2 bg-indigo-950 pt-2 rounded-sm">
          <div className="pt-3">
            <TabsTrigger value="tab1" className>Online</TabsTrigger>
            <TabsTrigger value="tab2">Offline</TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="tab1" className="p-2 flex flex-col gap-2">
          <HackathonsCards
            title="Safe Agentathon"
            date="24/3/25"
            themes={["Blockchain", "AI/ML"]}
            link="https://devfolio.co/hackathons/safe-agentathon"
          />

          <HackathonsCards
            title="HACKIFY 2.0"
            date="28/02/25"
            themes={["Web Dev", "Cybersecurity"]}
            link="https://devfolio.co/hackathons/hackify-2"
          />

          <HackathonsCards
            title="Code-ए-Manipal"
            date="21/03/25"
            themes={["AI/ML", "Open Innovation"]}
            link="https://devfolio.co/hackathons/code-e-manipal"
          />
          
          <HackathonsCards
            title="TechSprint 2025"
            date="10/06/25"
            themes={["Blockc  hain", "IoT"]}
            link="https://devfolio.co/hackathons/techsprint-2025"
            />
        </TabsContent>

        <TabsContent value="tab2" className="p-2 flex flex-col gap-2">
          <HackathonsCards
            title="HACK-IT-UP"
            date="12/3/25"
            themes={["AI/ML", "Blockchain"]}
            location="Hyderabad, India"
            link="https://devfolio.co/hackathons/hack-it-up"
          />
          
          <HackathonsCards
            title="CodeZen 2025 Hackathon"
            date="28/02/25"
            themes={["Web3", "Fintech"]}
            location="Bangalore, India"
            link="https://devfolio.co/hackathons/codezen-2025"  
          />

          <HackathonsCards
            title="SIT'Novate"
            date="19/02/25"
            themes={["HealthTech", "IoT"]}
            location="Pune, India"
            link="https://devfolio.co/hackathons/sitnovate"
          />

          <HackathonsCards
            title="InnovateX Hackathon"
            date="15/04/25"
            themes={["AI/ML", "Cybersecurity"]}
            location="Mumbai, India"
            link="https://devfolio.co/hackathons/innovatex-2025"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Hackathons;
