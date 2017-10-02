import React from 'react';
import { Header } from '../components';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
          <div class="parallax-container">
            <br/>
            <h3 className="header center teal-text text-lighten-2">누구나 도입할 수 있는 디지털 쿠폰</h3>
            <div className="row center">
            <h5 className="header col s12 light">오늘 내 가게의 종이 쿠폰을 영원히 없애보세요!</h5>
            <br/><br/><br/><br/>
            <div className="row center">
              <Link to ="/login" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">지금 시작하기</Link>
            </div>
            </div>
          </div>
           <div className="container">
             <div className="section">
               <div className="section">
                 <div className="row">
                   <div className="col s12 center">
                     <h3><i className="mdi-content-send brown-text" /></h3>
                     <h4>Bunna, 종이 쿠폰을 없애다.</h4>
                     <p className="left-align light">대형 프랜차이즈 가게들의 디지털 쿠폰, 그림의 떡이 아닙니다. 이제 누구나 Bunna를 통해 손쉽게 디지털 쿠폰 제도를 실시할 수 있습니다. 더 이상 점주와 고객 모두 귀찮은 종이 쿠폰으로 머리아파할 필요가 없습니다. 스마트폰 한 대면 모든 것이 해결됩니다. 오늘 바로 내 가게에 도입해보세요! 고객의 만족도도, 지구의 환경도 같이 지킬 수 있습니다 :)</p>
                   </div>
                 </div>
               </div>

               <div className="row">
                 <div className="col s12 m4">
                   <div className="icon-block">
                     <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                     <h5 className="center">Speeds up development</h5>
                     <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                   </div>
                 </div>
                 <div className="col s12 m4">
                   <div className="icon-block">
                     <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                     <h5 className="center">User Experience Focused</h5>
                     <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                   </div>
                 </div>
                 <div className="col s12 m4">
                   <div className="icon-block">
                     <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                     <h5 className="center">Easy to work with</h5>
                     <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           <footer className="page-footer blue">
             <div className="container">
               <div className="row">
                 <div className="col l6 s12">
                   <h5 className="white-text">Company Bio</h5>
                   <p className="grey-text text-lighten-4">We are a team of college students working on this project like its our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
                 </div>
                 <div className="col l3 s12">
                   <h5 className="white-text">Settings</h5>
                   <ul>
                     <li><a className="white-text" href="#!">Link 1</a></li>
                     <li><a className="white-text" href="#!">Link 2</a></li>
                     <li><a className="white-text" href="#!">Link 3</a></li>
                     <li><a className="white-text" href="#!">Link 4</a></li>
                   </ul>
                 </div>
                 <div className="col l3 s12">
                   <h5 className="white-text">Connect</h5>
                   <ul>
                     <li><a className="white-text" href="#!">Link 1</a></li>
                     <li><a className="white-text" href="#!">Link 2</a></li>
                     <li><a className="white-text" href="#!">Link 3</a></li>
                     <li><a className="white-text" href="#!">Link 4</a></li>
                   </ul>
                 </div>
               </div>
             </div>
             <div className="footer-copyright">
               <div className="container">
                 Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">kycfeel</a>
               </div>
             </div>
           </footer>
      </div>
    )
  }
}

export default Home;
