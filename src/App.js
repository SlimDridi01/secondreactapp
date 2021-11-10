import myvideo from './myvideo.mp4';
import image2 from './image2.png'
import './Style.css';
function App() {
  return (
    <div className="App">
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
        <h1 className="title red">Akatsuki Team</h1>
        <br />
        <img src={image2} alt="img" />
        <br />
        <img src="/image1.png" alt="img" />
      </div>
      <video width={320} height={240} controls>
        <source src={myvideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
