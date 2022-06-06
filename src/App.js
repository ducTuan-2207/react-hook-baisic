import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/covid";
import CountDown from "./views/Countdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // state = {a
  //   name: "",
  // };
  // let name = "Đức Tuấn";

  let [name, setName] = useState("Đức Tuấn"); //[a,b,c,d....] name lấy phần tử đầu tiên
  const [address, setAddress] = useState(" ");
  const [todos, setTodos] = useState([
    {
      id: "01",
      title: "le thi no",
      type: "koi",
    },
    {
      id: "02",
      title: "le chi pheo",
      type: "nghien",
    },
  ]);
  //==didmount
  //chay lan dau
  // useEffect(() => {
  //   console.log("run efff");
  // }, [address]);

  const handleOnClick = (event) => {
    //hook not merge state

    if (!address) {
      alert("Chua nhap du lieu");
      return;
    }

    let newTodo = {
      id: Math.floor(Math.random() * 100000),
      title: address,
      type: "koi",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
    // console.log(">>check:", event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currenTodos = todos;
    currenTodos = currenTodos.filter((item) => item.id !== id);
    setTodos(currenTodos);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleOnClick(event);
    }
  };

  const onTimeSup = () => {
    alert("times up");
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*
           */}
        </header>
        <Switch>
          <Route path="/" exact>
            <h1>My name is {name}</h1>

            <Covid />
          </Route>
          <Route path="/timer">
            <CountDown onTimeSup={onTimeSup} />
            <span>---------------------------------------------</span>
            {/* <newCountDown /> */}
          </Route>
          <Route path="/todo">
            {/* {" "} */}
            <Todo
              todos={todos}
              title={"All todos"}
              deleteDataTodos={deleteDataTodo}
            />
            <Todo
              todos={todos.filter((item) => item.type === "koi")}
              title={"koi todo"}
              deleteDataTodos={deleteDataTodo}
            />
            <input
              type="text"
              value={address}
              onChange={(event) => handleOnChangeInput(event)}
              onKeyPress={(event) => handleKeyDown(event)}
            />
            <button type="button" onClick={(event) => handleOnClick()}>
              Nhấn vào em
            </button>
          </Route>
          <Route path="/secret">{/* <Home /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
