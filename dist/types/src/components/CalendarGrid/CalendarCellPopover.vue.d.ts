import { Event } from '../../utils/calendar/event';
import { PopoverOptions } from '../../utils/popovers';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    popoverId: {
        type: StringConstructor;
        default: string;
    };
}>, {
    displayMode: import("vue").ComputedRef<"light" | "dark">;
    color: import("vue").ComputedRef<string>;
    show: (event: Event) => void;
    update: (event: Event) => void;
    hide: () => void;
    isVisible: () => boolean;
    onAfterHide(): void;
    event: import("vue").Ref<{
        refSelector: string;
        isMultiDay: boolean;
        isWeekly: boolean;
        durationMs: number;
        durationMinutes: number;
        startDate: Date;
        startDateTime: number;
        startTimeLabel: string;
        endDate: Date;
        endDateTime: number;
        endTimeLabel: string;
        timeLabel: string;
        isSolid: boolean;
        dragIsDirty: boolean;
        formatDate: (date: Date, mask: string) => string;
        formatTime: (date: Date) => string;
        resizeToConstraints: () => void;
        startResize: (day: import("../../utils/page").CalendarDay, isStart: boolean) => void;
        updateResize: (offset: import("../../use/calendarGrid").ResizeOffset) => void;
        stopResize: () => void;
        startDrag: (day: import("../../utils/page").CalendarDay) => void;
        updateDrag: (offset: import("../../use/calendarGrid").DragOffset) => void;
        stopDrag: () => false | undefined;
        compareTo: (b: any) => number;
        key: any;
        summary: string;
        description: string;
        range: import("../../utils/date/range").DateRange;
        allDay: boolean;
        color: string;
        fill: string;
        selected: boolean;
        draggable: boolean;
        dragging: boolean;
        resizable: boolean;
        resizing: boolean;
        editing: boolean;
        order: number;
        snapMinutes: number;
        minDurationMinutes: number;
        maxDurationMinutes: number;
        popover: Partial<PopoverOptions> | null;
        resizeOrigin: import("../../utils/calendar/event").ResizeOrigin | null;
        dragOrigin: import("../../utils/calendar/event").DragOrigin | null;
    } | null, {
        refSelector: string;
        isMultiDay: boolean;
        isWeekly: boolean;
        durationMs: number;
        durationMinutes: number;
        startDate: Date;
        startDateTime: number;
        startTimeLabel: string;
        endDate: Date;
        endDateTime: number;
        endTimeLabel: string;
        timeLabel: string;
        isSolid: boolean;
        dragIsDirty: boolean;
        formatDate: (date: Date, mask: string) => string;
        formatTime: (date: Date) => string;
        resizeToConstraints: () => void;
        startResize: (day: import("../../utils/page").CalendarDay, isStart: boolean) => void;
        updateResize: (offset: import("../../use/calendarGrid").ResizeOffset) => void;
        stopResize: () => void;
        startDrag: (day: import("../../utils/page").CalendarDay) => void;
        updateDrag: (offset: import("../../use/calendarGrid").DragOffset) => void;
        stopDrag: () => false | undefined;
        compareTo: (b: any) => number;
        key: any;
        summary: string;
        description: string;
        range: import("../../utils/date/range").DateRange;
        allDay: boolean;
        color: string;
        fill: string;
        selected: boolean;
        draggable: boolean;
        dragging: boolean;
        resizable: boolean;
        resizing: boolean;
        editing: boolean;
        order: number;
        snapMinutes: number;
        minDurationMinutes: number;
        maxDurationMinutes: number;
        popover: Partial<PopoverOptions> | null;
        resizeOrigin: import("../../utils/calendar/event").ResizeOrigin | null;
        dragOrigin: import("../../utils/calendar/event").DragOrigin | null;
    } | null>;
    popoverRef: import("vue").Ref<null, null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    popoverId: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    popoverId: string;
}, {}, {
    Popover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    CalendarEventEdit: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        event: {
            type: import("vue").PropType<{
                refSelector: string;
                isMultiDay: boolean;
                isWeekly: boolean;
                durationMs: number;
                durationMinutes: number;
                startDate: Date;
                startDateTime: number;
                startTimeLabel: string;
                endDate: Date;
                endDateTime: number;
                endTimeLabel: string;
                timeLabel: string;
                isSolid: boolean;
                dragIsDirty: boolean;
                formatDate: (date: Date, mask: string) => string;
                formatTime: (date: Date) => string;
                resizeToConstraints: () => void;
                startResize: (day: import("../../utils/page").CalendarDay, isStart: boolean) => void;
                updateResize: (offset: import("../../use/calendarGrid").ResizeOffset) => void;
                stopResize: () => void;
                startDrag: (day: import("../../utils/page").CalendarDay) => void;
                updateDrag: (offset: import("../../use/calendarGrid").DragOffset) => void;
                stopDrag: () => false | undefined;
                compareTo: (b: any) => number;
                key: any;
                summary: string;
                description: string;
                range: import("../../utils/date/range").DateRange;
                allDay: boolean;
                color: string;
                fill: string;
                selected: boolean;
                draggable: boolean;
                dragging: boolean;
                resizable: boolean;
                resizing: boolean;
                editing: boolean;
                order: number;
                snapMinutes: number;
                minDurationMinutes: number;
                maxDurationMinutes: number;
                popover: Partial<PopoverOptions> | null;
                resizeOrigin: import("../../utils/calendar/event").ResizeOrigin | null;
                dragOrigin: import("../../utils/calendar/event").DragOrigin | null;
            }>;
            required: true;
        };
    }>, {
        onRemove(): void;
        onToggleEditing(): void;
        onSave(): void;
        onCancel(): void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        event: {
            type: import("vue").PropType<{
                refSelector: string;
                isMultiDay: boolean;
                isWeekly: boolean;
                durationMs: number;
                durationMinutes: number;
                startDate: Date;
                startDateTime: number;
                startTimeLabel: string;
                endDate: Date;
                endDateTime: number;
                endTimeLabel: string;
                timeLabel: string;
                isSolid: boolean;
                dragIsDirty: boolean;
                formatDate: (date: Date, mask: string) => string;
                formatTime: (date: Date) => string;
                resizeToConstraints: () => void;
                startResize: (day: import("../../utils/page").CalendarDay, isStart: boolean) => void;
                updateResize: (offset: import("../../use/calendarGrid").ResizeOffset) => void;
                stopResize: () => void;
                startDrag: (day: import("../../utils/page").CalendarDay) => void;
                updateDrag: (offset: import("../../use/calendarGrid").DragOffset) => void;
                stopDrag: () => false | undefined;
                compareTo: (b: any) => number;
                key: any;
                summary: string;
                description: string;
                range: import("../../utils/date/range").DateRange;
                allDay: boolean;
                color: string;
                fill: string;
                selected: boolean;
                draggable: boolean;
                dragging: boolean;
                resizable: boolean;
                resizing: boolean;
                editing: boolean;
                order: number;
                snapMinutes: number;
                minDurationMinutes: number;
                maxDurationMinutes: number;
                popover: Partial<PopoverOptions> | null;
                resizeOrigin: import("../../utils/calendar/event").ResizeOrigin | null;
                dragOrigin: import("../../utils/calendar/event").DragOrigin | null;
            }>;
            required: true;
        };
    }>> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {
        focus: {
            mounted(el: any): void;
        };
    }, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
