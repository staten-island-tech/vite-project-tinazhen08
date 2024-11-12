const movies = [
  {
    name: "Die Hard",
    url: "imgs/movieIMG/diehard.jpg",
    description: "An NYPD officer battles terrorists in a Los Angeles skyscraper.",
    release: 1988,
    price: 9.99,
    genre: "Action",
  },
  {
    name: "Mad Max: Fury Road",
    url: "",
    description: "In a post-apocalyptic world, a warrior teams up with rebels to save a group of women.",
    release: 2015,
    price: 14.99,
    genre: "Action",
  },
  {
    name: "John Wick",
    url: "",
    description: "A retired hitman seeks vengeance against those who wronged him.",
    release: 2014,
    price: 12.99,
    genre: "Action",
  },
  {
    name: "The Dark Knight",
    url: "",
    description: "Batman faces the Joker, a criminal mastermind bent on chaos.",
    release: 2008,
    price: 13.99,
    genre: "Action",
  },
  {
    name: "Gladiator",
    url: "",
    description: "A betrayed Roman general seeks revenge against the corrupt emperor.",
    release: 2000,
    price: 10.99,
    genre: "Action",
  },
  {
    name: "Superbad",
    url: "",
    description: "Two high school friends navigate a wild night before graduation.",
    release: 2007,
    price: 7.99,
    genre: "Comedy",
  },
  {
    name: "The Hangover",
    url: "",
    description: "A bachelor party in Las Vegas goes horribly wrong after a night of partying.",
    release: 2009,
    price: 8.99,
    genre: "Comedy",
  },
  {
    name: "Bridesmaids",
    url: "",
    description: "A woman's life spirals out of control as she competes to be her best friend's maid of honor.",
    release: 2011,
    price: 9.99,
    genre: "Comedy",
  },
  {
    name: "Mean Girls",
    url: "",
    description: "A teenage girl navigates the social cliques of a new high school.",
    release: 2004,
    price: 6.99,
    genre: "Comedy",
  },
  {
    name: "Groundhog Day",
    url: "",
    description: "A weatherman relives the same day over and over until he gets it right.",
    release: 1993,
    price: 5.99,
    genre: "Comedy",
  },
  {
    name: "The Shawshank Redemption",
    url: "",
    description: "A man wrongfully imprisoned forms a friendship with a fellow inmate.",
    release: 1994,
    price: 10.99,
    genre: "Drama",
  },
  {
    name: "Forrest Gump",
    url: "",
    description: "A slow-witted man inadvertently influences major historical events.",
    release: 1994,
    price: 8.99,
    genre: "Drama",
  },
  {
    name: "Fight Club",
    url: "",
    description: "An insomniac office worker forms an underground fight club.",
    release: 1999,
    price: 9.99,
    genre: "Drama",
  },
  {
    name: "The Godfather",
    url: "",
    description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    release: 1972,
    price: 11.99,
    genre: "Drama",
  },
  {
    name: "Pulp Fiction",
    url: "",
    description: "Interconnected stories of crime unfold in Los Angeles.",
    release: 1994,
    price: 9.99,
    genre: "Drama",
  },
  {
    name: "The Shining",
    url: "",
    description: "A family becomes winter caretakers of a haunted hotel.",
    release: 1980,
    price: 12.99,
    genre: "Horror",
  },
  {
    name: "Get Out",
    url: "",
    description: "A young Black man uncovers a disturbing secret while visiting his white girlfriend's family.",
    release: 2017,
    price: 14.99,
    genre: "Horror",
  },
  {
    name: "A Nightmare on Elm Street",
    url: "",
    description: "Teens are hunted in their dreams by a vengeful spirit.",
    release: 1984,
    price: 8.99,
    genre: "Horror",
  },
  {
    name: "The Babadook",
    url: "",
    description: "A mother and her son are haunted by a sinister presence from a storybook.",
    release: 2014,
    price: 10.99,
    genre: "Horror",
  },
  {
    name: "Hereditary",
    url: "",
    description: "A family uncovers dark secrets after the death of their secretive grandmother.",
    release: 2018,
    price: 15.99,
    genre: "Horror",
  },
  {
    name: "Blade Runner",
    url: "",
    description: "A detective hunts rogue replicants in a dystopian future.",
    release: 1982,
    price: 13.99,
    genre: "SciFi",
  },
  {
    name: "Star Wars",
    url: "",
    description: "A group of rebels fights against an oppressive empire in a galaxy far, far away.",
    release: 1977,
    price: 10.99,
    genre: "SciFi",
  },
  {
    name: "Inception",
    url: "",
    description: "A skilled thief enters the dreams of others to steal secrets.",
    release: 2010,
    price: 11.99,
    genre: "SciFi",
  },
  {
    name: "The Matrix",
    url: "",
    description: "A hacker discovers the world he knows is a simulated reality.",
    release: 1999,
    price: 9.99,
    genre: "SciFi",
  },
  {
    name: "Arrival",
    url: "",
    description: "A linguist is tasked with communicating with alien visitors.",
    release: 2016,
    price: 12.99,
    genre: "SciFi",
  },
  {
    name: "Pride and Prejudice",
    url: "",
    description: "A spirited young woman navigates love and societal expectations.",
    release: 2005,
    price: 7.99,
    genre: "Romance",
  },
  {
    name: "The Notebook",
    url: "",
    description: "A passionate love story unfolds across decades.",
    release: 2004,
    price: 8.99,
    genre: "Romance",
  },
  {
    name: "Titanic",
    url: "",
    description: "A forbidden romance develops aboard the ill-fated ship.",
    release: 1997,
    price: 9.99,
    genre: "Romance",
  },
  {
    name: "When Harry Met Sally",
    url: "",
    description: "Two friends debate whether men and women can be just friends.",
    release: 1989,
    price: 7.99,
    genre: "Romance",
  },
  {
    name: "La La Land",
    url: "",
    description: "A jazz musician and an aspiring actress pursue their dreams in Los Angeles.",
    release: 2016,
    price: 13.99,
    genre: "Romance",
  },
  {
    name: "Toy Story",
    url: "",
    description: "A cowboy doll is profoundly threatened by a new spaceman figure.",
    release: 1995,
    price: 9.99,
    genre: "Animation",
  },
  {
    name: "Finding Nemo",
    url: "",
    description: "A clownfish embarks on a journey to find his missing son.",
    release: 2003,
    price: 8.99,
    genre: "Animation",
  },
  {
    name: "Spirited Away",
    url: "",
    description: "A girl navigates a mystical world to save her parents.",
    release: 2001,
    price: 11.99,
    genre: "Animation",
  },
  {
    name: "Shrek",
    url: "",
    description: "An ogre's peaceful life is disrupted by fairy tale creatures.",
    release: 2001,
    price: 8.99,
    genre: "Animation",
  },
  {
    name: "Coco",
    url: "",
    description: "A boy journeys into the Land of the Dead to uncover his family's history.",
    release: 2017,
    price: 12.99,
    genre: "Animation",
  },
];

const shows = [
  {
    name: "Friends",
    url: "imgs/shows/friends.jpg",
    description: "A group of friends navigates life and love in New York City.",
    release: "1994 - 2004",
    price: 12.99,
    genre: "Sitcom",
  },
  {
    name: "The Office",
    url: "",
    description: "A mockumentary about the daily lives of office employees.",
    release: "2005 - 2013",
    price: 9.99,
    genre: "Sitcom",
  },
  {
    name: "Parks and Recreation",
    url: "",
    description: "A quirky department in a small town manages local government.",
    release: "2009 - 2015",
    price: 10.99,
    genre: "Sitcom",
  },
  {
    name: "Brooklyn Nine-Nine",
    url: "",
    description: "A team of detectives solves crimes in a New York precinct.",
    release: "2013 - 2021",
    price: 11.99,
    genre: "Sitcom",
  },
  {
    name: "How I Met Your Mother",
    url: "",
    description: "A man recounts the story of how he met the mother of his children.",
    release: "2005 - 2014",
    price: 9.99,
    genre: "Sitcom",
  },
  {
    name: "Breaking Bad",
    url: "",
    description: "A chemistry teacher turns to cooking meth after a cancer diagnosis.",
    release: "2008 - 2013",
    price: 14.99,
    genre: "DramaSeries",
  },
  {
    name: "The Crown",
    url: "",
    description: "The reign of Queen Elizabeth II is chronicled over decades.",
    release: "2016 - Present",
    price: 15.99,
    genre: "DramaSeries",
  },
  {
    name: "Game of Thrones",
    url: "",
    description: "Noble families vie for power in a mythical land.",
    release: "2011 - 2019",
    price: 13.99,
    genre: "DramaSeries",
  },
  {
    name: "The Handmaid's Tale",
    url: "",
    description: "A woman is forced into childbearing servitude in a dystopian society.",
    release: "2017 - Present",
    price: 14.99,
    genre: "DramaSeries",
  },
  {
    name: "The Sopranos",
    url: "",
    description: "A mob boss struggles to manage his family and criminal organization.",
    release: "1999 - 2007",
    price: 12.99,
    genre: "DramaSeries",
  },
  {
    name: "Survivor",
    url: "",
    description: "Contestants are stranded in remote locations and compete for survival.",
    release: "2000 - Present",
    price: 8.99,
    genre: "RealityTV",
  },
  {
    name: "The Amazing Race",
    url: "",
    description: "Teams race around the world, completing challenges in various countries.",
    release: "2001 - Present",
    price: 9.99,
    genre: "RealityTV",
  },
  {
    name: "The Bachelor",
    url: "",
    description: "A single man dates multiple women to find his future wife.",
    release: "2002 - Present",
    price: 7.99,
    genre: "RealityTV",
  },
  {
    name: "Big Brother",
    url: "",
    description: "Houseguests live together while competing for a cash prize.",
    release: "2000 - Present",
    price: 6.99,
    genre: "RealityTV",
  },
  {
    name: "RuPaul's Drag Race",
    url: "",
    description: "Drag queens compete in various challenges to be crowned America's Next Drag Superstar.",
    release: "2009 - Present",
    price: 10.99,
    genre: "RealityTV",
  },
  {
    name: "Mindhunter",
    url: "",
    description: "FBI agents interview serial killers to understand their psychology.",
    release: "2017 - 2019",
    price: 11.99,
    genre: "Thriller",
  },
  {
    name: "Killing Eve",
    url: "",
    description: "An intelligence investigator becomes obsessed with a skilled assassin.",
    release: "2018 - 2022",
    price: 12.99,
    genre: "Thriller",
  },
  {
    name: "True Detective",
    url: "",
    description: "Detectives investigate complex and disturbing crimes.",
    release: "2014 - Present",
    price: 13.99,
    genre: "Thriller",
  },
  {
    name: "The Sinner",
    url: "",
    description: "A detective investigates the motivations behind shocking crimes.",
    release: "2017 - 2021",
    price: 10.99,
    genre: "Thriller",
  },
  {
    name: "Ozark",
    url: "",
    description: "A financial planner relocates his family to launder money for a drug cartel.",
    release: "2017 - 2022",
    price: 14.99,
    genre: "Thriller",
  },
  {
    name: "Game of Thrones",
    url: "",
    description: "Noble families vie for power in a mythical land.",
    release: "2011 - 2019",
    price: 13.99,
    genre: "Fantasy",
  },
  {
    name: "The Witcher",
    url: "",
    description: "A monster hunter navigates a world of magic and political intrigue.",
    release: "2019 - Present",
    price: 11.99,
    genre: "Fantasy",
  },
  {
    name: "Shadow and Bone",
    url: "",
    description: "A young soldier discovers a power that could unite her war-torn world.",
    release: "2021 - Present",
    price: 10.99,
    genre: "Fantasy",
  },
  {
    name: "His Dark Materials",
    url: "",
    description: "A girl journeys through parallel universes to save kidnapped children.",
    release: "2019 - 2022",
    price: 12.99,
    genre: "Fantasy",
  },
  {
    name: "The Mandalorian",
    url: "",
    description: "A lone bounty hunter navigates the outer reaches of the galaxy.",
    release: "2019 - Present",
    price: 13.99,
    genre: "Fantasy",
  },
  {
    name: "Sherlock",
    url: "",
    description: "A modern update of Sherlock Holmes' detective adventures.",
    release: "2010 - 2017",
    price: 11.99,
    genre: "Mystery",
  },
  {
    name: "True Detective",
    url: "",
    description: "Detectives investigate complex and disturbing crimes.",
    release: "2014 - Present",
    price: 13.99,
    genre: "Mystery",
  },
  {
    name: "Broadchurch",
    url: "",
    description: "A small town is rocked by the murder of a young boy.",
    release: "2013 - 2017",
    price: 10.99,
    genre: "Mystery",
  },
  {
    name: "The Killing",
    url: "",
    description: "A Seattle detective investigates a young girl's murder.",
    release: "2011 - 2014",
    price: 9.99,
    genre: "Mystery",
  },
  {
    name: "The Sinner",
    url: "",
    description: "A detective investigates the motivations behind shocking crimes.",
    release: "2017 - 2021",
    price: 10.99,
    genre: "Mystery",
  },
  {
    name: "The Tonight Show Starring Jimmy Fallon",
    url: "",
    description: "A late-night talk show featuring celebrity interviews and games.",
    release: "2014 - Present",
    price: 6.99,
    genre: "TalkShow",
  },
  {
    name: "The Late Show with Stephen Colbert",
    url: "",
    description: "A comedic take on current events and interviews with celebrities.",
    release: "2015 - Present",
    price: 7.99,
    genre: "TalkShow",
  },
  {
    name: "The Ellen DeGeneres Show",
    url: "",
    description: "Ellen hosts celebrity guests and showcases viral videos.",
    release: "2003 - 2022",
    price: 8.99,
    genre: "TalkShow",
  },
  {
    name: "Jimmy Kimmel Live!",
    url: "",
    description: "A late-night talk show featuring comedy sketches and interviews.",
    release: "2003 - Present",
    price: 7.99,
    genre: "TalkShow",
  },
  {
    name: "The Daily Show",
    url: "",
    description: "A satirical news program covering current events and politics.",
    release: "1996 - Present",
    price: 6.99,
    genre: "TalkShow",
  },
];
  
const documentaries = [
  {
    name: "Planet Earth",
    url: "imgs/documentaries/planetEarth.jpg",
    description: "An exploration of Earth's diverse natural environments.",
    release: 2006,
    price: 9.99,
    genre: "Nature",
  },
  {
    name: "Our Planet",
    url: "",
    description: "A documentary highlighting the beauty of nature and the impact of climate change.",
    release: 2019,
    price: 12.99,
    genre: "Nature",
  },
  {
    name: "The Blue Planet",
    url: "",
    description: "A deep dive into the world's oceans and marine life.",
    release: 2001,
    price: 8.99,
    genre: "Nature",
  },
  {
    name: "Cosmos: A Spacetime Odyssey",
    url: "",
    description: "A journey through space and time exploring the universe.",
    release: 2014,
    price: 14.99,
    genre: "Nature",
  },
  {
    name: "March of the Penguins",
    url: "",
    description: "A documentary following the migration of emperor penguins.",
    release: 2005,
    price: 7.99,
    genre: "Nature",
  },
  {
    name: "The Civil War",
    url: "",
    description: "A comprehensive look at the American Civil War.",
    release: 1990,
    price: 11.99,
    genre: "History",
  },
  {
    name: "Ken Burns: The Vietnam War",
    url: "",
    description: "An in-depth exploration of the Vietnam War's history and impact.",
    release: 2017,
    price: 13.99,
    genre: "History",
  },
  {
    name: "13th",
    url: "",
    description: "Explores the history of racial inequality in the United States.",
    release: 2016,
    price: 9.99,
    genre: "History",
  },
  {
    name: "The Act of Killing",
    url: "",
    description: "Former Indonesian death squad leaders reenact their crimes.",
    release: 2012,
    price: 10.99,
    genre: "History",
  },
  {
    name: "Inside the Vatican",
    url: "",
    description: "A look inside the Vatican and its role in the Catholic Church.",
    release: 2019,
    price: 11.99,
    genre: "History",
  },
  {
    name: "Making a Murderer",
    url: "",
    description: "A true crime documentary about a man wrongfully convicted of a crime.",
    release: 2015,
    price: 13.99,
    genre: "TrueCrime",
  },
  {
    name: "The Jinx",
    url: "",
    description: "A look at the life of a real estate heir suspected of murder.",
    release: 2015,
    price: 12.99,
    genre: "TrueCrime",
  },
  {
    name: "Wild Wild Country",
    url: "",
    description: "The rise and fall of a controversial Indian guru in Oregon.",
    release: 2018,
    price: 14.99,
    genre: "TrueCrime",
  },
  {
    name: "The Keepers",
    url: "",
    description: "Investigating the unsolved murder of a nun and its connection to abuse.",
    release: 2017,
    price: 13.99,
    genre: "TrueCrime",
  },
  {
    name: "Evil Genius",
    url: "",
    description: "A bizarre bank heist leads to a murder investigation.",
    release: 2018,
    price: 12.99,
    genre: "TrueCrime",
  },
  {
    name: "Cosmos: A Spacetime Odyssey",
    url: "",
    description: "A journey through space and time exploring the universe.",
    release: 2014,
    price: 14.99,
    genre: "Science",
  },
  {
    name: "The Universe",
    url: "",
    description: "Exploring the wonders and mysteries of our universe.",
    release: 2007,
    price: 9.99,
    genre: "Science",
  },
  {
    name: "The Planets",
    url: "",
    description: "A documentary series exploring the planets in our solar system.",
    release: 2019,
    price: 13.99,
    genre: "Science",
  },
  {
    name: "Brain Games",
    url: "",
    description: "A show that explores the science of how our brains work.",
    release: 2013,
    price: 8.99,
    genre: "Science",
  },
  {
    name: "Our Planet",
    url: "",
    description: "A documentary highlighting the beauty of nature and the impact of climate change.",
    release: 2019,
    price: 12.99,
    genre: "Science",
  },
  {
    name: "Won't You Be My Neighbor?",
    url: "",
    description: "A look at the life of beloved children's television host Fred Rogers.",
    release: 2018,
    price: 11.99,
    genre: "Biography",
  },
  {
    name: "Jiro Dreams of Sushi",
    url: "",
    description: "A renowned sushi chef strives for culinary perfection.",
    release: 2011,
    price: 10.99,
    genre: "Biography",
  },
  {
    name: "Amy",
    url: "",
    description: "A portrait of the life and career of singer Amy Winehouse.",
    release: 2015,
    price: 12.99,
    genre: "Biography",
  },
  {
    name: "Exit Through the Gift Shop",
    url: "",
    description: "An amateur filmmaker documents the world of street art.",
    release: 2010,
    price: 9.99,
    genre: "Biography",
  },
  {
    name: "RBG",
    url: "",
    description: "A documentary about Supreme Court Justice Ruth Bader Ginsburg.",
    release: 2018,
    price: 11.99,
    genre: "Biography",
  },
];

const podcasts = [
  {
    name: "Serial",
    url: "imgs/podcasts/serial.jpg",
    description: "Investigating a 1999 murder case over multiple seasons.",
    release: "2014 - Present",
    price: 5.99,
    genre: "TrueCrime",
  },
  {
    name: "My Favorite Murder",
    url: "",
    description: "A comedic take on true crime stories and events.",
    release: "2016 - Present",
    price: 6.99,
    genre: "TrueCrime",
  },
  {
    name: "Criminal",
    url: "",
    description: "Stories of people who've done wrong and those who have been wronged.",
    release: "2014 - Present",
    price: 4.99,
    genre: "TrueCrime",
  },
  {
    name: "Casefile",
    url: "",
    description: "An Australian podcast detailing true crime cases.",
    release: "2016 - Present",
    price: 3.99,
    genre: "TrueCrime",
  },
  {
    name: "Sword and Scale",
    url: "",
    description: "Exploring the dark side of humanity and true crime stories.",
    release: "2014 - Present",
    price: 5.99,
    genre: "TrueCrime",
  },
  {
    name: "The Joe Rogan Experience",
    url: "",
    description: "A long-form conversation with celebrities and experts.",
    release: "2009 - Present",
    price: 0.00,  // Free
    genre: "Comedy",
  },
  {
    name: "Conan O'Brien Needs A Friend",
    url: "",
    description: "Conan interviews celebrities he admires.",
    release: "2018 - Present",
    price: 0.00,  // Free
    genre: "Comedy",
  },
  {
    name: "My Dad Wrote A Porno",
    url: "",
    description: "A comedic reading of a poorly written erotic novel.",
    release: "2015 - Present",
    price: 4.99,
    genre: "Comedy",
  },
  {
    name: "How Did This Get Made?",
    url: "",
    description: "A comedic take on bad movies with guest appearances.",
    release: "2010 - Present",
    price: 5.99,
    genre: "Comedy",
  },
  {
    name: "Wait, Wait, Don't Tell Me!",
    url: "",
    description: "A humorous take on the week's news in quiz format.",
    release: "1998 - Present",
    price: 3.99,
    genre: "Comedy",
  },
  {
    name: "How I Built This",
    url: "",
    description: "Stories behind the people who created successful companies.",
    release: "2016 - Present",
    price: 4.99,
    genre: "Business",
  },
  {
    name: "The Tim Ferriss Show",
    url: "",
    description: "Interviews with high performers to discover their secrets.",
    release: "2014 - Present",
    price: 5.99,
    genre: "Business",
  },
  {
    name: "The Indicator from Planet Money",
    url: "",
    description: "Short episodes explaining business and economic concepts.",
    release: "2017 - Present",
    price: 3.99,
    genre: "Business",
  },
  {
    name: "Masters of Scale",
    url: "",
    description: "Founders share their stories of scaling companies.",
    release: "2017 - Present",
    price: 6.99,
    genre: "Business",
  },
  {
    name: "WorkLife with Adam Grant",
    url: "",
    description: "Exploring how to make work not suck.",
    release: "2018 - Present",
    price: 5.99,
    genre: "Business",
  },
  {
    name: "Reply All",
    url: "",
    description: "Stories about how people shape the internet.",
    release: "2014 - 2020",
    price: 7.99,
    genre: "Technology",
  },
  {
    name: "The Vergecast",
    url: "",
    description: "A weekly show discussing the latest in technology.",
    release: "2014 - Present",
    price: 0.00,  // Free
    genre: "Technology",
  },
  {
    name: "Wired Tech in Two",
    url: "",
    description: "A quick summary of the latest technology news.",
    release: "2019 - Present",
    price: 2.99,
    genre: "Technology",
  },
  {
    name: "Accidental Tech Podcast",
    url: "",
    description: "A discussion about tech and software development.",
    release: "2013 - Present",
    price: 3.99,
    genre: "Technology",
  },
  {
    name: "StartUp Podcast",
    url: "",
    description: "A look at what it's really like to start a business.",
    release: "2014 - Present",
    price: 5.99,
    genre: "Technology",
  },
  {
    name: "Hidden Brain",
    url: "",
    description: "Exploring the unconscious patterns that drive human behavior.",
    release: "2015 - Present",
    price: 4.99,
    genre: "Society",
  },
  {
    name: "TED Radio Hour",
    url: "",
    description: "A journey through fascinating ideas and TED talks.",
    release: "2013 - Present",
    price: 0.00,  // Free
    genre: "Society",
  },
  {
    name: "Freakonomics Radio",
    url: "",
    description: "Exploring the hidden side of everything with economics.",
    release: "2010 - Present",
    price: 3.99,
    genre: "Society",
  },
  {
    name: "Philosophize This!",
    url: "",
    description: "An accessible introduction to various philosophical ideas.",
    release: "2013 - Present",
    price: 2.99,
    genre: "Society",
  },
  {
    name: "The Happiness Lab",
    url: "",
    description: "Exploring the science of happiness and well-being.",
    release: "2019 - Present",
    price: 4.99,
    genre: "Society",
  },
];

export {movies, shows, documentaries, podcasts};