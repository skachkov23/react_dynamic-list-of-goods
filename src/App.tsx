import { Component } from 'react';
import { GoodsList, Props } from './GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

export interface Good {
  id: number,
  name: string,
  color: string,
}

type State = Props;

class App extends Component<{}, State> {
  state: State = {
    goods: [],
  };

  goodsLoader = async (listType: () => Promise<Good[]>) => {
    const goods = await listType();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;
    const { goodsLoader } = this;

    return (
      <>
        <h1 className="title">Dynamic list of Goods</h1>
        <button className="button" type="button" onClick={() => goodsLoader(getAll)}>
          Load All goods
        </button>
        <button className="button" type="button" onClick={() => goodsLoader(get5First)}>
          Load five first goods
        </button>
        <button className="button" type="button" onClick={() => goodsLoader(getRedGoods)}>
          Load red goods
        </button>
        {goods && (
          <GoodsList goods={goods} />
        )}
      </>
    );
  }
}

export default App;
