import type { Kep } from "../adat"
import KepLista from "./KepLista"

export default Galeria

interface Kep_Lista_Prop{
	Kep_Lista: Kep[]
}

function Galeria({ Kep_Lista }: Kep_Lista_Prop) {
	return (<>
		<KepLista lista={Kep_Lista}></KepLista>
	</>)
}
