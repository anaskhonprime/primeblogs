export default function Home() {

  interface User {
    name: string;
    age: number;
    isStudent: false;
  }

  let user1: User = {
    name: "Tom",
    age: 22,
    isStudent: false
  }

  return (
    <>
      <div className="main-text">
        <div className="intro">
          <h2>프론트엔드 개발자로 성장 과정</h2>
          <div className="text-container">
            <p> 프론트엔드 분야로 취업 준비를 하면서 첫걸음은 대학교 3학년때 진행했던 팀프로젝트를 
              진행하면서 시작했습니다.우리 팀은 인터넷 속도 증가하고 보안을 향상시켜주는 VPN
               서비스를 개발하게 되었고 벡엔드는 PHP, DB는 MySQL은 사용했으며 개인적으로 일반 
              HTML,CSS,JS을 사용해 사용자 UI 프론트엔드 개발 작업을 맡아서 개발했었습니다.</p>
          </div>

          <div className="text-container">
            <p> 프론트엔드 분야는 계속 트렌드가 바꿔가지만 대표적으로 React를 자주 사용합니다. 
              커뮤니티도 많고 MERN Stack ( MongoDB, Express, React and Node.js )
               웹 서비스를 개발하는데 쉽고 빠른 장점을 가지고 있지만 SPA ( A Single Page Application ) 
               경험 없는 초보자한테 약간 어려울수 있습니다.</p>
          </div>

          <div className="text-container">
            <p> 프론트엔드 분야로 취업 준비를 하면서 첫걸음은 대학교 3학년때 진행했던 팀프로젝트를
              진행하면서 시작했습니다.우리 팀은 인터넷 속도 증가하고 보안을 향상시켜주는 VPN
              서비스를 개발하게 되었고 벡엔드는 PHP, DB는 MySQL은 사용했으며 개인적으로 일반
              HTML,CSS,JS을 사용해 사용자 UI 프론트엔드 개발 작업을 맡아서 개발했었습니다.</p>
          </div>

          <hr />
        </div>
      </div>
    </>

  )
}
