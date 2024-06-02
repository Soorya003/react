import React from 'react';
import './App.css'

// PriceCard component
const PriceCard = ({ plan }) => {
  return (
    <div className="price-card">
      <h5>{plan.name}</h5>
      <h2>{plan.price}</h2>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Choose Plan</button>
    </div>
  );
};

// Main App component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [
        {
          name: 'Free',
          price: '$0/month',
          features: ['Feature 1', 'Feature 2']
        },
        {
          name: 'Plus',
          price: '$9/month',
          features: ['Feature 1', 'Feature 2', 'Feature 3']
        },
        {
          name: 'Pro',
          price: '$49/month',
          features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Choose Your Plan</h1>
        <div className="price-cards-container">
          {this.state.plans.map((plan, index) => (
            <div key={index} className="price-card-wrapper">
              <PriceCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
