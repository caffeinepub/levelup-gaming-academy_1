import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Text "mo:core/Text";

actor {
  // Types
  type MembershipPack = {
    name : Text;
    price : Nat;
    features : Text;
  };

  type Tournament = {
    name : Text;
    game : Game;
    tournamentType : TournamentType;
    prize : Text;
    date : Text;
    status : TournamentStatus;
  };

  type LeaderboardEntry = {
    playerName : Text;
    rank : Nat;
    points : Nat;
    avatarSeed : Text;
  };

  type TrainingGuide = {
    title : Text;
    tips : [Text];
  };

  type Game = {
    #cod;
    #valorant;
    #fortnite;
    #roblox;
    #chess;
  };

  type TournamentType = {
    #solo;
    #team;
  };

  type TournamentStatus = {
    #upcoming;
    #live;
    #ended;
  };

  let membershipPacks : [MembershipPack] = [
    {
      name = "Beginner";
      price = 10;
      features = "Access to basic guides and weekly tournaments";
    },
    {
      name = "Advanced";
      price = 15;
      features = "Includes coaching sessions and exclusive tournaments";
    },
    {
      name = "Pro";
      price = 20;
      features = "Full access to all features, private coaching, and premium rewards";
    },
  ];

  let tournaments : [Tournament] = [
    {
      name = "COD Weekly Showdown";
      game = #cod;
      tournamentType = #team;
      prize = "$50";
      date = "2024-07-01";
      status = #upcoming;
    },
    {
      name = "Valorant Solo Cup";
      game = #valorant;
      tournamentType = #solo;
      prize = "$30";
      date = "2024-07-03";
      status = #live;
    },
    {
      name = "Fortnite Battle Royale";
      game = #fortnite;
      tournamentType = #team;
      prize = "$75";
      date = "2024-07-05";
      status = #upcoming;
    },
    {
      name = "Roblox Adventure League";
      game = #roblox;
      tournamentType = #team;
      prize = "$20";
      date = "2024-07-07";
      status = #upcoming;
    },
    {
      name = "Chess Masters";
      game = #chess;
      tournamentType = #solo;
      prize = "$15";
      date = "2024-07-09";
      status = #upcoming;
    },
  ];

  let leaderboards : [(Game, [LeaderboardEntry])] = [
    (
      #cod,
      [
        { playerName = "Player1"; rank = 1; points = 1200; avatarSeed = "avatar_cod1" },
        { playerName = "Player2"; rank = 2; points = 1100; avatarSeed = "avatar_cod2" },
      ],
    ),
    (
      #valorant,
      [
        { playerName = "Player3"; rank = 1; points = 1300; avatarSeed = "avatar_valorant1" },
        { playerName = "Player4"; rank = 2; points = 1250; avatarSeed = "avatar_valorant2" },
      ],
    ),
    (
      #fortnite,
      [
        { playerName = "Player5"; rank = 1; points = 1400; avatarSeed = "avatar_fortnite1" },
        { playerName = "Player6"; rank = 2; points = 1350; avatarSeed = "avatar_fortnite2" },
      ],
    ),
    (
      #roblox,
      [
        { playerName = "Player7"; rank = 1; points = 1500; avatarSeed = "avatar_roblox1" },
        { playerName = "Player8"; rank = 2; points = 1450; avatarSeed = "avatar_roblox2" },
      ],
    ),
    (
      #chess,
      [
        { playerName = "Player9"; rank = 1; points = 1550; avatarSeed = "avatar_chess1" },
        { playerName = "Player10"; rank = 2; points = 1500; avatarSeed = "avatar_chess2" },
      ],
    ),
  ];

  let trainingGuides : [(Game, [TrainingGuide])] = [
    (
      #cod,
      [
        {
          title = "Basic Shooting Techniques";
          tips = ["Use cover", "Aim for headshots", "Manage recoil"];
        },
        {
          title = "Strategy Guide";
          tips = ["Coordinate with team", "Use grenades wisely", "Control map areas"];
        },
      ],
    ),
    (
      #valorant,
      [
        {
          title = "Agent Abilities";
          tips = ["Master agent skills", "Use abilities with team", "Learn map layouts"];
        },
        {
          title = "Shooting Techniques";
          tips = ["Aim for headshots", "Practice crosshair placement", "Control spray"];
        },
      ],
    ),
    (
      #fortnite,
      [
        {
          title = "Building Techniques";
          tips = ["Build fast", "Use ramps", "Switch materials quickly"];
        },
        {
          title = "Combat Strategies";
          tips = ["Stay mobile", "Use cover", "Practice aiming"];
        },
      ],
    ),
    (
      #roblox,
      [
        {
          title = "Game Exploration";
          tips = ["Explore different games", "Try new genres", "Join community events"];
        },
        {
          title = "Strategy Guide";
          tips = ["Work with friends", "Complete challenges", "Unlock rewards"];
        },
      ],
    ),
    (
      #chess,
      [
        {
          title = "Opening Strategies";
          tips = ["Control the center", "Develop pieces", "Protect the king"];
        },
        {
          title = "Endgame Techniques";
          tips = ["Use pawns wisely", "Promote pieces", "Checkmate efficiently"];
        },
      ],
    ),
  ];

  public query ({ caller }) func getMembershipPacks() : async [MembershipPack] {
    membershipPacks;
  };

  public query ({ caller }) func getTournaments() : async [Tournament] {
    tournaments;
  };

  public query ({ caller }) func getLeaderboard(game : Game) : async [LeaderboardEntry] {
    let entry = leaderboards.find(func((g, _)) { g == game });
    switch (entry) {
      case (null) { [] };
      case (?(_, entries)) { entries };
    };
  };

  public query ({ caller }) func getTrainingGuides(game : Game) : async [TrainingGuide] {
    let entry = trainingGuides.find(func((g, _)) { g == game });
    switch (entry) {
      case (null) { [] };
      case (?(_, guides)) { guides };
    };
  };

  public query ({ caller }) func getAllLeaderboards() : async [(Game, [LeaderboardEntry])] {
    leaderboards;
  };

  public query ({ caller }) func getAllTrainingGuides() : async [(Game, [TrainingGuide])] {
    trainingGuides;
  };
};
