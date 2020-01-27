export interface ICompany {
    id: number;
    name: string;
    address: string;
    mapUrl: string;
}

export interface ITrasaction {
    category: 'home', 'transport', 'communication', 'hotel', 'restaurant';
    ammount: number;
    companyId: number;
    status: 'completed' | 'pending';
    date: Date;
}

export interface IListTrasactionItem extends ITrasaction {
    itemType: string;
}

export interface IListTrasactionHeader {
    itemType: string;
    date: Date;
}