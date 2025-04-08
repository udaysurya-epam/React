import React from 'react';

// 🌙 Theme Context Setup
const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

// 💡 Main App Component Using Context, State, Effect, and Window Width
class App extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      seconds: 0,
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    // Simulate useEffect with setInterval
    this.timer = setInterval(() => {
      this.setState((prev) => ({ seconds: prev.seconds + 1 }));
    }, 1000);

    // Simulate custom hook for window resize
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { count, seconds, width } = this.state;
    const { theme, toggleTheme } = this.context;

    return (
      <div
        style={{
          backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1>React Class Components Demo</h1>

        <p>Current Theme: <strong>{theme}</strong></p>
        <button onClick={toggleTheme}>Toggle Theme</button>

        <hr />

        <h2>Counter (state)</h2>
        <p>Count: {count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>

        <hr />

        <h2>Timer (componentDidMount)</h2>
        <p>App running for: {seconds} seconds</p>

        <hr />

        <h2>Window Width (event listener)</h2>
        <p>Current width: {width}px</p>
      </div>
    );
  }
}

// 🔌 Wrap App with ThemeProvider
export default function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
