import { WorkingHoursDayType } from './WorkingHoursDayType';

export type WorkingHoursWeekType = {
    monday: WorkingHoursDayType|null,
    tuesday: WorkingHoursDayType|null,
    wednesday: WorkingHoursDayType|null,
    thursday: WorkingHoursDayType|null,
    friday: WorkingHoursDayType|null,
    saturday: WorkingHoursDayType|null,
    sunday: WorkingHoursDayType|null,
};
