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
        date: new Date().toLocaleDateString(),
        content: [
            { type: 'text', data: `The initial blog point for the Dev Blog` },
        ]
    }
];
/*addBlogEntry({
    title: `${devEmoji.projects} Blog Build is Finished`,
    date: /*new Date().toLocaleDateString(),*//*'8/5/2025',*/
    /*content: [
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
});*/

// image example:
/*addBlogEntry({
    title: `${devEmoji.learned} Canvas`,
    date: new Date().toLocaleDateString(),
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