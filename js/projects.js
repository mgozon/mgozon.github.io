let sec = document.getElementById("projects");
let data = [
    {
        title: "Life Organizer",
        tags: ['Javascript', 'React', 'Tailwind CSS', 'Firebase'],
        summary: 'A simple tool to organize the projects of your life',
        info: [`Life Organizer is a web app that provides a way to manage all of the projects an individual has going on in their life.
        It is built using a tree, allowing for users to categorize projects within whatever nested categories makes sense to them.
        The history page displays all of the projects created as well as the tasks associated with them, and their data is stored using firebase.`,
                `The intent of this app was to help me reflect every week on what I had accomplished and so I could improve on my methods the following week.
                Pencil and paper did not work well since there are too many projects and tasks to keep track without the convenience of a hierarchy like a tree.`],
        links: [
            ['Website', "https://mgozon-life-organizer.web.app/"]
        ],
        image: "./assets/life-organizer-ex.png",
        imgAlt: "life organizer example",

    },
    {
        title: "Musical Math",
        tags: ['Javascript', 'React', 'Tailwind CSS'],
        summary: 'Representing mathematics through music',
        info: [`Musical Math is a web app that allows a user to input mathematical expressions to output audio and its corresponding sheet music.
                The user could then select certain values from these functions and play them at configurable times in order to create a more cohesize piece.
                Three example demos have been provided.`,
                `This project came from MHacks, a hackathon hosted by the University of Michigan.
                We pondered the question, what would math sound like, with all of its patterns and symmetries, if we converted it to music?
                Certain functions, like trig functions, are cyclical in nature and could potentially create a musical pattern, while expressions involving modular arithmetic with powers of integers reflect the symmetries and patterns found in number theory.`],
        links: [
            ['Github', 'https://github.com/Dophin2009/mm'],
            ['Website', "https://dophin2009.github.io/mm/"]
        ],
        image: "./assets/musical-math.png",
        imgAlt: "Musical Math image",
    },
    {
        title: "Tasks with Coins",
        tags: ['Javascript', 'React', 'Tailwind CSS', 'Firebase'],
        summary: 'An incentivized to-do list',
        info: [`Tasks with Coins aims to solve the problem: how can we make ourselves motivated to complete tasks that we just want to ignore?
                Unlike other to-do list apps, Tasks with Coins includes a dual coin system flexible to the user's needs:
                a single coin could not possibly capture the value of various tasks, while a plethora would overwhelm the user, making two an ideal amount.`,
                `Tasks to be completed take on a button form to maximize efficiency while maintaining a simplistic design.
                Once the user has gathered enough coins, they can create wishes and specify the amount they have to earn before they can fulfill their wish.`],
        links: [
            ['Website', "https://tasks-with-coins.web.app/"]
        ],
        image: "./assets/tasks-with-coins.png",
        imgAlt: "Tasks with Coins image",
    },
    {
        title: "Color Board",
        tags: ['Unity', 'C#', 'Data Structures'],
        summary: 'A family-friendly board game to play over the holidays',
        info: [`While playing monopoly over Christmas, I thought about the many board games with simple rules yet are difficult to predict who would win.
                In this family-friendly game, one must strategically place their chips in such a way that they maximize the colored edges and 'edge streaks' that they own.
                Currently supporting 2-8 players, Color Board contains 5 short Christmas bops to celebrate the Jolly Holidays.`,
                `Thinking back to my experience with math competitions, there would oftentimes be problems involving two people playing optimally in an impartial game, where theory has been well developed (nim and the sprague-grundy theorem).
                However, impartial games are harder to analyze, and with the addition of more than two people, a more difficult game could be formed, although strategies could still be developed.
                Combining this idea with a board game naturally resulted in Color Board.
                Using a disjoint set, the scoring can be efficiently calculated in log(n) time.`],
        links: [
            ['Website', "https://mgozon.github.io/Color-Board-Web/"]
        ],
        image: "./assets/color-board.png",
        imgAlt: "Color Board image",
    },
    {
        title: "Maze Generator",
        tags: ['Unity', 'C#', 'Algorithms'],
        summary: 'A game that generates its own mazes',
        info: [`The idea of generating mazes had been once since I was a child, but only until I stepped into the competition scene did I realize how much more was possible with Data Structures and Algorithms.
                There were many algorithms that I considered in the process of generating a maze, some that used a depth-first search, some that involved randomness to form a uniform spanning tree, while others that used a randomized minimum spanning tree algorithm.
                As the first produced long corridors with the second taking up a considerable amount of time for large graphs, I took on the third approach, and a demo of how the maze is generated is available directly to the curious individual within the app.`],
        links: [
            ['App Store', "https://play.google.com/store/apps/details?id=com.MCGBlueDragon.MazeGenerator"]
        ],
        image: "./assets/maze-generator.png",
        imgAlt: "Maze Generator image",
    },
    {
        title: "Infinite Maze",
        tags: ['Unity', 'C#', 'Data Structures'],
        summary: 'a non-euclidean maze that only goes deeper',
        info: [`Infinite Maze was a fun application of the prefix tree data structure.
                Inspired by a dream, one could pass through a series of doors, ten on each wall, and end up in the same euclidean position but in a totally different room.
                At first, it seems like the doors lead to the same room, but upon entering, the difference would become apparent.
                Such an idea would seem difficult to implement first, but combined with a few visual tricks, it becomes clear how one would go about it.`],
        links: [
            ['Website', "https://mgozon.github.io/Infinite-Maze-Web/"]
        ],
        image: "./assets/infinite-maze.png",
        imgAlt: "Infinite Maze image",
    },
    {
        title: "Galaxy Escape",
        tags: ['Java', '2D Physics', 'Greenfoot'],
        summary: 'A planet based platformer',
        info: [`Nostalgic for the childhood days where I would spent countless hours playing Super Mario Galaxy, I attempted to recreate the experience I had.
                Though lacking in comparison to the remarkable visuals of SMG, Galaxy Escape presents a similar experience where the player has to collect three coins and reach the end before the time runs out.
                This game was an interesting attempt at recreating the planetary gravity unique to SMG from the ground up.`],
        links: [
                ['Github', "https://github.com/mgozon/Galaxy-Escape"]
        ],
        image: "./assets/galaxy-escape.png",
        imgAlt: "Galaxy Escape image",
    },
    {
        title: "Nature Flight",
        tags: ['Unity', 'C#'],
        summary: 'A peaceful flight through nature',
        info: [`Nature Flight is an app where the user can walk or fly among the trees to no end.
                Walking through many parks and reminiscing the beautiful landscape in tandem with the cool breeze brushing against my face, I tried to recreate the experience I had.
                Some design considerations limited to what extent such a scene could be recreated, such as how far the landscape should be autogenerated with respect to the player and how detailed it should be.
                Nevertheless, with the calming piano music I added, it still makes for a nice experience.`],
        links: [
                ['Website', "https://mgozon.github.io/Nature-Flight-Web/"]
        ],
        image: "./assets/nature-flight.png",
        imgAlt: "Nature Flight image",
    },
    {
        title: "Tutor Match",
        tags: ['C++', 'Algorithms'],
        summary: 'A program to speed up tutor matching',
        info: [`Sometime during covid, the student council formed a volunteering program that would help match tutors with a tutee.
                In response to the many individuals participating in the program, I implemented a program to efficiently match tutors to tutees as they were coming and going throughout the year.
                This program utilizes the maximal matching algorithm based on network flow, and the specific details can be found in the colab file below.`],
        links: [
                ['Colab', "https://sites.google.com/view/marcus-gozon/unity-projects/tutor-match"]
        ],
        image: "./assets/tutor-match.png",
        imgAlt: "Tutor Match image",
    },
    {
        title: "Three Gate Labyrinth",
        tags: ['Scratch'],
        summary: 'A maze layered with secrets',
        info: [`Inspired by Ready Player One, Three Gate Labyrinth is a maze that requires the user to collect three keys in order to complete the maze.
                However, like the book, there are multiple layers of easter eggs placed throughout the maze so only the true gunter could possibly reach the true ending.`],
        links: [
                ['Code', "https://scratch.mit.edu/projects/251662806/editor/"],
                ['Website', "https://sites.google.com/view/marcus-gozon/unity-projects/three-gate-labyrinth"]
        ],
        image: "./assets/three-gate-labyrinth.png",
        imgAlt: "Three Gate Labyrinth image",
    },
];

data.forEach((project) => {
    // divider and title
    sec.appendChild(document.createElement("br"));
    let hline = document.createElement("hr");
    hline.classList.add('hline');
    sec.appendChild(hline);
    let title = document.createElement("h2");
    title.textContent = project.title;
    sec.appendChild(title);

    // add tags
    let tags = document.createElement("div");
    tags.classList.add('tags');
    project.tags.forEach((tagInfo) => {
        let tag = document.createElement("div");
        tag.classList.add('tag');
        tag.textContent = tagInfo;
        tags.appendChild(tag);
    });
    sec.appendChild(tags);

    // left and right section of body
    let info = document.createElement("div");
    info.classList.add('project-info');
    let desc = document.createElement("div");
    desc.classList.add('project-description');
    let dcnt = document.createElement("div");
    dcnt.classList.add('project-description-content');
    let img = document.createElement('div');
    img.classList.add('project-image');

    let summary = document.createElement('p');
    summary.textContent = project.summary;
    summary.classList.add('summary');
    dcnt.appendChild(summary);
    project.info.forEach((paragraph) => {
        let paragraph_e = document.createElement('p');
        paragraph_e.textContent = paragraph;
        dcnt.appendChild(paragraph_e);
        dcnt.appendChild(document.createElement('br'));
    });
    let plinks = document.createElement('p');
    plinks.classList.add('plinks');
    plinks.textContent = "Links: ";
    project.links.forEach((link, index) => {
        if (index != 0) {
            let comma = document.createElement('pp');
            comma.textContent = ", ";
            plinks.appendChild(comma);
        }
        let link_e = document.createElement('a');
        link_e.textContent = link[0];
        link_e.href = link[1];
        plinks.appendChild(link_e);
    });
    dcnt.appendChild(plinks);
    dcnt.appendChild(document.createElement('br'));
    desc.appendChild(dcnt);
    info.appendChild(desc);
    
    let imgContent = document.createElement('img');
    imgContent.src = project.image;
    imgContent.alt = project.title + " image";//project.imgAlt;
    imgContent.classList.add('project-image-content');
    img.appendChild(imgContent);
    info.appendChild(img);

    sec.appendChild(info);
    // let li = document.createElement("p");
    // li.innerText = item;
    // sec.appendChild(li);
    // console.log('added element');
})