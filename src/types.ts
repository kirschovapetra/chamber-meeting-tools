export const GENERIC_DEFAULT = {
	ah: '0',
	um: '0',
	er: '0',
	well: '0',
	so: '0',
	like: '0',
	but: '0',
	repeats: '0',
	'you know': '0',
	other: '0',
};

export const GRAMMARIAN_DEFAULT = {
	speaker: '',
	quote: '',
	tooltipVisible: false,
};

export const TIMER_DEFAULT = {
	time: '',
	role: '',
	speaker: '',
	greenTime: '0:00',
	amberTime: '0:00',
	redTime: '0:00',
	resultTime: '0:00',
	generic: 'Start',
	tooltipVisible: false,
};

export const AH_COUNTER_DEFAULT = {
	role: '',
	speaker: '',
	generic: {},
	tooltipVisible: false,
};

export enum PageType {
	TIMER = 'timer',
	AH_COUNTER = 'ah_counter',
	GRAMMARIAN = 'grammarian',
	GRAMMARIAN_WOTD = 'grammarian_wotd',
	GRAMMARIAN_ERRORS = 'grammarian_errors',
	GRAMMARIAN_QUOTES = 'grammarian_quotes',
}
export interface DialogProps {
	title: string;
	description?: string;
	content?: React.ReactNode;
}

export type GenericTableType = {
	data: Row[];
	columns: any[];
	selection: Set<string>;
	toggleTooltip?: any;
	deleteSelectedRows?: any;
	subtitle?: string;
};

export type Row = {
	checkbox?: any;
	speaker?: string;
	generic?: any;
	tooltipVisible?: boolean;
};

export type TimerRow = Row & {
	time?: any;
	role?: string;
	greenTime?: any;
	amberTime?: any;
	redTime?: any;
	resultTime?: any;
};

export type AhCounterRow = Row & {
	role?: string;
};

export type GrammarianRow = Row & {
	quote?: string;
	suggestion?: string;
};
