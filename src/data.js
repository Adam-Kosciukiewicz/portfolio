export const menuLinks = [
    'Home',
    'Umiejętości',
    'Projekty',
    'Kontakt',
]

export const skills = [
    {name:'HTML', link:'https://html.com/'},
    {name:'CSS', link:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
    {name:'SASS', link:'https://sass-lang.com/'},
    {name:'tailwind', link:'https://tailwindcss.com/'},
    {name:'JavaScript', link:'https://www.javascript.com/'},
    {name:'TypeScript', link:'https://www.typescriptlang.org/'},
    {name:'jQuery', link:'https://jquery.com/'},
    {name:'React', link:'https://reactjs.org/'},
    {name:'Node', link:'https://nodejs.org/en/'},
    {name:'express', link:'https://expressjs.com/'},
    {name:'MongoDB', link:'https://www.mongodb.com/'},
    {name:'git', link:'https://git-scm.com/'},
]

export const projects = [
    { 
        name:'EFL news',
        skills:['react','scss','express'],
        features: [
            {name: 'Serwer', description: 'Serwer node-express przesyłający API', icon: './assets/resume.svg'},
            {name: 'API', description: 'Autorskie API stworzone na potrzeby projektu', icon: './assets/resume.svg'},
        ],
        imgs: [
            'sportsite1.png',
            'background.jpg',
            'background.jpg',
        ],
        description: 'Strona przedstawiająca drużyny, wyniki meczy i rankingi z sezonu Europejskiej Ligi Futbolu, generowane na podstawie autorskiego API przesyłanego przez serwer napisany w ekspresie',
    }
]

export const employment = [
    {
        name: 'ReCodeIT - Full Stack Developer',
        technologies: ['React','TypeScript','Sass','MongoDB','Node'],
        description: 'Rozwijanie platformy Dyktanda.pl od strony front-endu i back-endu',
        time: '10.2021-12.2021',
        logo: 'recodeit.png',
    }
]


export const contactData = {
    email: 'adamvwv6@gmail.com',
    phone: '537135840',
    github: 'https://github.com/Adam-Kosciukiewicz',
}