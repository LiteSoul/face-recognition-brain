import React from 'react'
import './CelebrityResults.css'

const CelebrityResults = ({ box }) => {
	return (
		<div>
			<div className={box.name1 ? 'white f3 showIt' : 'white f3 hideIt'}>
				Mmmm... Looks like {box.name1 || 'GENERIC NAME 1'} with a bit of{' '}
				{box.name2 || 'GENERIC NAME 2'}!
			</div>
		</div>
	)
}

export default CelebrityResults
