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
	partOfSpeeches: IPos[]
}

export interface IPos {
	pos: string
	definitions: IDefinition[]
	synonyms?: string[]
	antonyms?: string[]
	rusSynonyms?: string[]
	rusAntonyms?: string[]
}

export interface IDefinition {
	val: string
	phrases: IPhrase[]
}

export interface IPhrase {
	val: string
}