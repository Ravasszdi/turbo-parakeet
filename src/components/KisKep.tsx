import type { Kep } from "../adat";
import "./KisKep.css"

export default KisKep;

interface kepProp{
	kep: Kep
}

function KisKep({kep}:kepProp) {
	return (<>
		<img src={kep.path}></img>
	</>)
}
