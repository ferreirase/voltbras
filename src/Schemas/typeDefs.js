const typeDefs = `
  type Planet{
    name: String,
    mass: Float, 
    hasStation: Boolean
  }

  type Station {
    id: String,
    namePlanet: String
  }

  type Query{
    suitablePlanets: [Planet]
    stations: [Station]
  }

  type Mutation{
    installStation(namePlanet: String): Station
    removeStation(id: String): String
    removeAllStations: String
  }
`;

export default typeDefs;
