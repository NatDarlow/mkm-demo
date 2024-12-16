import { StatementType } from './StatementType';
import { RewardsType} from './RewardsType';

export type AccountSummaryType = {
    accountType: string,
    businessType: string,
    businessTypeDescription: string,
    name: string,
    addressLine1: string|null,
    addressLine2: string|null,
    addressLine3: string|null,
    addressLine4: string|null,
    addressLine5: string|null,
    postcode: string,
    statement: Array<StatementType>,
    rewards?: RewardsType,
};
