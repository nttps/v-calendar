import { DateParts } from '../utils/date/helpers';
export interface TimePickerProps {
    position: number;
}
export declare type TimePickerContext = ReturnType<typeof createTimePicker>;
export declare function createTimePicker(props: TimePickerProps): {
    showBorder: import("vue").ComputedRef<boolean>;
    showHeader: import("vue").ComputedRef<boolean>;
    timeAccuracy: import("vue").Ref<number, number>;
    parts: import("vue").ComputedRef<DateParts | {
        isValid: boolean;
    }>;
    isValid: import("vue").ComputedRef<boolean>;
    date: import("vue").ComputedRef<Date | null>;
    hours: import("vue").WritableComputedRef<number, unknown>;
    minutes: import("vue").WritableComputedRef<number, unknown>;
    seconds: import("vue").WritableComputedRef<number, unknown>;
    milliseconds: import("vue").WritableComputedRef<number, unknown>;
    options: import("vue").ComputedRef<{
        milliseconds: import("../utils/date/helpers").DatePartOption[];
        seconds: import("../utils/date/helpers").DatePartOption[];
        minutes: import("../utils/date/helpers").DatePartOption[];
        hours: import("../utils/date/helpers").DatePartOption[];
    }>;
    hourOptions: import("vue").ComputedRef<{
        value: number;
        label: string;
    }[]>;
    isAM: import("vue").WritableComputedRef<boolean, unknown>;
    isAMOptions: import("vue").ComputedRef<{
        value: boolean;
        label: string;
    }[]>;
    is24hr: import("vue").Ref<boolean, boolean>;
    color: import("vue").ComputedRef<string>;
    isDark: import("vue").ComputedRef<boolean | "system" | import("vue-screen-utils").DarkModeClassConfig>;
    displayMode: import("vue").ComputedRef<"light" | "dark">;
    theme: import("vue").ComputedRef<import("../utils/theme").Theme>;
    locale: import("vue").ComputedRef<import("../utils/locale").default>;
    masks: import("vue").ComputedRef<any>;
    disabledDates: import("vue").ComputedRef<import("../utils/date/range").DateRange[]>;
    disabledAttribute: import("vue").ComputedRef<import("../utils/attribute").Attribute>;
};
