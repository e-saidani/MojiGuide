const emojis = [
  {
    key: "1",
    emoji: "😀",
    name: "Grinning Face",
    description:
      "A yellow face with a big open smile, showing upper teeth and often red tongue, and wide eyes.",
  },
  {
    key: "2",
    emoji: "😂",
    name: "Face with Tears of Joy",
    description:
      "A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard.",
  },
  {
    key: "3",
    emoji: "❤️",
    name: "Red Heart",
    description:
      "A classic red heart emoji, used to express love and affection.",
  },
  {
    key: "4",
    emoji: "👍",
    name: "Thumbs Up",
    description:
      "A hand with thumb extended upward, indicating approval, agreement, or that all is well.",
  },
  {
    key: "5",
    emoji: "😢",
    name: "Crying Face",
    description:
      "A yellow face with a slight frown, closed eyes, and a tear falling from one eye, indicating sadness.",
  },
  {
    key: "6",
    emoji: "😍",
    name: "Smiling Face with Heart-Eyes",
    description:
      "A yellow face with an open smile, sometimes showing teeth, and red or pink hearts for eyes, indicating love or adoration.",
  },
  {
    key: "7",
    emoji: "🥳",
    name: "Partying Face",
    description:
      "A yellow face with a party hat, blowing a party horn, and with confetti in the air, used for celebrating.",
  },
  {
    key: "8",
    emoji: "🤔",
    name: "Thinking Face",
    description:
      "A yellow face with furrowed eyebrows looking upwards with thumb and index finger resting on its chin, conveying thinking or deep thought.",
  },
  {
    key: "9",
    emoji: "🙌",
    name: "Raising Hands",
    description:
      "Two hands raised in the air, celebrating success or another joyous event.",
  },
  {
    key: "10",
    emoji: "🔥",
    name: "Fire",
    description:
      "A flame, mostly red-orange, used to convey something is hot, lit, or impressive.",
  },
  {
    key: "11",
    emoji: "💩",
    name: "Pile of Poo",
    description:
      "A swirl of brown poop, often with a friendly smile, used humorously.",
  },
  {
    key: "12",
    emoji: "🥰",
    name: "Smiling Face with Hearts",
    description:
      "A yellow face with smiling eyes, rosy cheeks, and several hearts floating around it, expressing a warm and fuzzy feeling of love.",
  },
  {
    key: "13",
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    description:
      "A yellow face with a broad, closed smile wearing dark sunglasses, used to convey coolness.",
  },
  {
    key: "14",
    emoji: "🙈",
    name: "See-No-Evil Monkey",
    description:
      "A monkey with its hands covering its eyes, often used to convey embarrassment or a playful 'I didn't see that' expression.",
  },
  {
    key: "15",
    emoji: "🍕",
    name: "Pizza",
    description:
      "A slice of pepperoni pizza, with melted cheese, used to represent food and eating.",
  },
  {
    key: "16",
    emoji: "🌟",
    name: "Glowing Star",
    description:
      "A yellow star with radiating points, used to convey excitement, special achievement, or something brilliant.",
  },
  {
    key: "17",
    emoji: "🚀",
    name: "Rocket",
    description:
      "A rocket ship, used to convey space travel or rapid progress.",
  },
  {
    key: "18",
    emoji: "💯",
    name: "Hundred Points",
    description:
      "The number 100 written in red, underlined twice for emphasis, often used to mean 'keep it real' or 'perfect'.",
  },
  {
    key: "19",
    emoji: "🤗",
    name: "Hugging Face",
    description:
      "A yellow face with smiling eyes and open hands, conveying a warm hug.",
  },
  {
    key: "20",
    emoji: "🍎",
    name: "Red Apple",
    description:
      "A classic red apple, used to represent health, education, or simply the fruit.",
  },
  {
    key: "21",
    emoji: "🌈",
    name: "Rainbow",
    description:
      "A colorful arc of a rainbow, often used to represent happiness and beauty.",
  },
  {
    key: "22",
    emoji: "🐶",
    name: "Dog Face",
    description:
      "A cartoon dog face, featuring a friendly expression and floppy ears.",
  },
  {
    key: "23",
    emoji: "🐱",
    name: "Cat Face",
    description: "A cartoon cat face, typically with a smile and whiskers.",
  },
  {
    key: "24",
    emoji: "🌸",
    name: "Cherry Blossom",
    description:
      "A pink flower from a cherry blossom tree, representing springtime and beauty.",
  },
  {
    key: "25",
    emoji: "🎉",
    name: "Party Popper",
    description:
      "A cone-shaped party popper, often used to celebrate special occasions or achievements.",
  },
  {
    key: "26",
    emoji: "🎈",
    name: "Balloon",
    description:
      "A colorful balloon, typically used to decorate parties or convey a sense of celebration.",
  },
  {
    key: "27",
    emoji: "🎵",
    name: "Musical Note",
    description:
      "A single eighth note (quaver), used to represent music or singing.",
  },
  {
    key: "28",
    emoji: "🎁",
    name: "Wrapped Gift",
    description:
      "A present wrapped in colorful paper and tied with a ribbon, often used to convey giving or receiving gifts.",
  },
  {
    key: "29",
    emoji: "🌞",
    name: "Sun with Face",
    description:
      "A yellow sun with a smiling face, representing sunny weather or happiness.",
  },
  {
    key: "30",
    emoji: "🌍",
    name: "Globe Showing Europe-Africa",
    description:
      "A globe with a map of Europe and Africa, often used to represent international travel or global topics.",
  },
  {
    key: "31",
    emoji: "📚",
    name: "Books",
    description:
      "A stack of three books, representing knowledge, education, or reading.",
  },
  {
    key: "32",
    emoji: "🍔",
    name: "Hamburger",
    description:
      "A classic hamburger with lettuce, tomato, and cheese on a bun, representing fast food or dining.",
  },
  {
    key: "33",
    emoji: "🚗",
    name: "Car",
    description:
      "A small, blue car, representing automobiles or transportation.",
  },
  {
    key: "34",
    emoji: "📱",
    name: "Mobile Phone",
    description:
      "A black smartphone, often used to represent technology, communication, or texting.",
  },
  {
    key: "35",
    emoji: "⚽",
    name: "Soccer Ball",
    description:
      "A black and white soccer ball, representing the sport of soccer or football.",
  },
  {
    key: "36",
    emoji: "🌊",
    name: "Water Wave",
    description: "A blue wave, representing water, the ocean, or swimming.",
  },
  {
    key: "37",
    emoji: "🍦",
    name: "Ice Cream",
    description:
      "A vanilla ice cream cone with sprinkles, representing dessert or summer treats.",
  },
  {
    key: "38",
    emoji: "🔑",
    name: "Key",
    description:
      "A gold-colored key, often used to represent access, security, or ownership.",
  },
  {
    key: "39",
    emoji: "🌮",
    name: "Taco",
    description:
      "A taco with ground meat, lettuce, and cheese, representing Mexican cuisine or food in general.",
  },
  {
    key: "40",
    emoji: "📷",
    name: "Camera",
    description:
      "A black camera, often used to represent photography or taking pictures.",
  },
  {
    key: "41",
    emoji: "🐻",
    name: "Bear Face",
    description:
      "A cartoon bear face, usually depicted as a brown bear with round ears and a friendly expression.",
  },
  {
    key: "42",
    emoji: "🐼",
    name: "Panda Face",
    description:
      "A cartoon panda face, characterized by its black and white coloring, round ears, and often depicted with a cute expression.",
  },
  {
    key: "43",
    emoji: "🐯",
    name: "Tiger Face",
    description:
      "A cartoon tiger face, typically with orange fur, black stripes, and a fierce or playful expression.",
  },
  {
    key: "44",
    emoji: "🦁",
    name: "Lion Face",
    description:
      "A cartoon lion face, usually featuring a golden mane, and expressing strength or courage.",
  },
  {
    key: "45",
    emoji: "🐵",
    name: "Monkey Face",
    description:
      "A cartoon monkey face, often depicted with a mischievous grin and closed eyes, conveying playfulness or silliness.",
  },
  {
    key: "46",
    emoji: "🐘",
    name: "Elephant",
    description:
      "A cartoon elephant, characterized by its large ears and trunk, symbolizing strength and wisdom.",
  },
  {
    key: "47",
    emoji: "🦄",
    name: "Unicorn Face",
    description:
      "A cartoon unicorn face, typically featuring a spiral horn on its forehead and often depicted with colorful mane and magical sparkles, symbolizing fantasy and imagination.",
  },
  {
    key: "48",
    emoji: "🐳",
    name: "Spouting Whale",
    description:
      "A cartoon whale with a spout of water coming from its blowhole, representing marine life and the ocean.",
  },
  {
    key: "49",
    emoji: "🦋",
    name: "Butterfly",
    description:
      "A colorful butterfly with outspread wings, representing beauty, transformation, and freedom.",
  },
  {
    key: "50",
    emoji: "🌺",
    name: "Hibiscus",
    description:
      "A pink or red hibiscus flower, symbolizing beauty, femininity, and tropical environments.",
  },
  {
    key: "51",
    emoji: "🌻",
    name: "Sunflower",
    description:
      "A yellow sunflower with a large brown center, representing happiness, warmth, and the sun.",
  },
  {
    key: "52",
    emoji: "🍉",
    name: "Watermelon",
    description:
      "A slice of juicy watermelon with red flesh and black seeds, representing summertime and refreshment.",
  },
  {
    key: "53",
    emoji: "🍌",
    name: "Banana",
    description:
      "A ripe yellow banana, representing fruit, nutrition, and healthy eating.",
  },
  {
    key: "54",
    emoji: "🥑",
    name: "Avocado",
    description:
      "A halved avocado with a green outer shell and a large seed, representing healthy fats and trendy cuisine.",
  },
  {
    key: "55",
    emoji: "🍓",
    name: "Strawberry",
    description:
      "A ripe red strawberry with a green leafy top, representing sweetness and fruitiness.",
  },
  {
    key: "56",
    emoji: "🥐",
    name: "Croissant",
    description:
      "A flaky croissant, often depicted with a golden-brown crust and layers, representing French pastry and breakfast.",
  },
  {
    key: "57",
    emoji: "🍩",
    name: "Doughnut",
    description:
      "A round doughnut with a hole in the center, often topped with icing or sprinkles, representing indulgence and sweet treats.",
  },
  {
    key: "58",
    emoji: "🍇",
    name: "Grapes",
    description:
      "A cluster of purple grapes with a green vine, representing fruitfulness and vineyards.",
  },
  {
    key: "59",
    emoji: "🥥",
    name: "Coconut",
    description:
      "A whole coconut with a brown outer shell and white inner flesh, representing tropical environments and refreshment.",
  },
  {
    key: "60",
    emoji: "🍕",
    name: "Pizza Slice",
    description:
      "A single slice of pizza with cheese and pepperoni toppings, representing Italian cuisine and comfort food.",
  },
  {
    key: "61",
    emoji: "😊",
    name: "Smiling Face with Smiling Eyes",
    description:
      "A yellow face with smiling eyes and a closed smile, representing happiness, warmth, and friendliness.",
  },
  {
    key: "62",
    emoji: "😇",
    name: "Smiling Face with Halo",
    description:
      "A yellow face with smiling eyes, closed smile, and a halo, representing innocence, goodness, and virtue.",
  },
  {
    key: "63",
    emoji: "😘",
    name: "Face Blowing a Kiss",
    description:
      "A yellow face with kissing lips, closed eyes, and several hearts floating around it, representing love, affection, and sending a kiss.",
  },
  {
    key: "64",
    emoji: "😷",
    name: "Face with Medical Mask",
    description:
      "A yellow face with closed eyes, wearing a white surgical mask, often used to represent health, illness, or protection against disease.",
  },
  {
    key: "65",
    emoji: "🤢",
    name: "Nauseated Face",
    description:
      "A green face with wide, blank eyes and a grimace, representing sickness, nausea, disgust, or illness.",
  },
  {
    key: "66",
    emoji: "🤮",
    name: "Face Vomiting",
    description:
      "A yellow face with scrunched eyes and a broad, open frown, vomiting green vomit, often used to represent sickness, disgust, or revulsion.",
  },
  {
    key: "67",
    emoji: "🤥",
    name: "Lying Face",
    description:
      "A yellow face with a long nose, indicating falsehood, deception, or telling a lie.",
  },
  {
    key: "68",
    emoji: "🤯",
    name: "Exploding Head",
    description:
      "A yellow face with an open mouth, the top of its head exploding in the shape of a brain-like mushroom cloud, representing mind blown or overwhelmed by a revelation, surprise, or shock.",
  },
  {
    key: "69",
    emoji: "🤓",
    name: "Nerd Face",
    description:
      "A yellow face with glasses and a broad, closed smile, representing nerdiness, intelligence, and enthusiasm for schoolwork or learning.",
  },
  {
    key: "70",
    emoji: "🧐",
    name: "Face with Monocle",
    description:
      "A face with one eyebrow raised, wearing a monocle, and looking slightly to the side, often used to represent examination, scrutiny, or a close inspection.",
  },
  {
    key: "71",
    emoji: "😡",
    name: "Pouting Face",
    description:
      "A red face with a frowning mouth and angry eyes, expressing intense anger or frustration.",
  },
  {
    key: "72",
    emoji: "😱",
    name: "Face Screaming in Fear",
    description:
      "A yellow face with wide eyes, open mouth, and hands on its cheeks, expressing shock, horror, or fear.",
  },
  {
    key: "73",
    emoji: "😭",
    name: "Loudly Crying Face",
    description:
      "A yellow face with closed eyes, open mouth, and streams of tears, expressing intense sadness or grief.",
  },
  {
    key: "74",
    emoji: "😤",
    name: "Face with Steam From Nose",
    description:
      "A yellow face with closed eyes, frowning mouth, and steam coming out of its nostrils, expressing frustration, anger, or determination.",
  },
  {
    key: "75",
    emoji: "😜",
    name: "Winking Face with Tongue",
    description:
      "A yellow face with one eye closed and tongue sticking out, expressing playfulness or silliness.",
  },
  {
    key: "76",
    emoji: "🤨",
    name: "Face with Raised Eyebrow",
    description:
      "A yellow face with one eyebrow raised, expressing skepticism, disbelief, or mild surprise.",
  },
  {
    key: "77",
    emoji: "😔",
    name: "Pensive Face",
    description:
      "A yellow face with closed eyes and a slight frown, expressing sadness, disappointment, or regret.",
  },
  {
    key: "78",
    emoji: "😕",
    name: "Confused Face",
    description:
      "A yellow face with a furrowed brow, slightly frowning mouth, and eyes looking to the side, expressing confusion or uncertainty.",
  },
  {
    key: "79",
    emoji: "🙃",
    name: "Upside-Down Face",
    description:
      "A yellow face with a closed smile, upside-down, often used to convey irony, sarcasm, or a playful mood.",
  },
  {
    key: "80",
    emoji: "🤪",
    name: "Zany Face",
    description:
      "A yellow face with one large eye and one small eye, a big grin, and tongue sticking out to the side, expressing silliness or craziness.",
  },
  {
    key: "81",
    emoji: "😌",
    name: "Relieved Face",
    description:
      "A yellow face with closed eyes and a slight smile, expressing relief or calmness.",
  },
  {
    key: "82",
    emoji: "😴",
    name: "Sleeping Face",
    description:
      "A yellow face with closed eyes and a snoring 'Zzz' over its head, representing sleepiness or exhaustion.",
  },
  {
    key: "83",
    emoji: "🤫",
    name: "Shushing Face",
    description:
      "A yellow face with one finger held to its mouth, conveying the gesture for silence or 'shh'.",
  },
  {
    key: "84",
    emoji: "😈",
    name: "Smiling Face with Horns",
    description:
      "A purple face with devil horns and a mischievous smile, often used to convey mischief or naughtiness.",
  },
  {
    key: "85",
    emoji: "👻",
    name: "Ghost",
    description:
      "A white ghost with a friendly smile, wide eyes, and its tongue sticking out, representing something spooky or playful.",
  },
  {
    key: "86",
    emoji: "💀",
    name: "Skull",
    description:
      "A white skull, often used to represent death, danger, or something frightening.",
  },
  {
    key: "87",
    emoji: "🤕",
    name: "Face with Head-Bandage",
    description:
      "A yellow face with a bandage wrapped around its head, expressing injury, pain, or hurt.",
  },
  {
    key: "88",
    emoji: "🤧",
    name: "Sneezing Face",
    description:
      "A yellow face with closed eyes and a hand covering its nose, sneezing or showing symptoms of being sick.",
  },
  {
    key: "89",
    emoji: "😇",
    name: "Smiling Face with Halo",
    description:
      "A yellow face with smiling eyes, a closed smile, and a halo, representing innocence or goodness.",
  },
  {
    key: "90",
    emoji: "😑",
    name: "Expressionless Face",
    description:
      "A yellow face with closed eyes and a straight mouth, expressing lack of emotion, indifference, or frustration.",
  },
  {
    key: "91",
    emoji: "😩",
    name: "Weary Face",
    description:
      "A yellow face with closed eyes and a downturned mouth, expressing exhaustion or frustration.",
  },
  {
    key: "92",
    emoji: "😓",
    name: "Downcast Face with Sweat",
    description:
      "A yellow face with closed eyes, a downturned mouth, and a single drop of sweat, expressing stress, discomfort, or relief.",
  },
  {
    key: "93",
    emoji: "😠",
    name: "Angry Face",
    description:
      "A yellow face with furrowed eyebrows, eyes open wide, and a frowning mouth, expressing anger or irritation.",
  },
  {
    key: "94",
    emoji: "😬",
    name: "Grimacing Face",
    description:
      "A yellow face with clenched teeth and wide eyes, expressing nervousness, awkwardness, or discomfort.",
  },
  {
    key: "95",
    emoji: "🤐",
    name: "Zipper-Mouth Face",
    description:
      "A yellow face with a straight mouth and a zipper instead of lips, representing silence, a secret, or not wanting to talk.",
  },
  {
    key: "96",
    emoji: "😪",
    name: "Sleepy Face",
    description:
      "A yellow face with closed eyes, a slack mouth, and a snot bubble, indicating sleepiness or tiredness.",
  },
  {
    key: "97",
    emoji: "😝",
    name: "Squinting Face with Tongue",
    description:
      "A yellow face with eyes tightly closed and tongue sticking out, expressing playfulness, silliness, or a lighthearted attitude.",
  },
  {
    key: "98",
    emoji: "😒",
    name: "Unamused Face",
    description:
      "A yellow face with eyes rolled to the side and a frown, expressing displeasure, skepticism, or annoyance.",
  },
  {
    key: "99",
    emoji: "🤤",
    name: "Drooling Face",
    description:
      "A yellow face with closed eyes, a slack mouth, and drool dripping from the corner, expressing hunger, desire, or sleepiness.",
  },
  {
    key: "100",
    emoji: "😶",
    name: "Face Without Mouth",
    description:
      "A yellow face with open eyes and no mouth, representing speechlessness, silence, or inability to express oneself.",
  },
  {
    key: "101",
    emoji: "😞",
    name: "Disappointed Face",
    description:
      "A yellow face with closed eyes and a downturned mouth, expressing sadness, disappointment, or regret.",
  },
  {
    key: "102",
    emoji: "😧",
    name: "Anguished Face",
    description:
      "A yellow face with wide eyes and a downturned mouth, expressing anguish, shock, or intense emotion.",
  },
  {
    key: "103",
    emoji: "😨",
    name: "Fearful Face",
    description:
      "A yellow face with wide eyes, raised eyebrows, and an open mouth, expressing fear, worry, or concern.",
  },
  {
    key: "104",
    emoji: "😖",
    name: "Confounded Face",
    description:
      "A yellow face with scrunched, X-shaped eyes, and a frown, expressing confusion, frustration, or distress.",
  },
  {
    key: "105",
    emoji: "😣",
    name: "Persevering Face",
    description:
      "A yellow face with closed eyes, furrowed brow, and a slight frown, expressing perseverance, determination, or struggling.",
  },
  {
    key: "106",
    emoji: "😗",
    name: "Kissing Face",
    description:
      "A yellow face with puckered lips and closed eyes, conveying a kiss.",
  },
  {
    key: "107",
    emoji: "😚",
    name: "Kissing Face with Closed Eyes",
    description:
      "A yellow face with closed eyes and puckered lips, conveying a tender kiss.",
  },
  {
    key: "108",
    emoji: "🤭",
    name: "Face with Hand Over Mouth",
    description:
      "A yellow face with a hand covering its mouth, expressing surprise, shock, or a sudden realization.",
  },
  {
    key: "109",
    emoji: "😲",
    name: "Astonished Face",
    description:
      "A yellow face with wide eyes and mouth agape, expressing astonishment, surprise, or disbelief.",
  },
  {
    key: "110",
    emoji: "😷",
    name: "Face with Medical Mask",
    description:
      "A yellow face with closed eyes and a white surgical mask, representing protection against illness or infection.",
  }
];
export default emojis