export interface ICityCreate {
    name: string;
    slug: string;
    image?: File | null;
    countryId: number;
    timezone?: string;
    description?: string;
}
