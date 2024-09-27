declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    view: {
        type: import("vue").PropType<import("../../use/calendar").CalendarView>;
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
        type: import("vue").PropType<import("../../utils/page").TitlePosition>;
        default: () => import("../../utils/page").TitlePosition;
    };
    navVisibility: {
        type: import("vue").PropType<import("../../utils/popovers").PopoverVisibility>;
        default: () => import("../../utils/popovers").PopoverVisibility;
    };
    showWeeknumbers: (BooleanConstructor | StringConstructor)[];
    showIsoWeeknumbers: (BooleanConstructor | StringConstructor)[];
    isExpanded: BooleanConstructor;
    initialPage: import("vue").PropType<import("../../utils/page").PageAddress>;
    initialPagePosition: {
        type: NumberConstructor;
        default: number;
    };
    minPage: import("vue").PropType<import("../../utils/page").PageAddress>;
    maxPage: import("vue").PropType<import("../../utils/page").PageAddress>;
    transition: import("vue").PropType<import("../../use/calendar").MoveTransition>;
    attributes: import("vue").PropType<import("../../utils/attribute").AttributeConfig[]>;
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
}>, {
    theme: import("vue").ComputedRef<import("../../utils/theme").Theme>;
    color: import("vue").ComputedRef<string>;
    displayMode: import("vue").ComputedRef<"light" | "dark">;
    locale: import("vue").ComputedRef<import("../../utils/locale").default>;
    masks: import("vue").ComputedRef<any>;
    attributes: import("vue").ComputedRef<import("../../utils/attribute").Attribute[]>;
    disabledAttribute: import("vue").ComputedRef<import("../../utils/attribute").Attribute>;
    disabledDates: import("vue").ComputedRef<import("../../utils/date/range").DateRange[]>;
    attributeContext: import("vue").ComputedRef<import("../../utils/date/range").DateRangeContext | null>;
    count: import("vue").ComputedRef<number>;
    step: import("vue").ComputedRef<number>;
    firstPage: import("vue").ComputedRef<import("../../utils/page").Page | null>;
    lastPage: import("vue").ComputedRef<import("../../utils/page").Page | null>;
    canMovePrev: import("vue").ComputedRef<boolean>;
    canMoveNext: import("vue").ComputedRef<boolean>;
    minPage: import("vue").ComputedRef<import("../../utils/page").PageAddress | null>;
    maxPage: import("vue").ComputedRef<import("../../utils/page").PageAddress | null>;
    isMonthly: import("vue").ComputedRef<boolean>;
    isWeekly: import("vue").ComputedRef<boolean>;
    isDaily: import("vue").ComputedRef<boolean>;
    navVisibility: import("vue").ComputedRef<import("../../utils/popovers").PopoverVisibility>;
    showWeeknumbers: import("vue").ComputedRef<boolean>;
    showIsoWeeknumbers: import("vue").ComputedRef<boolean>;
    getDateAddress: (date: import("../../utils/date/helpers").DateSource) => import("../../utils/page").PageAddress;
    canMove: (target: import("../../use/calendar").MoveTarget, opts?: Partial<import("../../use/calendar").MoveOptions>) => boolean;
    canMoveBy: (pages: number, opts?: Partial<import("../../use/calendar").MoveOptions>) => boolean;
    move: (target: import("../../use/calendar").MoveTarget, opts?: Partial<import("../../use/calendar").MoveOptions>) => Promise<boolean>;
    moveBy: (pages: number, opts?: Partial<import("../../use/calendar").MoveOptions>) => Promise<boolean>;
    movePrev: () => Promise<boolean>;
    moveNext: () => Promise<boolean>;
    onTransitionBeforeEnter: () => void;
    onTransitionAfterEnter: () => void;
    tryFocusDate: (date: Date) => boolean;
    focusDate: (date: Date, opts?: Partial<import("../../use/calendar").MoveOptions>) => Promise<boolean>;
    onKeydown: (event: KeyboardEvent) => void;
    onDayKeydown: (day: import("../../utils/page").CalendarDay, event: KeyboardEvent) => void;
    onDayClick: (day: import("../../utils/page").CalendarDay, event: MouseEvent) => void;
    onDayMouseenter: (day: import("../../utils/page").CalendarDay, event: MouseEvent) => void;
    onDayMouseleave: (day: import("../../utils/page").CalendarDay, event: MouseEvent) => void;
    onDayFocusin: (day: import("../../utils/page").CalendarDay, event: FocusEvent | null) => void;
    onDayFocusout: (day: import("../../utils/page").CalendarDay, event: FocusEvent) => void;
    onWeeknumberClick: (week: import("../../utils/page").CalendarWeek, event: MouseEvent) => void;
    containerRef: import("vue").Ref<(Pick<Element, "querySelector"> & import("../../utils/helpers").CustomElement) | null, (Pick<Element, "querySelector"> & import("../../utils/helpers").CustomElement) | null>;
    navPopoverRef: import("vue").Ref<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any> | null, import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any> | null>;
    lastFocusedDay: import("vue").Ref<import("../../utils/page").CalendarDay | null, import("../../utils/page").CalendarDay | null>;
    focusableDay: import("vue").Ref<number, number>;
    inTransition: import("vue").Ref<boolean, boolean>;
    navPopoverId: import("vue").Ref<string, string>;
    dayPopoverId: import("vue").Ref<string, string>;
    view: import("vue").Ref<import("../../use/calendar").CalendarView, import("../../use/calendar").CalendarView>;
    pages: import("vue").Ref<import("../../utils/page").Page[], import("../../utils/page").Page[]>;
    transitionName: import("vue").Ref<string, string>;
    refreshing: import("vue").Ref<boolean, boolean>;
    emit: any;
    slots: any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    view: {
        type: import("vue").PropType<import("../../use/calendar").CalendarView>;
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
        type: import("vue").PropType<import("../../utils/page").TitlePosition>;
        default: () => import("../../utils/page").TitlePosition;
    };
    navVisibility: {
        type: import("vue").PropType<import("../../utils/popovers").PopoverVisibility>;
        default: () => import("../../utils/popovers").PopoverVisibility;
    };
    showWeeknumbers: (BooleanConstructor | StringConstructor)[];
    showIsoWeeknumbers: (BooleanConstructor | StringConstructor)[];
    isExpanded: BooleanConstructor;
    initialPage: import("vue").PropType<import("../../utils/page").PageAddress>;
    initialPagePosition: {
        type: NumberConstructor;
        default: number;
    };
    minPage: import("vue").PropType<import("../../utils/page").PageAddress>;
    maxPage: import("vue").PropType<import("../../utils/page").PageAddress>;
    transition: import("vue").PropType<import("../../use/calendar").MoveTransition>;
    attributes: import("vue").PropType<import("../../utils/attribute").AttributeConfig[]>;
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
    view: import("../../use/calendar").CalendarView;
    trimWeeks: boolean;
    titlePosition: import("../../utils/page").TitlePosition;
    buddhist: boolean;
    color: string;
    isDark: boolean | "system" | import("vue-screen-utils").DarkModeClassConfig;
    navVisibility: import("../../utils/popovers").PopoverVisibility;
    rows: number;
    columns: number;
    isExpanded: boolean;
    initialPagePosition: number;
    disablePageSwipe: boolean;
}, {}, {
    CalendarHeader: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            page: {
                type: import("vue").PropType<import("../../utils/page").Page>;
                required: true;
            };
            layout: StringConstructor;
            isLg: BooleanConstructor;
            isXl: BooleanConstructor;
            is2xl: BooleanConstructor;
            hideTitle: BooleanConstructor;
            hideArrows: BooleanConstructor;
        }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            page: {
                type: import("vue").PropType<import("../../utils/page").Page>;
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
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            page: {
                type: import("vue").PropType<import("../../utils/page").Page>;
                required: true;
            };
            layout: StringConstructor;
            isLg: BooleanConstructor;
            isXl: BooleanConstructor;
            is2xl: BooleanConstructor;
            hideTitle: BooleanConstructor;
            hideArrows: BooleanConstructor;
        }>> & Readonly<{}>, {}, {}, {}, {}, {
            isLg: boolean;
            isXl: boolean;
            is2xl: boolean;
            hideTitle: boolean;
            hideArrows: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        page: {
            type: import("vue").PropType<import("../../utils/page").Page>;
            required: true;
        };
        layout: StringConstructor;
        isLg: BooleanConstructor;
        isXl: BooleanConstructor;
        is2xl: BooleanConstructor;
        hideTitle: BooleanConstructor;
        hideArrows: BooleanConstructor;
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        isLg: boolean;
        isXl: boolean;
        is2xl: boolean;
        hideTitle: boolean;
        hideArrows: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            "header-left-button"?(_: {
                move: () => Promise<boolean>;
            }): any;
            "header-title"?(_: {}): any;
            "header-right-button"?(_: {
                move: () => Promise<boolean>;
            }): any;
        };
    });
    CalendarPane: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        page: {
            type: import("vue").PropType<import("../../utils/page").Page>;
            required: true;
        };
    }>, {
        onWeeknumberClick: (week: import("../../utils/page").CalendarWeek, event: MouseEvent) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        page: {
            type: import("vue").PropType<import("../../utils/page").Page>;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {
        CalendarHeader: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                page: {
                    type: import("vue").PropType<import("../../utils/page").Page>;
                    required: true;
                };
                layout: StringConstructor;
                isLg: BooleanConstructor;
                isXl: BooleanConstructor;
                is2xl: BooleanConstructor;
                hideTitle: BooleanConstructor;
                hideArrows: BooleanConstructor;
            }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                page: {
                    type: import("vue").PropType<import("../../utils/page").Page>;
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
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                page: {
                    type: import("vue").PropType<import("../../utils/page").Page>;
                    required: true;
                };
                layout: StringConstructor;
                isLg: BooleanConstructor;
                isXl: BooleanConstructor;
                is2xl: BooleanConstructor;
                hideTitle: BooleanConstructor;
                hideArrows: BooleanConstructor;
            }>> & Readonly<{}>, {}, {}, {}, {}, {
                isLg: boolean;
                isXl: boolean;
                is2xl: boolean;
                hideTitle: boolean;
                hideArrows: boolean;
            }>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            page: {
                type: import("vue").PropType<import("../../utils/page").Page>;
                required: true;
            };
            layout: StringConstructor;
            isLg: BooleanConstructor;
            isXl: BooleanConstructor;
            is2xl: BooleanConstructor;
            hideTitle: BooleanConstructor;
            hideArrows: BooleanConstructor;
        }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            isLg: boolean;
            isXl: boolean;
            is2xl: boolean;
            hideTitle: boolean;
            hideArrows: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: {
                "header-left-button"?(_: {
                    move: () => Promise<boolean>;
                }): any;
                "header-title"?(_: {}): any;
                "header-right-button"?(_: {
                    move: () => Promise<boolean>;
                }): any;
            };
        });
        CalendarDay: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            day: {
                type: import("vue").PropType<import("../../utils/page").CalendarDay>;
                required: true;
            };
        }>, {
            attributes: import("vue").ComputedRef<any[]>;
            attributeCells: import("vue").ComputedRef<import("../../utils/date/range").DateRangeCell<any>[]>;
            bars: import("vue").ComputedRef<import("../../utils/glyph").Glyph[] | undefined>;
            dayClasses: import("vue").ComputedRef<(string | Object | {
                'vc-day-box-center-center': boolean;
                'is-not-in-month'?: undefined;
            } | {
                'is-not-in-month': boolean;
                'vc-day-box-center-center'?: undefined;
            })[]>;
            dayContentProps: import("vue").ComputedRef<{
                class: (string | any[] | {
                    'vc-disabled': boolean;
                } | undefined)[];
                style: {
                    [x: string]: any;
                };
                tabindex: string;
                'aria-label': string;
                'aria-disabled': boolean;
                role: string;
            }>;
            dayContentEvents: import("vue").ComputedRef<{
                click(event: MouseEvent): void;
                mouseenter(event: MouseEvent): void;
                mouseleave(event: MouseEvent): void;
                focusin(event: FocusEvent): void;
                focusout(event: FocusEvent): void;
                keydown(event: KeyboardEvent): void;
            }>;
            dayPopover: import("vue").ComputedRef<any>;
            glyphs: import("vue").ComputedRef<{
                popovers: never[];
                highlights?: import("../../utils/glyph").Highlight[] | undefined;
                dots?: import("../../utils/glyph").Glyph[] | undefined;
                bars?: import("../../utils/glyph").Glyph[] | undefined;
                content?: import("../../utils/glyph").Glyph[] | undefined;
            }>;
            dots: import("vue").ComputedRef<import("../../utils/glyph").Glyph[] | undefined>;
            hasDots: import("vue").ComputedRef<boolean>;
            hasBars: import("vue").ComputedRef<boolean>;
            highlights: import("vue").ComputedRef<import("../../utils/glyph").Highlight[] | undefined>;
            hasHighlights: import("vue").ComputedRef<boolean>;
            locale: import("vue").ComputedRef<import("../../utils/locale").default>;
            popovers: import("vue").ComputedRef<never[]>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            day: {
                type: import("vue").PropType<import("../../utils/page").CalendarDay>;
                required: true;
            };
        }>> & Readonly<{}>, {}, {}, {}, {
            popover: import("vue").Directive<any, any, string, string>;
        }, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CalendarNavPopover: import("vue").DefineComponent<any, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CalendarDayPopover: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{}> & Readonly<{}>, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {
                day: any;
                dayTitle: string;
                attributes: any;
                format: (date: Date, mask: string) => string;
                masks: any;
                hide: any;
            }): any;
        };
    });
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
