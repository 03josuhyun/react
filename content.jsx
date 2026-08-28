// const Content = (props) => {

//   //const props = {name : {myName:'유관순', myAge : 18}}
//   return (
//     <div className='wrap'>
//       <h3>props 객체를 통한 파라미터(값) 전달</h3>
//       <p>내 이름은 {props.name.myName}이고, 나이는 {props.name.myAge}입니다</p>

//     </div>
//   );
// }
// export default Content;
//굳이 화살표함수를 쓰지않음 복잡하니깐 (특히 컴포넌트에서)
//props로 받은게 제일 쉬움 객체형식이기에 props.name으로 

const Content = ({ name }) => {
  //props가 아닌 name으로 받기 (name이 객체 데이터이기때문에)
  //const props = {name : {myName:'유관순', myAge : 18}}
  return (
    <div className='wrap'>
      <h3>props 객체를 통한 파라미터(값) 전달</h3>
      <p>
        내 이름은 {name.myName}이고, 나이는 {name.myAge}입니다
      </p>

    </div>
  );
}
export default Content;