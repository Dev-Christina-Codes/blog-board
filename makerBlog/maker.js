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

let blogs = JSON.parse(localStorage.getItem(storageKey)) || [
    {
        title: `${makerEmoji.painting} Blog initializer`,
        date: 'no date',
        content: [
            { type: 'text', data: `The initial blog point for the Maker Blog` },
        ]
    }
];


/*addBlogEntry({
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
});*/

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
displayBlog(blogs[0]);