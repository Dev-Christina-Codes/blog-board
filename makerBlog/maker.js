const makerEmoji = {
    painting: '🎨',
    drawing: '✏️',
    yarn: '🧶',
    thread: '🧵',
    jewelry: '💎',
    robotics: '🤖',
    cooking: '🍰'
};

const storageKey = 'makerBlogs';
let blogs = JSON.parse(localStorage.getItem(storageKey)) || [];

if (blogs.length === 0) {
    addBlogEntry({
        title: `${makerEmoji.thread} Started a cross-stitch`,
        date: '8/5/2025',
        content: [
            { type: 'text', data: `I started on another cross-stitch. I already have 2 WIPS, but this one 
            one was calling to me so...` },
            { type: 'image', data: 'images/itsOkayCrossStitchPicture.jpg', alt: 'picture of cross-stitch' },
            { type: 'text', data: `While I was packing for Korea, I had to decide what to bring with me and 
            Korea is a fresh start for me. This cross-stitch has such a great message that I felt like 
            it fit with my goals for this trip.`},
            { type: 'text', data: `I didn't want to be organizing threads in the airport (yes I cross-stitch in 
            public, even airports), so I opened up the kit and decided to get a small start on the stitching. 
            I don't know how others feel about starting another WIP or leaving only a few stitches on their 
            aida, but I just had to. It's a large project, so starting before Korea still makes it a Korea 
            stitch if I do the majority there and finish it there!`},
            { type: 'image', data: 'images/itsOkayCrossStitchStart.jpg', alt: 'picture of stamped aida'}
        ]
    });
};
addNewBlogEntry({
    title: `${makerEmoji.drawing} Hangul Garden Gnome`,
    date: '8/29/2025',
    content: [
        { type: 'text', data: `I have been working on a website for English Korean learners. I want 
            everything to have original artwork with mini games and lessons at the beginner level and 
            slightly more advanced practice sentences and vocabulary at the intermediate level. I decided 
            on the name of 'Hangul Garden', and the character that will guide users through is a little 
            gnome named 남 (Nam), which means 'to grow'. So I started by drawing him. He's so cute!`},
        { type: 'image', data: 'images/gnomeImage.png', alt: 'picture of a cartoon gnome' },
        { type: 'text', data: `I have started drawing the garden and gate leading to the two levels of 
            Korean and I hope to finish soon. It will be the intro page that leads to different garden 
            levels where users can choose what they want to learn.`},
        { type: 'text', data: `This is a pet project for me (it will take a long time), and I will be 
            updating the dev blog on my progress from time to time, but I'll post the completed artwork 
            here.`}
    ]
});
addNewBlogEntry({
    title: `${makerEmoji.drawing} K-pop Singer JL`,
    date: '9/25/2025',
    content: [
        { type: 'text', data: `I celebrated my birthday on Sunday. I was hurt the day before 
            and spent the day in bed. But, the girls at the AirBnB bought me cake.`},
        { type: 'image', data: 'images/grapeCake.jpg'},
        { type: 'text', data: `One of the girls, Shiela, also had a birthday upcoming, so I spent 
            the time I was stuck in bed drawing her favorite K-pop singer. JL is a Phillipino boy 
            who was on a singing contest and he now sings in a group called AHOF. It is so cute 
            watching Shiela fangirl over him, she just lights up when she talks about him.`},
        { type: 'image', data: 'images/jl.jpg'},
        { type: 'text', data: `She made a lovely lunch that we shared. I caught her in Twosome Place 
            buying her own cake - I chased her out! Lol, it was my privilege to buy her cake on her 
            special day. She was also leaving that day, so it was our last meal together. I'm so 
            happy that we became friends. I might go to visit her in the Phillipines after my stay 
            in Korea!`},
        { type: 'image', data: 'images/birthdayLunch.jpg'}
    ]
});

// list example:
/*addBlogEntry{(
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
if (blogs.length > 0) {
    displayBlog(blogs[0]);
};