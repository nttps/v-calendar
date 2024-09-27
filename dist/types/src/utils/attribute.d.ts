import { Placement } from '@popperjs/core';
import { DateRange, DateRangeSource } from './date/range';
import { PopoverVisibility } from './popovers';
import { Theme } from './theme';
import Locale from './locale';
import { ContentConfig, HighlightConfig, DotConfig, BarConfig, Profile, Content, Highlight, Dot, Bar } from './glyph';
export declare type PopoverConfig = Partial<{
    label: string;
    visibility: PopoverVisibility;
    placement: Placement;
    hideIndicator: boolean;
    isInteractive: boolean;
}>;
export declare type EventConfig = Partial<{
    label: string;
}>;
export interface AttributeConfig {
    key: string | number;
    hashcode: string;
    content: ContentConfig;
    highlight: HighlightConfig;
    dot: DotConfig;
    bar: BarConfig;
    popover: PopoverConfig;
    event: EventConfig;
    dates: DateRangeSource[];
    customData: any;
    order: number;
    pinPage: boolean;
}
export declare class Attribute {
    key: string | number;
    hashcode: string;
    highlight: Profile<Highlight> | null;
    content: Profile<Content> | null;
    dot: Profile<Dot> | null;
    bar: Profile<Bar> | null;
    event: EventConfig | null;
    popover: PopoverConfig | null;
    customData: any;
    ranges: DateRange[];
    hasRanges: boolean;
    order: number;
    pinPage: boolean;
    maxRepeatSpan: number;
    locale: Locale;
    constructor(config: Partial<AttributeConfig>, theme: Theme, locale: Locale);
    intersectsRange({ start, end }: DateRange): boolean;
}
