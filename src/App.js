import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {adding, deleting, changingTier} from "./actions";
import './css/App.css';
function App() {
  const [item, setItem] = React.useState("");
  
  const tierlist = useSelector(state => state.tierlist.tierlist);
 
  const dispatch = useDispatch();
  
  const list = {
    sTier:[],
    aTier:[],
    bTier:[],
    cTier:[],
    dTier:[],
    fTier:[],
    benchTier:[]
  }
  
  const handleEnterPressed = (e) => {
    var code = e.keyCode || e.which;
    if (code === 13 && item){
      e.preventDefault();
      dispatch(adding(item));
      setItem("");
    }
  }
  
  const handleSubmit = (e) => {
    if(item){
    e.preventDefault();
    dispatch(adding(item));
    setItem("");
    }
  }

  const onDragStart = (e, itemId) => {
    e.dataTransfer.setData("item", itemId);
  }
  
  const onDragOver = (e) => {
    e.preventDefault();
  }

  const onDrop = (e, tier) => {
    let itemId = Number(e.dataTransfer.getData("item"));
    let items = tierlist.filter((item)=> {
      if(item.id === itemId){
        item.tier = tier;
        item.index = list[tier].length;
      }
      return item;
    })
    dispatch(changingTier(items));
  }
  
tierlist.sort((a,b) => a.index - b.index).map((item) => {
  list[item.tier].push(
    <div key={item.id} className="draggable card" draggable onDragStart={(e)=>onDragStart(e, item.id)}>
      <div className="delete-container">
        <button className="delete-button" onClick={() => dispatch(deleting(item.id))}>X</button>
      </div>
      <div className="item-container">{item.name}</div>
    </div>
  )
})


  return (
    <div className="App">
      <div className="title">TierList Maker</div>
      <div className="sub-title">Rank your favorite things</div>
      <div className="container">
        <div className="sTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) =>onDrop(e, "sTier")}>
          <div className="tier">S</div>
          <div className="tier-list">{list.sTier}</div>
        </div>
        <div className="aTier tier-row-even" onDragOver={onDragOver} onDrop={(e) =>onDrop(e, "aTier")}>
          <div className="tier">A</div>
          <div className="tier-list">{list.aTier}</div>
        </div>
        <div className="bTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) =>onDrop(e, "bTier")}>
          <div className="tier">B</div>
          <div className="tier-list">{list.bTier}</div>
        </div>
        <div className="cTier tier-row-even" onDragOver={onDragOver} onDrop={(e) =>onDrop(e, "cTier")}>
          <div className="tier">C</div>
          <div className="tier-list">{list.cTier}</div>
        </div>
        <div className="dTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) =>onDrop(e, "dTier")}>
          <div className="tier">D</div>
          <div className="tier-list">{list.dTier}</div>
        </div>
        <div className="fTier tier-row-even" onDragOver={onDragOver} onDrop={(e) =>onDrop(e, "fTier")}>
          <div className="tier">F</div>
          <div className="tier-list">{list.fTier}</div>
        </div>
        <div className="benchTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) =>onDrop(e, "benchTier")}>
          <div className="tier-bench">Bench</div>
          <div className="tier-list">{list.benchTier}</div>
        </div>
      </div>
      <div className="add-container">
        <input className="add-input" value={item} onChange={e => setItem(e.target.value)} onKeyPress={handleEnterPressed}></input>
        <button className="add-button" onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
}
export default App;
