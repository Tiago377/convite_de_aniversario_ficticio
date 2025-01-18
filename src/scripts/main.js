const datatAtual = new Date("jan 22, 2025 19:00:00");
const timeStamoDoEvnto = datatAtual.getTime()

const constaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime()

    const distanciaAteOEvnto = timeStamoDoEvnto - timeStampAtual;
    
    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs =  1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvnto = Math.floor(distanciaAteOEvnto / diasEmMs)
    const horasAteoEvnto = Math.floor((distanciaAteOEvnto % diasEmMs) / horasEmMs)
    const minutosAteOEvnto = Math.floor((distanciaAteOEvnto % horasEmMs) / minutosEmMs)
    const segundosAteOEvnto = Math.floor((distanciaAteOEvnto % minutosEmMs) / 1000)

    document.querySelector("#contador").innerHTML = `${diasAteOEvnto}d ${horasAteoEvnto}h ${minutosAteOEvnto}m ${segundosAteOEvnto}s`
    
    if (distanciaAteOEvnto < 0) {
        clearInterval(constaAsHoras)
        document.querySelector("#contador").innerHTML = "convite expirado"
    }
    
}, 1000)