import { PropType } from 'vue';
import { Page } from '../../utils/page';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    page: {
        type: PropType<Page>;
        required: true;
    };
    layout: StringConstructor;
    isLg: BooleanConstructor;
    isXl: BooleanConstructor;
    is2xl: BooleanConstructor;
    hideTitle: BooleanConstructor;
    hideArrows: BooleanConstructor;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    page: {
        type: PropType<Page>;
        required: true;
    };
    layout: StringConstructor;
    isLg: BooleanConstructor;
    isXl: BooleanConstructor;
    is2xl: BooleanConstructor;
    hideTitle: BooleanConstructor;
    hideArrows: BooleanConstructor;
}>> & Readonly<{}>, {
    isLg: boolean;
    isXl: boolean;
    is2xl: boolean;
    hideTitle: boolean;
    hideArrows: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    "header-left-button"?(_: {
        move: () => Promise<boolean>;
    }): any;
    "header-title"?(_: {}): any;
    "header-right-button"?(_: {
        move: () => Promise<boolean>;
    }): any;
}>;
export default _default;
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
