Welcome to the Poke Olympics!

Acting as the top level, App intiates with a useEffect fetching all the Pokemon data from the PokeAPI, as well as fetching any saved favorties from the local db.json server. 

There are four routes being displayed in this Pokemon minigame app:
    -Home
    -Track
    -Battle
    -Favorites

Home acts as a PokeDex (search database) to review the stats of some of your favorite Pokemon. You can also choose to favorite whichever Pokemon you select, which in turn adds them to the favorites list. This process involves a fetch post request to the local db.json server.

Track is a stand alone minigame in which you choose a Pokemon to race for you, and then generate four opponents to race against. There must be five entries to begin any given race. An alert will prompt you to populate more racers if you have not done so already.

Battle is a second stand alone minigame. Battle is a first-to-five contest in which there are two checks to determine a winner. First, if one Pokemon has a type that is super-effective agaisnt the other, it will win the round automatically. If a winner cannot be determined by type, the average of their attack and special attack stats is taken and compared. Whichever Pokemon has the higher attack average will win the round. If there are not two entries for the battle, trying to initiate it will result in an alert instructing you to generate a Pokemon for both you and the CPU.

Favorites acts at the display for any Pokemon you choose to favorite. There will be a simple card display for each Pokemon favorited. There is a delete button attached to each card as well, this will effectively remove that card from the favorites list. This process involves a fetch delete request to the local db.json.