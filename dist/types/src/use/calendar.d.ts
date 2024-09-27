import { PropType, ExtractPropTypes } from 'vue';
import { Attribute, AttributeConfig } from '../utils/attribute';
import { DateSource } from '../utils/date/helpers';
import { DateRangeContext } from '../utils/date/range';
import type { CustomElement } from '../utils/helpers';
import { PopoverVisibility } from '../utils/popovers';
import { Page, PageAddress, CalendarDay, CalendarWeek, TitlePosition } from '../utils/page';
export declare type CalendarView = 'daily' | 'weekly' | 'monthly';
export declare type MoveTarget = DateSource | PageAddress;
export declare type MoveTransition = 'none' | 'fade' | 'slide-v' | 'slide-h';
export interface MoveOptions {
    position: number;
    view: CalendarView;
    transition: MoveTransition;
    force: boolean;
    fromPage: PageAddress;
    toPage: PageAddress;
}
export interface RefreshOptions {
    page: PageAddress;
    position: number;
    force: boolean;
    transition: MoveTransition;
}
export declare type CalendarProps = Readonly<ExtractPropTypes<typeof propsDef>>;
declare type IContainer = Pick<Element, 'querySelector'> & CustomElement;
export declare type CalendarContext = ReturnType<typeof createCalendar>;
export declare const propsDef: {
    view: {
        type: PropType<CalendarView>;
        default: string;
        validator(value: string): boolean;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    columns: {
        type: NumberConstructor;
        default: number;
    };
    step: NumberConstructor;
    titlePosition: {
        type: PropType<TitlePosition>;
        default: () => TitlePosition;
    };
    navVisibility: {
        type: PropType<PopoverVisibility>;
        default: () => PopoverVisibility;
    };
    showWeeknumbers: (BooleanConstructor | StringConstructor)[];
    showIsoWeeknumbers: (BooleanConstructor | StringConstructor)[];
    isExpanded: BooleanConstructor;
    initialPage: PropType<PageAddress>;
    initialPagePosition: {
        type: NumberConstructor;
        default: number;
    };
    minPage: PropType<PageAddress>;
    maxPage: PropType<PageAddress>;
    transition: PropType<MoveTransition>;
    attributes: PropType<AttributeConfig[]>;
    trimWeeks: BooleanConstructor;
    disablePageSwipe: BooleanConstructor;
    buddhist: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: () => any;
    };
    isDark: {
        type: PropType<boolean | "system" | import("vue-screen-utils").DarkModeClassConfig>;
        default: () => any;
    };
    firstDayOfWeek: PropType<import("../utils/date/helpers").DayOfWeek>;
    masks: ObjectConstructor;
    locale: PropType<string | Record<string, any> | import("../utils/locale").default>;
    timezone: StringConstructor;
    minDate: null;
    maxDate: null;
    disabledDates: null;
};
export declare const emitsDef: string[];
export declare function createCalendar(props: CalendarProps, { emit, slots }: any): {
    theme: import("vue").ComputedRef<import("../utils/theme").Theme>;
    color: import("vue").ComputedRef<string>;
    displayMode: import("vue").ComputedRef<"light" | "dark">;
    locale: import("vue").ComputedRef<import("../utils/locale").default>;
    masks: import("vue").ComputedRef<any>;
    attributes: import("vue").ComputedRef<Attribute[]>;
    disabledAttribute: import("vue").ComputedRef<Attribute>;
    disabledDates: import("vue").ComputedRef<import("../utils/date/range").DateRange[]>;
    attributeContext: import("vue").ComputedRef<DateRangeContext | null>;
    count: import("vue").ComputedRef<number>;
    step: import("vue").ComputedRef<number>;
    firstPage: import("vue").ComputedRef<Page | null>;
    lastPage: import("vue").ComputedRef<Page | null>;
    canMovePrev: import("vue").ComputedRef<boolean>;
    canMoveNext: import("vue").ComputedRef<boolean>;
    minPage: import("vue").ComputedRef<PageAddress | null>;
    maxPage: import("vue").ComputedRef<PageAddress | null>;
    isMonthly: import("vue").ComputedRef<boolean>;
    isWeekly: import("vue").ComputedRef<boolean>;
    isDaily: import("vue").ComputedRef<boolean>;
    navVisibility: import("vue").ComputedRef<PopoverVisibility>;
    showWeeknumbers: import("vue").ComputedRef<boolean>;
    showIsoWeeknumbers: import("vue").ComputedRef<boolean>;
    getDateAddress: (date: DateSource) => PageAddress;
    canMove: (target: MoveTarget, opts?: Partial<MoveOptions>) => boolean;
    canMoveBy: (pages: number, opts?: Partial<MoveOptions>) => boolean;
    move: (target: MoveTarget, opts?: Partial<MoveOptions>) => Promise<boolean>;
    moveBy: (pages: number, opts?: Partial<MoveOptions>) => Promise<boolean>;
    movePrev: () => Promise<boolean>;
    moveNext: () => Promise<boolean>;
    onTransitionBeforeEnter: () => void;
    onTransitionAfterEnter: () => void;
    tryFocusDate: (date: Date) => boolean;
    focusDate: (date: Date, opts?: Partial<MoveOptions>) => Promise<boolean>;
    onKeydown: (event: KeyboardEvent) => void;
    onDayKeydown: (day: CalendarDay, event: KeyboardEvent) => void;
    onDayClick: (day: CalendarDay, event: MouseEvent) => void;
    onDayMouseenter: (day: CalendarDay, event: MouseEvent) => void;
    onDayMouseleave: (day: CalendarDay, event: MouseEvent) => void;
    onDayFocusin: (day: CalendarDay, event: FocusEvent | null) => void;
    onDayFocusout: (day: CalendarDay, event: FocusEvent) => void;
    onWeeknumberClick: (week: CalendarWeek, event: MouseEvent) => void;
    containerRef: import("vue").Ref<IContainer | null, IContainer | null>;
    navPopoverRef: import("vue").Ref<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any> | null, import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any> | null>;
    lastFocusedDay: import("vue").Ref<CalendarDay | null, CalendarDay | null>;
    focusableDay: import("vue").Ref<number, number>;
    inTransition: import("vue").Ref<boolean, boolean>;
    navPopoverId: import("vue").Ref<string, string>;
    dayPopoverId: import("vue").Ref<string, string>;
    view: import("vue").Ref<CalendarView, CalendarView>;
    pages: import("vue").Ref<Page[], Page[]>;
    transitionName: import("vue").Ref<string, string>;
    refreshing: import("vue").Ref<boolean, boolean>;
    emit: any;
    slots: any;
};
export declare function useCalendar(): CalendarContext;
export {};
