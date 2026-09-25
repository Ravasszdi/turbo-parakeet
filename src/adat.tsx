export interface Kep{
	path: string
	text: string
}

export const ORSZAGOK: Kep[] = [
	//..\\public\\kepek\\Algeria.svg
	_Flag_maker(".\\kepek\\Algeria.svg"),
	_Flag_maker(".\\kepek\\Belgium.svg"),
	_Flag_maker(".\\kepek\\Benin.svg"),
	_Flag_maker(".\\kepek\\Brazil.svg"),
	_Flag_maker(".\\kepek\\Burkina Faso.svg"),
	_Flag_maker(".\\kepek\\Czech Republic.svg"),
	_Flag_maker(".\\kepek\\Denmark.svg"),
	_Flag_maker(".\\kepek\\Dominican Republic.svg"),
	_Flag_maker(".\\kepek\\Equatorial Guinea.svg"),
	_Flag_maker(".\\kepek\\Haiti.svg"),
	_Flag_maker(".\\kepek\\India.svg"),
	_Flag_maker(".\\kepek\\Jordan.svg"),
	_Flag_maker(".\\kepek\\Kyrgyzstan.svg"),
	_Flag_maker(".\\kepek\\Lithuania.svg"),
	_Flag_maker(".\\kepek\\Mexico.svg"),
	_Flag_maker(".\\kepek\\Mongolia.svg"),
	_Flag_maker(".\\kepek\\Montenegro.svg"),
	_Flag_maker(".\\kepek\\Netherlands.svg"),
	_Flag_maker(".\\kepek\\Norway.svg"),
	_Flag_maker(".\\kepek\\Philippines.svg"),
	_Flag_maker(".\\kepek\\Rwanda.svg"),
	_Flag_maker(".\\kepek\\Syria.svg"),
	_Flag_maker(".\\kepek\\Tonga.svg"),
	_Flag_maker(".\\kepek\\Turkmenistan.svg"),
	_Flag_maker(".\\kepek\\Tuvalu.svg"),
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
