const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()

const answers = ["When you play the game of thrones, you win or you die.",
    "The things I do for love.",
    "Winter is coming.",
    "Chaos isn’t a pit. Chaos is a ladder.",
    "A lion doesn’t concern himself with the opinion of sheep.",
    "Valar morghulis.",
    "The night is dark and full of terrors.",
    "The things I do for duty.",
    "Fire and blood.",
    "I am the sword in the darkness.",
    "Words are wind.",
    "The north remembers.",
    "What is dead may never die.",
    "That’s what I do: I drink and I know things.",
    "I am the blood of the dragon.",
    "Winter is coming, and the dead come with it.",
    "There is only one war that matters: the Great War.",
    "Dracarys.",
    "The night’s watch has forgotten its true purpose.",
    "Love is sweet, dearest Ned, but it cannot change a man’s nature.",
    "A mind needs books as a sword needs a whetstone, if it is to keep its edge.",
    "Some old wounds never truly heal, and bleed again at the slightest word.",
    "The king in the north!",
    "All dwarfs are bastards in their father’s eyes.",
    "When the snows fall and the white winds blow, the lone wolf dies but the pack survives.",
    "The man who passes the sentence should swing the sword.",
    "Death is so terribly final, while life is full of possibilities.",
    "The things I do for love.",
    "I have a tender spot in my heart for cripples, bastards, and broken things.",
    "History is a wheel, for the nature of man is fundamentally unchanging."
]

const token = process.env.TOKEN
const bot = new TelegramBot(token, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

const commands = [
    {
        command: "start",
        description: "Start bot"
    },
    {
        command: "quiz",
        description: "Choose a side"
    },
    {
        command: "link",
        description: "Click to learn more about HOTD"
    },
    {
        command: "characters",
        description: "Click to learn more about HOTD characters"
    }
]
bot.setMyCommands(commands);
const blackskeyboard = [
    [
        { text: 'Entire information about Blacks', callback_data: 'blackinf' },
    ],
    [
        { text: 'Queen Rhaenyra Targaryen', callback_data: 'rhaenyra' },
    ],
    [
        { text: 'Prince Daemon Targaryen', callback_data: 'daemon' },
    ],
    [
        { text: 'Prince Jacaerys Velaryon', callback_data: 'jacaerys' },
    ],
    [
        { text: 'Prince Lucerys Velaryon', callback_data: 'lucerys' },
    ],
    [
        { text: 'Prince Joffrey Velaryon', callback_data: 'joffrey' },
    ],
    [
        { text: 'Prince Aegon Targaryen', callback_data: 'aegonblack' },
    ],
    [
        { text: 'Prince Viserys Targaryen', callback_data: 'viserys' },
    ],
    [
        { text: 'Princess Rhaenys Targaryen', callback_data: 'rhaenys' },
    ],
    [
        { text: 'Lady Baela Targaryen', callback_data: 'baela' },
    ],
    [
        { text: 'Lady Rhaena Targaryen', callback_data: 'rhaena' },
    ],
    [
        { text: 'Lord Corlys Velaryon', callback_data: 'corlys' },
    ],
    [
        { text: 'Ser Erryk Cargyll', callback_data: 'erryk' },
    ]
]
const greenskeyboard = [
    [
        { text: 'Entire information about Greens', callback_data: 'greeninf' },
    ],
    [
        { text: 'King Aegon II Targaryen - The Usurper', callback_data: 'kingaegon' },
    ],
    [
        { text: 'Queen Helaena Targaryen', callback_data: 'helaena' },
    ],
    [
        { text: 'Prince Aemond Targaryen', callback_data: 'aemond' },
    ],
    [
        { text: 'Prince Daeron Targaryen', callback_data: 'daeron' },
    ],
    [
        { text: 'Prince Jaehaerys Targaryen', callback_data: 'jaehaerys' },
    ],
    [
        { text: 'Princess Jaehaera Targaryen', callback_data: 'jaehaera' },
    ],
    [
        { text: 'Queen Dowager Alicent Hightower', callback_data: 'alicent' },
    ],
    [
        { text: 'Ser Otto Hightower', callback_data: 'otto' },
    ],
    [
        { text: 'Ser Criston Cole', callback_data: 'cole' },
    ],
    [
        { text: 'Lord Larys Strong', callback_data: 'larys' },
    ],
    [
        { text: 'Ser Arryk Cargyll', callback_data: 'arryk' },
    ]
]

const raenkey = [
    [
        { text: 'Info', callback_data: 'raeninfo' },
    ],
    [
        { text: 'Actress', callback_data: 'raenactress' },
    ],
    [
        { text: 'Photos', callback_data: 'raenphotos' },
    ]
]

const daemkey = [
    [
        { text: 'Info', callback_data: 'daeminfo' },
    ],
    [
        { text: 'Actor', callback_data: 'daemactor' },
    ],
    [
        { text: 'Photos', callback_data: 'daemphotos' },
    ]
]

const jaeckey = [
    [
        { text: 'Info', callback_data: 'jaecinfo' },
    ],
    [
        { text: 'Actor', callback_data: 'jaecactor' },
    ],
    [
        { text: 'Photos', callback_data: 'jaecphotos' },
    ]
]

const luckey = [
    [
        { text: 'Info', callback_data: 'lucinfo' },
    ],
    [
        { text: 'Actor', callback_data: 'lucactor' },
    ],
    [
        { text: 'Photos', callback_data: 'lucphotos' },
    ]
]

const jofkey = [
    [
        { text: 'Info', callback_data: 'jofinfo' },
    ],
    [
        { text: 'Actor', callback_data: 'jofactor' },
    ],
    [
        { text: 'Photos', callback_data: 'jofphotos' },
    ]
]

const aegonblackkey = [
    [
        { text: 'Info', callback_data: 'aegonblackinfo' },
    ]
]

const viseryskey = [
    [
        { text: 'Info', callback_data: 'viserysinfo' },
    ]
]

const rhaenyskey = [
    [
        { text: 'Info', callback_data: 'rhaenysinfo' },
    ],
    [
        { text: 'Actress', callback_data: 'rhaenysactress' },
    ],
    [
        { text: 'Photos', callback_data: 'rhaenysphotos' },
    ]
]

const baelakey = [
    [
        { text: 'Info', callback_data: 'baelainfo' },
    ],
    [
        { text: 'Actress', callback_data: 'baelaactress' },
    ],
    [
        { text: 'Photos', callback_data: 'baelaphotos' },
    ]
]

const rhaenakey = [
    [
        { text: 'Info', callback_data: 'rhaenainfo' },
    ],
    [
        { text: 'Actress', callback_data: 'rhaenaactress' },
    ],
    [
        { text: 'Photos', callback_data: 'rhaenaphotos' },
    ]
]

const corlyskey = [
    [
        { text: 'Info', callback_data: 'corlysinfo' },
    ],
    [
        { text: 'Actor', callback_data: 'corlysactor' },
    ],
    [
        { text: 'Photos', callback_data: 'corlysphotos' },
    ]
]

const errykkey = [
    [
        { text: 'Info', callback_data: 'errykinfo' },
    ],
    [
        { text: 'Actor', callback_data: 'errykactor' },
    ],
    [
        { text: 'Photos', callback_data: 'errykphotos' },
    ]
]

const arrykkey = [
    [
        { text: 'Info', callback_data: 'arrykinfo' },
    ],
    [
        { text: 'Actor', callback_data: 'arrykactor' },
    ],
    [
        { text: 'Photos', callback_data: 'arrykphotos' },
    ]
]

const aegonkey = [
    [
        { text: 'Info', callback_data: 'aegoninfo' },
    ],
    [
        { text: 'Actor', callback_data: 'aegonactor' },
    ],
    [
        { text: 'Photos', callback_data: 'aegonphotos' },
    ]
]

const helaenakey = [
    [
        { text: 'Info', callback_data: 'helaenainfo' },
    ],
    [
        { text: 'Actress', callback_data: 'helaenaactress' },
    ],
    [
        { text: 'Photos', callback_data: 'helaenaphotos' },
    ]
]

const aemondkey = [
    [
        { text: 'Info', callback_data: 'aemondinfo' },
    ],
    [
        { text: 'Actor', callback_data: 'aemondactor' },
    ],
    [
        { text: 'Photos', callback_data: 'aemondphotos' },
    ]
]

const daeronkey = [
    [
        { text: 'Info', callback_data: 'daeroninfo' },
    ],
    [
        { text: 'Arts', callback_data: 'daeronarts' },
    ]
]

const jaehaeryskey = [
    [
        { text: 'Info', callback_data: 'jaehaerysinfo' },
    ]
]

const jaehaerakey = [
    [
        { text: 'Info', callback_data: 'jaehaerainfo' },
    ]
]

const alicentkey = [
    [
        { text: 'Info', callback_data: 'alicentinfo' },
    ],
    [
        { text: 'Actress', callback_data: 'alicentactress' },
    ],
    [
        { text: 'Photos', callback_data: 'alicentphotos' },
    ]
]

const ottokey = [
    [
        { text: 'Info', callback_data: 'ottoinfo' },
    ],
    [
        { text: 'Actor', callback_data: 'ottoactor' },
    ],
    [
        { text: 'Photos', callback_data: 'ottophotos' },
    ]
]

const colekey = [
    [
        { text: 'Info', callback_data: 'coleinfo' },
    ],
    [
        { text: 'Actor', callback_data: 'coleactor' },
    ],
    [
        { text: 'Photos', callback_data: 'colephotos' },
    ]
]

const laryskey = [
    [
        { text: 'Info', callback_data: 'larysinfo' },
    ],
    [
        { text: 'Actor', callback_data: 'larysactor' },
    ],
    [
        { text: 'Photos', callback_data: 'larysphotos' },
    ]
]

bot.on('text', (msg) => {
    const chatId = msg.chat.id
    const messg = msg.text.toLowerCase();
    const index = Math.floor(Math.random() * answers.length)
    const answer = answers[index]
    const inline_keyboard = [
        [
            { text: 'Blacks', callback_data: 'blackss' },
        ],
        [
            { text: 'Greens', callback_data: 'greenss' },
        ]
    ]

    if (msg.text === '/start') {
        bot.sendMessage(chatId, "Hello!")
    }
    else if (msg.text === '/link') {
        bot.sendMessage(chatId, `https://www.hbo.com/house-of-the-dragon`)
    }
    else if (msg.text === '/quiz') {
        bot.sendMessage(chatId, "Blacks or greens?")
    }
    else if (msg.text === '/characters') {
        bot.sendMessage(chatId, "Choose a side:", { reply_markup: { inline_keyboard } })
    }
    else if (messg.includes('blacks')) {
        bot.sendMessage(chatId, answer)
    }
    else if (messg.includes('greens')) {
        bot.sendMessage(chatId, '||go fuck yourself||', { parse_mode: "MarkdownV2" })
    }
    else { bot.sendMessage(chatId, "Sorry, I can't help you with this problem") }
})

bot.on('callback_query', (query) => {
    if (query.data === 'blackss') {
        bot.sendMessage(query.message.chat.id, 'Now choose the character:', {
            reply_markup: { inline_keyboard: blackskeyboard }
        })
    }
    else if (query.data === 'greenss') {
        bot.sendMessage(query.message.chat.id, 'Now choose the character:', {
            reply_markup: { inline_keyboard: greenskeyboard }
        })
    }
    else if (query.data === 'blackinf') {
        bot.sendMessage(query.message.chat.id, "[Entire information about Blacks](https://awoiaf.westeros.org/index.php/Blacks)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'greeninf') {
        bot.sendMessage(query.message.chat.id, "[Entire information about Greens](https://awoiaf.westeros.org/index.php/Greens)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'rhaenyra') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/564x/eb/a1/b2/eba1b230283b641b42b334079c0e4f78.jpg', {
            reply_markup: { inline_keyboard: raenkey }
        })
    }
    else if (query.data === 'raeninfo') {
        bot.sendMessage(query.message.chat.id, "[Info Rhaenyra](https://awoiaf.westeros.org/index.php/Rhaenyra_Targaryen)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'raenactress') {
        bot.sendMessage(query.message.chat.id, "[Emma D’Arcy](https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TDeuMk7LzS40YPTiTs3NTVRIUU8sSq4EAHihCLU&q=emma+d%27arcy&rlz=1C5CHFA_enAM1117AM1117&oq=emma+d&gs_lcrp=EgZjaHJvbWUqBwgBEC4YgAQyBggAEEUYOTIHCAEQLhiABDIHCAIQLhiABDIHCAMQABiABDIHCAQQABiABDIHCAUQLhiABDIHCAYQLhiABDIHCAcQLhiABDIHCAgQLhiABDIHCAkQABiPAtIBCDQzNjRqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'raenphotos') {
        bot.sendMessage(query.message.chat.id, "[Rhaenyra photos](https://www.pinterest.com/search/pins/?rs=ac&len=2&q=rhaenyra%20targaryen&eq=rhae&etslf=5202)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'daemon') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/564x/93/41/1d/93411d3e463c303f56fef77295c1b3bf.jpg', {
            reply_markup: { inline_keyboard: daemkey }
        })
    }
    else if (query.data === 'daeminfo') {
        bot.sendMessage(query.message.chat.id, "[Info Daemon](https://awoiaf.westeros.org/index.php/Daemon_Targaryen)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'daemactor') {
        bot.sendMessage(query.message.chat.id, "[Matt Smith](https://www.google.com/search?gs_ssp=eJzj4tLP1TcwKUzKKDE1YPTiyk0sKVEozs0syQAAWScHqA&q=matt+smith&rlz=1C5CHFA_enAM1117AM1117&oq=matt+sm&gs_lcrp=EgZjaHJvbWUqBwgBEC4YgAQyBggAEEUYOTIHCAEQLhiABDIHCAIQABiABDIHCAMQABiABDIHCAQQLhiABDIHCAUQABiABDIHCAYQABiABDIHCAcQLhiABDIHCAgQABiABDIHCAkQABiPAtIBCDMzOThqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'daemphotos') {
        bot.sendMessage(query.message.chat.id, "[Daemon photos](https://www.pinterest.com/search/pins/?q=daemon%20targaryen&rs=typed)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'jacaerys') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/736x/6e/7a/ce/6e7acef565832037cb60abe060628133.jpg', {
            reply_markup: { inline_keyboard: jaeckey }
        })
    }
    else if (query.data === 'jaecinfo') {
        bot.sendMessage(query.message.chat.id, "[Info Jacaerys](https://awoiaf.westeros.org/index.php/Jacaerys_Velaryon)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'jaecactor') {
        bot.sendMessage(query.message.chat.id, "[Harry Collett](https://www.google.com/search?q=Harry+Collett&sca_esv=75bf300f1280c287&sca_upv=1&rlz=1C5CHFA_enAM1117AM1117&ei=hEKJZuyTIImKxc8P0rqP-AQ&ved=0ahUKEwjs5erZvpKHAxUJRfEDHVLdA08Q4dUDCA8&uact=5&oq=Harry+Collett&gs_lp=Egxnd3Mtd2l6LXNlcnAiDUhhcnJ5IENvbGxldHQyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEdIoQ5QugZYugZwAXgCkAEAmAEAoAEAqgEAuAEDyAEA-AEBmAICoAIIwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQKYAwDiAwUSATEgQIgGAZAGCLoGBggBEAEYCboGBggCEAEYCJIHATKgBwA&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'jaecphotos') {
        bot.sendMessage(query.message.chat.id, "[Jacaerys photos](https://www.pinterest.com/search/pins/?rs=ac&len=2&q=jacaerys%20velaryon&eq=jacaerys&etslf=3176)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'lucerys') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/564x/5c/95/54/5c9554b37cf6c4dc39708d0deb78b120.jpg', {
            reply_markup: { inline_keyboard: luckey }
        })
    }
    else if (query.data === 'lucinfo') {
        bot.sendMessage(query.message.chat.id, "[Info Lucerys](https://awoiaf.westeros.org/index.php/Lucerys_Velaryon)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'lucactor') {
        bot.sendMessage(query.message.chat.id, "[Elliot Grihault](https://www.google.com/search?q=Elliot+Grihault&sca_esv=6269066d21daebf6&sca_upv=1&rlz=1C5CHFA_enAM1117AM1117&ei=3UOJZr38Iung7_UP0cCyiAs&ved=0ahUKEwj93q7-v5KHAxVp8LsIHVGgDLEQ4dUDCA8&uact=5&oq=Elliot+Grihault&gs_lp=Egxnd3Mtd2l6LXNlcnAiD0VsbGlvdCBHcmloYXVsdDIKEAAYgAQYQxiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjAI1D-BViNH3ABeAGQAQCYAbIBoAGjBaoBAzAuNbgBA8gBAPgBAZgCBqACwwXCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAsICBxAAGIAEGArCAgcQABiABBgNmAMAiAYBkAYSugYGCAEQARgJugYGCAIQARgIkgcDMS41oAfRHg&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'lucphotos') {
        bot.sendMessage(query.message.chat.id, "[Lucerys photos](https://www.pinterest.com/search/pins/?q=lucerys%20velaryon&rs=typed)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'joffrey') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/564x/a6/77/83/a67783d4bcc30b68d4ad59a7981b0969.jpg', {
            reply_markup: { inline_keyboard: jofkey }
        })
    }
    else if (query.data === 'jofinfo') {
        bot.sendMessage(query.message.chat.id, "[Info Joffrey](https://awoiaf.westeros.org/index.php/Joffrey_Velaryon)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'jofactor') {
        bot.sendMessage(query.message.chat.id, "[Oscar Eskinazi](https://www.google.com/search?q=Oscar+Eskinazi&sca_esv=6269066d21daebf6&sca_upv=1&rlz=1C5CHFA_enAM1117AM1117&ei=ZkWJZt2eIZ7ixc8Pw7i70As&ved=0ahUKEwjd6d-5wZKHAxUecfEDHUPcDroQ4dUDCA8&uact=5&oq=Oscar+Eskinazi&gs_lp=Egxnd3Mtd2l6LXNlcnAiDk9zY2FyIEVza2luYXppMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRIjQ5QAFgAcAB4AZABAJgBtAGgAbQBqgEDMC4xuAEDyAEA-AEC-AEBmAIBoAK9AZgDAJIHAzAuMaAHmwQ&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'jofphotos') {
        bot.sendMessage(query.message.chat.id, "[Joffrey photos](https://www.pinterest.com/search/pins/?rs=ac&len=2&q=joffrey%20velaryon&eq=joffrey&etslf=5313)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'aegonblack') {
        bot.sendPhoto(query.message.chat.id, 'https://awoiaf.westeros.org/images/thumb/0/05/AEGON_III.jpg/350px-AEGON_III.jpg', {
            reply_markup: { inline_keyboard: aegonblackkey }
        })
    }
    else if (query.data === 'aegonblackinfo') {
        bot.sendMessage(query.message.chat.id, "[Info prince Aegon](https://awoiaf.westeros.org/index.php/Aegon_III_Targaryen)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'viserys') {
        bot.sendPhoto(query.message.chat.id, 'https://awoiaf.westeros.org/images/a/ad/VISERYS_II.jpg', {
            reply_markup: { inline_keyboard: viseryskey }
        })
    }
    else if (query.data === 'viserysinfo') {
        bot.sendMessage(query.message.chat.id, "[Info prince Viserys](https://awoiaf.westeros.org/index.php/Viserys_II_Targaryen)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'rhaenys') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/564x/a8/ac/f5/a8acf50bf0e3d762a4b5736633281b1d.jpg', {
            reply_markup: { inline_keyboard: rhaenyskey }
        })
    }
    else if (query.data === 'rhaenysinfo') {
        bot.sendMessage(query.message.chat.id, '<a href="https://awoiaf.westeros.org/index.php/Rhaenys_Targaryen_(daughter_of_Aemon)">Info Rhaenys</a>', {
            parse_mode: 'HTML',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'rhaenysactress') {
        bot.sendMessage(query.message.chat.id, "[Eve Best](https://www.google.com/search?q=Eve+Best&sca_esv=65e5986c7a7849bb&sca_upv=1&rlz=1CALAYK_enUA1006&sxsrf=ADLYWIIYr_IajZc6PQWiYJFJhmRlVV764Q%3A1720289401214&ei=eYiJZrbRDNS6xc8Pk8en8AQ&ved=0ahUKEwj28a21gZOHAxVUXfEDHZPjCU4Q4dUDCA8&uact=5&oq=Eve+Best&gs_lp=Egxnd3Mtd2l6LXNlcnAiCEV2ZSBCZXN0MgUQLhiABDIKEAAYgAQYFBiHAjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIKEAAYgAQYQxiKBTIFEAAYgAQyFBAuGIAEGJcFGNwEGN4EGN8E2AEBSOcGUABYAHAAeAGQAQCYAcQCoAHEAqoBAzMtMbgBA8gBAPgBAvgBAZgCAaAC5wKYAwC6BgYIARABGBSSBwMzLTGgB_gL&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'rhaenysphotos') {
        bot.sendMessage(query.message.chat.id, "[Rhaenys photos](https://www.pinterest.com/search/pins/?rs=ac&len=2&q=rhaenys%20targaryen&eq=rhaenys&etslf=14677)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'baela') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/736x/05/85/dd/0585dd11431881ed0a4c17bc9e7cc62b.jpg', {
            reply_markup: { inline_keyboard: baelakey }
        })
    }
    else if (query.data === 'baelainfo') {
        bot.sendMessage(query.message.chat.id, "[Info Baela](https://awoiaf.westeros.org/index.php/Baela_Targaryen)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'baelaactress') {
        bot.sendMessage(query.message.chat.id, "[Bethany Antonia](https://www.google.com/search?q=Bethany+Antonia&sca_esv=65e5986c7a7849bb&sca_upv=1&rlz=1CALAYK_enUA1006&sxsrf=ADLYWIIr2pTxrtwyeYGFk3nXxJJ11nVvyw%3A1720289683123&ei=k4mJZpaXB-qMxc8Py9SK0AM&ved=0ahUKEwjWrOS7gpOHAxVqRvEDHUuqAjoQ4dUDCA8&uact=5&oq=Bethany+Antonia&gs_lp=Egxnd3Mtd2l6LXNlcnAiD0JldGhhbnkgQW50b25pYTIFEC4YgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yFBAuGIAEGJcFGNwEGN4EGN8E2AEBSJQGUABYAHAAeAGQAQCYAb8BoAG_AaoBAzAuMbgBA8gBAPgBAvgBAZgCAaAC2wGYAwC6BgYIARABGBSSBwMyLTGgB5YN&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'baelaphotos') {
        bot.sendMessage(query.message.chat.id, "[Baela photos](https://www.pinterest.com/search/pins/?q=baela%20targaryen&rs=typed)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'rhaena') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/564x/15/5d/19/155d198b7c1d31f010918f540812989f.jpg', {
            reply_markup: { inline_keyboard: rhaenakey }
        })
    }
    else if (query.data === 'rhaenainfo') {
        bot.sendMessage(query.message.chat.id, '<a href="https://awoiaf.westeros.org/index.php/Rhaena_Targaryen_(daughter_of_Daemon)">Info Rhaena</a>', {
            parse_mode: 'HTML',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'rhaenaactress') {
        bot.sendMessage(query.message.chat.id, "[Phoebe Campbell](https://www.google.com/search?q=Phoebe+Campbell&sca_esv=65e5986c7a7849bb&sca_upv=1&rlz=1CALAYK_enUA1006&sxsrf=ADLYWIJbKjl4j4U7X-QbjuChWoK9p2ZvuQ%3A1720290045686&ei=_YqJZt6wKd6Txc8PzOu9gAo&ved=0ahUKEwieo9Xog5OHAxXeSfEDHcx1D6AQ4dUDCA8&uact=5&oq=Phoebe+Campbell&gs_lp=Egxnd3Mtd2l6LXNlcnAiD1Bob2ViZSBDYW1wYmVsbDIFEC4YgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSIEIUABYAHAAeAGQAQCYAcsBoAHLAaoBAzItMbgBA8gBAPgBAvgBAZgCAqACxAjCAhQQLhiABBiXBRjcBBjeBBjfBNgBAZgDALoGBggBEAEYFJIHBzItMS42LTGgB-IM&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'rhaenaphotos') {
        bot.sendMessage(query.message.chat.id, "[Rhaena photos](https://www.pinterest.com/search/pins/?q=rhaena%20targaryen&rs=typed)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'corlys') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/736x/6c/37/e0/6c37e0de71dfd01fd1d09a226d12927e.jpg', {
            reply_markup: { inline_keyboard: corlyskey }
        })
    }
    else if (query.data === 'corlysinfo') {
        bot.sendMessage(query.message.chat.id, "[Info Corlys](https://awoiaf.westeros.org/index.php/Corlys_Velaryon)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'corlysactor') {
        bot.sendMessage(query.message.chat.id, "[Steve Toussaint](https://www.google.com/search?q=Steve+Toussaint&sca_esv=65e5986c7a7849bb&sca_upv=1&rlz=1CALAYK_enUA1006&sxsrf=ADLYWIKBc0oIRyn4DKLJmM4lXZ2R9INEzg%3A1720290648702&ei=WI2JZsm4KtCTxc8PrcauwAc&ved=0ahUKEwjJxJqIhpOHAxXQSfEDHS2jC3gQ4dUDCA8&uact=5&oq=Steve+Toussaint&gs_lp=Egxnd3Mtd2l6LXNlcnAiD1N0ZXZlIFRvdXNzYWludDIFEC4YgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSI0HUABYAHAAeAGQAQCYAcIBoAHCAaoBAzAuMbgBA8gBAPgBAvgBAZgCAqAC_QbCAhQQLhiABBiXBRjcBBjeBBjfBNgBAZgDALoGBggBEAEYFJIHBzItMS41LTGgB4oN&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'corlysphotos') {
        bot.sendMessage(query.message.chat.id, "[Corlys photos](https://www.pinterest.com/search/pins/?rs=ac&len=2&q=corlys%20velaryon&eq=corlys%20v&etslf=4680)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'erryk') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/564x/b2/fe/b6/b2feb6d74ac20c6676d1d4345c0acf6e.jpg', {
            reply_markup: { inline_keyboard: errykkey }
        })
    }
    else if (query.data === 'errykinfo') {
        bot.sendMessage(query.message.chat.id, "[Info Erryk](https://awoiaf.westeros.org/index.php/Erryk_Cargyll)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'errykactor') {
        bot.sendMessage(query.message.chat.id, "[Elliott Tittensor](https://www.google.com/search?q=Elliott+Tittensor&sca_esv=65e5986c7a7849bb&sca_upv=1&rlz=1CALAYK_enUA1006&sxsrf=ADLYWIInh1uVKwU6vjCp4qA1zJOrLrr3OA%3A1720290839931&ei=F46JZoy7OICtxc8PgfKtwAk&ved=0ahUKEwjMorLjhpOHAxWAVvEDHQF5C5gQ4dUDCA8&uact=5&oq=Elliott+Tittensor&gs_lp=Egxnd3Mtd2l6LXNlcnAiEUVsbGlvdHQgVGl0dGVuc29yMgUQLhiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yFBAuGIAEGJcFGNwEGN4EGN8E2AEBSMQGUABYAHAAeAGQAQCYAbUBoAG1AaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACzgGYAwC6BgYIARABGBSSBwMyLTGgB4wN&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'errykphotos') {
        bot.sendMessage(query.message.chat.id, "[Erryk photos](https://www.pinterest.com/search/pins/?rs=ac&len=2&q=erryk%20cargyll&eq=erryk&etslf=4590)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }



    // greens ->


    else if (query.data === 'arryk') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/736x/b7/b1/dc/b7b1dc7d7101e49d795b23cfca3dec98.jpg', {
            reply_markup: { inline_keyboard: arrykkey }
        })
    }
    else if (query.data === 'arrykinfo') {
        bot.sendMessage(query.message.chat.id, "[Info Arryk](https://awoiaf.westeros.org/index.php/Arryk_Cargyll)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'arrykactor') {
        bot.sendMessage(query.message.chat.id, "[Luke Tittensor](https://www.google.com/search?q=Luke+Tittensor&sca_esv=e9d63d2b37743ed8&sca_upv=1&rlz=1C5CHFA_enAM1117AM1117&ei=IEmKZorJM8-Oxc8P3u6HiAY&ved=0ahUKEwiK2eWSuZSHAxVPR_EDHV73AWEQ4dUDCA8&uact=5&oq=Luke+Tittensor&gs_lp=Egxnd3Mtd2l6LXNlcnAiDkx1a2UgVGl0dGVuc29yMgoQLhiABBhDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyGRAuGIAEGEMYigUYlwUY3AQY3gQY3wTYAQNI0CVQkQVY0x9wAXgBkAEAmAGnAaABiAWqAQMwLjW4AQPIAQD4AQGYAgagArAFwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQLCAgcQABiABBgKwgIIEAAYgAQYogSYAwCIBgGQBhK6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBSSBwMxLjWgB781&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'arrykphotos') {
        bot.sendMessage(query.message.chat.id, "[Arryk photos](https://www.pinterest.com/search/pins/?q=Arryk%20Cargyll&rs=typed)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'kingaegon') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/736x/64/c3/24/64c324644671c764330e93efd4155731.jpg', {
            reply_markup: { inline_keyboard: aegonkey }
        })
    }
    else if (query.data === 'aegoninfo') {
        bot.sendMessage(query.message.chat.id, "[Info Aegon](https://awoiaf.westeros.org/index.php/Aegon_II_Targaryen)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'aegonactor') {
        bot.sendMessage(query.message.chat.id, '<a href="https://www.google.com/search?q=Tom+Glynn-Carney&sca_esv=e9d63d2b37743ed8&sca_upv=1&rlz=1C5CHFA_enAM1117AM1117&ei=LUqKZsVfgYjs1g-I2L34Dw&ved=0ahUKEwiFqtWSupSHAxUBBNsEHQhsD_8Q4dUDCA8&uact=5&oq=Tom+Glynn-Carney&gs_lp=Egxnd3Mtd2l6LXNlcnAiEFRvbSBHbHlubi1DYXJuZXkyChAuGIAEGEMYigUyChAAGIAEGEMYigUyBRAAGIAEMgUQABiABDIKEAAYgAQYQxiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMhkQLhiABBhDGIoFGJcFGNwEGN4EGN8E2AEBSOIGUABYAHAAeAGQAQCYAZsBoAGbAaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACqQGYAwC6BgYIARABGBSSBwMwLjGgB9QM&sclient=gws-wiz-serp">Tom Glynn-Carney</a>', {
            parse_mode: 'HTML',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'aegonphotos') {
        bot.sendMessage(query.message.chat.id, "[Aegon photos](https://www.pinterest.com/search/pins/?rs=ac&len=2&q=aegon%20ii%20targaryen&eq=aegon%20II&etslf=9533)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'helaena') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/736x/ff/b1/3a/ffb13a301269cd2320f6838186e31574.jpg', {
            reply_markup: { inline_keyboard: helaenakey }
        })
    }
    else if (query.data === 'helaenainfo') {
        bot.sendMessage(query.message.chat.id, '<a href="https://awoiaf.westeros.org/index.php/Helaena_Targaryen">Info Helaena</a>', {
            parse_mode: 'HTML',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'helaenaactress') {
        bot.sendMessage(query.message.chat.id, "[Phia Saban](https://www.google.com/search?q=Phia+Saban&sca_esv=e9d63d2b37743ed8&sca_upv=1&rlz=1C5CHFA_enAM1117AM1117&ei=-0uKZv3AEMSM7NYP6paKkAc&ved=0ahUKEwi9qovvu5SHAxVEBtsEHWqLAnIQ4dUDCA8&uact=5&oq=Phia+Saban&gs_lp=Egxnd3Mtd2l6LXNlcnAiClBoaWEgU2FiYW4yBRAuGIAEMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIUEC4YgAQYlwUY3AQY3gQY4ATYAQNImQ9QiwlYiwlwAXgBkAEAmAGPAaABjwGqAQMwLjG4AQPIAQD4AQL4AQGYAgKgAp4BwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQKYAwCIBgGQBhC6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBSSBwMxLjGgB7QH&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'helaenaphotos') {
        bot.sendMessage(query.message.chat.id, "[Helaena photos](https://www.pinterest.com/search/pins/?rs=ac&len=2&q=helaena%20targaryen&eq=helaena&etslf=3402)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'aemond') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/564x/d2/ba/87/d2ba871612f1cd5863d6b5392391d3c7.jpg', {
            reply_markup: { inline_keyboard: aemondkey }
        })
    }
    else if (query.data === 'aemondinfo') {
        bot.sendMessage(query.message.chat.id, "[Info Aemond](https://awoiaf.westeros.org/index.php/Aemond_Targaryen)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'aemondactor') {
        bot.sendMessage(query.message.chat.id, '<a href="https://www.google.com/search?q=Ewan+Mitchell&sca_esv=e9d63d2b37743ed8&sca_upv=1&rlz=1C5CHFA_enAM1117AM1117&ei=oU2KZvOGIImCxc8P-dqZ0As&ved=0ahUKEwiz27e4vZSHAxUJQfEDHXltBroQ4dUDCA8&uact=5&oq=Ewan+Mitchell&gs_lp=Egxnd3Mtd2l6LXNlcnAiDUV3YW4gTWl0Y2hlbGwyDxAAGIAEGEMYigUYRhj7ATIFEC4YgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIbEAAYgAQYQxiKBRhGGPsBGJcFGIwFGN0E2AEDSM0SUIQKWP0McAJ4AZABAJgBgAGgAfYBqgEDMC4yuAEDyAEA-AEBmAIEoAKVAsICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AECwgIHEC4YgAQYCsICBxAAGIAEGAqYAwCIBgGQBhC6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBOSBwMyLjKgB9Ed&sclient=gws-wiz-serp">Ewan Mitchell</a>', {
            parse_mode: 'HTML',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'aemondphotos') {
        bot.sendMessage(query.message.chat.id, "[Aemond photos](https://www.pinterest.com/search/pins/?rs=ac&len=2&q=aemond%20targaryen&eq=aemond&etslf=4941)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'daeron') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/564x/d5/3a/c7/d53ac78c38d25e1d9b1655d23953cb96.jpg', {
            reply_markup: { inline_keyboard: daeronkey }
        })
    }
    else if (query.data === 'daeroninfo') {
        bot.sendMessage(query.message.chat.id, '<a href="https://awoiaf.westeros.org/index.php/Daeron_Targaryen_(son_of_Viserys_I)">Info Daeron</a>', {
            parse_mode: 'HTML',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'daeronarts') {
        bot.sendMessage(query.message.chat.id, "[Arts of Daeron](https://www.pinterest.com/search/pins/?rs=ac&len=2&q=daeron%20targaryen%20art&eq=daeron&etslf=5986)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'jaehaerys') {
        bot.sendPhoto(query.message.chat.id, 'https://static.wikia.nocookie.net/gameofthrones/images/c/ce/Jaehaerys_Targaryen_S2.png/revision/latest?cb=20240617081002', {
            reply_markup: { inline_keyboard: jaehaeryskey }
        })
    }
    else if (query.data === 'jaehaerysinfo') {
        bot.sendMessage(query.message.chat.id, '<a href="https://awoiaf.westeros.org/index.php/Jaehaerys_Targaryen_(son_of_Aegon_II)">Info Jaehaerys</a>', {
            parse_mode: 'HTML',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'jaehaera') {
        bot.sendPhoto(query.message.chat.id, 'https://static.wikia.nocookie.net/gameofthrones/images/8/8c/Jaehaera_Targaryen_S2.png/revision/latest?cb=20240617045514', {
            reply_markup: { inline_keyboard: jaehaerakey }
        })
    }
    else if (query.data === 'jaehaerainfo') {
        bot.sendMessage(query.message.chat.id, '<a href="https://awoiaf.westeros.org/index.php/Jaehaera_Targaryen">Info Jaehaera</a>', {
            parse_mode: 'HTML',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'alicent') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/736x/35/47/25/3547253a4f77a53517d4568cf49fa64f.jpg', {
            reply_markup: { inline_keyboard: alicentkey }
        })
    }
    else if (query.data === 'alicentinfo') {
        bot.sendMessage(query.message.chat.id, "[Info Alicent](https://awoiaf.westeros.org/index.php/Alicent_Hightower)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'alicentactress') {
        bot.sendMessage(query.message.chat.id, "[Olivia Cooke](https://www.google.com/search?q=Olivia+Cooke&sca_esv=23430e1df8f38b82&sca_upv=1&rlz=1C5CHFA_enAM1117AM1117&ei=o1KKZrCwH5Hh7_UPqrCpoA4&ved=0ahUKEwjwjd6bwpSHAxWR8LsIHSpYCuQQ4dUDCA8&uact=5&oq=Olivia+Cooke&gs_lp=Egxnd3Mtd2l6LXNlcnAiDE9saXZpYSBDb29rZTILEC4YgAQYkQIYigUyCxAAGIAEGJECGIoFMgsQABiABBiRAhiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAuGIAEMgUQABiABDIFEAAYgAQyGhAuGIAEGJECGIoFGJcFGNwEGN4EGN8E2AEDSLQRUJ8KWJ8KcAF4AZABAJgBpgGgAaYBqgEDMC4xuAEDyAEA-AEC-AEBmAICoAK5AcICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AECmAMAiAYBkAYQugYGCAEQARgJugYGCAIQARgIugYGCAMQARgUkgcDMS4xoAflDg&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'alicentphotos') {
        bot.sendMessage(query.message.chat.id, "[Alicent photos](https://www.pinterest.com/search/pins/?rs=ac&len=2&q=alicent%20hightower&eq=alicent&etslf=3700)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'otto') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/564x/bd/95/44/bd95446b538e3eeba0da681ec77dce9e.jpg', {
            reply_markup: { inline_keyboard: ottokey }
        })
    }
    else if (query.data === 'ottoinfo') {
        bot.sendMessage(query.message.chat.id, "[Info Otto](https://awoiaf.westeros.org/index.php/Otto_Hightower)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'ottoactor') {
        bot.sendMessage(query.message.chat.id, "[Rhys Ifans](https://www.google.com/search?q=Rhys+Ifans&sca_esv=23430e1df8f38b82&sca_upv=1&rlz=1C5CHFA_enAM1117AM1117&ei=lFOKZr7oPIStxc8PztGh8A4&ved=0ahUKEwi-gvGOw5SHAxWEVvEDHc5oCO4Q4dUDCA8&uact=5&oq=Rhys+Ifans&gs_lp=Egxnd3Mtd2l6LXNlcnAiClJoeXMgSWZhbnMyChAuGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAuGIAEGEMYigUyBRAAGIAEMgUQABiABDIKEC4YgAQYQxiKBTIFEAAYgAQyBRAAGIAEMhkQLhiABBhDGIoFGJcFGNwEGN4EGN8E2AEBSM8JUABYAHAAeAGQAQCYAacBoAGnAaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACrwGYAwC6BgYIARABGBSSBwMwLjGgB4gR&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'ottophotos') {
        bot.sendMessage(query.message.chat.id, "[Otto photos](https://www.pinterest.com/search/pins/?rs=ac&len=2&q=otto%20hightower&eq=otto%20high&etslf=6036)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'cole') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/564x/e7/13/33/e71333530ea936ce6a2dc603421d7b48.jpg', {
            reply_markup: { inline_keyboard: colekey }
        })
    }
    else if (query.data === 'coleinfo') {
        bot.sendMessage(query.message.chat.id, "[Info Cole](https://awoiaf.westeros.org/index.php/Criston_Cole)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'coleactor') {
        bot.sendMessage(query.message.chat.id, "[Fabien Frankel](https://www.google.com/search?q=Fabien+Frankel&sca_esv=23430e1df8f38b82&sca_upv=1&rlz=1C5CHFA_enAM1117AM1117&ei=glSKZtuNO8mOxc8P_9KMkAM&ved=0ahUKEwjb1q2AxJSHAxVJR_EDHX8pAzIQ4dUDCA8&uact=5&oq=Fabien+Frankel&gs_lp=Egxnd3Mtd2l6LXNlcnAiDkZhYmllbiBGcmFua2VsMgoQLhiABBhDGIoFMgUQABiABDIKEAAYgAQYQxiKBTIFEAAYgAQyChAAGIAEGEMYigUyBRAAGIAEMgUQABiABDIKEAAYgAQYQxiKBTIFEAAYgAQyBRAAGIAEMhkQLhiABBhDGIoFGJcFGNwEGN4EGN8E2AEBSIIIUABYAHAAeAGQAQCYAZsBoAGbAaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACqQGYAwC6BgYIARABGBSSBwMwLjGgB7UM&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'colephotos') {
        bot.sendMessage(query.message.chat.id, "[Cole photos](https://www.pinterest.com/search/pins/?q=ser%20criston%20cole&rs=typed)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'larys') {
        bot.sendPhoto(query.message.chat.id, 'https://i.pinimg.com/736x/a1/4b/2f/a14b2fd48e40a5af5e9eaf6d3869fc8a.jpg', {
            reply_markup: { inline_keyboard: laryskey }
        })
    }
    else if (query.data === 'larysinfo') {
        bot.sendMessage(query.message.chat.id, "[Info Larys](https://awoiaf.westeros.org/index.php/Larys_Strong)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'larysactor') {
        bot.sendMessage(query.message.chat.id, "[Matthew Needham](https://www.google.com/search?q=Matthew+Needham&sca_esv=23430e1df8f38b82&sca_upv=1&rlz=1C5CHFA_enAM1117AM1117&ei=Y1WKZr7aNdWJxc8Pkfq98AM&ved=0ahUKEwj-l83rxJSHAxXVRPEDHRF9Dz4Q4dUDCA8&uact=5&oq=Matthew+Needham&gs_lp=Egxnd3Mtd2l6LXNlcnAiD01hdHRoZXcgTmVlZGhhbTIKEC4YgAQYQxiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIZEC4YgAQYQxiKBRiXBRjcBBjeBBjfBNgBA0jJDVC9B1i9B3ABeAGQAQCYAYYBoAGGAaoBAzAuMbgBA8gBAPgBAvgBAZgCAqACmwHCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBApgDAIgGAZAGELoGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFJIHAzEuMaAHoww&sclient=gws-wiz-serp)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }
    else if (query.data === 'larysphotos') {
        bot.sendMessage(query.message.chat.id, "[Larys photos](https://www.pinterest.com/search/pins/?q=larys%20strong&rs=typed)", {
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    }



})


// https://awoiaf.westeros.org/index.php/Blacks
// https://awoiaf.westeros.org/index.php/Greens