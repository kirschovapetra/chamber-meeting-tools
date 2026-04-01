import AhCounterCell from '../helpers/ah-counter-cell';

export default function AhCounterRow({
	wordCounts,
	setColumnValue,
}: {
	wordCounts: any;
	setColumnValue: any;
}) {
	return (
		<>
			{Object.keys(wordCounts).map((word, key) => {
				return (
					<AhCounterCell
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
