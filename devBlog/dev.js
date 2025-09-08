const devEmoji = {
    projects: '🛠️',
    bug: '🐛',
    learned: '🧠',
    plans: '✏️',
    cleaning: '🧹',
    organizing: '🗂️'
}

const storageKey = 'devBlogs';

let blogs = JSON.parse(localStorage.getItem(storageKey)) || [
    {
        title: `${devEmoji.organizing} Blog initializer`,
        date: 'no date',
        content: [
            { type: 'text', data: `The initial blog point for the Dev Blog` },
        ]
    }
];
/*
addBlogEntry({
    title: `${devEmoji.projects} Blog Build is Finished`,
    date: '8/5/2025',
    content: [
        { type: 'text', data: `It took a few days to wrangle my CSS and learn how localStorage and 
            JSON worked, but I am quite happy with the outcome. Now the real challenge - to use and
            update this blog!`},
        { type: 'text', data: `Is this something I even need to worry about? Maybe. I have attempted 
            journaling and diary writing numerous times and never kept up with it. I start with good 
            intentions and then there will come a day where I think to myself "meh, I'll do it tomorrow." 
            We all know what happens next - certainly not tomorrow!`},
        { type: 'text', data: `I will believe in myself though. Digital feels different and after all 
            the effort I put in to create it, I want to use it. Plus with Korea up and coming, I have 
            every excuse needed to get in the habit of blogging! I have to be ready to toss up my blog
            entries so that my friends can follow what I'm doing in Korea.`},
        {type: 'text', data: `Next up on the dev front is to create a professional GitHub presence. I 
            have my gamer profile and I'll keep my game creations on there, but if I want a job as a dev, 
            a professional GitHub is what I need now.`},
        {type: 'text', data: `Then I can push my newly minted blog to GitHub - Yay! That's a milestone. 😊`}
    ]
});

addBlogEntry({
    title: `${devEmoji.learned} Canvas`,
    date: '8/8/2025',
    content: [
        { type: 'text', data: `The next game I want to create for the minigame hub is hangman. For this project
            I have to learn how to use canvas. At first intimidated, I soon learned how fun it is to create
            basic shapes and layer them so an image is created. It's a sandbox of possibilities!` },
        { type: 'text', data: `To practice using canvas before attempting the hangman game build, I started 
            with a mini avatar creator. I learned how to make basic shapes and then custom shapes.`},
        { type: 'image', data: 'images/canvasSandbox.png', alt: 'canvas image' },
        { type: 'text', data: `It will be fun to explore this new medium of creation! After making something 
            fun, I will learn how to animate it. Then I will have two new tools in my dev kit - canvas painting 
            and animation.`}
    ]
});

addBlogEntry({
    title: `${devEmoji.learned} Drawing in Canvas`,
    date: '8/11/2025',
    content: [
        { type: 'text', data: `Drawing on canvas has been challenging, but I am now comfortable with 
         making strokes and have created a framework to work off of for the avatar creator. Drawing this 
         on paper only takes minutes, on canvas it was quite a bit longer! But I am still in the process 
         of learning.` },
        { type: 'text', data: `For example, today I learned why drawings start with 'beginPath()'; I couldn't figure out 
         why there was a line going from my circle to the corner of the canvas and it was only a tiny bit of 
         code. Then GPT explained that I hadn't started a new path so it was like the pencil never lifted from 
         the canvas between drawing the grid and the circle. I can learn the theory, but until I start messing 
         around with the code, it doesn't really sink in until I make those little mistakes and have the "ah-ha!" 
         moments`},
        { type: 'image', data: 'images/headShape.png', alt: 'canvas image' },
        { type: 'text', data: `Next task is to draw in the avatar. I will start with just a female avatar 
         with selectable hair, eyes, and shirt color. Then I will think about making a male version, a simple 
         toggle at the top of the drawing board, but another drawing that takes time to create. I don't think I 
         will go so far as to make the nose/mouth or eye shapes selectable, but it is a possible update.`}
    ]
});*/


// list example:
/*addBlogEntry({
    title: `${devEmoji.organizing} Organized My Blog Layout`,
    date: new Date().toLocaleDateString(),
    content: [
        { type: 'text', data: `I cleaned up my CSS and reorganized my HTML. 
        Now everything is easy to find and edit.` },
        { type: 'list', data: [
            'Removed redundant divs',
            'Added semantic <main> and <aside>',
            'Cleaned up flexbox CSS'
        ] }
    ]
});*/

// table example:
/*addBlogEntry({
    title: `${devEmoji.cleaning} CSS Cleanup Results`,
    date: new Date().toLocaleDateString(),
    content: [
        { type: 'text', data: `I compared the old layout with the new cleaned-up version. 
        The results are night and day!` },
        { type: 'table', data: [
            ['Feature', 'Before', 'After'],
            ['Layout width', '450px fixed', 'Full-screen flex'],
            ['Sidebar scroll', 'No', 'Yes'],
            ['Theme colors', 'One color', 'Per-page themes']
        ] }
    ]
});*/
refreshHistory();
displayBlog(blogs[0]);