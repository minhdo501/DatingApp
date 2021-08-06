import { Photo } from './Photo';

// This is generated from Json to TS generator
    export interface Member {
        id: number;
        username: string;
        photoUrl: string;
        age: number;
        knownAs: string;
        created: Date;
        lastActive: Date;
        gender: string;
        introduction: string;
        lookingFor: string;
        interests: string;
        city: string;
        country: string;
        photos: Photo[];
    }

