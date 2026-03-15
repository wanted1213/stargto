const express = require("express");     // express 함수 가져옴

const app = express();  // express 를 통한 웹서버 객체 생성해서 app 객체에 저장
//const PORT = 3000;
const PORT = process.env.PORT || 30000 ;  // Railway 올릴 땐 3000 포트로 고정하며 안됨. Railway는 자기 내부 포트를 사용함

app.use(express.json());    // express 객체로 들어오는 웹요청을 json 으로 해석가능하도록 설정

app.use(express.static("public"));  // index.html 파일 화면 띄워주기 위함

// app.get 은 get 요청을 처리하는 함수. 
// 루트 경로(/)로 req 받으면 res 응답
app.get("/", (req, res) => {
  res.send("Poker Advisor Local Server Running 🚀");

  // res 는 아래의 함수 중 하나로 끝내야함
  //res.send({ result: "call" }); //  이렇게 하면 자동으로 json 으로 응답함
  //res.json({ action: "raise", amount: 200 }); // json 형태 응답

  //res.status(404).send("Not Found");          // 이런식으로 status 응답해줄수 있음
  //res.status(200).json({ success: true });    // 이런식으로 status 응답해줄수 있음
  //res.redirect("/login");                     // 다른 경로로 redirect 가능
  //res.sendFile(__dirname + "/index.html");      // html 파일 보낼수있음 (파일전송)


});

// 실제 서버를 켜는 부분. PORT 로의 요청을 listening
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// ----------------------- API 서비스 처리 부분 -------------------------------------

app.post("/calculate",(req,res)=>{

    const result = {
        action : "CALL",
        raise : "60% POT",
        winRate : "52%"
    }

    res.json(result)

})

