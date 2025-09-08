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
let blogs = JSON.parse(localStorage.getItem(storageKey)) || [];

if (blogs.length === 0) {
    addBlogEntry({
        title: `${personalEmoji.angry} Bathroom Battle`,
        date: '8/4/2025',
        content: [
            {type: 'text', data: `She actually put a scent diffuser in the bathroom, now my allergies flare 
            every time I use the toilet!`},
            {type: 'text', data: `I want to say that I can't believe how inconsiderate she can be - but I 
            can't - because she IS that inconsiderate (among other things - sigh)`}
        ]
    });
    addBlogEntry({
        title: `${personalEmoji.victorious} Got my Hair Washed`,
        date: '8/5/2025',
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
    });
    addBlogEntry({
        title: `${personalEmoji.exhausted} Rough Night`,
        date: '8/8/2025',
        content: [
            { type: 'text', data: `I did not sleep well last night. I woke up a lot gasping for air and 
            distressed but I couldn't remember the dream that caused it.` },
            { type: 'text', data: `When others in the house were rousing, I looked at my phone and tried to 
            wake up. But I was falling asleep with it in my hand until I finally had to pee so bad that I 
            got up. With the bathroom still heavily scented, I used the downstairs bathroom after putting 
            in my laundry. I discovered afterwards that Rose had actually left for a short time this morning 
            and I could have just gone to the basement bathroom without her questioning me, but I needed to 
            do laundry anyway.`},
            { type: 'text', data: `After laundry and a coffee, I was so tired I napped, but again I woke up 
            startled several times. Now I'm wondering if it's nightmares or just general anxiety because of 
            my living situation. If this continues, I will have to take the anxiety pills before bed so that 
            I get a restful sleep. I can't get a handle on my stress without sleep. I can't take those pills 
            to Korea anyway, so I need to use them in the next three weeks or throw them away.`},
            { type: 'text', data: `That's my light at the end of the tunnel - Korea in 3 weeks! I can put this 
            stressful living experience behind me!`}
        ]
    });
    addBlogEntry({
        title: `${personalEmoji.dissociated} Shocking News`,
        date: '8/10/2025',
        content: [
            { type: 'text', data: `Yesterday I had dinner with Chevy, he told me something shocking and I have 
            have not been myself since. I think I'm dissociated, but I think that's okay too.` },
            { type: 'text', data: `Antonio got married last month, and he's having a baby. He never said anything 
            even though we have a daughter together. I think this is something he should tell me, but he hasn't. 
            I don't want to be bothered by the fact that he got married, I am happy that he has moved on even if 
            it was really fast. I knew he moved on quickly after finding condoms only weeks after we broke up 
            amidst his luggage from out of town.`},
            { type: 'text', data: `I never would have returned to a relationship with him, not after the way he 
            treated me, but it did sting when I learned he was married. We were together for almost 12 years and I 
            brought up us getting married many times but he never really wanted to. Now I know it was me, he didn't 
            want to marry me but felt obligated to stay with me. It might be what lead to the emotional abuse over 
            time because he resented me.`},
            { type: 'text', data: `I'm hoping I can get this out of my head soon and return to myself. Perhaps 
            knowing that relationship is more than officially over, I can really move on with my life now.`}
        ]
    });
};
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
    const correctPassword = "Living again";

    if (input === correctPassword) {
        const main = document.getElementById('currentBlog');
        main.innerHTML = '';

        refreshHistory();
        if (blogs.length > 0) {
            displayBlog(blogs[0]);
        } else {
        alert("Incorrect password.");
        };
    };
};