const typewriterContent = [
    "<i>Hi, I’m</i> <span>Kathrina</span>, <i>I love</i> <span>coding.</span>",
    "<i>Bring</i> <span>ideas</span> <i>to life with</i> <span>code.</span>",
    "<span>Tech</span> <i>enthusiast.</i> <span>Web</span> <i>developer.</i>",
    "<i>Exploring</i> <span>open-source</span> <i>tech.</i>",
    "<i>Building the</i> <span>future,</span> <i>one line at a</i> <span>time.</span>",
    "<i>Always</i> <span>learning,</span> <i>always</i> <span>creating.</span>",
    "<i>Driven by</i> <span>code and curiosity.</span>"
];

const durCharFwd = 100;
const durFullGap = 2000;
const durCharBwd = 80;
const durDoneGap = 1000;
let stringIndex = 0;
let isDeleting = false; 
let charIndex = 0;

const typewriterElement = document.querySelector('.typewriter');

type();

function type() {
    const currentString = typewriterContent[stringIndex];

    if (isDeleting) 
    {
        if (charIndex > 0) 
        {
            if (currentString[charIndex] === ">") {
                while (currentString[charIndex] !== "<" && charIndex < currentString.length) {
                    charIndex--;
                }
                charIndex--;
            }
            charIndex--;
            typewriterElement.innerHTML = currentString.substring(0, charIndex);
            setTimeout(type, durCharBwd);
        } 
        else 
        {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % typewriterContent.length;
            setTimeout(type, durDoneGap);
        }
    } 
    
    else 
    {
        if (charIndex < currentString.length) 
        {
            if (currentString[charIndex] === "<") {
                while (currentString[charIndex] !== ">" && charIndex < currentString.length) {
                    charIndex++;
                }
                charIndex++;
            }
            typewriterElement.innerHTML = currentString.substring(0, charIndex);
            charIndex++;
            setTimeout(type, durCharFwd);
        } 
        else 
        {
            isDeleting = true;
            setTimeout(type, durFullGap);
        }
    }
}

