import Card from "./Card";
import music from "./assets/music.webp";
import dance from "./assets/dance.webp";
import abhinay from "./assets/abhinay.webp";
import extra from "./assets/extra.webp";
import shoutout from "./assets/shoutout.webp";
import anc from "./assets/anc.webp";

function CardGrid() {
  const events = [
    { 
      title: "Symphony Nights", 
      description: "Let the rhythm take over as melodies merge, and beats make magic under the stars.",
      image: music
    },
    { 
      title: "Canvas Chronicles", 
      description: "Where creativity meets craftsmanship. Paint, sculpt, and design your way into a world of imagination.",
      image: anc    
    },
    { 
      title: "Stage Whispers", 
      description: "Step into the spotlight and let your story unfold in a theatrical showcase of talent and emotion.",
      image: abhinay
    },
    { 
      title: "Rhythmic Reverie", 
      description: "From classical moves to street grooves, join the pulse of passion on the dance floor.",
      image: dance
    },
    { 
      title: "Vocal Vibes", 
      description: "Speak up, shout out, and make your voice heard. The mic is yours!",
      image: shoutout
    },
    { 
      title: "Lens & Light", 
      description: "Capture the moment, freeze the magic. A picture-perfect celebration of vision and creativity.",
      image: extra 
    }
  ];

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      
      {/* Top Row with Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {events.slice(0, 2).map((event, index) => (
          <Card 
            key={index} 
            title={event.title} 
            description={event.description} 
            image={event.image} 
          />
        ))}
        {/* Center the third card on small screens */}
        <div className="sm:col-span-2 md:col-span-1 flex justify-center">
          <Card 
            title={events[2].title} 
            description={events[2].description} 
            image={events[2].image} 
          />
        </div>
      </div>

      {/* Events Title */}
      <h2 className="text-4xl text-white uppercase font-bold tracking-wider text-center 
          relative shadow-lg p-5 border-2 border-white rounded-md animate-fadeIn
          bg-white bg-opacity-20">
        <span className="bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent">
          EVENTS
        </span>
      </h2>

      {/* Bottom Row with Remaining Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {events.slice(3,5).map((event, index) => (
          <Card 
            key={index} 
            title={event.title} 
            description={event.description} 
            image={event.image} 
          />
        ))}
        <div className="sm:col-span-2 md:col-span-1 flex justify-center">
          <Card 
            title={events[5].title} 
            description={events[5].description} 
            image={events[5].image} 
          />
        </div>
      </div>
      
    </div>
  );
}

export default CardGrid;
