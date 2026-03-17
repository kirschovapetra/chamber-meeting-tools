enum PageType {
  Timer = 'TIMER',
  AhCounter = 'AH_COUNTER',
  Grammarian = 'GRAMMARIAN',
}

type Row = TimerRow | AhCounterRow | GrammarianRow;

type TimerRow = {
    role:string, 
    speakerName:string, 
    greenTime:any, 
    amberTime:any, 
    redTime:any, 
    resultTime:any
};

type WordCount = {
        word:string,
        count:number
    }

type AhCounterRow = {
    role:string, 
    speakerName:string, 
    wordCounts: WordCount[]
}

type GrammarianRow = {
    speakerName:string, 
    quote: string,
    suggestion?: string
}

type GrammarianData = {
    wordOfTheDay?: string,
    definition?: string,
    example?: string,
    rows: GrammarianRow[]
}

// Ah	Um	Er	Well	So	Like	But	Repeats	You know	Other