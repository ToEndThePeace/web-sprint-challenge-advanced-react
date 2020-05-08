import React, { Component } from "react";
import axios from "axios";
import PlantFilter from "./PlantFilter";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor() {
    super();
    this.state = {
      url: "http://localhost:3333/plants",
      searchValue: "",
      plants: null,
      rawPlants: []
    };
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  componentDidMount() {
    this.fetchPlants();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.setState({
        plants: this.state.rawPlants.filter(
          (x) =>
            x.name
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase()) ||
            x.scientificName
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase())
        )
      });
    }
  }

  fetchPlants = () => {
    axios
      .get(this.state.url)
      .then((res) => {
        this.setState({
          plants: res.data.plantsData,
          rawPlants: res.data.plantsData
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  inputHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <div>
        <PlantFilter
          searchValue={this.state.searchValue}
          inputHandler={this.inputHandler}
        />
        {this.state.plants && (
          <main className="plant-list">
            {this.state?.plants?.map((plant) => (
              <div className="plant-card" key={plant.id}>
                <img className="plant-image" src={plant.img} alt={plant.name} />
                <div className="plant-details">
                  <h2 className="plant-name">{plant.name}</h2>
                  <p className="plant-scientific-name">
                    {plant.scientificName}
                  </p>
                  <p>{plant.description}</p>
                  <div className="plant-bottom-row">
                    <p>${plant.price}</p>
                    <p>☀️ {plant.light}</p>
                    <p>💦 {plant.watering}x/month</p>
                  </div>
                  <button
                    className="plant-button"
                    onClick={() => this.props.addToCart(plant)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </main>
        )}
      </div>
    );
  }
}
