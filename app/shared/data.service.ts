import { ICompany } from "./interfaces";

export class DataService {
    getCompanies(): ICompany[] {
        return [
            {
                id: 1,
                name: 'Starbucks',
                address: '55 Broad St, New York, NY 10004, USA',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48373.64931341522!2d-73.99628895000001!3d40.732255649999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a16a5b613af%3A0xbee0bf647bc866d2!2sStarbucks!5e0!3m2!1sen!2sve!4v1543196176769'
            },
            {
                id: 2,
                name: 'Uber',
                address: '1455 Market St #400, San Francisco, CA 94103, USA',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.612237700468!2d-122.4201593853366!3d37.775689419881054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c23fdf313%3A0x6827d56be807cb92!2sUber+HQ!5e0!3m2!1sen!2sve!4v1543196400323'
            },
            {
                id: 3,
                name: 'T-Mobile USA',
                address: '3625 132nd Ave SE, Bellevue, WA 98006, USA',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.43987697067!2d-122.16747408497307!3d47.578685597900105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906eaa09904e63%3A0xb698fe7bcf0fe095!2sT-Mobile+Headquarters!5e0!3m2!1sen!2sve!4v1543196625605'
            },
            {
                id: 4,
                name: 'Ace Hotel New York',
                address: '20 W 29th St, New York, NY 10001, USA',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96727.55618380225!2d-74.05830098009417!3d40.74583138839969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a61c75684f%3A0x4d7d117fc628dcfc!2sAce+Hotel+New+York!5e0!3m2!1sen!2sve!4v1543197063194'
            },
            {
                id: 5,
                name: 'American Airlines',
                address: '4333 Amon Carter Blvd, Fort Worth, TX 76155, USA',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.648772640394!2d-97.05290258549!3d32.8280699886891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e80fd681a33d1%3A0x7e6337906b583dc6!2sAmerican+Airlines!5e0!3m2!1sen!2sve!4v1543197294609'
            },
            {
                id: 6,
                name: 'McDonald\'s',
                address: '1 Miad Terminal J 2nd Floor, 2K33, Miami, FL 33122, United States',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.327025725816!2d-80.27752378567!3d25.792783113609833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de11de45cdb22b%3A0x4bd9a18ae21c3de7!2sMcDonald&#39;s!5e0!3m2!1sen!2sve!4v1543197403212'
            }
        ]
    }

    getTransactions(): any[] {
        return [
            {
                itemType: 'header',
                date: new Date('Nov 23 2018')
            },
            {
                itemType: 'transaction',
                category: 'restaurant',
                ammount: -12.34,
                companyId: 1,
                status: 'completed',
                date: new Date('Nov 23 2018 16:37:28 EST')
            },
            {
                itemType: 'transaction',
                category: 'transport',
                ammount: 9.45,
                companyId: 2,
                status: 'pending',
                date: new Date('Nov 23 2018 16:22:34 EST')
            },
            {
                itemType: 'transaction',
                category: 'communication',
                ammount: -50.34,
                companyId: 3,
                status: 'completed',
                date: new Date('Nov 23 2018 10:43:38 EST')
            },
            {
                itemType: 'header',
                date: new Date('Nov 22 2018')
            },
            {
                itemType: 'transaction',
                category: 'hotel',
                ammount: -435.65,
                companyId: 4,
                status: 'pending',
                date: new Date('Nov 22 2018 7:26:38 EST')
            },
            {
                itemType: 'header',
                date: new Date('Nov 21 2018')
            },
            {
                itemType: 'transaction',
                category: 'restaurant',
                ammount: -25.34,
                companyId: 6,
                status: 'completed',
                date: new Date('Nov 21 2018 10:34:28 EST')
            },
            {
                itemType: 'transaction',
                category: 'restaurant',
                ammount: -25.34,
                companyId: 1,
                status: 'completed',
                date: new Date('Nov 21 2018 10:34:28 EST')
            },
            {
                itemType: 'transaction',
                category: 'transport',
                ammount: -325.65,
                companyId: 5,
                status: 'completed',
                date: new Date('Nov 21 2018 9:46:38 EST')
            },
            {
                itemType: 'header',
                date: new Date('Nov 20 2018')
            },
            {
                itemType: 'transaction',
                category: 'restaurant',
                ammount: -12.34,
                companyId: 1,
                status: 'completed',
                date: new Date('Nov 20 2018 16:37:28 EST')
            },
            {
                itemType: 'transaction',
                category: 'transport',
                ammount: 9.45,
                companyId: 2,
                status: 'pending',
                date: new Date('Nov 20 2018 16:22:34 EST')
            },
            {
                itemType: 'transaction',
                category: 'restaurant',
                ammount: -12.34,
                companyId: 1,
                status: 'completed',
                date: new Date('Nov 20 2018 10:43:38 EST')
            },
        ]
    }

    getCategoriesIcons() {
        return {
            home: '\ue902',
            transport: '\uebbd',
            communication: '\uea1c',
            hotel: '\uecdc',
            restaurant: '\uebbc'
        }
    }
}