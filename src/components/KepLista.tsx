import type { Kep } from "../adat"
import KisKep from "./KisKep"

export default KepLista

interface KepListaProp{
	lista: Kep[]
}

function KepLista({ lista }: KepListaProp) {
	return (<>
		{
			lista.map((e, i) => {
				return (<KisKep kep={e} key={i}></KisKep>)
			})
		}
	</>)
}
