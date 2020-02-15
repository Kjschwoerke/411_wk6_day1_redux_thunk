const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const fetchMakes = () =>{
    console.log( 'THIS IS THE FETCH MAKES FUNCTION')
    return(dispatch) => {
    fetch(url)
        .then(res => res.json())
        .then(response => {
            const action ={
                type: 'FETCH_MAKES',
                value: response.Results
            }
            dispatch(action)
        })
        
    }
}

export const deleteMake = (id) => {
    console.log('THIS IS THE DELETE MAKE FUNCTION')
    return {
        type: 'DELETE_MAKE',
        value: id
    }
}

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}