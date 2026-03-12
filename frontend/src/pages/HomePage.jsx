import { useNavigate } from "react-router-dom";
import { Video, MessageCircle, Users } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  const startCall = () => {
    const callId = crypto.randomUUID(); // generate unique room id
    navigate(`/call/${callId}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background gradient glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-emerald-500 opacity-20 blur-[200px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-teal-400 opacity-20 blur-[200px]" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Welcome to
          <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            LinguaConnect
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-gray-300 text-lg md:text-xl mb-10">
          LinguaConnect helps you practice languages with people around the world.
          Connect with native speakers, send friend requests, chat instantly,
          and start real-time video conversations to improve your communication skills.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* Find Learners */}
          <button
            onClick={() => navigate("/friends")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-emerald-400 to-teal-500 text-black hover:scale-105 transition"
          >
            <Users size={18} />
            Find Learners
          </button>

          {/* Friend Requests */}
          <button
            onClick={() => navigate("/notifications")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-600 hover:bg-white/10 transition"
          >
            <MessageCircle size={18} />
            Friend Requests
          </button>

         

        </div>

        {/* Floating UI cards */}
        <div className="hidden lg:block">

          <div className="absolute left-20 bottom-40 bg-white text-black rounded-xl p-4 shadow-xl">
            <p className="font-semibold">Practice English</p>
            <p className="text-sm text-gray-500">with Maria 🇪🇸</p>
          </div>

          <div className="absolute right-20 top-40 bg-white text-black rounded-xl p-4 shadow-xl">
            <p className="font-semibold">Live Video Call</p>
            <p className="text-sm text-gray-500">Akira 🇯🇵 is online</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HomePage;