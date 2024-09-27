import { DateRangeCell } from '../../utils/date/range';
import { Event } from '../../utils/calendar/event';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    cell: DateRangeCell<Event>;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    cell: DateRangeCell<Event>;
}>>> & Readonly<{}>, {}, {}, {}, {
    popover: import("vue").Directive<any, any, string, string>;
}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
