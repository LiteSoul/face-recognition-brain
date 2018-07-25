import React from 'react'

const CelebrityResults = ({ box }) => {
	return (
		<div>
			<div className="white f3">
				Mmmm... Looks like {box.name1} with a bit of {box.name2}!
			</div>
		</div>
	)
}

export default CelebrityResults
