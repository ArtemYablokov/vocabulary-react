import React, {ChangeEvent} from "react";

interface TextInputProps {
	val: string;
	placeHolder : string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({val, placeHolder, onChange}: TextInputProps) => {
	
	return (
		<>
			<input
				className="py-1 px-3 text-2xl flex flex-col align-baseline w-full rounded-lg border-2 border-sky-300 bg-white"
				type="text"
				id="word"
				placeholder={placeHolder}
				value={val}
				onChange={onChange}
			/>
		</>
	)
}