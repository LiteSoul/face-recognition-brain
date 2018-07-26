import React from 'react'
import './CelebrityResults.css'

const CelebrityResults = ({ box }) => {
	return (
		<div>
			<div className={box.name1 ? 'white f3 showIt' : 'white f3 hideIt'}>
				Mmmm... Looks like {box.name1} with a bit of {box.name2}!
			</div>
		</div>
	)
}

export default CelebrityResults
