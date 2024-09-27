declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    position: number;
}>>, {
    showBorder: import("vue").ComputedRef<boolean>;
    showHeader: import("vue").ComputedRef<boolean>;
    timeAccuracy: import("vue").Ref<number, number>;
    parts: import("vue").ComputedRef<import("../../utils/date/helpers").DateParts | {
        isValid: boolean;
    }>;
    isValid: import("vue").ComputedRef<boolean>;
    date: import("vue").ComputedRef<Date | null>;
    hours: import("vue").WritableComputedRef<number, unknown>;
    minutes: import("vue").WritableComputedRef<number, unknown>;
    seconds: import("vue").WritableComputedRef<number, unknown>;
    milliseconds: import("vue").WritableComputedRef<number, unknown>;
    options: import("vue").ComputedRef<{
        milliseconds: import("../../utils/date/helpers").DatePartOption[];
        seconds: import("../../utils/date/helpers").DatePartOption[];
        minutes: import("../../utils/date/helpers").DatePartOption[];
        hours: import("../../utils/date/helpers").DatePartOption[];
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
    theme: import("vue").ComputedRef<import("../../utils/theme").Theme>;
    locale: import("vue").ComputedRef<import("../../utils/locale").default>;
    masks: import("vue").ComputedRef<any>;
    disabledDates: import("vue").ComputedRef<import("../../utils/date/range").DateRange[]>;
    disabledAttribute: import("vue").ComputedRef<import("../../utils/attribute").Attribute>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    position: number;
}>>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    "time-header"?(_: {}): any;
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
