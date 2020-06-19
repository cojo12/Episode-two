Use Episode2DB;

INSERT INTO planets 
	(createdAT, updatedAT, name, star, sector, moon, rotation, rebel, empire, blackSuns)
VALUES 
(NOW(), NOW(), "Kashyyyk", 1, "Mytaranor", 3, 26, true, false, false),
(NOW(), NOW(), "Mustafar", 1, "Atravis", 0, 36, false, true, false),
(NOW(), NOW(), "Naboo", 1,  "Chommell", 3, 26, true, false, false),
(NOW(), NOW(), "Ryloth", 1, "Gaulus", 3, 35, true, false, false),
(NOW(), NOW(), "Kamino", 1, "Extragalactic", 3, 27, false, true, true),
(NOW(), NOW(), "Concord Dawn", 1, "Mytaranor", 3, 26, true, false, false);

INSERT INTO locations 
	(createdAT, updatedAT, city, picture, decription, cost, address, rating, PlanetId)
Values 
	(NOW(), NOW(), "Kachiro", " ", "Located in a friendly, quiet and safe neighborhood called GGRrtgggrrr, this home is 2 blocks west of the capitol and a short walk or bike trip to downtown and the hover train. Fully stocked with fridge and stove, this cozy and bright unit with a great view, is decorated in 2630s retro style, and has a comfy queen luxury firm bed and pull out couch. On-site credit laundry. Pet friendly but please contact me before booking to review policy.", 36000, "118 W. Apricot", 4.93, 1),
	(NOW(), NOW(),"ALij Tjo", " ","Our magic Dome is quiet and calm, perfect for those who prefer to avoid the masses and noise. It is separate from the other facilities and has a kitchen, a shower and an outdoor air bath surrounded by our young reforested forest. The view of Puntarenas and the starry sky at night is overwhelming.The dome has a special price since it is in the test phase. In our survey, they told us we could charge the couple 15000 credits a night, so take advantage!", 22000, "Redwood Road", 4.88, 1),
	(NOW(), NOW(), "Two Trees", " ", "This is the place for guests who want to disconnect, be ‘off-grid’ and get away from it all. It’s for those of you who have a sense of adventure, are up for trying something new, enjoy bumpy and steep roads in a 4x4 (not AWD) and who, come rain or shine, won’t let the weather stop them from doing what they want. It’s an adrenalin junkies paradise, perfect for those who want to wake up to the sounds of monkeys, trek through the jungle and jump in a freshwater plunge pool all before breakfast! It’s for the nature lovers among you who will no doubt discover animals of all shapes and sizes throughout their stay both on our lodge’s doorstep and with perhaps, the occasional smaller visitor inside.", 96420, "564 Padme way", 4.80, 1),
	(NOW(), NOW(), "Black Sun Fortress", " ", "Lookout on lava in paradise, with sunny days and clear starry nights for the Milky Way. Enjoy luxury in an off-grid oasis where solar panels and rain catchment power all systems. Meet the frontier where the lava greets the sun; a weekly block party every Wed. & black sands beaches both 5 mins away. The Kāne room is one of four private studios that include the shared kitchen and work well for large groups",  78000000, "No address found", 4.85, 2),
	(NOW(), NOW(), "Vasder's Fortress", " ", "The room set in a remote lava field in a tropical rainforest. It has ocean views, large oversized rooms, soaring tall ceilings , classic modernist furnishings and moving walls of glass. The sleek simplicity of the architecture, juxtaposed by the jagged lava field will inspire most seeking a design experience . The property is flanked by acres of pristine untouched state land. Stunning views that sweep from the upper ridge of the rift zone down to the glimmering blue ocean. The pool wraps the front of the house, providing a lovely reflecting pond for the architecture and untouched natural environment. The Lava Flow house is the only one of it’s kind in this area.",  0, "address not found", 4.95, 2),
	(NOW(), NOW(), "Sith Cave", " ", "The Cave is hidden on our property and you will need a guide to get there. Be aware that self check in is not an option. The check in is from 4 to 7 pm. If you missed it, the next possible check in time could be 10:30 to 11:00 pm. If you can not check at this times please don't make a reservation since we have strict check in and cancellation policy. There will be no check in after 11 pm.",  0, "Address not found", 4.71, 2),
	(NOW(), NOW(), "Otoh gunga", " ", "Ever gaze into an aquarium and wonder what it’s like to live under water? Imagine yourself submerged in three trillion liters, in an a room ten miles deep, alongside some of the most majestic creatures on Naboo!! Experience what it’s like, even for a night, to live amongst these feared creatures. This is your once-in-a-lifetime opportunity to sleep in a underwater bedroom, where the only thing separating you from your neighbors is the 360-degree transparent wall.",  95461, "Naboo Ocean", 5.00, 3);



