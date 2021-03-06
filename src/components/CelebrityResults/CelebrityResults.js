import React from 'react'
import './CelebrityResults.css'

function gooSearch(string) {
	const gooQuery = 'https://www.google.com/search?tbm=isch&q='
	const replacedString = string.replace(' ', '+')
	return gooQuery + replacedString
}

const CelebrityResults = ({ box }) => {
	return (
		<div>
			<div
				className={
					box.name1 ? 'white f4 mt3 mb3 showIt' : 'white f4 mt3 mb3 hideIt'
				}
			>
				Mmmm... Looks a lot like&nbsp;
				<a
					href={box.name1 ? gooSearch(box.name1) : 'loading...'}
					target="_blank"
				>
					{box.name1}
				</a>
				&nbsp;with a bit of&nbsp;
				<a
					href={box.name2 ? gooSearch(box.name2) : 'loading...'}
					target="_blank"
				>
					{box.name2}
				</a>!
			</div>
		</div>
	)
}

export default CelebrityResults
