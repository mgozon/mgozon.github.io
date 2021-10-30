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
        info: [`description`],
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
        summary: 'quick summary',
        info: [`description`],
        links: [
            ['Website', "https://tasks-with-coins.web.app/"]
        ],
        image: "./assets/tasks-with-coins.png",
        imgAlt: "Tasks with Coins image",
    },
    {
        title: "Color Board",
        tags: ['Unity', 'C#', 'Data Structures'],
        summary: 'quick summary',
        info: [`description`],
        links: [
            ['Website', "https://mgozon.github.io/Color-Board-Web/"]
        ],
        image: "./assets/color-board.png",
        imgAlt: "Color Board image",
    },
    {
        title: "Maze Generator",
        tags: ['Unity', 'C#', 'Algorithms'],
        summary: 'quick summary',
        info: [`description`],
        links: [
            ['App Store', "https://play.google.com/store/apps/details?id=com.MCGBlueDragon.MazeGenerator"]
        ],
        image: "./assets/maze-generator.png",
        imgAlt: "Maze Generator image",
    },
    {
        title: "Infinite Maze",
        tags: ['Unity', 'C#', 'Data Structures'],
        summary: 'quick summary',
        info: [`description`],
        links: [
            ['Website', "https://mgozon.github.io/Infinite-Maze-Web/"]
        ],
        image: "./assets/infinite-maze.png",
        imgAlt: "Infinite Maze image",
    },
    {
        title: "Galaxy Escape",
        tags: ['Java', '2D Physics', 'Greenfoot'],
        summary: 'quick summary',
        info: [`description`],
        links: [
                ['Github', "https://github.com/mgozon/Galaxy-Escape"]
        ],
        image: "./assets/galaxy-escape.png",
        imgAlt: "Galaxy Escape image",
    },
    {
        title: "Nature Flight",
        tags: ['Unity', 'C#'],
        summary: 'quick summary',
        info: [`description`],
        links: [
                ['Website', "https://mgozon.github.io/Nature-Flight-Web/"]
        ],
        image: "./assets/nature-flight.png",
        imgAlt: "Nature Flight image",
    },
    {
        title: "Tutor Match",
        tags: ['C++', 'Algorithms'],
        summary: 'quick summary',
        info: [`description`],
        links: [
                ['Colab', "https://sites.google.com/view/marcus-gozon/unity-projects/tutor-match"]
        ],
        image: "./assets/tutor-match.png",
        imgAlt: "Tutor Match image",
    },
    {
        title: "Three Gate Labyrinth",
        tags: ['Scratch'],
        summary: 'quick summary',
        info: [`description`],
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
    let img = document.createElement('div');
    img.classList.add('project-image');

    let summary = document.createElement('p');
    summary.textContent = project.summary;
    summary.classList.add('summary');
    desc.appendChild(summary);
    project.info.forEach((paragraph) => {
        let paragraph_e = document.createElement('p');
        paragraph_e.textContent = paragraph;
        desc.appendChild(paragraph_e);
        desc.appendChild(document.createElement('br'));
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
    desc.appendChild(plinks);
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