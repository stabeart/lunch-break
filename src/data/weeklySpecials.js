// src/data/weeklySpecials.js
export const weeklySpecials = [
    {
      id: "2025-03-10",
      title: "Lunch Poem",
      author: "Paul Hostovsky",
      authorBio: "Paul Hostovsky's poems have won a Pushcart Prize, two Best of the Net Awards, the FutureCycle Poetry Book Prize, and have been featured on Poetry Daily, Verse Daily, and The Writer's Almanac. He makes his living in Boston as a sign language interpreter.",
      authorWebsite: "http://paulhostovsky.com",
      date: "March 10, 2025",
      type: "poetry", // This helps determine the layout
      isCurrent: true, // Only one should be true at a time
      content: `All we had to worry about
  was where to have lunch. We had
  time, money, health, happiness. The pursuit
  of lunch down a wide avenue
  with restaurants on every corner
  was all we had to worry about. And yet
  you worried about everything
  from war in the Middle East
  to ISIS to sepsis to asteroids
  to your daughter's histrionic personality disorder
  to climate change to trolls. Please pass
  the arugula salad, I said.
  There was a brief pause then
  as you watched me pile lettuce, pine nuts,
  cherry tomatoes, slices of ripe avocado
  onto my plate. Then you resumed worrying
  about the polar bears, the deficit, the flu,
  North Korea, China, Russia, nuclear
  winter, while I stared out the window
  of a fine restaurant in a glass city in summer
  in the third decade of the 21st century,
  and chewed.`
    },
  
    // Add more weekly specials as needed
  ];
  
  // Helper function to get the current special
  export function getCurrentSpecial() {
    return weeklySpecials.find(special => special.isCurrent) || weeklySpecials[0];
  }
  
  // Helper function to get all archived specials
  export function getArchivedSpecials() {
    return weeklySpecials.filter(special => !special.isCurrent);
  }
  
  // Helper function to get a special by ID
  export function getSpecialById(id) {
    return weeklySpecials.find(special => special.id === id);
  }