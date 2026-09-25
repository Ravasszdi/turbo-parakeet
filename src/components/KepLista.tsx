import type { Kep } from "../adat"
import KisKep from "./KisKep"
import "./KepLista.css"

export default KepLista

interface KepListaProp{
	lista: Kep[]
}

function KepLista({ lista }: KepListaProp) {
	return (<div className="lista">
		{
			lista.map((e, i) => {
				return (<KisKep kep={e} key={i}></KisKep>)
			})
		}
	</div>)
}
