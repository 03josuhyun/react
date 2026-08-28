//import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Content from './component/content';
import Footer from './component/footer';
//import를 사용해서 불러들이는 것이고 js를 생략함

function App() {
  // const myName = '홍길동';
  // const myAge = 18;
  //변수 값 전달

  const myInfo = {myName : '유관순', myAge : 18}


  return (
    <div className="app">
      <h1 className='color'>컴퍼넌트 설명</h1>
      <Header />
      <hr />
      {/* <Content name='이순신' age='20'/> */}
      {/* <Content name={myName} age={myAge} /> */}
      <Content name = {myInfo} />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
/*
function Header () {
  return (
    <header>
      <h1>여기는 앱의 헤더 영역</h1>
      <p>헤더 영역과 관련된 내용을 작성</p>
    </header>
  );
}

function Content() {
  return (
    <div className ='wrap'>
      <h1>여기는 본문 영역</h1>
      <p>적절한 컨텐츠 제작</p>
    </div>
  );
}

function Footer() {
  return(
    <footer>
      <h1>여기는 푸터 영역</h1>
      <p>사이트 정보에 대한 내용 작성</p>
    </footer>
  );
}
*/