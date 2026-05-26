import React, { useState, useEffect } from 'react';
import { Shield, Youtube, Gamepad2 } from 'lucide-react';

const BioLink = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [discordData, setDiscordData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ========================================
  // CUSTOMIZE YOUR BIO LINK CONTENT HERE
  // ========================================
  const bioData = {
    // Main Title at top
    mainTitle: "Real",
    
    // Your Discord User ID (for live status)
    discordUserId: "178906698440900608",
    
    // Default profile info (will be replaced by live Discord data)
    defaultProfile: {
      username: "realhvh",
      badge: "🔱",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    },
    
    // Bio Links - Add your links here
    bioLinks: [
      { 
        icon: Youtube, 
        label: "YouTube", 
        url: "https://youtube.com/@yourhandle", 
        color: "#FF0000" 
      },
      { 
        icon: Gamepad2, 
        label: "Roblox", 
        url: "https://www.roblox.com/users/YOUR_ID/profile", 
        color: "#00A2FF" 
      },
    ],
    
    // Video Background (optional)
    videoUrl: "",
  };

  // Fetch Discord status from Lanyard API
  const fetchDiscordStatus = async () => {
    try {
      const response = await fetch(`https://api.lanyard.rest/v1/users/${bioData.discordUserId}`);
      const data = await response.json();
      
      if (data.success) {
        setDiscordData(data.data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Discord status:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    fetchDiscordStatus();
    
    // Poll for updates every 30 seconds
    const interval = setInterval(fetchDiscordStatus, 30000);
    
    return () => clearInterval(interval);
  }, []);

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return '#23a55a';
      case 'idle': return '#f0b232';
      case 'dnd': return '#f23f43';
      default: return '#80848e';
    }
  };

  // Get status text
  const getStatusText = () => {
    if (!discordData) return bioData.defaultProfile.username;
    
    const activities = discordData.activities || [];
    const customStatus = activities.find(a => a.type === 4);
    
    if (customStatus && customStatus.state) {
      return customStatus.state;
    }
    
    const activity = activities.find(a => a.type === 0); // Playing
    if (activity) {
      return `Playing ${activity.name}`;
    }
    
    // Calculate last seen
    if (discordData.discord_status === 'offline') {
      return 'Offline';
    }
    
    return discordData.discord_status.charAt(0).toUpperCase() + discordData.discord_status.slice(1);
  };

  const username = discordData?.discord_user?.username || bioData.defaultProfile.username;
  const avatar = discordData?.discord_user?.avatar 
    ? `https://cdn.discordapp.com/avatars/${discordData.discord_user.id}/${discordData.discord_user.avatar}.png?size=128`
    : bioData.defaultProfile.avatar;
  const status = discordData?.discord_status || 'offline';

  const BioLinkButton = ({ icon: Icon, label, url, color }) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]"
        data-testid={`link-${label.toLowerCase()}`}
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
          style={{ backgroundColor: color }}
        />
        
        <Icon size={20} style={{ color: color }} className="relative z-10" />
        <span className="text-white font-medium relative z-10">{label}</span>
      </a>
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Video Background (if provided) */}
      {bioData.videoUrl && (
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            data-testid="background-video"
          >
            <source src={bioData.videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Starfield/Snow Particle Effect */}
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-6">
        {/* Main Title - Smaller */}
        <div 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          data-testid="main-title"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            {bioData.mainTitle}
          </h1>
        </div>

        {/* Discord-Style Profile Card with Live Status */}
        <div 
          className={`transition-all duration-1000 delay-100 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          data-testid="profile-card"
        >
          <div className="bg-[#2b2d31] border border-[#3f4147] rounded-2xl p-4 flex items-center gap-4 min-w-[280px] hover:bg-[#313338] transition-colors duration-200">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <img
                src={avatar}
                alt="Profile"
                className="w-16 h-16 rounded-full border-2 border-[#3f4147]"
                data-testid="profile-avatar"
              />
              {/* Live status indicator */}
              <div 
                className="absolute bottom-0 right-0 w-4 h-4 border-2 border-[#2b2d31] rounded-full transition-colors duration-300"
                style={{ backgroundColor: getStatusColor(status) }}
                data-testid="status-indicator"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-lg truncate" data-testid="username">
                  {username}
                </span>
                {bioData.defaultProfile.badge && (
                  <span className="text-base">{bioData.defaultProfile.badge}</span>
                )}
                <Shield size={16} className="text-[#5865f2] fill-current" />
              </div>
              <p className="text-[#b5bac1] text-sm truncate" data-testid="status">
                {loading ? 'Loading...' : getStatusText()}
              </p>
            </div>
          </div>
        </div>

        {/* Bio Links */}
        <div 
          className={`flex flex-col gap-3 w-full max-w-md transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {bioData.bioLinks.map((link, index) => (
            <BioLinkButton key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioLink;