import React, {Component} from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../tourData';

class TourList extends Component{
    state={
        tours:tourData
    }
    removeTour = (id) =>{
        const {tours} = this.state;
        const sortedTours = tours.filter(tr => tr.id !== id);
        this.setState({
            tours : sortedTours
        })

    }
    render(){
        // console.log(this.state.tours);
        const {tours} = this.state;

        return(
            <div>
                <section className="tourlist">
                    {/* <Tour /> */}
                    {tours.map(tour => {
                        return(
                            <Tour key ={tour.id} tour={tour} removeTour = {this.removeTour}/>
                        )
                    })}
                </section>
            </div>
        )
    }
}

export default TourList;