import { useEffect } from "react"

// Interfaces
import Flight from '../interfaces/FlightInterfaces'

const flightDetailsTitles: string[] = [
    'TIME',
    'DESTINATION',
    'FLIGHT',
    'GATE',
    'REMARKS'
]

const flights: Flight[] = [
    {
        id: 1,
        time: '14:42',
        destination: 'ISTANBUL',
        flight: 'DF-14',
        gate: 'A-23',
        remarks: 'DELAYED'
    },
    {
        id: 2,
        time: '02:15',
        destination: 'DUBAI',
        flight: 'EF-22',
        gate: 'C-12',
        remarks: 'CHECK-IN'
    },
    {
        id: 3,
        time: '08:00',
        destination: 'MONTREAL',
        flight: 'EC-23',
        gate: 'B-22',
        remarks: 'CANCELED'
    },
    {
        id: 4,
        time: '20:30',
        destination: 'BERLIN',
        flight: 'AZ-09',
        gate: 'A-23',
        remarks: 'BOARDING'
    },
    {
        id: 5,
        time: '07:00',
        destination: 'TOKIO',
        flight: 'DF-14',
        gate: 'A-05',
        remarks: 'BOARDING'
    },
    {
        id: 6,
        time: '23:00',
        destination: 'NEW YORK',
        flight: 'EF-14',
        gate: 'C-01',
        remarks: 'DEPARTED'
    },

]

export const FlightWidget: React.FC = () => {
    let date: Date = new Date()
    let minute: string = date.getMinutes().toString()
    let hour: string = date.getHours().toString()

    if (parseInt(minute) < 10) {
        minute = '0' + minute
    }

    let currentTime: string = `${hour}:${minute}`
    
    setInterval(() => {
        currentTime = `${date.getHours()}:${date.getMinutes()}`
    }, 1000)

    useEffect(() => {
        let items = document.querySelectorAll('.letters')
        let time: number = 50
        items?.forEach((item: any) => {
            setTimeout(() => {
                item.style.animation = 'flip .5s linear forwards'
                item.style.opacity = '1'

                if (item.innerHTML === ' ') item.style.opacity = 0
            }, time)
            time += 7.50
        })
    }, [])


    return (
        <div className="flight-widget-container">
            <div className="head">
                <h1>Departures <i className="fa-solid fa-plane-departure"></i></h1>
                <div id="time">{ currentTime }</div>
            </div>
            <table className="flight-details">
                <thead>
                    <tr>
                        {flightDetailsTitles.map((detail: string) => (
                            <th>{detail}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {/* Flight Loop */}
                    {flights.map((flight: any) => (
                        <tr className="flight-data" key={flight['id']}>
                            <td className="details">
                                <div className="responsive-label">Time  <span>:</span></div>
                                {Array.from(flight['time']).map((letter: any) => (
                                    <div aria-label="Time" className="letters">{letter}</div>
                                ))}
                            </td>
                            <td className="details">
                                <div className="responsive-label">Destination  <span>:</span></div>
                                {Array.from(flight['destination']).map((letter: any) => (
                                    <div aria-label="Destination" className="letters">{letter}</div>
                                ))}
                            </td>
                            <td className="details">
                                <div className="responsive-label">Flight <span>:</span></div>
                                {Array.from(flight['flight']).map((letter: any) => (
                                    <div aria-label="Flight" className="letters">{letter}</div>
                                ))}
                            </td>
                            <td className="details">
                                <div className="responsive-label">Gate <span>:</span></div>
                                {Array.from(flight['gate']).map((letter: any) => (
                                    <div aria-label="Gate" className="letters">{letter}</div>
                                ))}
                            </td>
                            <td className="details">
                                <div className="responsive-label">Remarks <span>:</span></div>
                                {Array.from(flight['remarks']).map((letter: any) => (
                                    <div className="letters">{letter}</div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}