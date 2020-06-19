Use Episode2DB;

INSERT INTO planets 
	(id, name, star, sector, moon, rotation, rebel, empire, blackSuns)
VALUES 
(1, "Kashyyyk", "Mytaranor", 3, 26, true, false, false),
(2, "Mustafar", "Atravis", 0, 36, false, true, false),
(3, "Naboo", "Chommell", 3, 26, true, false, false),
(4, "Ryloth", "Gaulus", 3, true, false, false),
(5, "Kamino", "Extragalactic", 3, 27, false, true, true),
(6, "Concord Dawn", "Mytaranor", 3, 26, true, false, false);

INSERT INTO locations 
	(city, picture, decription, cost, address, rating, PlanetId)
Values 
	(Kachiro, " ", "Located in a friendly, quiet and safe neighborhood called GGRrtgggrrr, this home is 2 blocks west of the capitol and a short walk or bike trip to downtown and the hover train. Fully stocked with fridge and stove, this cozy and bright unit with a great view, is decorated in 2630s retro style, and has a comfy queen luxury firm bed and pull out couch. On-site credit laundry. Pet friendly but please contact me before booking to review policy.", 36,000, "118 W. Apricot", 4.93, 1);
