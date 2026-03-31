enum PageType {
	Timer = 'TIMER',
	AhCounter = 'AH_COUNTER',
	Grammarian = 'GRAMMARIAN',
}

enum Status {
	Start = 'Start',
	Stop = 'Stop',
}

type Product = {
	id: number;
	name: string;
	category: string;
	price: number;
	stock: number;
};

type Row = TimerRow | AhCounterRow | GrammarianRow;

type GenericTableType = {
	data: Row[];
	columns: any[];
	selection: Set<string>;
	toggleTooltip?: any;
	deleteSelectedRows?: any;
};

type TimerRow = {
	checkbox?: any;
	time?: any;
	role?: string;
	speaker?: string;
	greenTime?: any;
	amberTime?: any;
	redTime?: any;
	resultTime?: any;
	buttons?: any;
	tooltipVisible?: any;
};

type WordCount = {
	word: string;
	count: number;
};

type AhCounterRow = {
	checkbox?: any;
	role?: string;
	speaker?: string;
	wordCounts?: WordCount[];
	tooltipVisible?: any;
	buttons?: any;
};

type GrammarianRow = {
	checkbox?: any;
	speaker?: string;
	quote?: string;
	suggestion?: string;
	buttons?: any;
	tooltipVisible?: any;
};

type GrammarianData = {
	wordOfTheDay?: string;
	definition?: string;
	example?: string;
	rows: GrammarianRow[];
};

// Ah	Um	Er	Well	So	Like	But	Repeats	You know	Other
