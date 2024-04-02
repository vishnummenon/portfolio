enum Sections {
    about = 'about',
    experience = 'experience',
    offline = 'offline'
}

type ISections = {
    key: keyof typeof Sections;
    value: string;
}

export const sections: ISections[] = [
    {
        key: 'about',
        value: 'About Me'
    },
    {
        key: 'experience',
        value: 'My Experience'
    },
    {
        key: 'offline',
        value: 'Apart from Work'
    }
];