export interface IProduct {
	id?: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: {
		rate: number
		count: number
	}
}

export interface IWord {
	name: string
	parts: IPos[]
}

export interface IPos {
	name: string
	definitions: IDefinition[]
	synonyms?: StringHolder[]
	antonyms?: StringHolder[]
	rusSynonyms?: StringHolder[]
	rusAntonyms?: StringHolder[]
}

export interface IDefinition {
	name: string
	phrases: IPhrase[]
}

export interface IPhrase {
	name: string
}

export interface StringHolder {
	name: string
}