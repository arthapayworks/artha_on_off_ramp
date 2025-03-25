# Artha On-Off Ramp React SDK

This SDK provides React components for integrating Artha On-Off Ramp functionality into your application.

## Installation

```bash
npm install artha-on-off-ramp
# or
yarn add artha-on-off-ramp
```

## Usage

```jsx
import { Buy, Sell, Transactions, UserOnboarding } from 'artha-on-off-ramp';

// Use the components in your React application
function App() {
  return (
    <div>
      <Buy />
      <Sell />
      <Transactions />
      <UserOnboarding />
    </div>
  );
}
```

## Components

### Buy
Component for handling cryptocurrency purchases.

### Sell
Component for handling cryptocurrency sales.

### Transactions
Component for displaying transaction history.

### UserOnboarding
Component for user registration and onboarding process.

## Development

```bash
# Install dependencies
npm install

# Build the SDK
npm run build

# Run tests
npm test

# Lint the code
npm run lint
```

## License

MIT 