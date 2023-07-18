import React, {useState} from 'react'

export const FlexExample = () => {
	
	return (
		<>
			<div className='py-2 px-2 flex flex-col w-2/6'>
				<div>ONE</div>
				<div>TWO</div>
			</div>
			
			<div style={{display: 'flex', lineHeight: 10, padding: 20}}>
				<div className="py-4 px-6 m-2 border rounded-sm bg-blue-100">
				
				</div>
				<div className="p-4 m-2 border rounded-sm bg-blue-100 flex items-center">
					other Content
				</div>
			</div>
		
		
		</>
	)
}