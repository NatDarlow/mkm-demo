import { BranchAddressesType } from './BranchAddressesType';
import { BranchContactsType } from './BranchContactsType';
import { BranchPricingType } from './BranchPricingType';
import { BranchRelationshipType } from './BranchRelationshipType';
import { CoordinatesType } from '../CoordinatesType';
import { SocialMediaType } from '../SocialMediaType';
import { WorkingHoursWeekType } from '../WorkingHoursWeekType';

export type BranchType = {
    id: number,
    slug: string|null,
    name: string|null,
    region: string|null,
    city: string|null,
    coordinates: CoordinatesType|null,
    distance: string|null,
    contacts: BranchContactsType|null,
    socialMedia: SocialMediaType|null,
    pricing: BranchPricingType|null,
    addresses: BranchAddressesType|null,
    workingHours: WorkingHoursWeekType|null,
    status: string|null,
    openingDate: string|null,
    type: string|null,
    parent: BranchRelationshipType|null,
    children: Array<BranchRelationshipType>|null,
};
