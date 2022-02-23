import React, { Component } from 'react'
import axios from 'axios';


export class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {

            pokeNam: " ",
            movess: " ",
            moveValue: '1'



        }

        this.getValues = this.getValues.bind(this);





    }

    componentDidUpdate(previous) {
        console.log("compodid", this.state)
        this.getValues();


    }


    getMove = (e) => {

        this.setState({ moveValue: e.target.value })
        this.setState({ moveValue: this.state.moveValue })
    }






    async getValues(eve) {


        const valuepok = await axios.get(`https://pokeapi.co/api/v2/pokemon/${eve.target.value}`)
        console.log("eve", eve.target.value)




        // console.log("1233", abc.moveValue)
        // console.log(this.state.value)
        // console.log("lllll", this.state.moveValue)

        // console.log(valuepok.data)


        this.setState({ pokeNam: valuepok.data.name, movess: valuepok.data.moves[`${this.state.moveValue}`].move.name })


    }


    render() {
        return (
            <>
                <select onChange={this.getValues}>
                    <option value='1'  >1</option>
                    <option value='25'  >25</option>
                    <option value='3'  >3</option>
                    <option value='6'  >6</option>
                </select>

                <h1>Name:<span style={{ color: '#43dfd1' }}>{this.state.pokeNam}</span></h1>
                <h1>Moves:<span style={{ color: 'red' }}>{this.state.movess} </span> </h1> <select onChange={this.getMove}>
                    <option value='1'  >1</option>
                    <option value='2'  >2</option>
                    <option value='3'  >3</option>
                    <option value='4'  >4</option>
                </select>

            </>
        )
    }
}

export default Pokemon