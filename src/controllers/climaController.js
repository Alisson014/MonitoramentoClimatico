const { weatherList, weatherData } = require('../models/climaModel');

class climaController {
    static async register(req, res){
        const { temp, humid } = req.query;

        try {
            if(!temp || !humid){
                return res.status(404).json({ message: "Dados não encontrados" });
            }
            

            weatherList.push(new weatherData(temp, humid));

            while (weatherList.length > 5){
                weatherList.shift();
            }

            return res.status(200).json({ message: "Dados registrados com sucesso!" });

        } catch (error) {
            console.error(error);

        }
    }

    static async get(req, res){
        res.json( {data: weatherList} );
    }
}

module.exports = climaController;