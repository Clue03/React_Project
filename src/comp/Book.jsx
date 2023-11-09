const Book = () => {
    return (
      <div>
        <h2>Book</h2>
        <div>
            <img src ="/book.jpg" className="book_img" width="200px" height = "300px" alt="책 이미지"></img>
          </div>
        <ul>
          <li>줄거리 한줄 요약</li><br />
          <ul>
            『 탈선한 기차에 타고 있던 사람과 <br />
            그와 관련된 사람들의 이야기를 담고 있는 책 』
          </ul><br />
          <li>목차 소개</li><br />
          <ol>
            <li>연인에게</li><br />
            <li>아버지에게</li><br />
            <li>당신에게</li><br />
            <li>남편에게</li>
            </ol><br />
            <li>인생 책이 된 이유</li><br />
            <ul>
                  &nbsp; 이 책을 읽은 후, 주변 사람들의 고마움을 생각해보는 기회를 가졌다. <br />
                  그리고 그 사람들이 없다면 나는 어떻게 살아갈까 상상하고 고민하며 내용을 곱씹었다. <br />
                  물론 책 속의 내용처럼 판타지적 요소는 현실에 없지만 인물들의 상황에 <br />
                  공감하고 고찰하는 시간을 주는 가슴 미어지는 책이다.
                
            </ul>
          </ul>    
      </div>
    );
  };
  export default Book;
  