export interface ICityItem {
    id: number;
    name: string;
    slug: string;
    image?: string;
    countryId: number;
    countryName: string;
    timezone?: string;
    description?: string;
    dateCreated?: string;
    population?: number;
}
