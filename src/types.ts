export enum PageType {
	TIMER = 'timer',
	AH_COUNTER = 'ah_counter',
	GRAMMARIAN = 'grammarian',
}

export type GenericTableType = {
	data: Row[];
	columns: any[];
	selection: Set<string>;
	toggleTooltip?: any;
	deleteSelectedRows?: any;
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
