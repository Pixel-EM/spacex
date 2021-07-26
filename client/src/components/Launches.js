import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Launchitem from './Launchitem'
import Missionkey from './Missionkey'

const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches{
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`

const Launches = () => {

    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>
            <h1 className="display-4 my_3">Launches</h1>
            <Missionkey />
            <>
                {
                    data.launches.map(launch => (
                        <Launchitem key={ launch.flight_number } launch={ launch } />
                    ))
                }
            </>
        </>
    )
}

export default Launches