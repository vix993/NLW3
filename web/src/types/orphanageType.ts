export interface OrphanageInMap {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

export interface OrphanageInView {
    latitude: number;
    longitude: number;
    name: string;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: string;
    images: Array<{
        id: number;
        url: string;
    }>;
}

export interface OrphanageParams {
    id: string;
}