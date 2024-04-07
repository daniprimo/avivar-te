import './sobrenos.css';
import { Container, Stack } from "@mui/material";
import foto from '../../arquivos/fotoFamilia/kirk-removebg-preview.png'


export default function SobreNos() {
    return (<>
    <Container>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 0,
                    backgroundColor: "#000000" }}
                    >
                    <Stack className='card-do-texto' direction="row" style={{
                        color: "#ffff"}}>

                            <div className="texto-sobrenos">
                                
        O que é Lorem Ipsum?
        <br/>
        <br/>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.

                            </div>

                    </Stack>
                    <Stack>
                        <img className="imagem-sobrenos" src={foto}/>
                    </Stack>
                </Stack>

            </Container>
    </>)
} 