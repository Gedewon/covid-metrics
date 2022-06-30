import contenentReducer,{LOAD} from '../redux/continent/continent';
    
const state = {
    Continent: {
      Uruguay: {
        All: {
          confirmed: 957629,
          recovered: 0,
          deaths: 7331,
          country: 'Uruguay',
          population: 3456750,
          sq_km_area: 175016,
          life_expectancy: '75.2',
          elevation_in_meters: 109,
          continent: 'South America',
          abbreviation: 'UY',
          location: 'South America',
          iso: 858,
          capital_city: 'Montevideo',
          lat: '-32.5228',
          'long': '-55.7658',
          updated: '2022-06-29 04:20:59'
        }
      },
      Uzbekistan: {
        All: {
          confirmed: 240569,
          recovered: 0,
          deaths: 1637,
          country: 'Uzbekistan',
          population: 31910641,
          sq_km_area: 447400,
          life_expectancy: '63.7',
          elevation_in_meters: null,
          continent: 'Asia',
          abbreviation: 'UZ',
          location: 'Southern and Central Asia',
          iso: 860,
          capital_city: 'Toskent',
          lat: '41.377491',
          'long': '64.585262',
          updated: '2022-06-29 04:20:59'
        }
      },
      Vanuatu: {
        All: {
          confirmed: 11206,
          recovered: 0,
          deaths: 14,
          country: 'Vanuatu',
          population: 276244,
          sq_km_area: 12189,
          life_expectancy: '60.6',
          elevation_in_meters: null,
          continent: 'Oceania',
          abbreviation: 'VU',
          location: 'Melanesia',
          iso: 548,
          capital_city: 'Port-Vila',
          lat: '-15.3767',
          'long': '166.9592',
          updated: '2022-06-29 04:20:59'
        }
      },
      Venezuela: {
        All: {
          confirmed: 525827,
          recovered: 0,
          deaths: 5730,
          country: 'Venezuela',
          population: 31977065,
          sq_km_area: 912050,
          life_expectancy: '73.1',
          elevation_in_meters: 450,
          continent: 'South America',
          abbreviation: 'VE',
          location: 'South America',
          iso: 862,
          capital_city: 'Caracas',
          lat: '6.4238',
          'long': '-66.5897',
          updated: '2022-06-29 04:20:59'
        }
      },
      Vietnam: {
        All: {
          confirmed: 10744854,
          recovered: 0,
          deaths: 43087,
          country: 'Vietnam',
          population: 95540800,
          sq_km_area: 331689,
          life_expectancy: '69.3',
          elevation_in_meters: 398,
          continent: 'Asia',
          abbreviation: 'VN',
          location: 'Southeast Asia',
          iso: 704,
          capital_city: 'Hanoi',
          lat: '14.058324',
          'long': '108.277199',
          updated: '2022-06-29 04:20:59'
        }
      },
      'West Bank and Gaza': {
        All: {
          confirmed: 659853,
          recovered: 0,
          deaths: 5660,
          lat: '31.9522',
          'long': '35.2332',
          updated: '2022-06-29 04:20:59'
        }
      },
      'Winter Olympics 2022': {
        All: {
          confirmed: 535,
          recovered: 0,
          deaths: 0,
          lat: '39.9042',
          'long': '116.4074',
          updated: '2022-06-29 04:20:59'
        }
      },
      Yemen: {
        All: {
          confirmed: 11824,
          recovered: 0,
          deaths: 2149,
          country: 'Yemen',
          population: 28250420,
          sq_km_area: 527968,
          life_expectancy: '59.8',
          elevation_in_meters: 999,
          continent: 'Asia',
          abbreviation: 'YE',
          location: 'Middle East',
          iso: 887,
          capital_city: 'Sanaa',
          lat: '15.552727',
          'long': '48.516388',
          updated: '2022-06-29 04:20:59'
        }
      },
      Zambia: {
        All: {
          confirmed: 325498,
          recovered: 0,
          deaths: 4003,
          country: 'Zambia',
          population: 17094130,
          sq_km_area: 752618,
          life_expectancy: '37.2',
          elevation_in_meters: '1,138',
          continent: 'Africa',
          abbreviation: 'ZM',
          location: 'Eastern Africa',
          iso: 894,
          capital_city: 'Lusaka',
          lat: '-13.133897',
          'long': '27.849332',
          updated: '2022-06-29 04:20:59'
        }
      },
      Zimbabwe: {
        All: {
          confirmed: 255383,
          recovered: 0,
          deaths: 5549,
          country: 'Zimbabwe',
          population: 16529904,
          sq_km_area: 390757,
          life_expectancy: '37.8',
          elevation_in_meters: 961,
          continent: 'Africa',
          abbreviation: 'ZW',
          location: 'Eastern Africa',
          iso: 716,
          capital_city: 'Harare',
          lat: '-19.015438',
          'long': '29.154857',
          updated: '2022-06-29 04:20:59'
        }
      },
      Global: {
        All: {
          population: 7444509223,
          confirmed: 545457088,
          recovered: 0,
          deaths: 6332579
        }
      }
    }
  }

describe('Contintne Redux Reducer',()=>{

    it('should return valid state on dispatch to add',()=>{
        
        const action = {type:LOAD, payload:state};
        const newState = contenentReducer({},action);
        expect(newState).toEqual(state);
    })
    
    it('should return previous state upon Unknown action type ',()=>{
        
        const action = {type:'DELETE', payload:state};
        const newState = contenentReducer({},action);
        expect(newState).toEqual({});
    
})
})