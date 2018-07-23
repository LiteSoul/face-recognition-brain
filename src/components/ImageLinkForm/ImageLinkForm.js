import React from 'react'

const ImageLinkForm = () => {
	return (
		<div>
			<p className='f3'>
				{'This artificial brain recognizes faces in your pictures, try it out!'}
			</p>
			<div className='center'>
				<input className='f4 pa2 w-70 center' type="text" name="" id=""/>
				<button className='f4 w-30 grow link ph3 pv2 dib white bg-light-purple' >Detect</button>
			</div>
		</div>
	)
}

export default ImageLinkForm
