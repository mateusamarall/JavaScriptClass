const carros={
  AudiTT:{
    placaCarro:'ADD-4444',
    modelo: 'esportivo',
    marca:'AUDI',
    opcionais:{
      cambio:'automatico',
      airbag:true,
      step:1,
      combustivel:'Eletrico'
  
    }
  },
  BMW:{
    placaCarro:'BWQ-1227',
    modelo: 'esportivo',
    marca:'BMW',
    opcionais:{
      cambio:'MANUAL',
      airbag:true,
      step:1,
      combustivel:'Combustao'
  
    }
  },

  
}

console.log(carros.AudiTT)
console.log(carros.BMW.opcionais.airbag);