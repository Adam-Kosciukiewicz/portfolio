export const menuLinks = [
    { name:'Home', scrollFrom: 0, scrollTo: 500},
    { name:'O mnie', scrollFrom: 500, scrollTo: 1200},
    { name:'Projekty', scrollFrom: 1200, scrollTo: 5400},
    { name:'Kontakt', scrollFrom: 5400, scrollTo: 5500},
]

export const skills = [
    'HTML',
    'CSS',
    'SASS',
    'tailwind',
    'JavaScript',
    'TypeScript',
    'jQuery',
    'React',
    'Node',
    'express',
    'MongoDB',
    'git',
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