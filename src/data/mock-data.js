// Some fake-ish data to represent server responses for the basic-graphql-server github project
// https://github.com/globalroo/basic-graphql-server.git
// Images and meta data courtesy of https://www.themoviedb.org/
// This product uses the TMDb API but is not endorsed or certified by TMDb.

import { config } from "../../config";
export const videos = [
	{
		id: 1,
		title: "Minions",
		ratio: "2x3",
		relatedVideos: [13, 11, 2, 5, 18],
		posterPath: `${config.IMAGE_PATH}/q0R4crx2SehcEEQEkYObktdeFy.jpg`,
		backdropPath: `${config.IMAGE_PATH}/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg`,
		synopsis: "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
		releaseDate: "2015-06-17"
	},
	{
		id: 2,
		title: "Beauty and the Beast",
		ratio: "16x9",
		relatedVideos: [1, 14, 20, 5, 6],
		posterPath: `${config.IMAGE_PATH}/tWqifoYuwLETmmasnGHO7xBjEtt.jpg`,
		backdropPath: `${config.IMAGE_PATH}/6aUWe0GSl69wMTSWWexsorMIvwU.jpg`,
		synopsis: "A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell.",
		releaseDate: "2017-03-16"
	},
	{
		id: 3,
		ratio: "4x3",
		relatedVideos: [5, 6, 2, 7, 12],
		title: "It",
		posterPath: `${config.IMAGE_PATH}/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg`,
		backdropPath: `${config.IMAGE_PATH}/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg`,
		synopsis: "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
		releaseDate: "2017-09-05"
	},
	{
		id: 4,
		ratio: "4x3",
		relatedVideos: [2, 5, 9, 1, 20],
		title: "Annabelle: Creation",
		posterPath: `${config.IMAGE_PATH}/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg`,
		backdropPath: `${config.IMAGE_PATH}/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg`,
		synopsis: "Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
		releaseDate: "2017-08-03"
	},
	{
		id: 5,
		ratio: "16x9",
		relatedVideos: [12, 2, 13, 2, 7],
		title: "Despicable Me 3",
		posterPath: `${config.IMAGE_PATH}/5qcUGqWoWhEsoQwNUrtf3y3fcWn.jpg`,
		backdropPath: `${config.IMAGE_PATH}/ftRkFtAGuHngHnLiOxktq0aCVMF.jpg`,
		synopsis: "Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination.",
		releaseDate: "2017-06-15"
	},
	{
		id: 6,
		ratio: "2x3",
		relatedVideos: [3, 2, 1, 7, 11],
		title: "Guardians of the Galaxy",
		posterPath: `${config.IMAGE_PATH}/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg`,
		backdropPath: `${config.IMAGE_PATH}/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg`,
		synopsis: "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
		releaseDate: "2014-07-30"
	},
	{
		id: 7,
		title: "Wonder Woman",
		posterPath: `${config.IMAGE_PATH}/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg`,
		backdropPath: `${config.IMAGE_PATH}/6iUNJZymJBMXXriQyFZfLAKnjO6.jpg`,
		synopsis: "An Amazon princess comes to the world of Man to become the greatest of the female superheroes.",
		releaseDate: "2017-05-30",
		ratio: "2x3",
		relatedVideos: [4, 18, 3, 9, 15]
	},
	{
		id: 8,
		title: "Interstellar",
		posterPath: `${config.IMAGE_PATH}/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg`,
		backdropPath: `${config.IMAGE_PATH}/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg`,
		synopsis: "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
		releaseDate: "2014-11-05",
		ratio: "4x3",
		relatedVideos: [1, 2, 15, 4, 14]
	},
	{
		id: 9,
		title: "Spider-Man: Homecoming",
		posterPath: `${config.IMAGE_PATH}/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg`,
		backdropPath: `${config.IMAGE_PATH}/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg`,
		synopsis: "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
		releaseDate: "2017-07-05",
		ratio: "2x3",
		relatedVideos: [17, 14, 15, 16, 1],
	},
	{
		id: 10,
		title: "Jurassic World",
		posterPath: `${config.IMAGE_PATH}/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg`,
		backdropPath: `${config.IMAGE_PATH}/dkMD5qlogeRMiEixC4YNPUvax2T.jpg`,
		synopsis: "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
		releaseDate: "2015-06-09",
		ratio: "2x3",
		relatedVideos: [1, 2, 8, 13, 11]
	},
	{
		id: 11,
		title: "Pirates of the Caribbean: Dead Men Tell No Tales",
		posterPath: `${config.IMAGE_PATH}/xbpSDU3p7YUGlu9Mr6Egg2Vweto.jpg`,
		backdropPath: `${config.IMAGE_PATH}/tZvdyLP2F6x2TTuh292ceH87qZT.jpg`,
		synopsis: "Thrust into an all-new adventure, a down-on-his-luck Capt. Jack Sparrow feels the winds of ill-fortune blowing even more strongly when deadly ghost sailors led by his old nemesis, the evil Capt. Salazar, escape from the Devil's Triangle. Jack's only hope of survival lies in seeking out the legendary Trident of Poseidon, but to find it, he must forge an uneasy alliance with a brilliant and beautiful astronomer and a headstrong young man in the British navy.",
		releaseDate: "2017-05-23",
		ratio: "4x3",
		relatedVideos: [17, 13, 1, 3, 9]
	},
	{
		id: 12,
		title: "Guardians of the Galaxy Vol. 2",
		posterPath: `${config.IMAGE_PATH}/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg`,
		backdropPath: `${config.IMAGE_PATH}/aJn9XeesqsrSLKcHfHP4u5985hn.jpg`,
		synopsis: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
		releaseDate: "2017-04-19",
		ratio: "16x9",
		relatedVideos: [15, 14, 2, 18, 6]
	},
	{
		id: 13,
		title: "Mad Max: Fury Road",
		posterPath: `${config.IMAGE_PATH}/kqjL17yufvn9OVLyXYpvtyrFfak.jpg`,
		backdropPath: `${config.IMAGE_PATH}/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg`,
		synopsis: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
		releaseDate: "2015-05-13",
		ratio: "16x9",
		relatedVideos: [1, 9, 3, 5, 8]
	},
	{
		id: 14,
		title: "Deadpool",
		posterPath: `${config.IMAGE_PATH}/inVq3FRqcYIRl2la8iZikYYxFNR.jpg`,
		backdropPath: `${config.IMAGE_PATH}/n1y094tVDFATSzkTnFxoGZ1qNsG.jpg`,
		synopsis: "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
		releaseDate: "2016-02-09",
		ratio: "4x3",
		relatedVideos: [15, 13, 11, 7, 17],
	},
	{
		id: 15,
		title: "The Layover",
		posterPath: `${config.IMAGE_PATH}/kb9osnqanXRpkpm1bnSqAhKoq5T.jpg`,
		backdropPath: `${config.IMAGE_PATH}/ibianpvL865w7rBPAg3sPlEXUyh.jpg`,
		synopsis: "When their plane is rerouted due to a hurricane warning, two single female best friends find themselves competing for the same guy during an extended layover in St. Louis.",
		releaseDate: "2017-09-01",
		ratio: "3x4",
		relatedVideos: [4, 3, 9, 11, 12]
	},
	{
		id: 16,
		title: "Alien: Covenant",
		posterPath: `${config.IMAGE_PATH}/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg`,
		backdropPath: `${config.IMAGE_PATH}/kMU8trT43p5LFoJ4plIySMOsZ1T.jpg`,
		synopsis: "Bound for a remote planet on the far side of the galaxy, the crew of the colony ship 'Covenant' discovers what is thought to be an uncharted paradise, but is actually a dark, dangerous world – which has its sole inhabitant the 'synthetic', David, survivor of the doomed Prometheus expedition.",
		releaseDate: "2017-05-09",
		ratio: "4x3",
		relatedVideos: [14, 15, 20, 8, 12],
	},
	{
		id: 17,
		title: "Logan",
		posterPath: `${config.IMAGE_PATH}/gGBu0hKw9BGddG8RkRAMX7B6NDB.jpg`,
		backdropPath: `${config.IMAGE_PATH}/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg`,
		synopsis: "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
		releaseDate: "2017-02-28",
		ratio: "16x9",
		relatedVideos: [7, 1, 8, 12, 9]
	},
	{
		id: 18,
		title: "Dunkirk",
		posterPath: `${config.IMAGE_PATH}/bOXBV303Fgkzn2K4FeKDc0O31q4.jpg`,
		backdropPath: `${config.IMAGE_PATH}/fudEG1VUWuOqleXv6NwCExK0VLy.jpg`,
		synopsis: "The miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26th and June 4th 1940, during the Battle of France in World War II.",
		releaseDate: "2017-07-19",
		ratio: "4x3",
		relatedVideos: [16, 3, 11, 5, 8]
	},
	{
		id: 19,
		title: "Transformers: The Last Knight",
		posterPath: `${config.IMAGE_PATH}/s5HQf2Gb3lIO2cRcFwNL9sn1o1o.jpg`,
		backdropPath: `${config.IMAGE_PATH}/Ytv7P13rbwQ3mLpCAY8lBTqI5s.jpg`,
		synopsis: "Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.",
		releaseDate: "2017-06-21",
		ratio: "2x3",
		relatedVideos: [2, 11, 16, 5, 14]
	},
	{
		id: 20,
		title: "The Hitman's Bodyguard",
		posterPath: `${config.IMAGE_PATH}/5CGjlz2vyBhW5xHW4eNOZIdgzYq.jpg`,
		backdropPath: `${config.IMAGE_PATH}/7KsqfXDECZMryX1Rv4RKsT7SIjQ.jpg`,
		synopsis: "The world's top bodyguard gets a new client, a hit man who must testify at the International Court of Justice. They must put their differences aside and work together to make it to the trial on time.",
		releaseDate: "2017-08-16",
		ratio: "2x3",
		relatedVideos: [2, 5, 17, 13, 19]
	}
];
