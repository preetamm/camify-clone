import logo from "./logo.svg";
import "./App.css";
import { RiNotification2Line } from "react-icons/ri";
import { FiDisc } from "react-icons/fi";
import { ImSwitch } from "react-icons/im";


const ChatItem = () => {
  return (
    <div className="chat-item">
      <div className="chat-item--icon"><FiDisc size="18px"/></div>
      <div className="chat-item--detail">
        <div className="chat-item--username">anakozark</div>
        <div className="chat-item--message">can i get a flash for a fav</div>
      </div>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <main>
        <section>
          <div className="chat-feature">
            <div className="chat-container">
              <div className="chat-category">
                <div className="chat-category--item">PUBLIC</div>
                <div className="chat-category--item">PRIVATE</div>
              </div>
              <div className='chat-list'>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem></ChatItem>
              </div>
            </div>
          </div>
          <div className="dashBoard-feature"></div>          
        </section>
        <footer>
          <div className="logo-container">
            <div className="img">
              <img className='logo'src="./camifyLogo.png" alt="logo" />
            </div>
          </div>
          <div className=" m-l-30 notification-btn-container btn-container">
            <RiNotification2Line color="#3aba76" className="icon-notification icon-item" />
            <span>NOTIFICATION</span>
          </div>
          <div className="m-l-30 stream-btn-container btn-container">
            <ImSwitch color="#645d64" className="icon-item"  ></ImSwitch>
            <span>STOP STREAMING</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
