import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../src/components/pages/Home';
import Vendor from '../src/components/pages/Vendor';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Route exact path="/" component={Home} />
              <Route path="/vendor" component={Vendor} />
          </div>
      </BrowserRouter>
  );
}

export default App;
