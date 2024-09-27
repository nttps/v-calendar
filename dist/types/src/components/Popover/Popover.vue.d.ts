import { PopoverOptions } from '../../utils/popovers';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: true;
    };
    showDelay: {
        type: NumberConstructor;
        default: number;
    };
    hideDelay: {
        type: NumberConstructor;
        default: number;
    };
    boundarySelector: {
        type: StringConstructor;
    };
}>, {
    popoverRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    alignment: import("vue").ComputedRef<"center" | "left" | "right" | "top" | "bottom" | "middle">;
    hide: (opts?: Partial<PopoverOptions>) => void;
    setupPopper: () => void;
    beforeEnter: (el: HTMLElement) => void;
    afterEnter: (el: HTMLElement) => void;
    beforeLeave: (el: HTMLElement) => void;
    afterLeave: (el: HTMLElement) => void;
    onClick: (e: MouseEvent) => void;
    onMouseOver: () => void;
    onMouseLeave: () => void;
    onFocusIn: () => void;
    onFocusOut: (e: FocusEvent) => void;
    isVisible: import("vue").Ref<boolean, boolean>;
    target: import("vue").Ref<unknown, unknown>;
    data: import("vue").Ref<any, any>;
    transition: import("vue").Ref<string, string>;
    placement: import("vue").Ref<import("@popperjs/core").Placement, import("@popperjs/core").Placement>;
    direction: import("vue").Ref<string, string>;
    positionFixed: import("vue").Ref<false, false>;
    modifiers: import("vue").Ref<any[], any[]>;
    isInteractive: import("vue").Ref<boolean, boolean>;
    visibility: import("vue").Ref<import("../../utils/popovers").PopoverVisibility, import("../../utils/popovers").PopoverVisibility>;
    isHovered: import("vue").Ref<boolean, boolean>;
    isFocused: import("vue").Ref<boolean, boolean>;
    autoHide: import("vue").Ref<boolean, boolean>;
    force: import("vue").Ref<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("before-show" | "after-show" | "before-hide" | "after-hide")[], "before-show" | "after-show" | "before-hide" | "after-hide", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: true;
    };
    showDelay: {
        type: NumberConstructor;
        default: number;
    };
    hideDelay: {
        type: NumberConstructor;
        default: number;
    };
    boundarySelector: {
        type: StringConstructor;
    };
}>> & Readonly<{
    "onBefore-show"?: ((...args: any[]) => any) | undefined;
    "onAfter-show"?: ((...args: any[]) => any) | undefined;
    "onBefore-hide"?: ((...args: any[]) => any) | undefined;
    "onAfter-hide"?: ((...args: any[]) => any) | undefined;
}>, {
    showDelay: number;
    hideDelay: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
