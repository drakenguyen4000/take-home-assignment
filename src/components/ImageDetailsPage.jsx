export function ImageDetailsPage({ data, resetitemDetails }) {
	function onBack() {
		resetitemDetails('');
	}
	return (
		<div>
			<button onClick={onBack}>Back</button>
			<p>{data.title}</p>
			<p>{data.artist_title}</p>
			<img
				alt={data.thumbnail.alt_text}
				id="portrait"
				src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}
