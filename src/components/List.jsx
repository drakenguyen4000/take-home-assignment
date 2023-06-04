export function List({ data }) {
	return !data ? (
		<ul></ul>
	) : (
		<ul>
			{data.map((el) => {
				return (
					<li key={el.image_id}>
						{el.title} - {el.artist_title}
					</li>
				);
			})}
		</ul>
	);
}
