import PNBLogo from "../../public/images/pnb.png";
import KeyValueLogo from "../../public/images/keyvalue.png"
import OracleLogo from "../../public/images/oracle.jpeg"
import { StaticImageData } from "next/image";

enum Orgs {
    oracle = 'oracle',
    pnb = 'pnb',
    keyvalue = 'keyvalue'
}

export type IOrgs = {
    id: keyof typeof Orgs;
    name: string;
    logo: StaticImageData;
    duration: string;
    skills: string[];
    highlights: string[];
}

export const orgs: IOrgs[] = [
    {
        id: 'keyvalue',
        name: 'KeyValue Software Systems',
        logo: KeyValueLogo,
        duration: '2020 - ',
        highlights: [
         'Developed Cross platform Mobile Applications',
         'Mentored and Led a team of frontend developers'
        ],
        skills: ['React Native', 'NextJS', 'GraphQL']
     },
    {
        id: 'pnb',
        name: 'Punjab National bank',
        logo: PNBLogo,
        duration: '2019 - 2020',
        highlights: [
         'Customized features for the CBS Application',
         'Worked on the amalgamation project for the bank'
        ],
        skills: ['Javascript', 'SQL', 'Finacle Script']
     },
     {
        id: 'oracle',
        name: 'Oracle India Pvt Ltd',
        logo: OracleLogo,
        duration: '2016 - 2019',
        highlights: [
         'Developed a CRM dashboard for Service Cloud',
         'Worked on the Upgrade and Migrations Project'
        ],
        skills: ['OJet', 'Php', 'HTML']
     },
];