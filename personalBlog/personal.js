const personalEmoji = {
    sad: '😞',
    happy: '😊',
    thinking: '🤔',
    excited: '😆',
    angry: '😠',
    dissociated: '😐',
    exhausted: '🫠',
    bored: '🥱',
    invisible: '👀',
    victorious: '😈'
}

const storageKey = 'personalBlogs';

let blogs = JSON.parse(localStorage.getItem(storageKey)) || [
    {
        title: `${personalEmoji.happy} Blog initializer`,
        date: new Date().toLocaleDateString(),
        content: [
            { type: 'text', data: `The initial blog point for the Personal Blog` },
        ]
    }
];
/*addBlogEntry({
    title: `${personalEmoji.victorious} Got my Hair Washed`,
    date: new Date().toLocaleDateString(),
    content: [
        { type: 'text', data: `With the ongoing bathroom battle, I did not take a shower this morning.
            I was also in a bit of a rush, but I would have set an alarm a half hour earlier to shower.
            I decided last night that I wasn't going to and that I would wash my hair in a convenience store
            bathroom if it came down to that.` },
        { type: 'text', data: `I happened to see a hair salon while walking from the grocery store to the
            library. It was a hot day and I had been sweating already and I thought "why not ask?"`},
        { type: 'text', data: `I'm glad I did! For $12 I got my hair washed and dryed and having someone do
            that for you is worth it. For a few minutes, I chatted with the stylist about my plans and about
            the stress with my landlady. One of the other stylists heard and mentioned I could try asking
            at the YMCA to shower. Apparently, this is something that they allow. It doesn't hurt to inquire, 
            because taking allergy meds to shower isn't something I should have to do.`}
    ]
});*/
/*addBlogEntry({
    title: `${personalEmoji.angry} Bathroom Battle`,
    date: `8/4.2025`,
    content: [
        {type: 'text', data: `She actually put a scent diffuser in the bathroom, now my allergies flare 
            every time I use the toilet!`},
        {type: 'text', data: `I want to say that I can't believe how inconsiderate she can be - but I 
            can't - because she IS that inconsiderate (among other things - sigh)`}
    ]
});*/

// image example:
/*addBlogEntry({
    title: `${devEmoji.projects} Added Theme Colors`,
    date: new Date().toLocaleDateString(),
    content: [
        { type: 'text', data: `I gave each of my blog pages a unique color palette. 
        It finally feels like a real website!` },
        { type: 'image', data: 'images/theme-preview.png', alt: 'Screenshot of blog themes' }
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
/*addBlogEntry{(
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
function unlockPersonalBlog() {
    const input = document.getElementById('personalPassword').value;
    const correctPassword = "life is messy but beautiful!";

    if (input === correctPassword) {
        const main = document.getElementById('currentBlog');
        main.innerHTML = '';

        refreshHistory();
        displayBlog(blogs[0]);
    } else {
        alert("Incorrect password.");
    };
};