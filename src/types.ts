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

type TimerRow = {
	checkbox?: any;
	time?: any;
	role: string;
	speakerName?: string;
	greenTime?: any;
	amberTime?: any;
	redTime: any;
	resultTime: any;
	buttons?: any;
	status: any;
	tooltipVisible?: any;
};

type WordCount = {
	word: string;
	count: number;
};

type AhCounterRow = {
	role: string;
	speakerName: string;
	wordCounts: WordCount[];
};

type GrammarianRow = {
	speakerName: string;
	quote: string;
	suggestion?: string;
};

type GrammarianData = {
	wordOfTheDay?: string;
	definition?: string;
	example?: string;
	rows: GrammarianRow[];
};

// Ah	Um	Er	Well	So	Like	But	Repeats	You know	Other
