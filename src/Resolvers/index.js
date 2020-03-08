import { RESTDataSource } from 'apollo-datasource-rest';
import Station from '../Models/Station';


class GetPlanets extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.arcsecond.io';
    this.initialize({});
  }

  async getPlanets() {
    return await this.get('/exoplanets');
  }

}

module.exports = {

  Query: {

    suitablePlanets: async () => {

      const result = await new GetPlanets().getPlanets()
        .then((response) => response.results.filter(
          planet => planet.mass !== null && planet.mass.value > 25))
        .catch((err) => err);
      
      const stations = await Station.find();

      return result.map(planet => (
        {
          name: planet.name, 
          mass: planet.mass.value,
          hasStation: stations.find(station => station.namePlanet === planet.name) === undefined ? false : true
        }
      )
      );
    }, 

    stations: () => Station.find()
    
  },

  Mutation: {
    installStation: (_, {namePlanet}) => Station.create({namePlanet}), 

    removeStation: (_, {id}) => Station.findByIdAndRemove(id)
      .then(() => "Estação deletada com sucesso!")
      .catch((err) => `Error: ${err}`),

    removeAllStations: () => Station.deleteMany()
      .then(() => "Estações deletadas com sucesso!")
      .catch((err) => `Error: ${err}`)
  }
};