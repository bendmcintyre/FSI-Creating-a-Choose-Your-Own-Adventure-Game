let answer = window.prompt("Do you head left(l) or right(r)?");
if (answer === "l") {
  answer = window.prompt(
    "You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it(f), or continue on your path(c)?"
  );
  if (answer === "f") {
    answer = window.prompt(
      "You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying(s), but you wonder if you should alert the world to this magical safe haven(a)."
    );
    if (answer === "s") {
      answer = window.alert(
        "You live happily amongst the cats for the rest of your days."
      );
    } else if (answer === "a") {
      answer = window.alert(
        "After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless."
      );
    }
  } else if (answer === "c") {
    answer = window.prompt(
      "You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase(s), and a much quicker, but rickety-looking ladder(l) that leads up toward the light. Which do you take?"
    );
    if (answer === "l") {
      answer = window.alert(
        "After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home."
      );
    } else if (answer === "s") {
      answer = window.alert(
        "After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever."
      );
    }
  }
} else if (answer === "r") {
  answer = window.prompt(
    "You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure(t). Another path would lead you away from the dragon altogether(a). Which path do you take?"
  );
  if (answer === "t") {
    answer = window.prompt(
      "The dragon wakes up and sits upright. You only have a moment to respond, to stay(s) or run(r)?"
    );
    if (answer === "s") {
      answer = window.alert(
        "You and the dragon have an uplifting conversation about local politics and become lifelong friends."
      );
    } else if (answer === "r") {
      answer = window.alert(
        "Quickly, you run back to the cave's entrance. Sheepish, you return home."
      );
    }
  } else if (answer === "a") {
    answer = window.prompt(
      "After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it(d) or pick it(p). Which do you do?"
    );
    if (answer === "d") {
      answer = window.alert(
        "You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch."
      );
    } else if (answer === "p") {
      answer = window.alert(
        "You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust."
      );
    }
  }
}
