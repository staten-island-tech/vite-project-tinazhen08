const movies = {
  Action: [
    {
      name: "Die Hard",
      url: "",
      description:
        "An NYPD officer battles terrorists in a Los Angeles skyscraper.",
    },
    {
      name: "Mad Max: Fury Road",
      url: "",
      description:
        "In a post-apocalyptic world, a warrior teams up with rebels to save a group of women.",
    },
    {
      name: "John Wick",
      url: "",
      description:
        "A retired hitman seeks vengeance against those who wronged him.",
    },
    {
      name: "The Dark Knight",
      url: "",
      description:
        "Batman faces the Joker, a criminal mastermind bent on chaos.",
    },
    {
      name: "Gladiator",
      url: "",
      description:
        "A betrayed Roman general seeks revenge against the corrupt emperor.",
    },
  ],
  Comedy: [
    {
      name: "Superbad",
      url: "",
      description:
        "Two high school friends navigate a wild night before graduation.",
    },
    {
      name: "The Hangover",
      url: "",
      description:
        "A bachelor party in Las Vegas goes horribly wrong after a night of partying.",
    },
    {
      name: "Bridesmaids",
      url: "",
      description:
        "A woman's life spirals out of control as she competes to be her best friend's maid of honor.",
    },
    {
      name: "Mean Girls",
      url: "",
      description:
        "A teenage girl navigates the social cliques of a new high school.",
    },
    {
      name: "Groundhog Day",
      url: "",
      description:
        "A weatherman relives the same day over and over until he gets it right.",
    },
  ],
  Drama: [
    {
      name: "The Shawshank Redemption",
      url: "",
      description:
        "A man wrongfully imprisoned forms a friendship with a fellow inmate.",
    },
    {
      name: "Forrest Gump",
      url: "",
      description:
        "A slow-witted man inadvertently influences major historical events.",
    },
    {
      name: "Fight Club",
      url: "",
      description:
        "An insomniac office worker forms an underground fight club.",
    },
    {
      name: "The Godfather",
      url: "",
      description:
        "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    },
    {
      name: "Pulp Fiction",
      url: "",
      description: "Interconnected stories of crime unfold in Los Angeles.",
    },
  ],
  Horror: [
    {
      name: "The Shining",
      url: "",
      description: "A family becomes winter caretakers of a haunted hotel.",
    },
    {
      name: "Get Out",
      url: "",
      description:
        "A young Black man uncovers a disturbing secret while visiting his white girlfriend's family.",
    },
    {
      name: "A Nightmare on Elm Street",
      url: "",
      description: "Teens are hunted in their dreams by a vengeful spirit.",
    },
    {
      name: "The Babadook",
      url: "",
      description:
        "A mother and her son are haunted by a sinister presence from a storybook.",
    },
    {
      name: "Hereditary",
      url: "",
      description:
        "A family uncovers dark secrets after the death of their secretive grandmother.",
    },
  ],
  SciFi: [
    {
      name: "Blade Runner",
      url: "",
      description:
        "A detective hunts rogue replicants in a dystopian future.",
    },
    {
      name: "Star Wars",
      url: "",
      description:
        "A group of rebels fights against an oppressive empire in a galaxy far, far away.",
    },
    {
      name: "Inception",
      url: "",
      description:
        "A skilled thief enters the dreams of others to steal secrets.",
    },
    {
      name: "The Matrix",
      url: "",
      description:
        "A hacker discovers the world he knows is a simulated reality.",
    },
    {
      name: "Arrival",
      url: "",
      description:
        "A linguist is tasked with communicating with alien visitors.",
    },
  ],
  Romance: [
    {
      name: "Pride and Prejudice",
      url: "",
      description:
        "A spirited young woman navigates love and societal expectations.",
    },
    {
      name: "The Notebook",
      url: "",
      description: "A passionate love story unfolds across decades.",
    },
    {
      name: "Titanic",
      url: "",
      description: "A forbidden romance develops aboard the ill-fated ship.",
    },
    {
      name: "When Harry Met Sally",
      url: "",
      description:
        "Two friends debate whether men and women can be just friends.",
    },
    {
      name: "La La Land",
      url: "",
      description:
        "A jazz musician and an aspiring actress pursue their dreams in Los Angeles.",
    },
  ],
  Animation: [
    {
      name: "Toy Story",
      url: "",
      description:
        "A cowboy doll is profoundly threatened by a new spaceman figure.",
    },
    {
      name: "Finding Nemo",
      url: "",
      description:
        "A clownfish embarks on a journey to find his missing son.",
    },
    {
      name: "Spirited Away",
      url: "",
      description: "A girl navigates a mystical world to save her parents.",
    },
    {
      name: "Shrek",
      url: "",
      description:
        "An ogre's peaceful life is disrupted by fairy tale creatures.",
    },
    {
      name: "Coco",
      url: "",
      description:
        "A boy journeys into the Land of the Dead to uncover his family's history.",
    },
  ],
  Documentary: [
    {
      name: "13th",
      url: "",
      description:
        "Explores the history of racial inequality in the United States.",
    },
    {
      name: "Blackfish",
      url: "",
      description: "Investigates the treatment of orcas in captivity.",
    },
    {
      name: "Won't You Be My Neighbor?",
      url: "",
      description:
        "A look at the life of beloved children's television host Fred Rogers.",
    },
    {
      name: "Jiro Dreams of Sushi",
      url: "",
      description: "A renowned sushi chef strives for culinary perfection.",
    },
    {
      name: "Making a Murderer",
      url: "",
      description:
        "A true crime documentary about a man wrongfully convicted of a crime.",
    },
  ],
};

const shows = {
  Sitcom: [
    {
      name: "Friends",
      url: "",
      description:
        "A group of friends navigates life and love in New York City.",
    },
    {
      name: "The Office",
      url: "",
      description:
        "A mockumentary about the daily lives of office employees.",
    },
    {
      name: "Parks and Recreation",
      url: "",
      description:
        "A quirky department in a small town manages local government.",
    },
    {
      name: "Brooklyn Nine-Nine",
      url: "",
      description:
        "A team of detectives solves crimes in a New York precinct.",
    },
    {
      name: "How I Met Your Mother",
      url: "",
      description:
        "A man recounts the story of how he met the mother of his children.",
    },
  ],
  DramaSeries: [
    {
      name: "Breaking Bad",
      url: "",
      description:
        "A chemistry teacher turns to cooking meth after a cancer diagnosis.",
    },
    {
      name: "The Crown",
      url: "",
      description:
        "The reign of Queen Elizabeth II is chronicled over decades.",
    },
    {
      name: "Game of Thrones",
      url: "",
      description: "Noble families vie for power in a mythical land.",
    },
    {
      name: "The Handmaid's Tale",
      url: "",
      description:
        "A woman is forced into childbearing servitude in a dystopian society.",
    },
    {
      name: "The Sopranos",
      url: "",
      description:
        "A mob boss struggles to manage his family and criminal organization.",
    },
  ],
  RealityTV: [
    {
      name: "Survivor",
      url: "",
      description:
        "Contestants are stranded in remote locations and compete for survival.",
    },
    {
      name: "The Amazing Race",
      url: "",
      description:
        "Teams race around the world, completing challenges in various countries.",
    },
    {
      name: "The Bachelor",
      url: "",
      description:
        "A single man dates multiple women to find his future wife.",
    },
    {
      name: "Big Brother",
      url: "",
      description:
        "Houseguests live together while competing for a cash prize.",
    },
    {
      name: "RuPaul's Drag Race",
      url: "",
      description:
        "Drag queens compete in various challenges to be crowned America's Next Drag Superstar.",
    },
  ],
  Thriller: [
    {
      name: "Mindhunter",
      url: "",
      description:
        "FBI agents interview serial killers to understand their psychology.",
    },
    {
      name: "Killing Eve",
      url: "",
      description:
        "An intelligence investigator becomes obsessed with a skilled assassin.",
    },
    {
      name: "True Detective",
      url: "",
      description: "Detectives investigate complex and disturbing crimes.",
    },
    {
      name: "The Sinner",
      url: "",
      description:
        "A detective investigates the motivations behind shocking crimes.",
    },
    {
      name: "Ozark",
      url: "",
      description:
        "A financial planner relocates his family to launder money for a drug cartel.",
    },
  ],
  Fantasy: [
    {
      name: "Game of Thrones",
      url: "",
      description: "Noble families vie for power in a mythical land.",
    },
    {
      name: "The Witcher",
      url: "",
      description:
        "A monster hunter navigates a world of magic and political intrigue.",
    },
    {
      name: "Shadow and Bone",
      url: "",
      description:
        "A young soldier discovers a power that could unite her war-torn world.",
    },
    {
      name: "His Dark Materials",
      url: "",
      description:
        "A girl journeys through parallel universes to save kidnapped children.",
    },
    {
      name: "The Mandalorian",
      url: "",
      description:
        "A lone bounty hunter navigates the outer reaches of the galaxy.",
    },
  ],
  Mystery: [
    {
      name: "Sherlock",
      url: "",
      description:
        "A modern update of Sherlock Holmes' detective adventures.",
    },
    {
      name: "True Detective",
      url: "",
      description: "Detectives investigate complex and disturbing crimes.",
    },
    {
      name: "Broadchurch",
      url: "",
      description: "A small town is rocked by the murder of a young boy.",
    },
    {
      name: "The Killing",
      url: "",
      description: "A Seattle detective investigates a young girl's murder.",
    },
    {
      name: "The Sinner",
      url: "",
      description:
        "A detective investigates the motivations behind shocking crimes.",
    },
  ],
  TalkShow: [
    {
      name: "The Tonight Show Starring Jimmy Fallon",
      url: "",
      description:
        "A late-night talk show featuring celebrity interviews and games.",
    },
    {
      name: "The Late Show with Stephen Colbert",
      url: "",
      description:
        "A comedic take on current events and interviews with celebrities.",
    },
    {
      name: "The Ellen DeGeneres Show",
      url: "",
      description: "Ellen hosts celebrity guests and showcases viral videos.",
    },
    {
      name: "Jimmy Kimmel Live!",
      url: "",
      description:
        "A late-night talk show featuring comedy sketches and interviews.",
    },
    {
      name: "The Daily Show",
      url: "",
      description:
        "A satirical news program covering current events and politics.",
    },
  ],
};
  
const documentaries = {
  Nature: [
    {
      name: "Planet Earth",
      url: "",
      description: "An exploration of Earth's diverse natural environments.",
    },
    {
      name: "Our Planet",
      url: "",
      description:
        "A documentary highlighting the beauty of nature and the impact of climate change.",
    },
    {
      name: "The Blue Planet",
      url: "",
      description: "A deep dive into the world's oceans and marine life.",
    },
    {
      name: "Cosmos: A Spacetime Odyssey",
      url: "",
      description: "A journey through space and time exploring the universe.",
    },
    {
      name: "March of the Penguins",
      url: "",
      description:
        "A documentary following the migration of emperor penguins.",
    },
  ],
  History: [
    {
      name: "The Civil War",
      url: "",
      description: "A comprehensive look at the American Civil War.",
    },
    {
      name: "Ken Burns: The Vietnam War",
      url: "",
      description:
        "An in-depth exploration of the Vietnam War's history and impact.",
    },
    {
      name: "13th",
      url: "",
      description:
        "Explores the history of racial inequality in the United States.",
    },
    {
      name: "The Act of Killing",
      url: "",
      description:
        "Former Indonesian death squad leaders reenact their crimes.",
    },
    {
      name: "Inside the Vatican",
      url: "",
      description:
        "A look inside the Vatican and its role in the Catholic Church.",
    },
  ],
  TrueCrime: [
    {
      name: "Making a Murderer",
      url: "",
      description:
        "A true crime documentary about a man wrongfully convicted of a crime.",
    },
    {
      name: "The Jinx",
      url: "",
      description:
        "A look at the life of a real estate heir suspected of murder.",
    },
    {
      name: "Wild Wild Country",
      url: "",
      description:
        "The rise and fall of a controversial Indian guru in Oregon.",
    },
    {
      name: "The Keepers",
      url: "",
      description:
        "Investigating the unsolved murder of a nun and its connection to abuse.",
    },
    {
      name: "Evil Genius",
      url: "",
      description: "A bizarre bank heist leads to a murder investigation.",
    },
  ],
  Science: [
    {
      name: "Cosmos: A Spacetime Odyssey",
      url: "",
      description: "A journey through space and time exploring the universe.",
    },
    {
      name: "The Universe",
      url: "",
      description: "Exploring the wonders and mysteries of our universe.",
    },
    {
      name: "The Planets",
      url: "",
      description:
        "A documentary series exploring the planets in our solar system.",
    },
    {
      name: "Brain Games",
      url: "",
      description: "A show that explores the science of how our brains work.",
    },
    {
      name: "Our Planet",
      url: "",
      description:
        "A documentary highlighting the beauty of nature and the impact of climate change.",
    },
  ],
  Biography: [
    {
      name: "Won't You Be My Neighbor?",
      url: "",
      description:
        "A look at the life of beloved children's television host Fred Rogers.",
    },
    {
      name: "Jiro Dreams of Sushi",
      url: "",
      description: "A renowned sushi chef strives for culinary perfection.",
    },
    {
      name: "Amy",
      url: "",
      description:
        "A portrait of the life and career of singer Amy Winehouse.",
    },
    {
      name: "Exit Through the Gift Shop",
      url: "",
      description: "An amateur filmmaker documents the world of street art.",
    },
    {
      name: "RBG",
      url: "",
      description:
        "A documentary about Supreme Court Justice Ruth Bader Ginsburg.",
    },
  ],
};

const podcasts = {
  TrueCrime: [
    {
      name: "Serial",
      url: "",
      description: "Investigating a 1999 murder case over multiple seasons.",
    },
    {
      name: "My Favorite Murder",
      url: "",
      description: "A comedic take on true crime stories and events.",
    },
    {
      name: "Criminal",
      url: "",
      description:
        "Stories of people who've done wrong and those who have been wronged.",
    },
    {
      name: "Casefile",
      url: "",
      description: "An Australian podcast detailing true crime cases.",
    },
    {
      name: "Sword and Scale",
      url: "",
      description:
        "Exploring the dark side of humanity and true crime stories.",
    },
  ],
  Comedy: [
    {
      name: "The Joe Rogan Experience",
      url: "",
      description: "A long-form conversation with celebrities and experts.",
    },
    {
      name: "Conan O'Brien Needs A Friend",
      url: "",
      description: "Conan interviews celebrities he admires.",
    },
    {
      name: "My Dad Wrote A Porno",
      url: "",
      description: "A comedic reading of a poorly written erotic novel.",
    },
    {
      name: "How Did This Get Made?",
      url: "",
      description: "A comedic take on bad movies with guest appearances.",
    },
    {
      name: "Wait, Wait, Don't Tell Me!",
      url: "",
      description: "A humorous take on the week's news in quiz format.",
    },
  ],
  Business: [
    {
      name: "How I Built This",
      url: "",
      description:
        "Stories behind the people who created successful companies.",
    },
    {
      name: "The Tim Ferriss Show",
      url: "",
      description:
        "Interviews with high performers to discover their secrets.",
    },
    {
      name: "The Indicator from Planet Money",
      url: "",
      description:
        "Short episodes explaining business and economic concepts.",
    },
    {
      name: "Masters of Scale",
      url: "",
      description: "Founders share their stories of scaling companies.",
    },
    {
      name: "WorkLife with Adam Grant",
      url: "",
      description: "Exploring how to make work not suck.",
    },
  ],
  Technology: [
    {
      name: "Reply All",
      url: "",
      description: "Stories about how people shape the internet.",
    },
    {
      name: "The Vergecast",
      url: "",
      description: "A weekly show discussing the latest in technology.",
    },
    {
      name: "Wired Tech in Two",
      url: "",
      description: "A quick summary of the latest technology news.",
    },
    {
      name: "Accidental Tech Podcast",
      url: "",
      description: "A discussion about tech and software development.",
    },
    {
      name: "StartUp Podcast",
      url: "",
      description: "A look at what it's really like to start a business.",
    },
  ],
  Society: [
    {
      name: "Hidden Brain",
      url: "",
      description:
        "Exploring the unconscious patterns that drive human behavior.",
    },
    {
      name: "TED Radio Hour",
      url: "",
      description: "A journey through fascinating ideas and TED talks.",
    },
    {
      name: "Freakonomics Radio",
      url: "",
      description: "Exploring the hidden side of everything with economics.",
    },
    {
      name: "Philosophize This!",
      url: "",
      description:
        "An accessible introduction to various philosophical ideas.",
    },
    {
      name: "The Happiness Lab",
      url: "",
      description: "Exploring the science of happiness and well-being.",
    },
  ],
};

export {movies, shows, documentaries, podcasts};