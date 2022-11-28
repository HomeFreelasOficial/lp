import axios from "axios";

export default async function getGeolocationByAddress(streetName: string, addressNumber: number){
    
    let number = addressNumber+''
    let street = streetName.replace(/''/g, '+')
    

    const geolocation = await axios.post('https://geocode.maps.co/search?q=' + street + '+' + number)
    .then((res) => {

        const geolocation =  {
         lat : res.data[1].lat,
         lon : res.data[1].lon
        }

         console.log(res, number, street, geolocation)

         return geolocation
    })

    return geolocation
}