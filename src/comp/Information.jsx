const Information = () => {
    return (
      <div>
        <h2>&nbsp; Information</h2>
        <ul>
          <li>가천대학교 컴퓨터공학과 재학중</li><br />
          <li>통기타 동아리 '음초롱' 소속</li><br />
          <li>현재 백엔드 개발자 강력 지망 / 서버 관리, 개임 개발도 지망 </li><br />
          <li>주력 언어</li><br />
          <ul>
            <li>Java</li><br />
            <li>Kotlin</li><br />
            <li>Spring Boot</li><br />
          </ul>
          <li>취득한/취득할 자격증</li>
          <ul><br />
            <li>컴퓨터 활용능력 2급</li><br />
            <li>리눅스 마스터 1급</li><br />
            <li>정보처리기사</li>
            </ul>
          </ul>
          <div>
            <img src ="/gachon.png" className="univ_img" width="70px" height = "70px" alt="가천대학교"></img>
            <img src ="/Java.png" className="java_img" width="70px" height = "80px" alt="Java"></img>
            <img src ="/kotlin.png" className="kotlin_img" width="70px" height = "70px" alt="Kotlin"></img>
            <img src ="/spring.png" className="spring_img" width="80px" height = "70px" alt="Spirng Boot"></img>
          </div>
      </div>
    );
  };
  export default Information;
  