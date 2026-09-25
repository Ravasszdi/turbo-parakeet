export interface Kep{
	path: string
	text: string
}

export const ORSZAGOK: Kep[] = [
	_Flag_maker("..\\public\\kepek\\Algeria.svg"),
	_Flag_maker("..\\public\\kepek\\Belgium.svg"),
	_Flag_maker("..\\public\\kepek\\Benin.svg"),
	_Flag_maker("..\\public\\kepek\\Brazil.svg"),
	_Flag_maker("..\\public\\kepek\\Burkina Faso.svg"),
	_Flag_maker("..\\public\\kepek\\Czech Republic.svg"),
	_Flag_maker("..\\public\\kepek\\Denmark.svg"),
	_Flag_maker("..\\public\\kepek\\Dominican Republic.svg"),
	_Flag_maker("..\\public\\kepek\\Equatorial Guinea.svg"),
	_Flag_maker("..\\public\\kepek\\Haiti.svg"),
	_Flag_maker("..\\public\\kepek\\India.svg"),
	_Flag_maker("..\\public\\kepek\\Jordan.svg"),
	_Flag_maker("..\\public\\kepek\\Kyrgyzstan.svg"),
	_Flag_maker("..\\public\\kepek\\Lithuania.svg"),
	_Flag_maker("..\\public\\kepek\\Mexico.svg"),
	_Flag_maker("..\\public\\kepek\\Mongolia.svg"),
	_Flag_maker("..\\public\\kepek\\Montenegro.svg"),
	_Flag_maker("..\\public\\kepek\\Netherlands.svg"),
	_Flag_maker("..\\public\\kepek\\Norway.svg"),
	_Flag_maker("..\\public\\kepek\\Philippines.svg"),
	_Flag_maker("..\\public\\kepek\\Rwanda.svg"),
	_Flag_maker("..\\public\\kepek\\Syria.svg"),
	_Flag_maker("..\\public\\kepek\\Tonga.svg"),
	_Flag_maker("..\\public\\kepek\\Turkmenistan.svg"),
	_Flag_maker("..\\public\\kepek\\Tuvalu.svg"),
]

function _Flag_maker(src: string):Kep {
	let path: string[];
	if (src.includes("\\")) {
		path = src.split("\\")
	} else {
		path = src.split("/")
	}
	const flag_name = path[path.length - 1].split(".")[0];

	return {
		path: src,
		text: flag_name
	}
}
