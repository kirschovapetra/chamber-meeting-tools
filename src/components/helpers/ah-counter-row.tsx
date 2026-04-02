import AhCounterCell from '../helpers/ah-counter-cell';

export default function AhCounterRow({
	wordCounts,
	setColumnValue,
	deleteCrutchWord,
}: {
	wordCounts: any;
	setColumnValue: any;
	deleteCrutchWord?: any;
}) {
	return (
		<>
			{Object.keys(wordCounts).map((word, key) => {
				return (
					<AhCounterCell
						deleteCrutchWord={() => deleteCrutchWord(word)}
						label={word}
						key={key}
						value={wordCounts[word]}
						setColumnValue={(newVal: any) => {
							setColumnValue({
								...wordCounts,
								[word]: newVal,
							});
						}}
					/>
				);
			})}
		</>
	);
}
