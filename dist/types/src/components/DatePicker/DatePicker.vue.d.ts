declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    mode: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string | number | Date | Partial<{
            start: import("../../use/datePicker").DatePickerDate;
            end: import("../../use/datePicker").DatePickerDate;
        }> | null>;
    };
    modelModifiers: {
        type: import("vue").PropType<import("../../use/datePicker").ModelModifiers>;
        default: () => {};
    };
    rules: import("vue").PropType<import("../../utils/date/helpers").DatePartsRules | "auto">;
    is24hr: BooleanConstructor;
    hideTimeHeader: BooleanConstructor;
    timeAccuracy: {
        type: NumberConstructor;
        default: number;
    };
    isRequired: BooleanConstructor;
    isRange: BooleanConstructor;
    updateOnInput: {
        type: BooleanConstructor;
        default: () => any;
    };
    inputDebounce: {
        type: NumberConstructor;
        default: () => any;
    };
    popover: {
        type: import("vue").PropType<boolean | Partial<import("../../utils/popovers").PopoverOptions>>;
        default: boolean;
    };
    dragAttribute: import("vue").PropType<import("../../utils/attribute").AttributeConfig>;
    selectAttribute: import("vue").PropType<import("../../utils/attribute").AttributeConfig>;
    attributes: (ArrayConstructor | ObjectConstructor)[];
    buddhist: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: () => any;
    };
    isDark: {
        type: import("vue").PropType<boolean | "system" | import("vue-screen-utils").DarkModeClassConfig>;
        default: () => any;
    };
    firstDayOfWeek: import("vue").PropType<import("../../utils/date/helpers").DayOfWeek>;
    masks: ObjectConstructor;
    locale: import("vue").PropType<string | Record<string, any> | import("../../utils/locale").default>;
    timezone: StringConstructor;
    minDate: null;
    maxDate: null;
    disabledDates: null;
}>, (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null | undefined) | (() => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[])[]), {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string | number | Date | Partial<{
            start: import("../../use/datePicker").DatePickerDate;
            end: import("../../use/datePicker").DatePickerDate;
        }> | null>;
    };
    modelModifiers: {
        type: import("vue").PropType<import("../../use/datePicker").ModelModifiers>;
        default: () => {};
    };
    rules: import("vue").PropType<import("../../utils/date/helpers").DatePartsRules | "auto">;
    is24hr: BooleanConstructor;
    hideTimeHeader: BooleanConstructor;
    timeAccuracy: {
        type: NumberConstructor;
        default: number;
    };
    isRequired: BooleanConstructor;
    isRange: BooleanConstructor;
    updateOnInput: {
        type: BooleanConstructor;
        default: () => any;
    };
    inputDebounce: {
        type: NumberConstructor;
        default: () => any;
    };
    popover: {
        type: import("vue").PropType<boolean | Partial<import("../../utils/popovers").PopoverOptions>>;
        default: boolean;
    };
    dragAttribute: import("vue").PropType<import("../../utils/attribute").AttributeConfig>;
    selectAttribute: import("vue").PropType<import("../../utils/attribute").AttributeConfig>;
    attributes: (ArrayConstructor | ObjectConstructor)[];
    buddhist: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: () => any;
    };
    isDark: {
        type: import("vue").PropType<boolean | "system" | import("vue-screen-utils").DarkModeClassConfig>;
        default: () => any;
    };
    firstDayOfWeek: import("vue").PropType<import("../../utils/date/helpers").DayOfWeek>;
    masks: ObjectConstructor;
    locale: import("vue").PropType<string | Record<string, any> | import("../../utils/locale").default>;
    timezone: StringConstructor;
    minDate: null;
    maxDate: null;
    disabledDates: null;
}>> & Readonly<{
    [x: `on${string}`]: ((...args: any[]) => any) | undefined;
}>, {
    mode: string;
    buddhist: boolean;
    updateOnInput: boolean;
    inputDebounce: number;
    color: string;
    isDark: boolean | "system" | import("vue-screen-utils").DarkModeClassConfig;
    popover: boolean | Partial<import("../../utils/popovers").PopoverOptions>;
    modelModifiers: import("../../use/datePicker").ModelModifiers;
    is24hr: boolean;
    hideTimeHeader: boolean;
    timeAccuracy: number;
    isRequired: boolean;
    isRange: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
