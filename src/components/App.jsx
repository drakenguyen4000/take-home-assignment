/* eslint-disable */
import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { ImageDetailsPage } from './ImageDetailsPage';
import { Footer } from './Footer';

import './App.css';

export function App() {
	const [data, setData] = useState('');
	const [itemDetails, setitemDetails] = useState('');
	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			setData(json.data);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{!itemDetails ? (
				<>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					{!data ? (
						<ul></ul>
					) : (
						<ul>
							{data.map((el) => {
								return (
									<li
										className="listItem"
										onMouseDown={() => {
											setitemDetails(el);
										}}
										key={el.image_id}
									>
										{el.title} - {el.artist_title}
									</li>
								);
							})}
						</ul>
					)}
				</>
			) : (
				<ImageDetailsPage
					data={itemDetails}
					resetitemDetails={setitemDetails}
				/>
			)}
			<Footer />
		</div>
	);
}
