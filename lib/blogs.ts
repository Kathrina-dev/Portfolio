
export type BlogText = {
  text: string;
  style?: "bold" | "italic";
};

export type BlogParagraph = string | BlogText[];

export type BlogSection = {
  id: string;
  heading: string;
  paragraphs: BlogParagraph[];
  image?: string;
  imageAlt?: string;
  caption?: string;
  imageAfterParagraph?: number;
};

export type Blog = {
  slug: string;
  title: string;
  description: string;
  date: string;
  sections: BlogSection[];
};

export const blogs: Blog[] = [
  {
    slug: "capture-the-ghost-ctf-challenges",
    title: "Building CTF challenges for Capture the Ghost",
    description:
      "A look at the three CTF challenges I created for Capture the Ghost, covering web exploitation, digital forensics and OSINT.",
    date: "October 2026",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          [
            { text: "For Capture the Ghost, I got to create three " },
            { text: "CTF challenges", style: "bold" },
            { text: " covering Web, Forensics and OSINT. I wanted each challenge to have its own little story instead of just throwing a vulnerability or a puzzle at participants and asking them to find a flag." },
          ],
          "I had a lot of fun coming up with the themes, hiding clues and figuring out how participants would eventually reach the solution. Here's a little breakdown of what I built and how each challenge was intended to be solved.",
        ],
      },
      {
        id: "black-hollow-hotel",
        heading: "1. Black Hollow Hotel",
        image: "/hotel.jpeg",
        imageAlt: "Black Hollow Hotel CTF challenge",
        imageAfterParagraph: 1,
        paragraphs: [
          [{ text: "Category: ", style: "bold" }, { text: "Web Exploitation" }],
          [{ text: "Description: ", style: "bold" }, { text: "Black Hollow Hotel has been closed since 1987. Yet every night, the registers are checked, the records reviewed, and new entries quietly acknowledged. Investigate the hotel's forgotten systems, uncover what still watches after closing, and retrieve the secret buried within." }],
          [{ text: "Intended solve: ", style: "bold" }, { text: "The description itself contained the first hint. The line about someone checking the guest registers every night was meant to suggest that a bot was visiting and reviewing every submission. There was another clue hidden in the room service menu: BeEF Meatloaf. The capitalization was intentional, hinting at the Browser Exploitation Framework (BeEF). The guest register had a stored XSS vulnerability. Whenever someone submitted an entry, an automated bot would visit it. Participants were supposed to use this vulnerability to inject a JavaScript payload and hook the bot's browser using BeEF. Once the bot was hooked, they could retrieve its session ID and use it in their own browser cookies to access the admin page at /admin/login. The flag was waiting inside the admin page." }],
          [{ text: "Technical implementation: ", style: "bold" }, { text: "BeEF was the main tool used for this challenge. I wanted participants to see how a simple link could be used to hook another person's browser and potentially expose sensitive information." }],
          [{ text: "Flag: ", style: "bold" }, { text: "boo{D0N7_H4V3_B33F_W17H_M3}" }],
          [{ text: "Interesting details: ", style: "bold" }, { text: "The two biggest clues were the nightly guest register reviews and the BeEF Meatloaf special. Everything else on the website was mostly there to create the atmosphere of an abandoned hotel that somehow still had something running behind the scenes." }],
        ],
      },
      {
        id: "black-mirror",
        heading: "2. Black Mirror",
        image: "/terminal.jpeg",
        imageAlt: "Black Mirror terminal CTF challenge",
        imageAfterParagraph: 1,
        paragraphs: [
          [{ text: "Category: ", style: "bold" }, { text: "Digital Forensics" }],
          [{ text: "Description: ", style: "bold" }, { text: "Ward Laboratory was building software to talk to the dead, but something went wrong and its lead researcher vanished. Their terminal is all that's left, and it looks empty. Find out what happened." }],
          [{ text: "Intended solve: ", style: "bold" }, {text: "When participants first opened the challenge, they were greeted with an almost completely blank screen. There was a small header introducing Ward Laboratory's experiment, but not much else. Typing something into the terminal didn't really help either. The trick was to double-click the screen, which highlighted what looked like random lines of text. These were actually spaces and tabs encoded using the Whitespace programming language. Participants could decode them using a Whitespace interpreter such as https://www.dcode.fr/langage-whitespace. The decoded content revealed that this was Edward's terminal, the missing researcher. From there, they had to interact with the terminal using basic Linux commands like whoami, pwd and ls -al. Exploring the files revealed more about the experiment and what Edward had been working on. The final step was to check Edward's command history using cat ~/.bash_history. The flag was hidden among the previously executed commands."}],
          [{ text: "Technical implementation: ", style: "bold" }, {text: "I used Whitespace encoding to make the initially empty screen feel like a black mirror, hiding information in something that participants wouldn't normally notice. The terminal itself supported basic Linux commands so participants could explore the system naturally."}],
          [{ text: "Flag: ", style: "bold" }, { text: "boo{7H3R3_1S_N07H1NG_70_S33_H3R3}" }],
          [{ text: "Interesting details: ", style: "bold" }, {text: "I wanted people to learn about .bash_history and how useful it can be when investigating what someone has done on a Linux system. It's also the file that lets your terminal remember previous commands when you press the up arrow. There was also Morse code appearing in the terminal, with messages like HELP ME and I'M TRAPPED IN HERE. These were just distractions to add to the horror atmosphere, not actual clues to the flag."}],
        ],
      },
      {
        id: "terrifying-prices",
        heading: "3. Terrifying Prices",
        image: "/food.png",
        imageAlt: "Food photograph from the Terrifying Prices CTF challenge",
        imageAfterParagraph: 1,
        paragraphs: [
          [{ text: "Category: ", style: "bold" }, { text: "OSINT" }],
          [{ text: "Description: ", style: "bold" }, { text: "I really liked this meal, can you guess the price? The expected flag format was boo{20.41}." }],
          [{ text: "Intended solve: ", style: "bold" }, {text: "Participants were given a photograph containing a pizza, a beer and a plate of fries. The restaurant's name was printed on the greaseproof paper underneath the food. The obvious approach would be to look up the restaurant's menu and calculate the price of all three items. However, the intended solution was to inspect the image metadata using exiftool. The EXIF metadata revealed that the photograph was taken on 13 October 2020 at 14:00. That was a Tuesday, and the restaurant had a Monster Meal Deal promotion running Monday to Thursday, between 12 PM and 5 PM. The photograph was taken right in the middle of that promotion, which meant the meal cost €13."}],
          [{ text: "Technical implementation: ", style: "bold" }, {text: "This challenge mainly involved exiftool and Google searches. The interesting part was connecting the photograph's timestamp with the restaurant's promotional timings rather than simply looking at the regular menu prices."}],
          [{ text: "Flag: ", style: "bold" }, { text: "boo{13}" }],
          [{ text: "Interesting details: ", style: "bold" }, {text: "There was actually a huge wall poster outside the restaurant advertising the €13 Monster Meal Deal. I was hoping participants would stumble across it while researching the restaurant. It was a nice additional way to confirm the answer, even though the intended route was through the image metadata."}],
        ],
      },
      {
        id: "conclusion",
        heading: "Final thoughts",
        paragraphs: [
          "These three challenges were really fun to put together. Each one required a different approach, and I enjoyed coming up with little details that connected the story to the actual solution.",
          "From BeEF Meatloaf at an abandoned hotel to a missing researcher's hidden terminal and a €13 meal deal, I wanted the challenges to be a little unusual and hopefully memorable.",
          "Hopefully, everyone had as much fun solving them as I had creating them!",
        ],
      },
    ],
  },
];

export function getBlog(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}
