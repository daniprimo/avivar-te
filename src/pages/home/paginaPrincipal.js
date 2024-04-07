import BotaoCase from "../../components/botao/botaoDeSubs";
import Carrosel from "../../components/carrosel-imagens/carrosel";
import SobreNos from "../../components/sobre-nos/sobrenos";
import culto from '../../arquivos/fotoDosBotoes/FotoDoCulto.png'
import oracao from '../../arquivos/fotoDosBotoes/PedidoDeOracao.jpg'
import celula from '../../arquivos/fotoDosBotoes/fotoDaCelula.jpg'


export default function PaginaPrincipal() {
    return(<>
        <Carrosel />
        <SobreNos />
        <BotaoCase titulo={"Cultos"} foto={culto}/>
        <BotaoCase titulo={"Pedidos de oração"} foto={oracao}/>
        <BotaoCase titulo={"Celula"} foto={celula}/>
    </>)
}