import React, { useEffect, useState, useCallback, useMemo } from 'react';

export default function UseEffectExamples() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Initial');
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  // 1. useEffect without dependencies — runs on every render
  useEffect(() => {
    console.log('useEffect (no deps) — runs every render');
  });

  // 2. useEffect with empty dependency array — runs once
  useEffect(() => {
    console.log('useEffect (empty deps) — runs once on mount');
  }, []);

  // 3. useEffect with specific dependency
  useEffect(() => {
    console.log('useEffect (with [count]) — runs when count changes');
  }, [count]);

  // 4. Stale closure example (incorrect async)
  useEffect(() => {
    const timer = setTimeout(() => {
      alert('Stale closure message: ' + message);
    }, 2000);
    return () => clearTimeout(timer);
  }, []); // message is not in the deps array

  // 5. Correct way to avoid stale closure using function updater
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(prev => {
        alert('Fresh closure message: ' + prev);
        return prev;
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, [message]);

  // 6. Async code pattern inside useEffect
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const json = await res.json();
      setData(json);
      console.log('Async fetch completed');
    };
    fetchData();
  }, []);

  // 7. Cleanup function (e.g., interval)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval Tick');
    }, 3000);

    return () => {
      console.log('🧹 Cleanup interval');
      clearInterval(interval);
    };
  }, [toggle]);

  // 8. Changing object/function dependencies
  const dynamicObject = useMemo(() => ({ value: count }), [count]); // prevent re-rendering
  const stableFunction = useCallback(() => console.log('I am stable'), []);

  useEffect(() => {
    console.log('Object/function dependency', dynamicObject.value);
    stableFunction();
  }, [dynamicObject, stableFunction]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>useEffect Examples</h2>

      <div>
        <strong>Count:</strong> {count}
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>

      <div>
        <strong>Message:</strong> {message}
        <button onClick={() => setMessage('Updated ' + new Date().toLocaleTimeString())}>
          Update Message
        </button>
      </div>

      <div>
        <strong>Toggle interval:</strong> {toggle.toString()}
        <button onClick={() => setToggle(t => !t)}>Toggle Timer</button>
      </div>

      <div>
        <strong>Fetched Title:</strong> {data?.title || 'Loading...'}
      </div>
    </div>
  );
}
